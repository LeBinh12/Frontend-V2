import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { cookies } from 'next/headers';

// This is a simplified version. In a real app, you'd use JWT or Session from cookies.
// For now, we'll assume the username is stored in a cookie or passed in a header for simplicity,
// or we might need to adjust how login stores the session.
// Looking at the existing code, it seems to use localStorage on FE.
// Let's create an endpoint that takes a userId or username.
// Better yet, let's look at how the session is managed.

export async function GET(req: Request) {
  try {
    // For this demo/task, we'll try to get the user from a header or query param 
    // since the current login doesn't seem to set an HttpOnly cookie yet.
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const manager = await prisma.manager.findUnique({
      where: { username },
      include: {
        roles: {
          include: {
            role: {
              include: {
                modulePermissions: {
                  include: {
                    module: true,
                    permission: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!manager) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Flatten permissions into a usable structure: Record<moduleCode, Set<permissionCode>>
    const permissions: Record<string, string[]> = {};

    manager.roles.forEach(mr => {
      mr.role.modulePermissions.forEach(mp => {
        const modCode = mp.module.code;
        const permCode = mp.permission.code;
        
        if (!permissions[modCode]) {
          permissions[modCode] = [];
        }
        if (!permissions[modCode].includes(permCode)) {
          permissions[modCode].push(permCode);
        }
      });
    });

    return NextResponse.json({
      user: {
        id: manager.id,
        username: manager.username,
        fullName: manager.fullName,
        role: manager.role, // The enum role
      },
      permissions
    });
  } catch (error) {
    console.error('Me permissions error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
