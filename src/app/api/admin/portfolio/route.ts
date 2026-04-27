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
      prisma.portfolioItem.findMany({
        where: where as any,
        include: {
          category: true,
        },
        orderBy: { id: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
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
    const { 
      titleEn, titleVn, descriptionEn, descriptionVn, 
      image, categoryId, categoryKey, technologies, 
      key, showOnHome, sortOrder, contentEn, contentVn, duration 
    } = body;

    // Check limit for showOnHome (max 3)
    if (showOnHome === true) {
      const activeCount = await prisma.portfolioItem.count({
        where: { showOnHome: true }
      });
      if (activeCount >= 3) {
        return NextResponse.json({ error: 'LIMIT_REACHED' }, { status: 400 });
      }
    }

    const item = await prisma.portfolioItem.create({
      data: {
        titleEn: titleEn ?? '',
        titleVn: titleVn ?? '',
        descriptionEn: descriptionEn ?? '',
        descriptionVn: descriptionVn ?? '',
        image: image ?? '',
        categoryKey: categoryKey ?? '',
        categoryId: categoryId ? Number(categoryId) : null,
        technologies: technologies ?? [],
        key: key ?? null,
        showOnHome: Boolean(showOnHome),
        sortOrder: Number(sortOrder) || 0,
        contentEn: contentEn ?? '',
        contentVn: contentVn ?? '',
        duration: duration ?? ''
      },
      include: {
        category: true
      }
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/portfolio error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
