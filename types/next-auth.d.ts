import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Profile {
    kakao_account?: {
      email?: string;
      profile?: {
        nickname?: string;
        thumbnail_image_url?: string;
      };
    };
  }
  interface User {
    id: string;
    email?: string;
    photo?: string;
    name?: string;
    hpid?: string;
    needsSignup?: boolean;
    birthyear?: number;
    member_type?: number;
    created_at?: Date;
  }

  interface Session {
    user: {
      id: string;
      email?: string;
      photo?: string;
      name?: string;
      hpid?: string;
      needsSignup: boolean;
      birthyear?: number;
      member_type?: number;
      created_at?: Date;
    } & DefaultSession['user'];
  }
  interface JWT {
    id?: string;
    email?: string;
    photo?: string;
    name?: string;
    hpid?: string;
    needsSignup?: boolean;
    birthyear?: number;
    member_type?: number;
    created_at?: Date;
  }
}
