'use client';

import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되었음을 표시
    setIsMounted(true);

    // 터치 디바이스 감지 및 화면 크기 확인
    const checkIsDesktop = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 768; // md 브레이크포인트
      setIsDesktop(!hasTouch && isLargeScreen);
    };

    // 초기 설정
    checkIsDesktop();

    // 리사이즈 이벤트 리스너
    const handleResize = () => {
      checkIsDesktop();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  // 서버에서는 아무것도 렌더링하지 않음 (Hydration 문제 방지)
  if (!isMounted || !isDesktop) {
    return null;
  }

  return (
    <img
      src="/character.svg" // public 폴더에 있는 이미지 경로
      alt="follower"
      style={{
        position: 'fixed',
        top: position.y + 22,
        left: position.x + 22,
        pointerEvents: 'none', // 마우스 이벤트 통과
        transform: 'translate(-50%, -50%)',
        width: '25px',
        height: '25px',
        zIndex: 9999,
      }}
      className="hidden md:block" // Tailwind 미디어 쿼리로 추가 보장
    />
  );
};

export default MouseFollower;
