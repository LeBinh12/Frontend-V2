import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET content with pagination and search
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get('page')) || 1);
    const limit = Math.max(1, Number(searchParams.get('limit')) || 10);
    const q = searchParams.get('q') || '';
    const prefix = searchParams.get('prefix') || '';

    let where: any = {};
    const conditions: any[] = [];

    if (q) {
      conditions.push({
        OR: [
          { key: { contains: q, mode: 'insensitive' } },
          { contentEn: { contains: q, mode: 'insensitive' } },
          { contentVn: { contains: q, mode: 'insensitive' } },
        ],
      });
    }

    if (prefix) {
      conditions.push({
        key: { contains: prefix, mode: 'insensitive' }
      });
    }

    if (conditions.length > 0) {
      where = conditions.length === 1 ? conditions[0] : { AND: conditions };
    }

    const [items, total] = await Promise.all([
      prisma.staticContent.findMany({
        where: where as any,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { key: 'asc' },
      }),
      prisma.staticContent.count({ where: where as any }),
    ]);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('GET /api/admin/content error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST create new content key
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, contentVn, contentEn } = body;
    if (!key) return NextResponse.json({ error: 'key is required' }, { status: 400 });

    const item = await prisma.staticContent.create({
      data: { key, contentVn: contentVn ?? '', contentEn: contentEn ?? '' },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002') return NextResponse.json({ error: 'Key already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
