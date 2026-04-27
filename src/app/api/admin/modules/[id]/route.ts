import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { nameEn, nameVn, code, descriptionEn, descriptionVn } = await req.json();
    const module = await prisma.module.update({
      where: { id },
      data: { nameEn, nameVn, code, descriptionEn, descriptionVn }
    });
    return NextResponse.json(module);
  } catch (error) {
    console.error('Modules PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // ModulePermission has module_id and onDelete: Cascade in schema
    await prisma.module.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Modules DELETE error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
