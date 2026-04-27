import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const item = await prisma.portfolioItem.findUnique({
      where: { id: Number(id) },
      include: {
        category: true
      }
    });
    
    if (!item) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    
    return NextResponse.json(item);
  } catch (error) {
    console.error(`GET /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await request.json();

    // Check limit for showOnHome (max 3)
    if (body.showOnHome === true) {
      const activeCount = await prisma.portfolioItem.count({
        where: { 
          showOnHome: true,
          id: { not: Number(id) }
        }
      });
      if (activeCount >= 3) {
        return NextResponse.json({ error: 'LIMIT_REACHED' }, { status: 400 });
      }
    }

    const updateData: any = {};
    const fields = [
      'titleEn', 'titleVn', 'descriptionEn', 'descriptionVn', 
      'image', 'categoryKey', 'technologies', 'key', 
      'showOnHome', 'sortOrder', 'contentEn', 'contentVn', 'duration'
    ];

    fields.forEach(f => {
      if (body[f] !== undefined) {
        if (f === 'sortOrder' || f === 'categoryId') {
          updateData[f] = Number(body[f]);
        } else {
          updateData[f] = body[f];
        }
      }
    });

    if (body.categoryId !== undefined) {
      updateData.categoryId = body.categoryId ? Number(body.categoryId) : null;
    }

    const updatedItem = await prisma.portfolioItem.update({
      where: { id: Number(id) },
      data: updateData,
      include: {
        category: true
      }
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(`PUT /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.portfolioItem.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/admin/portfolio/${id} error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
