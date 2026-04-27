import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const modules = await prisma.module.findMany({
      orderBy: { code: 'asc' }
    });
    return NextResponse.json(modules);
  } catch (error) {
    console.error('Modules GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { nameEn, nameVn, code, descriptionEn, descriptionVn } = await req.json();
    const module = await prisma.module.create({
      data: { nameEn, nameVn, code, descriptionEn, descriptionVn }
    });
    return NextResponse.json(module);
  } catch (error) {
    console.error('Modules POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
