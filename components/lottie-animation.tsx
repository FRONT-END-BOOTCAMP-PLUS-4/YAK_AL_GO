'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });
    }

    return () => {
      if (anim.current) {
        anim.current.destroy();
      }
    };
  }, [animationData, loop, autoplay]);

  return <div ref={animationContainer} className={className} style={style} />;
}
