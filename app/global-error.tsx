'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

import dynamic from 'next/dynamic';
const LottieAnimation = dynamic(() => import('@/components/lottie-animation').then((mod) => mod.LottieAnimation), {
  ssr: false, // 👈 서버 사이드 렌더링 비활성화
});

// Lottie 애니메이션 데이터 (심각한 에러 관련 애니메이션)
const criticalErrorAnimationData = {
  v: '5.7.8',
  fr: 30,
  ip: 0,
  op: 180,
  w: 500,
  h: 500,
  nm: 'Critical Error Animation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Warning Icon',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [250, 250, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 0,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 30,
              s: [110, 110, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 60,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 90,
              s: [110, 110, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 120,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 150,
              s: [110, 110, 100],
            },
            { t: 180, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [0, -70],
                    [60, 40],
                    [-60, 40],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.9, 0.2, 0.2, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 10, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: 'Stroke 1',
              mn: 'ADBE Vector Graphic - Stroke',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [1, 0.8, 0.8, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Warning Triangle',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [10, 40], ix: 2 },
              p: { a: 0, k: [0, -10], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: 'Rectangle Path 1',
              mn: 'ADBE Vector Shape - Rect',
              hd: false,
            },
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [10, 10], ix: 2 },
              p: { a: 0, k: [0, 30], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: 'Rectangle Path 2',
              mn: 'ADBE Vector Shape - Rect',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Exclamation Mark',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // 심각한 에러 로깅 로직을 여기에 추가할 수 있습니다
    console.error('Critical application error:', error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <div className="w-64 h-64 mb-6">
            <LottieAnimation animationData={criticalErrorAnimationData} />
          </div>
          <h1 className="text-4xl font-bold mb-4">심각한 오류가 발생했습니다</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            죄송합니다. 애플리케이션에 심각한 오류가 발생했습니다. 페이지를 새로고침하거나 나중에 다시 시도해 주세요.
          </p>
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            새로고침
          </Button>
        </div>
      </body>
    </html>
  );
}
