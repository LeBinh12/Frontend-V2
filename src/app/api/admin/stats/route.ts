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
        { labelEn: { contains: q, mode: 'insensitive' } },
        { labelVn: { contains: q, mode: 'insensitive' } },
        { value: { contains: q, mode: 'insensitive' } },
        { detailEn: { contains: q, mode: 'insensitive' } },
        { detailVn: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.stat.findMany({
        where: where as any,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      prisma.stat.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/stats error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, labelEn, labelVn, value, detailEn, detailVn } = body;
    if (!key) return NextResponse.json({ error: 'key is required' }, { status: 400 });
    const item = await prisma.stat.create({
      data: { key, labelEn: labelEn ?? '', labelVn: labelVn ?? '', value: value ?? '0', detailEn, detailVn },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002') return NextResponse.json({ error: 'Key already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
