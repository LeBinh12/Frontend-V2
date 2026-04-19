import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const [item] = await prisma.$queryRawUnsafe<any[]>(
      `SELECT id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder", content_en as "contentEn", content_vn as "contentVn", duration, created_at as "createdAt", updated_at as "updatedAt" 
       FROM portfolio_items WHERE id = $1`,
      Number(id)
    );
    
    if (!item) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    
    return NextResponse.json(item);
  } catch (error) {
    console.error(`GET /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await request.json();

    // Check limit for showOnHome (max 3)
    if (body.showOnHome === true) {
      const result = await prisma.$queryRawUnsafe<any[]>(
        `SELECT count(*)::int as count FROM portfolio_items WHERE show_on_home = true AND id != $1`,
        Number(id)
      );
      const activeCount = result[0]?.count || 0;
      if (activeCount >= 3) {
        return NextResponse.json({ error: 'LIMIT_REACHED' }, { status: 400 });
      }
    }

    if (body.showOnHome !== undefined || body.sortOrder !== undefined) {
      if (body.showOnHome !== undefined) {
        await prisma.$executeRawUnsafe(
          `UPDATE portfolio_items SET show_on_home = $1 WHERE id = $2`,
          Boolean(body.showOnHome),
          Number(id)
        );
      }
      if (body.sortOrder !== undefined) {
        await prisma.$executeRawUnsafe(
          `UPDATE portfolio_items SET sort_order = $1 WHERE id = $2`,
          Number(body.sortOrder),
          Number(id)
        );
      }
      
      // If only these fields were updated, fetch and return the result
      const updatedKeys = Object.keys(body);
      const isQuickUpdate = updatedKeys.every(k => k === 'showOnHome' || k === 'sortOrder');
      if (isQuickUpdate) {
        const [item] = await prisma.$queryRawUnsafe<any[]>(
          `SELECT id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder", content_en as "contentEn", content_vn as "contentVn", duration 
           FROM portfolio_items WHERE id = $1`,
          Number(id)
        );
        return NextResponse.json(item);
      }
    }

    // Use raw SQL update to bypass Prisma Client validation issues (out-of-sync types)
    await prisma.$executeRawUnsafe(
      `UPDATE portfolio_items SET 
        title_en = $1, 
        title_vn = $2, 
        description_en = $3, 
        description_vn = $4, 
        image = $5, 
        category_key = $6, 
        technologies = $7, 
        key = $8, 
        show_on_home = $9, 
        sort_order = $10, 
        content_en = $11, 
        content_vn = $12, 
        duration = $13,
        updated_at = NOW() 
       WHERE id = $14`,
      body.titleEn ?? '',
      body.titleVn ?? '',
      body.descriptionEn ?? '',
      body.descriptionVn ?? '',
      body.image ?? '',
      body.categoryKey ?? '',
      body.technologies ?? [],
      body.key ?? null,
      Boolean(body.showOnHome),
      Number(body.sortOrder) || 0,
      body.contentEn ?? '',
      body.contentVn ?? '',
      body.duration ?? '',
      Number(id)
    );

    const [updatedItem] = await prisma.$queryRawUnsafe<any[]>(
      `SELECT id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder", content_en as "contentEn", content_vn as "contentVn", duration 
       FROM portfolio_items WHERE id = $1`,
      Number(id)
    );

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(`PUT /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.portfolioItem.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
