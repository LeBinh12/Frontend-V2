import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

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
          `SELECT id, key, title_en as "titleEn", title_vn as "titleVn", description_en as "descriptionEn", description_vn as "descriptionVn", image, category_key as "categoryKey", technologies, show_on_home as "showOnHome", sort_order as "sortOrder" 
           FROM portfolio_items WHERE id = $1`,
          Number(id)
        );
        return NextResponse.json(item);
      }
    }

    const item = await prisma.portfolioItem.update({ where: { id: Number(id) }, data: body });
    return NextResponse.json(item);
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
