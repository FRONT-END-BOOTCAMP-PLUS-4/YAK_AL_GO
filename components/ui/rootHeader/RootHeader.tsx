"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import styles from "./rootHeader.module.scss";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "홈", href: "/" },
  { name: "약 검색", href: "/medicines" },
  { name: "약국 찾기", href: "/map" },
  { name: "커뮤니티", href: "/community" },
];

export default function RootHeader() {
  const pathname = usePathname();

  const isAuthenticated = false;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/logo.png"
              alt="약알고 로고"
              width={100}
              height={100}
              style={{ height: "auto", width: "auto", maxWidth: "100px" }}
              priority
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                styles.navLink,
                pathname === item.href && styles.active
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className={styles.authContainer}>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="icon" aria-label="Profile">
                <Link href="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className={styles.authButtonDesktop}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div className={styles.authButtonGroup}>
              <Link href="/login" className={styles.loginButton}>
                로그인
              </Link>
              <Link href="/signup" className={styles.registerButton}>
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
