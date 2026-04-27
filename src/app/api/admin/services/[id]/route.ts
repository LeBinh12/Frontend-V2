import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check limit for showOnHome (max 4)
    if (body.showOnHome === true) {
      const activeCount = await prisma.service.count({
        where: { 
          showOnHome: true,
          id: { not: Number(id) }
        }
      });
      if (activeCount >= 4) {
        return NextResponse.json({ error: 'LIMIT_REACHED' }, { status: 400 });
      }
    }

    const item = await prisma.service.update({ where: { id: Number(id) }, data: body });
    return NextResponse.json(item);
  } catch (error) {
    console.error('PUT /api/admin/services/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.service.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
