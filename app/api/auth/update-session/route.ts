import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// token 업데이트를 위한 API
export async function POST(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const body = await req.json(); // 클라이언트에서 전달된 폼 데이터

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // body 데이터를 토큰에 추가

  token.email = body.email;
  token.photo = body.photo;
  token.name = body.name;
  token.birthyear = body.birthyear;
  token.member_type = body.member_type;
  token.hpid = body.hpid;

  // profile.kakao_account 데이터를 토큰에 추가
  const kakaoAccount = token.profile?.kakao_account; // token.profile에서 kakao_account 추출
  if (kakaoAccount) {
    token.kakaoEmail = kakaoAccount.email || null; // 카카오 이메일
    token.kakaoNickname = kakaoAccount.profile?.nickname || null; // 카카오 닉네임
    token.kakaoImage = kakaoAccount.profile?.thumbnail_image_url || null; // 카카오 프로필 이미지
  }

  return NextResponse.json({ success: true });
}
