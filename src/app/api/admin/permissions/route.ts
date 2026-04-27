import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const permissions = await prisma.permission.findMany({
      orderBy: { code: 'asc' }
    });
    return NextResponse.json(permissions);
  } catch (error) {
    console.error('Permissions GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { nameEn, nameVn, code, descriptionEn, descriptionVn } = await req.json();
    const permission = await prisma.permission.create({
      data: { nameEn, nameVn, code, descriptionEn, descriptionVn }
    });
    return NextResponse.json(permission);
  } catch (error) {
    console.error('Permissions POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
