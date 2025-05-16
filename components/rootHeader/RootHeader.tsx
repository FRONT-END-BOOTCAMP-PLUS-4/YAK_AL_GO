"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, User, MapPin, Search, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "홈", href: "/" },
  { name: "약 검색", href: "/medicines" },
  { name: "약국 찾기", href: "/map" },
  { name: "커뮤니티", href: "/qna" },
];

const RootHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Mock authentication state - replace with actual auth
  const isAuthenticated = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b px-2 py-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-lg text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    약알고
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <ul className="grid gap-1 px-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                            pathname === item.href
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name === "약 검색" && (
                            <Search className="h-4 w-4" />
                          )}
                          {item.name === "약국 찾기" && (
                            <MapPin className="h-4 w-4" />
                          )}
                          {item.name === "커뮤니티" && (
                            <MessageSquare className="h-4 w-4" />
                          )}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t p-4">
                  {isAuthenticated ? (
                    <div className="grid gap-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        마이페이지
                      </Link>
                      <Button variant="outline" className="w-full">
                        로그아웃
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-2">
                      <Button asChild className="w-full">
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          로그인
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/register" onClick={() => setIsOpen(false)}>
                          회원가입
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">약알고</span>
          </Link>
        </div>
        <nav className="hidden lg:flex lg:gap-4 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="icon">
                <Link href="/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
              <Button variant="outline" className="hidden lg:inline-flex">
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild className="hidden lg:inline-flex">
                <Link href="/login">로그인</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="hidden lg:inline-flex"
              >
                <Link href="/register">회원가입</Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="lg:hidden">
                <Link href="/login">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Login</span>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
