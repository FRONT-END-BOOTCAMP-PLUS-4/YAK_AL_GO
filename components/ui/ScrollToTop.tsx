'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

/**
 * 전역 맨 위로 스크롤 버튼 컴포넌트
 */
export default function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(24); // 기본 24px (bottom-6)

  /**
   * 스크롤 이벤트 핸들러
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 스크롤 200px 이상에서 버튼 표시
      setShowScrollToTop(scrollY > 200);

      // 푸터 높이 (대략 80px로 조정, 푸터 바로 위에서 멈춤)
      const footerHeight = 80;
      const bufferSpace = 24; // 기본 여백

      // 페이지 하단까지의 거리 계산
      const distanceToBottom = documentHeight - (scrollY + windowHeight);

      // 푸터 영역에 들어갔을 때 버튼 위치 조정
      if (distanceToBottom < footerHeight) {
        const adjustedBottom = footerHeight - distanceToBottom + bufferSpace;
        setBottomPosition(Math.max(adjustedBottom, bufferSpace));
      } else {
        setBottomPosition(bufferSpace);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * 맨 위로 스크롤 함수
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`fixed right-6 p-2 hover:scale-110 transition-all duration-500 ease-out z-50 ${
        showScrollToTop
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
      style={{ bottom: `${bottomPosition}px` }}
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      <div className="relative">
        {/* 위쪽 화살표 표시 - 뒤쪽 레이어 */}
        <div className="absolute -top-3 -right-1 bg-primary text-primary-foreground rounded-lg p-1.5 shadow-lg z-10 transition-all duration-300">
          <ArrowUp className="w-4 h-4" />
        </div>
        {/* 캐릭터 아이콘 - 앞쪽 레이어 */}
        <Image
          src="/character.svg"
          alt="맨 위로 스크롤"
          width={56}
          height={56}
          className="w-14 h-14 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 relative z-20"
        />
      </div>
    </button>
  );
}
