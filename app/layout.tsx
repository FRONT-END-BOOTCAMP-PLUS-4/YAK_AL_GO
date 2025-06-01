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

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>약알고</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
