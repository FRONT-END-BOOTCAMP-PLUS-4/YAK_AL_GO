import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await prisma.users.update({
      where: { email: body.email },
      data: {
        email: body.email,
        photo: body.photo,
        name: body.name,
        birthyear: body.birthyear,
        member_type: body.member_type,
        created_at: new Date(),
        hpid: body.hpid,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
  }
}
