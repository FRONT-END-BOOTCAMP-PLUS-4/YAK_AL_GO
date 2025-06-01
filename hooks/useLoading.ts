"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("로딩 중...")
  const router = useRouter()

  const navigate = (path: string, text?: string) => {
    setLoadingText(text || "로딩 중...")
    setIsLoading(true)
    
    // 최소 로딩 시간 설정 (UX 향상)
    const minLoadingTime = 800
    const startTime = Date.now()
    
    setTimeout(() => {
      router.push(path)
      
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }, 200)
  }

  const setLoading = (loading: boolean, text?: string) => {
    setIsLoading(loading)
    if (text) setLoadingText(text)
  }

  return {
    isLoading,
    loadingText,
    navigate,
    setLoading
  }
} 