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
        { key: { contains: q, mode: 'insensitive' } },
        { titleEn: { contains: q, mode: 'insensitive' } },
        { titleVn: { contains: q, mode: 'insensitive' } },
        { descriptionEn: { contains: q, mode: 'insensitive' } },
        { descriptionVn: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.service.findMany({
        where: where as any,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      prisma.service.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/services error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, icon, titleEn, titleVn, descriptionEn, descriptionVn } = body;
    if (!key) return NextResponse.json({ error: 'key is required' }, { status: 400 });
    const item = await prisma.service.create({
      data: { key, icon: icon ?? '', titleEn: titleEn ?? '', titleVn: titleVn ?? '', descriptionEn: descriptionEn ?? '', descriptionVn: descriptionVn ?? '' },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002') return NextResponse.json({ error: 'Key already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
