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
        { name: { contains: q, mode: 'insensitive' } },
        { category: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.technology.findMany({
        where: where as any,
        include: {
          cat: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { name: 'asc' },
      }),
      prisma.technology.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/technologies error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, categoryId } = body;
    if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
    
    const item = await prisma.technology.create({ 
      data: { 
        name, 
        category: category ?? '', 
        categoryId: categoryId ? Number(categoryId) : null
      },
      include: {
        cat: true
      }
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/technologies error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
