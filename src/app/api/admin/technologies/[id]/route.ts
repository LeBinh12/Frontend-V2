import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await request.json();
    const { id: _id, createdAt: _c, categoryId, ...data } = body;
    
    const updateData: any = { ...data };
    if (categoryId !== undefined) {
      updateData.categoryId = categoryId ? Number(categoryId) : null;
    }

    const item = await prisma.technology.update({ 
      where: { id: Number(id) }, 
      data: updateData,
      include: {
        cat: true
      }
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error(`PUT /api/admin/technologies/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.technology.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/admin/technologies/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
