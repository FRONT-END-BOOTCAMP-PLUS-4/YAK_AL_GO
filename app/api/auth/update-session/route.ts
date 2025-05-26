import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const body = await req.json(); // 폼들어있음

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // jwt 토큰 업데이트
  token.id = body.id;
  token.email = body.email;
  token.photo = body.photo;
  token.name = body.name;
  token.birthyear = body.birthyear;
  token.member_type = body.member_type;
  token.healthConditions = body.healthConditions;
  token.hpid = body.hpid;

  return NextResponse.json({ success: true });
}
