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
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member/:path*'],
};
