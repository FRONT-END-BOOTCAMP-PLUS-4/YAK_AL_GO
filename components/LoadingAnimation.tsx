"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface LoadingAnimationProps {
  isLoading?: boolean
  text?: string
}

const LoadingAnimation = ({ isLoading = true, text = "로딩 중..." }: LoadingAnimationProps) => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowText(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowText(false)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        {/* Character with wiggle animation - further reduced size */}
        <div className="relative">
          <Image
            src="/character.svg"
            alt="약알고 캐릭터"
            width={60}
            height={60}
            className="animate-wiggle"
            priority
          />
        </div>
        
        {/* Loading text with fade-in animation */}
        <div className={`text-center transition-opacity duration-300 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-base font-medium text-gray-700 mb-2">
            {text}
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-[#4FC4B8] rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-[#4FC4B8] rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-[#4FC4B8] rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation 