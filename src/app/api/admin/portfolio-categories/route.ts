import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const items = await prisma.$queryRawUnsafe<any[]>(
      `SELECT id, name, sort_order as "sortOrder" FROM "portfolio_categories" ORDER BY sort_order ASC, name ASC`
    );
    return NextResponse.json(items);
  } catch (error) {
    console.error('GET /api/admin/portfolio-categories error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, sortOrder } = body;
    if (!name?.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }
    
    await prisma.$executeRawUnsafe(
      `INSERT INTO "portfolio_categories" (name, sort_order) VALUES ($1, $2)`,
      name.trim(),
      Number(sortOrder) || 0
    );

    const [item] = await prisma.$queryRawUnsafe<any[]>(
      `SELECT id, name, sort_order as "sortOrder" FROM "portfolio_categories" WHERE name = $1`,
      name.trim()
    );

    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002' || error?.message?.includes('unique constraint')) {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 });
    }
    console.error('POST /api/admin/portfolio-categories error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
