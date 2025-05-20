'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Home, Search } from 'lucide-react';

import dynamic from 'next/dynamic';
const LottieAnimation = dynamic(() => import('@/components/lottie-animation').then((mod) => mod.LottieAnimation), {
  ssr: false, // 👈 서버 사이드 렌더링 비활성화
});

// Lottie 애니메이션 데이터 (404 관련 애니메이션)
const notFoundAnimationData = {
  v: '5.7.8',
  fr: 30,
  ip: 0,
  op: 180,
  w: 500,
  h: 500,
  nm: '404 Animation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: '404 Text',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [250, 250, 0], to: [0, -5, 0], ti: [0, 0, 0] },
            { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 45, s: [250, 220, 0], to: [0, 0, 0], ti: [0, -5, 0] },
            { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 90, s: [250, 250, 0], to: [0, 5, 0], ti: [0, 0, 0] },
            { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 135, s: [250, 280, 0], to: [0, 0, 0], ti: [0, 5, 0] },
            { t: 180, s: [250, 250, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sr',
              sy: 1,
              d: 1,
              pt: { a: 0, k: 5, ix: 3 },
              p: { a: 0, k: [0, 0], ix: 4 },
              r: { a: 0, k: 0, ix: 5 },
              ir: { a: 0, k: 50, ix: 6 },
              is: { a: 0, k: 0, ix: 8 },
              or: { a: 0, k: 100, ix: 7 },
              os: { a: 0, k: 0, ix: 9 },
              ix: 1,
              nm: 'Polystar Path 1',
              mn: 'ADBE Vector Shape - Star',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.2, 0.2, 0.9, 1], ix: 3 },
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
              c: { a: 0, k: [0.8, 0.8, 1, 1], ix: 4 },
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
              r: {
                a: 1,
                k: [
                  { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
                  { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 90, s: [180] },
                  { t: 180, s: [360] },
                ],
                ix: 6,
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: '404 Shape',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
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

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
      <div className="w-64 h-64 mb-6">
        <LottieAnimation animationData={notFoundAnimationData} />
      </div>
      <h1 className="text-4xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 주소가 올바른지 확인하시거나 홈으로 돌아가세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="flex items-center gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </Button>
        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link href="/medicines">
            <Search className="h-4 w-4" />약 검색하기
          </Link>
        </Button>
      </div>
    </div>
  );
}
