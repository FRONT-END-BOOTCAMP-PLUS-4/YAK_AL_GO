import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const protectedPaths = ['/member'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  if (isProtected) {
    // 로그인 안 되어 있음 → /auth로 리디렉션
    if (!token) {
      const loginUrl = new URL('/auth', req.url);
      loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    // 로그인 되어 있지만 회원가입 미완료 (needsSignup = true) → /auth로 리디렉션
    if (token.needsSignup) {
      const signupUrl = new URL('/auth', req.url);
      signupUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(signupUrl);
    }

    // member 페이지에 캐시 방지 헤더 추가
    // 다른 페이지로 갔다가 뒤로가기 누르면 로그인 페이지로 이동하는 것을 방지하기 위함
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member/:path*'],
};
