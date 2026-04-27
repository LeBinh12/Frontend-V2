import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const items = await prisma.portfolioCategory.findMany({
      orderBy: [
        { sortOrder: 'asc' },
        { nameEn: 'asc' }
      ]
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('GET /api/admin/portfolio-categories error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nameEn, nameVn, sortOrder, key } = body;
    if (!nameEn?.trim() || !nameVn?.trim()) {
      return NextResponse.json({ error: 'nameEn and nameVn are required' }, { status: 400 });
    }
    
    // Use provided key or generate from nameEn
    const slug = key?.trim() || nameEn.trim().toLowerCase().replace(/\s+/g, '-');

    const item = await prisma.portfolioCategory.create({
      data: {
        nameEn: nameEn.trim(),
        nameVn: nameVn.trim(),
        name: nameEn.trim(), // Keep for legacy
        key: slug,
        sortOrder: Number(sortOrder) || 0
      }
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    if (error?.code === 'P2002' || error?.message?.includes('unique constraint')) {
      return NextResponse.json({ error: 'Category name or key already exists' }, { status: 409 });
    }
    console.error('POST /api/admin/portfolio-categories error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
