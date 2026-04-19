import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get('page')) || 1);
    const limit = Math.max(1, Number(searchParams.get('limit')) || 10);
    const q = searchParams.get('q') || '';

    const where = q ? {
      OR: [
        { key: { contains: q, mode: 'insensitive' } },
        { titleEn: { contains: q, mode: 'insensitive' } },
        { titleVn: { contains: q, mode: 'insensitive' } },
        { descriptionEn: { contains: q, mode: 'insensitive' } },
        { descriptionVn: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.$queryRawUnsafe<any[]>(
        `SELECT id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder", content_en as "contentEn", content_vn as "contentVn", duration, created_at as "createdAt", updated_at as "updatedAt" 
         FROM portfolio_items 
         ${q ? 'WHERE title_en ILIKE $1 OR title_vn ILIKE $1 OR key ILIKE $1' : ''}
         ORDER BY id ASC LIMIT ${q ? '$2 OFFSET $3' : '$1 OFFSET $2'}`,
        ...(q ? [`%${q}%`, limit, (page - 1) * limit] : [limit, (page - 1) * limit])
      ),
      prisma.portfolioItem.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/portfolio error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { titleEn, titleVn, descriptionEn, descriptionVn, image, categoryKey, technologies, key, showOnHome, sortOrder, contentEn, contentVn, duration } = body;

    // Check limit for showOnHome (max 3)
    if (showOnHome === true) {
      const result = await prisma.$queryRawUnsafe<any[]>(
        `SELECT count(*)::int as count FROM portfolio_items WHERE show_on_home = true`
      );
      const activeCount = result[0]?.count || 0;
      if (activeCount >= 3) {
        return NextResponse.json({ error: 'LIMIT_REACHED' }, { status: 400 });
      }
    }
    const [item] = await prisma.$queryRawUnsafe<any[]>(
      `INSERT INTO portfolio_items (title_en, title_vn, description_en, description_vn, image, category_key, technologies, key, show_on_home, sort_order, content_en, content_vn, duration, updated_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW()) 
       RETURNING id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder", content_en as "contentEn", content_vn as "contentVn", duration`,
      titleEn ?? '', 
      titleVn ?? '', 
      descriptionEn ?? '', 
      descriptionVn ?? '', 
      image ?? '', 
      categoryKey ?? '', 
      technologies ?? [], 
      key ?? null, 
      Boolean(showOnHome), 
      Number(sortOrder) || 0,
      contentEn ?? '',
      contentVn ?? '',
      duration ?? ''
    );
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/portfolio error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
