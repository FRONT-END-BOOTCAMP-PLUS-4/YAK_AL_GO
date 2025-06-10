import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import ReactQueryProviders from '@/components/query-provider';
import { SessionProvider } from '@/components/session-provider';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { LoadingProvider } from '@/providers/LoadingProvider';
import MouseFollower from '@/components/MouseFollower';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>약알고 - 당신의 약, 한눈에</title>
      </head>
      <body className={inter.className}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17177794901" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17177794901');
          `}
        </Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"
          strategy="beforeInteractive"
        />
        <MouseFollower />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SessionProvider>
            <ReactQueryProviders>
              <LoadingProvider>
                <div className="flex min-h-screen flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <ScrollToTop />
              </LoadingProvider>
            </ReactQueryProviders>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
