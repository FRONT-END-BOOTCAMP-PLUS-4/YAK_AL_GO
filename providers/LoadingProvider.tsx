"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import LoadingAnimation from "@/components/LoadingAnimation"

interface LoadingContextType {
  isLoading: boolean
  loadingText: string
  navigate: (path: string, text?: string) => void
  setLoading: (loading: boolean, text?: string) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoadingContext = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error("useLoadingContext must be used within LoadingProvider")
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("로딩 중...")
  const router = useRouter()

  const navigate = (path: string, text?: string) => {
    setLoadingText(text || "페이지를 이동하고 있어요...")
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
    if (text) {
      setLoadingText(text)
    }
  }

  const value = {
    isLoading,
    loadingText,
    navigate,
    setLoading
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <LoadingAnimation isLoading={isLoading} text={loadingText} />
    </LoadingContext.Provider>
  )
} 