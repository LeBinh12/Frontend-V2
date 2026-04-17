import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const company = await prisma.companyInfo.findUnique({ where: { id: 1 } });
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id: _id, updatedAt: _u, ...data } = body;
    const company = await prisma.companyInfo.upsert({
      where: { id: 1 },
      create: { id: 1, name: data.name ?? 'Lucid Technology', ...data },
      update: data,
    });
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
