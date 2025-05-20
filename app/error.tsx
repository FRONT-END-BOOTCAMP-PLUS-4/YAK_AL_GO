'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Home, RefreshCw } from 'lucide-react';

import dynamic from 'next/dynamic';
const LottieAnimation = dynamic(() => import('@/components/lottie-animation').then((mod) => mod.LottieAnimation), {
  ssr: false, // 👈 서버 사이드 렌더링 비활성화
});

// Lottie 애니메이션 데이터 (에러 관련 애니메이션)
const errorAnimationData = {
  v: '5.7.8',
  fr: 30,
  ip: 0,
  op: 180,
  w: 500,
  h: 500,
  nm: 'Error Animation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Error Icon',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 30, s: [10] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 60, s: [0] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 90, s: [-10] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 120, s: [0] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 150, s: [10] },
            { t: 180, s: [0] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [250, 250, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [150, 150], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 20, ix: 4 },
              nm: 'Rectangle Path 1',
              mn: 'ADBE Vector Shape - Rect',
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
          nm: 'Error Background',
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
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [-40, -40],
                    [40, 40],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ind: 1,
              ty: 'sh',
              ix: 2,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [40, -40],
                    [-40, 40],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: 'Path 2',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 15, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: 'Stroke 1',
              mn: 'ADBE Vector Graphic - Stroke',
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
          nm: 'X Mark',
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

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // 에러 로깅 로직을 여기에 추가할 수 있습니다
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
      <div className="w-64 h-64 mb-6">
        <LottieAnimation animationData={errorAnimationData} />
      </div>
      <h1 className="text-4xl font-bold mb-4">이런! 문제가 발생했습니다</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        죄송합니다. 페이지를 로드하는 중에 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          다시 시도하기
        </Button>
        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
}
