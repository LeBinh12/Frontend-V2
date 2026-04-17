import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const items = await prisma.technologyCategory.findMany({
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('GET /api/admin/tech-categories error:', error);
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
    const item = await prisma.technologyCategory.create({
      data: { name: name.trim(), sortOrder: sortOrder ?? 0 },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
