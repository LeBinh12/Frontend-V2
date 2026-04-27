import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const [
      activeUsers,
      portfolioItems,
      contacts,
    ] = await Promise.all([
      prisma.manager.count(),
      prisma.portfolioItem.count(),
      prisma.contact.count(),
    ]);

    return NextResponse.json({
      contacts,
      activeUsers,
      portfolioItems,
      languages: 2
    });
  } catch (error) {
    console.error('GET /api/admin/dashboard/summary error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
