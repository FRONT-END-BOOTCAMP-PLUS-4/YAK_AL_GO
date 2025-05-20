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

const reviewOptions: Record<string, ReviewOption[]> = {
  스타일: [
    { emoji: "💚", text: "원하는 스타일로 잘해줬어요", category: "스타일" },
    { emoji: "👩", text: "스타일 추천을 잘해줬어요", category: "스타일" },
    { emoji: "😎", text: "트렌디해요", category: "스타일" },
    { emoji: "🌹", text: "고급스러워요", category: "스타일" },
  ],
  "시술/서비스": [
    { emoji: "🔍", text: "시술이 꼼꼼해요", category: "시술/서비스" },
    { emoji: "💖", text: "친절해요", category: "시술/서비스" },
    { emoji: "📋", text: "상담이 자세해요", category: "시술/서비스" },
    { emoji: "👏", text: "손이 빨라요", category: "시술/서비스" },
  ],
  "가격/기타": [
    { emoji: "✨", text: "매장이 청결해요", category: "가격/기타" },
    { emoji: "💰", text: "가격이 합리적이에요", category: "가격/기타" },
    { emoji: "💎", text: "비싼 만큼 가치있어요", category: "가격/기타" },
    { emoji: "🪑", text: "좋은 제품을 사용해요", category: "가격/기타" },
    { emoji: "🅿️", text: "주차하기 편해요", category: "가격/기타" },
    { emoji: "✅", text: "가격 안내가 명확해요", category: "가격/기타" },
    { emoji: "❤️", text: "과도한 권유가 없어요", category: "가격/기타" },
    { emoji: "🛋️", text: "대기공간이 잘 되어있어요", category: "가격/기타" },
  ],
}

const medicineReviewOptions: Record<string, ReviewOption[]> = {
  효과: [
    { emoji: "😀", text: "음식이 맛있어요", category: "효과" },
    { emoji: "🌿", text: "재료가 신선해요", category: "효과" },
    { emoji: "👀", text: "매장이 넓어요", category: "효과" },
    { emoji: "💖", text: "친절해요", category: "효과" },
    { emoji: "❄️", text: "양이 많아요", category: "효과" },
    { emoji: "✨", text: "매장이 청결해요", category: "효과" },
    { emoji: "🕒", text: "음식이 빨리 나와요", category: "효과" },
    { emoji: "🍚", text: "혼밥하기 좋아요", category: "효과" },
    { emoji: "👨‍👩‍👧‍👦", text: "단체모임 하기 좋아요", category: "효과" },
    { emoji: "⏱️", text: "음식이 빨리 나와요", category: "효과" },
  ],
  가격: [
    { emoji: "✨", text: "매장이 청결해요", category: "가격" },
    { emoji: "💰", text: "가격이 합리적이에요", category: "가격" },
    { emoji: "💎", text: "비싼 만큼 가치있어요", category: "가격" },
    { emoji: "🧴", text: "좋은 제품을 사용해요", category: "가격" },
    { emoji: "🅿️", text: "주차하기 편해요", category: "가격" },
    { emoji: "✅", text: "가격 안내가 명확해요", category: "가격" },
    { emoji: "❤️", text: "과도한 권유가 없어요", category: "가격" },
    { emoji: "🛋️", text: "대기공간이 잘 되어있어요", category: "가격" },
    { emoji: "📞", text: "예약이 편리해요", category: "가격" },
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>약품 리뷰 작성</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">효과</h3>
            <div className="grid grid-cols-2 gap-2">
              {medicineReviewOptions["효과"].map((option) => (
                <button
                  key={option.text}
                  className={`flex items-center gap-2 p-3 rounded-md border text-left ${
                    selectedOptions.includes(option.text) ? "border-primary bg-primary/10" : "border-border"
                  }`}
                  onClick={() => handleOptionToggle(option.text)}
                >
                  <span className="text-xl">{option.emoji}</span>
                  <span className="text-sm">{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">가격</h3>
            <div className="grid grid-cols-2 gap-2">
              {medicineReviewOptions["가격"].map((option) => (
                <button
                  key={option.text}
                  className={`flex items-center gap-2 p-3 rounded-md border text-left ${
                    selectedOptions.includes(option.text) ? "border-primary bg-primary/10" : "border-border"
                  }`}
                  onClick={() => handleOptionToggle(option.text)}
                >
                  <span className="text-xl">{option.emoji}</span>
                  <span className="text-sm">{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">추가 의견 (선택사항)</Label>
            <Textarea
              id="comment"
              placeholder="약품에 대한 추가 의견을 작성해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
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
