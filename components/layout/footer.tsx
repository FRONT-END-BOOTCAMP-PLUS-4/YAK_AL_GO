import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">약알고</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} 약알고. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:underline">
            이용약관
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:underline">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:underline">
            고객센터
          </Link>
        </nav>
      </div>
    </footer>
  )
}
