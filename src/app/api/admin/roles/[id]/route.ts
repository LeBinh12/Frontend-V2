import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { name, descriptionEn, descriptionVn } = await req.json();
    const role = await prisma.role.update({
      where: { id },
      data: { name, descriptionEn, descriptionVn }
    });
    return NextResponse.json(role);
  } catch (error) {
    console.error('Roles PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    // Before deleting role, we should probably check for dependent records or let prisma handle it
    // In our schema, ManagerOnRole and ModulePermission have roleId.
    // They will likely throw error if we don't delete them or have CASCADE.
    // Since we don't have CASCADE in schema (default is restrict), let's delete relations first.
    
    await prisma.$transaction([
      prisma.managerOnRole.deleteMany({ where: { roleId: id } }),
      prisma.modulePermission.deleteMany({ where: { roleId: id } }),
      prisma.role.delete({ where: { id } })
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Roles DELETE error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
