import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get('page')) || 1);
    const limit = Math.max(1, Number(searchParams.get('limit')) || 10);
    const q = searchParams.get('q') || '';

    const where = q ? {
      OR: [
        { username: { contains: q, mode: 'insensitive' } },
        { fullName: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
      ],
    } : {};

    const [items, total] = await Promise.all([
      prisma.manager.findMany({
        where: where as any,
        orderBy: { createdAt: 'asc' },
        select: { 
          id: true, username: true, fullName: true, email: true, role: true, createdAt: true,
          roles: {
            select: {
              role: {
                select: { id: true, name: true }
              }
            }
          }
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.manager.count({ where: where as any }),
    ]);

    // Flatten roles
    const flattenedItems = items.map(item => ({
      ...item,
      assignedRoles: item.roles.map(r => r.role)
    }));

    return NextResponse.json({ items: flattenedItems, total });
  } catch (error) {
    console.error('GET /api/admin/accounts error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password, fullName, email, role, roleIds } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    // Check unique constraints
    const existing = await prisma.manager.findFirst({
      where: {
        OR: [
          { username },
          ...(email ? [{ email }] : [])
        ]
      }
    });

    if (existing) {
      return NextResponse.json({ 
        error: existing.username === username ? 'Username already exists' : 'Email already exists' 
      }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const account = await prisma.manager.create({
      data: {
        username,
        password: hashedPassword,
        fullName,
        email,
        role: role || 'STAFF',
        roles: {
          create: (roleIds || []).map((roleId: string) => ({
            roleId
          }))
        }
      },
      select: { 
        id: true, username: true, fullName: true, email: true, role: true, createdAt: true,
        roles: {
          select: {
            role: {
              select: { id: true, name: true }
            }
          }
        }
      }
    });

    return NextResponse.json({
      ...account,
      assignedRoles: account.roles.map(r => r.role)
    }, { status: 201 });

    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/accounts error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
