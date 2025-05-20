"use client"

import { Badge } from "@/components/ui/badge"

interface ReviewSummaryItem {
  emoji: string
  text: string
  count: number
}

interface MedicineReviewSummaryProps {
  reviews: ReviewSummaryItem[]
  totalReviews: number
  totalParticipants: number
}

export function MedicineReviewSummary({ reviews, totalReviews, totalParticipants }: MedicineReviewSummaryProps) {
  // Sort reviews by count in descending order
  const sortedReviews = [...reviews].sort((a, b) => b.count - a.count)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="px-2 py-1">
          {totalReviews}개 리뷰
        </Badge>
        <span className="text-sm text-muted-foreground">{totalParticipants}명 참여</span>
      </div>

      <div className="space-y-2">
        {sortedReviews.map((review, index) => (
          <div key={index} className="flex items-center justify-between bg-muted/30 rounded-md p-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{review.emoji}</span>
              <span className="text-sm">"{review.text}"</span>
            </div>
            <span className="text-primary font-medium">{review.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
