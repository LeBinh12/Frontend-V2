import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await request.json();
    const { nameEn, nameVn, sortOrder } = body;
    if (!nameEn?.trim() || !nameVn?.trim()) {
      return NextResponse.json({ error: 'nameEn and nameVn are required' }, { status: 400 });
    }
    
    const slug = nameEn.trim().toLowerCase().replace(/\s+/g, '-');

    const item = await prisma.technologyCategory.update({
      where: { id: Number(id) },
      data: { 
        nameEn: nameEn.trim(),
        nameVn: nameVn.trim(),
        name: nameEn.trim(), 
        key: slug,
        sortOrder: sortOrder ?? 0 
      },
    });
    return NextResponse.json(item);
  } catch (error: any) {
    if (error?.code === 'P2002' || error?.message?.includes('unique constraint')) {
      return NextResponse.json({ error: 'Category name or key already exists' }, { status: 409 });
    }
    console.error(`PUT /api/admin/tech-categories/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.technologyCategory.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/admin/tech-categories/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
