import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { username, password, fullName, email, role, roleIds } = body;

    // Check if account exists
    const account = await prisma.manager.findUnique({ where: { id } });
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    // Check unique constraints if username or email changed
    if (username !== account.username || (email && email !== account.email)) {
      const existing = await prisma.manager.findFirst({
        where: {
          id: { not: id },
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
    }

    const data: any = {
      username,
      fullName,
      email,
      role,
    };

    // Sync roles
    if (Array.isArray(roleIds)) {
      data.roles = {
        deleteMany: {},
        create: roleIds.map((roleId: string) => ({ roleId }))
      };
    }

    // Only update password if provided
    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const updatedAccount = await prisma.manager.update({
      where: { id },
      data,
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
      ...updatedAccount,
      assignedRoles: updatedAccount.roles.map(r => r.role)
    });
  } catch (error) {
    console.error(`PUT /api/admin/accounts/[id] error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Check if account exists
    const account = await prisma.manager.findUnique({ where: { id } });
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    // Default password '123456'
    const hashedPassword = await bcrypt.hash('123456', 10);

    const updatedAccount = await prisma.manager.update({
      where: { id },
      data: { password: hashedPassword },
      select: { id: true, username: true } // Minimum info
    });

    return NextResponse.json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(`PATCH /api/admin/accounts/[id] error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if account exists
    const account = await prisma.manager.findUnique({ where: { id } });
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    // Optional: Prevent deleting the last admin? 
    // For now, just delete.

    await prisma.manager.delete({ where: { id } });

    return NextResponse.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error(`DELETE /api/admin/accounts/[id] error:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
