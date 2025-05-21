"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { loginWithKakao } from "@/lib/kakao-auth"
import KakaoScript from "@/components/kakao-script"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // 카카오 로그인 후 리다이렉트 처리
  useEffect(() => {
    const code = searchParams.get("code")
    if (code) {
      // 카카오 인증 코드가 있는 경우 처리
      handleKakaoCallback(code)
    }
  }, [searchParams])

  // 카카오 인증 코드 처리 함수
  const handleKakaoCallback = async (code: string) => {
    setIsLoading(true)
    try {
      // 실제 구현 시에는 서버 API를 호출하여 토큰 교환 및 사용자 정보 조회
      console.log("Kakao auth code:", code)
      // 예시: 서버에 코드 전송 및 사용자 정보 조회
      // const response = await fetch('/api/auth/kakao', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ code })
      // });
      // const data = await response.json();

      // 임시 처리: 리다이렉트
      router.push("/")
    } catch (error) {
      console.error("Failed to process Kakao callback", error)
      setError("카카오 로그인 처리 중 오류가 발생했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  // 카카오 로그인 버튼 클릭 핸들러
  const handleKakaoLogin = () => {
    loginWithKakao()
  }

  return (
    <>
      <KakaoScript />
      <div className="container flex h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">약알고</CardTitle>
            <CardDescription className="text-center">약품 정보 검색 및 약국 찾기 서비스</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 카카오 로그인 버튼 */}
            <Button
              onClick={handleKakaoLogin}
              className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-black font-medium"
              disabled={isLoading}
            >
              <div className="flex items-center justify-center w-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0.5C4.02944 0.5 0 3.69924 0 7.68568C0 10.1948 1.55983 12.4069 3.93372 13.7263C3.7519 14.2866 3.11213 16.1294 3.03324 16.4234C2.93364 16.7954 3.22407 16.7826 3.40505 16.6748C3.54739 16.5871 5.74334 15.1102 6.67203 14.4989C7.42868 14.6312 8.20775 14.7 9 14.7C13.9706 14.7 18 11.5008 18 7.51432C18 3.52788 13.9706 0.5 9 0.5Z"
                    fill="black"
                  />
                </svg>
                카카오로 시작하기
              </div>
            </Button>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
