"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

type ReviewOption = {
  id: number
  emoji: string
  text: string
  category: string
}

type ReviewTypeApiResponse = {
  success: boolean
  data?: Record<string, ReviewOption[]>
  error?: {
    code: string
    message: string
  }
}

interface MedicineReviewDialogProps {
  children: React.ReactNode
  userReviews?: string[]
  onSubmit?: (selectedOptions: string[], comment: string) => void
}

export const MedicineReviewDialog = ({ children, userReviews = [], onSubmit }: MedicineReviewDialogProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false)
  const [reviewOptions, setReviewOptions] = useState<Record<string, ReviewOption[]>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReviewTypes = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/review-types', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: 리뷰 타입을 불러올 수 없습니다.`)
      }

      const result: ReviewTypeApiResponse = await response.json()

      if (!result.success) {
        throw new Error(result.error?.message || '리뷰 타입을 불러오는데 실패했습니다.')
      }

      if (result.data) {
        setReviewOptions(result.data)
      }
    } catch (error: any) {
      console.error('리뷰 타입 조회 오류:', error)
      setError(error.message || '리뷰 옵션을 불러오는 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (open && Object.keys(reviewOptions).length === 0) {
      fetchReviewTypes()
    }
  }, [open])

  useEffect(() => {
    if (open && userReviews.length > 0) {
      setSelectedOptions([...userReviews])
    }
  }, [open, userReviews])

  const handleOptionToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selectedOptions, comment)
    }
    setOpen(false)
    setSelectedOptions([])
    setComment("")
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // 다이얼로그가 닫힐 때 상태 초기화
      setSelectedOptions([])
      setComment("")
      setError(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>약품 리뷰 작성</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-center space-y-2">
                <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                <p className="text-sm text-muted-foreground">리뷰 옵션을 불러오는 중...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-8 space-y-4">
              <p className="text-sm text-destructive">{error}</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={fetchReviewTypes}
              >
                다시 시도
              </Button>
            </div>
          ) : Object.keys(reviewOptions).length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">사용 가능한 리뷰 옵션이 없습니다.</p>
            </div>
          ) : (
            (() => {
              // 카테고리 순서 정의 - 부정적 리뷰를 맨 아래로
              const categoryOrder = [
                '효과',
                '복용 편의성', 
                '부작용',
                '가격/접근성',
                '기타 만족도',
                '부정적 리뷰'
              ];

              return categoryOrder.map((categoryName) => {
                const options = reviewOptions[categoryName];
                if (!options || options.length === 0) return null;

                return (
                  <div key={categoryName} className="space-y-4">
                    <h3 className={`font-medium text-base ${
                      categoryName === '부정적 리뷰' ? 'text-red-600' : ''
                    }`}>
                      {categoryName}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {options.map((option) => (
                        <button
                          key={option.id}
                          className={`flex items-center gap-2 p-3 rounded-md border text-left transition-colors ${
                            selectedOptions.includes(option.text) 
                              ? categoryName === '부정적 리뷰'
                                ? "bg-red-100 border-red-500 ring-1 ring-red-300 text-red-700" 
                                : "border-primary bg-primary/10 text-primary"
                              : categoryName === '부정적 리뷰'
                              ? "border-red-200 hover:border-red-400 text-red-600"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => handleOptionToggle(option.text)}
                        >
                          <span className="text-lg">{option.emoji}</span>
                          <span className="text-sm">{option.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }).filter(Boolean);
            })()
          )}
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOptions.length === 0 || loading}
          >
            리뷰 등록
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
