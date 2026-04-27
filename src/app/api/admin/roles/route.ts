import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(roles);
  } catch (error) {
    console.error('Roles GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, descriptionEn, descriptionVn } = await req.json();
    const role = await prisma.role.create({
      data: { name, descriptionEn, descriptionVn }
    });
    return NextResponse.json(role);
  } catch (error) {
    console.error('Roles POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
