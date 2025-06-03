import { getServerSession } from 'next-auth';
import { HeaderClient } from './header-client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const navigation = [
  { name: '홈', href: '/', loadingText: '홈으로 이동하고 있어요...' },
  { name: '약 검색', href: '/medicines', loadingText: '약 검색 페이지로 이동하고 있어요...' },
  { name: '약국 찾기', href: '/map', loadingText: '내 주변 약국을 찾고 있어요...' },
  { name: '커뮤니티', href: '/community', loadingText: '커뮤니티 페이지로 이동하고 있어요...' },
];

export default async function Header() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name ?? '';
  const photo = session?.user?.photo ?? '';
  const isAuthenticated = !!session && !session.user.needsSignup;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <HeaderClient 
          navigation={navigation}
          isAuthenticated={isAuthenticated}
          name={name}
          photo={photo}
        />
      </div>
    </header>
  );
}
