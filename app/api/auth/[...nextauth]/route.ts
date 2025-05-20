// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth'
import KaKaoProvider from 'next-auth/providers/kakao'
import { NextAuthOptions } from 'next-auth'

const handler = NextAuth({
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 카카오 로그인 성공 시 실행
      // 여기서 데이터베이스에 사용자 정보를 저장하거나 확인할 수 있음
      // 예: 최초 로그인 시 사용자를 비활성 상태로 저장
      return true // 로그인 허용
    },
    async session({ session, token }) {
      // 세션에 사용자 ID 및 추가 정보 포함
      if (token && session.user) {
        session.user.id = token.sub as string
        session.user.isActive = token.isActive as boolean | undefined
        // 필요한 추가 사용자 정보를 여기서 세션에 추가
      }
      return session
    },
    async jwt({ token, user }) {
      // JWT 토큰에 추가 정보 포함
      if (user) {
        token.isActive = user.isActive
        // 필요한 추가 사용자 정보를 여기서 토큰에 추가
      }
      return token
    },
  },
  pages: {
    // 필요한 경우 커스텀 페이지 설정
    signIn: '/auth/signin',
    // 추가 정보 입력 페이지 등을 지정할 수 있음
    // newUser: '/auth/complete-profile',
  },
});



export { handler as GET, handler as POST }

