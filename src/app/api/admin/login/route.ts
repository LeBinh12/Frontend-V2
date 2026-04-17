import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    // Find manager in DB
    const manager = await prisma.manager.findUnique({
      where: { username }
    });

    if (!manager) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, manager.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }

    // Success - Preparing user info to return (excluding password)
    const { password: _, ...userInfo } = manager;

    return NextResponse.json({ 
      message: 'Login successful',
      user: userInfo 
    });
  } catch (error) {
    console.error('POST /api/admin/login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
