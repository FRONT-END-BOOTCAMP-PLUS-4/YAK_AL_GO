'use client';

import Script from 'next/script';

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        onLoad={() => {
          console.log('Kakao Maps SDK loaded');
        }}
        onError={(e) => {
          console.error('Failed to load Kakao Maps SDK:', e);
        }}
      />
      {children}
    </>
  );
}