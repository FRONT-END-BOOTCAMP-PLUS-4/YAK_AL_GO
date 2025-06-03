'use client';

import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    />
  );
};

export default MouseFollower;
