import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, sortOrder } = body;
    if (!name?.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }
    
    await prisma.$executeRawUnsafe(
      `UPDATE "portfolio_categories" SET name = $1, sort_order = $2 WHERE id = $3`,
      name.trim(),
      Number(sortOrder) || 0,
      Number(id)
    );

    const [item] = await prisma.$queryRawUnsafe<any[]>(
      `SELECT id, name, sort_order as "sortOrder" FROM "portfolio_categories" WHERE id = $1`,
      Number(id)
    );

    return NextResponse.json(item);
  } catch (error: any) {
    if (error?.code === 'P2002' || error?.message?.includes('unique constraint')) {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 });
    }
    console.error('PUT /api/admin/portfolio-categories/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.$executeRawUnsafe(
      `DELETE FROM "portfolio_categories" WHERE id = $1`,
      Number(id)
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/admin/portfolio-categories/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
