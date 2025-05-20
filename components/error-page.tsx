"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LottieAnimation } from "@/components/lottie-animation"
import { Home, RefreshCw } from "lucide-react"

// 실제 LottieFiles에서 가져온 애니메이션 데이터를 사용할 수 있습니다
// 이 예제에서는 간단한 예시 데이터를 사용합니다
import errorAnimation from "@/public/animations/error-animation.json"
import notFoundAnimation from "@/public/animations/not-found-animation.json"
import serverErrorAnimation from "@/public/animations/server-error-animation.json"

type ErrorType = "general" | "not-found" | "server-error"

interface ErrorPageProps {
  type?: ErrorType
  title?: string
  message?: string
  reset?: () => void
}

export function ErrorPage({ type = "general", title, message, reset }: ErrorPageProps) {
  // 에러 타입에 따라 다른 애니메이션과 기본 메시지를 사용합니다
  const getAnimationData = () => {
    switch (type) {
      case "not-found":
        return notFoundAnimation
      case "server-error":
        return serverErrorAnimation
      default:
        return errorAnimation
    }
  }

  const getDefaultTitle = () => {
    switch (type) {
      case "not-found":
        return "404 - 페이지를 찾을 수 없습니다"
      case "server-error":
        return "500 - 서버 오류가 발생했습니다"
      default:
        return "오류가 발생했습니다"
    }
  }

  const getDefaultMessage = () => {
    switch (type) {
      case "not-found":
        return "요청하신 페이지를 찾을 수 없습니다. 주소가 올바른지 확인하시거나 홈으로 돌아가세요."
      case "server-error":
        return "서버에 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      default:
        return "페이지를 로드하는 중에 오류가 발생했습니다. 다시 시도해 주세요."
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
      <div className="w-64 h-64 mb-6">
        <LottieAnimation animationData={getAnimationData()} />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title || getDefaultTitle()}</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">{message || getDefaultMessage()}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {reset && (
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            다시 시도하기
          </Button>
        )}
        <Button variant={reset ? "outline" : "default"} asChild className="flex items-center gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  )
}
