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
        { roleEn: { contains: q, mode: 'insensitive' } },
        { roleVn: { contains: q, mode: 'insensitive' } },
        { bioEn: { contains: q, mode: 'insensitive' } },
        { bioVn: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.teamMember.findMany({
        where: where as any,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.teamMember.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/team error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, roleEn, roleVn, bioEn, bioVn, avatar, level } = body;
    if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
    const item = await prisma.teamMember.create({
      data: { name, roleEn: roleEn ?? '', roleVn: roleVn ?? '', bioEn, bioVn, avatar, level: level ?? 3 },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
