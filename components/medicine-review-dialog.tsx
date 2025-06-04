"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
  isEditing?: boolean
  onSubmit?: (selectedOptions: string[], comment: string) => void
}

export const MedicineReviewDialog = ({ 
  children, 
  userReviews = [], 
  isEditing = false, 
  onSubmit 
}: MedicineReviewDialogProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false)
  const [reviewOptions, setReviewOptions] = useState<Record<string, ReviewOption[]>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectionError, setSelectionError] = useState<string | null>(null)

  const fetchReviewTypes = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/review-types?t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
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

  // userReviews가 변경될 때마다 selectedOptions 업데이트
  useEffect(() => {
    if (open) {
      setSelectedOptions([...userReviews])
    }
  }, [open, userReviews])

  const handleOptionToggle = (option: string) => {
    // 선택 해제하는 경우 에러 메시지 초기화
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
      setSelectionError(null)
      return
    }
    
    // 최대 5개까지만 선택 가능하도록 제한
    if (selectedOptions.length >= 5) {
      setSelectionError("최대 5개까지만 선택할 수 있습니다.")
      return
    }
    
    setSelectedOptions([...selectedOptions, option])
    setSelectionError(null)
  }

  const handleSubmit = async () => {
    if (selectedOptions.length > 5) {
      setSelectionError("최대 5개까지만 선택할 수 있습니다.")
      return
    }
    
    if (onSubmit) {
      await onSubmit(selectedOptions, comment)
    }
    
    setOpen(false)
    setComment("")
    setSelectionError(null)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // 다이얼로그가 닫힐 때 상태 초기화
      setComment("")
      setError(null)
      setSelectionError(null)
    } else {
      // 다이얼로그가 열릴 때 최신 userReviews로 초기화
      setSelectedOptions([...userReviews])
    }
  }

  // 리뷰 작성/수정 모드에 따른 다이얼로그 제목
  const dialogTitle = isEditing ? "약품 리뷰 수정" : "약품 리뷰 작성"
  
  // 리뷰 작성/수정 모드에 따른 버튼 텍스트
  const buttonText = isEditing ? "리뷰 수정" : "리뷰 등록"

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-between items-center mt-2 mb-2">
          {selectionError ? (
            <p className="text-sm text-red-600 font-medium">
              {selectionError}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              {isEditing 
                ? "리뷰를 수정하거나 모두 해제할 수 있습니다." 
                : "의약품에 대한 느낌을 선택해주세요."
              }
            </p>
          )}
          <p className="text-sm font-medium">
            {selectedOptions.length}/5 선택됨
          </p>
        </div>
        
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
            disabled={!isEditing && selectedOptions.length === 0 || loading}
          >
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
