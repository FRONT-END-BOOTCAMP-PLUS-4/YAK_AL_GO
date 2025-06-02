"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type ReviewOption = {
  emoji: string
  text: string
  category: string
}

const medicineReviewOptions: Record<string, ReviewOption[]> = {
  효과: [
    { emoji: "💊", text: "효과가 빨라요", category: "효과" },
    { emoji: "✨", text: "효과가 확실해요", category: "효과" },
    { emoji: "🎯", text: "증상이 많이 개선됐어요", category: "효과" },
    { emoji: "👍", text: "기대했던 효과가 있어요", category: "효과" },
  ],
  "복용 편의성": [
    { emoji: "😋", text: "맛이 괜찮아요", category: "복용 편의성" },
    { emoji: "💧", text: "삼키기 쉬워요", category: "복용 편의성" },
    { emoji: "📏", text: "크기가 적당해요", category: "복용 편의성" },
    { emoji: "⏰", text: "복용법이 간단해요", category: "복용 편의성" },
    { emoji: "📦", text: "포장이 편리해요", category: "복용 편의성" },
  ],
  부작용: [
    { emoji: "😊", text: "부작용이 없어요", category: "부작용" },
    { emoji: "🌱", text: "순하고 자극이 적어요", category: "부작용" },
    { emoji: "😴", text: "졸음이 오지 않아요", category: "부작용" },
    { emoji: "🤢", text: "속이 불편하지 않아요", category: "부작용" },
  ],
  "가격/접근성": [
    { emoji: "💰", text: "가격이 합리적이에요", category: "가격/접근성" },
    { emoji: "🏪", text: "구하기 쉬워요", category: "가격/접근성" },
    { emoji: "📋", text: "처방받기 편해요", category: "가격/접근성" },
  ],
  "기타 만족도": [
    { emoji: "❤️", text: "전반적으로 만족해요", category: "기타 만족도" },
    { emoji: "🔄", text: "재구매 의향이 있어요", category: "기타 만족도" },
    { emoji: "👨‍⚕️", text: "의사가 추천했어요", category: "기타 만족도" },
    { emoji: "📈", text: "꾸준히 복용하고 있어요", category: "기타 만족도" },
  ],
  "부정적 리뷰": [
    { emoji: "😵", text: "부작용이 있어요", category: "부정적 리뷰" },
    { emoji: "⏳", text: "효과가 늦어요", category: "부정적 리뷰" },
    { emoji: "💸", text: "가격이 비싸요", category: "부정적 리뷰" },
    { emoji: "😷", text: "맛이 쓰거나 냄새가 나요", category: "부정적 리뷰" },
  ],
}

interface MedicineReviewDialogProps {
  children: React.ReactNode
  onSubmit?: (selectedOptions: string[], comment: string) => void
}

export function MedicineReviewDialog({ children, onSubmit }: MedicineReviewDialogProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false)

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>약품 리뷰 작성</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-6">
          {Object.entries(medicineReviewOptions).map(([categoryName, options]) => (
            <div key={categoryName} className="space-y-4">
              <h3 className="font-medium text-base">{categoryName}</h3>
              <div className="grid grid-cols-2 gap-2">
                {options.map((option) => (
                  <button
                    key={option.text}
                    className={`flex items-center gap-2 p-3 rounded-md border text-left transition-colors ${
                      selectedOptions.includes(option.text) 
                        ? "border-primary bg-primary/10 text-primary" 
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
          ))}

        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={selectedOptions.length === 0}>
            리뷰 등록
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
