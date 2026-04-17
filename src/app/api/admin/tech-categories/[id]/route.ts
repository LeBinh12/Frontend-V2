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
    const item = await prisma.technologyCategory.update({
      where: { id: Number(id) },
      data: { name: name.trim(), sortOrder: sortOrder ?? 0 },
    });
    return NextResponse.json(item);
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.technologyCategory.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
