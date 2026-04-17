import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// PUT update a content key
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { contentVn, contentEn } = body;
    const item = await prisma.staticContent.update({
      where: { id },
      data: { contentVn, contentEn },
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE a content key
export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.staticContent.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
