import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const [roles, modules, permissions, matrix] = await prisma.$transaction([
      prisma.role.findMany({ orderBy: { name: 'asc' } }),
      prisma.module.findMany({ orderBy: { code: 'asc' } }),
      prisma.permission.findMany({ orderBy: { code: 'asc' } }),
      prisma.modulePermission.findMany()
    ]);

    return NextResponse.json({
      roles,
      modules,
      permissions,
      matrix
    });
  } catch (error) {
    console.error('Matrix GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { roleId, moduleId, permissionId, enabled } = await req.json();

    if (enabled) {
      await prisma.modulePermission.upsert({
        where: {
          roleId_moduleId_permissionId: { roleId, moduleId, permissionId }
        },
        update: {},
        create: { roleId, moduleId, permissionId }
      });
    } else {
      await prisma.modulePermission.delete({
        where: {
          roleId_moduleId_permissionId: { roleId, moduleId, permissionId }
        }
      }).catch(err => {
        if (err.code !== 'P2025') throw err;
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Matrix POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { matrix } = await req.json(); // Array of { roleId, moduleId, permissionId }

    await prisma.$transaction(async (tx) => {
      // 1. Clear existing matrix
      await tx.modulePermission.deleteMany({});
      
      // 2. Insert new matrix
      if (matrix && matrix.length > 0) {
        // Deduplicate matrix items to prevent unique constraint errors
        const uniqueMatrix = Array.from(
          new Map(
            matrix.map((item: any) => [`${item.roleId}-${item.moduleId}-${item.permissionId}`, item])
          ).values()
        );

        await tx.modulePermission.createMany({
          data: uniqueMatrix.map((item: any) => ({
            roleId: item.roleId,
            moduleId: item.moduleId,
            permissionId: item.permissionId
          }))
        });
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Matrix PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
