"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapPin, AlertTriangle, ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react"
import { MedicineReviewDialog } from "@/components/medicine-review-dialog"
import { MedicineWarningDialog } from "@/components/medicine-warning-dialog"
import { MedicineReviewSummary } from "@/components/medicine-review-summary"

// Mock data for medicine details
const medicineDetails = {
  id: 1,
  name: "타이레놀",
  company: "한국얀센",
  type: "진통제",
  description: "해열, 진통, 소염 작용",
  image: "/placeholder.svg?height=200&width=200",
  ingredients: "아세트아미노펜 500mg",
  usage: "1회 1~2정씩 1일 3~4회 필요시 복용",
  sideEffects: "구역, 구토, 변비, 두통, 어지러움, 피부 발진 등",
  cautions: [
    {
      type: "임산부",
      description: "임신 중 복용 시 의사와 상담이 필요합니다.",
      severity: "medium",
    },
    {
      type: "어린이",
      description: "12세 미만 어린이는 의사와 상담 후 복용하세요.",
      severity: "low",
    },
    {
      type: "노약자",
      description: "고령자는 신장 기능이 저하될 수 있으므로 용량 조절이 필요할 수 있습니다.",
      severity: "medium",
    },
    {
      type: "간 질환",
      description: "간 질환이 있는 경우 복용을 피하세요.",
      severity: "high",
    },
  ],
  reviews: [
    {
      id: 1,
      user: "user1",
      rating: "효과 좋음",
      comment: "두통에 효과가 좋았습니다.",
      date: "2023-05-10",
    },
    {
      id: 2,
      user: "user2",
      rating: "보통",
      comment: "효과는 있지만 졸림이 있었습니다.",
      date: "2023-04-22",
    },
    {
      id: 3,
      user: "user3",
      rating: "효과 좋음",
      comment: "발열에 빠르게 효과가 있었습니다.",
      date: "2023-03-15",
    },
  ],
  reviewSummary: [
    { emoji: "😀", text: "음식이 맛있어요", count: 92 },
    { emoji: "🌿", text: "재료가 신선해요", count: 29 },
    { emoji: "👀", text: "매장이 넓어요", count: 29 },
    { emoji: "💖", text: "친절해요", count: 25 },
    { emoji: "❄️", text: "양이 많아요", count: 16 },
    { emoji: "✨", text: "매장이 청결해요", count: 16 },
    { emoji: "🕒", text: "음식이 빨리 나와요", count: 15 },
    { emoji: "🍚", text: "혼밥하기 좋아요", count: 13 },
    { emoji: "👨‍👩‍👧‍👦", text: "단체모임 하기 좋아요", count: 13 },
    { emoji: "🌿", text: "건강한 맛이에요", count: 9 },
    { emoji: "⏱️", text: "음식이 빨리 나와요", count: 4 },
    { emoji: "🛋️", text: "인테리어가 멋져요", count: 4 },
    { emoji: "💰", text: "가성비가 좋아요", count: 4 },
    { emoji: "👨‍👩‍👧‍👦", text: "화장실이 깨끗해요", count: 2 },
    { emoji: "🌞", text: "자분한 분위기에요", count: 1 },
  ],
  totalReviews: 133,
  totalParticipants: 116,
  pharmacies: [
    {
      id: 1,
      name: "건강약국",
      distance: "0.5km",
      status: "영업중",
      address: "서울시 강남구 역삼동 123-45",
      stock: true,
    },
    {
      id: 2,
      name: "행복약국",
      distance: "1.2km",
      status: "영업중",
      address: "서울시 강남구 역삼동 234-56",
      stock: true,
    },
    {
      id: 3,
      name: "미소약국",
      distance: "2.3km",
      status: "영업종료",
      address: "서울시 강남구 역삼동 345-67",
      stock: false,
    },
  ],
}

export default function MedicineDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the medicine details based on the ID
  const medicine = medicineDetails
  const [userReviews, setUserReviews] = useState<string[]>([])
  const [userComment, setUserComment] = useState("")

  const handleReviewSubmit = (selectedOptions: string[], comment: string) => {
    setUserReviews(selectedOptions)
    setUserComment(comment)
    // In a real app, you would send this data to your backend
    console.log("Review submitted:", { selectedOptions, comment })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/medicines">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">약 상세 정보</h1>
        </div>

        {/* Warning Dialog for high severity cautions */}
        <MedicineWarningDialog medicineName={medicine.name} warnings={medicine.cautions} />

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={medicine.image || "/placeholder.svg"}
                  alt={medicine.name}
                  width={200}
                  height={200}
                  className="rounded-md object-cover mb-4"
                />
                <div className="text-center">
                  <h2 className="text-xl font-bold">{medicine.name}</h2>
                  <p className="text-sm text-muted-foreground">{medicine.company}</p>
                  <div className="flex justify-center mt-2">
                    <Badge variant="outline">{medicine.type}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">재고 보유 약국</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {medicine.pharmacies.map((pharmacy) => (
                    <div key={pharmacy.id} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
                      <div className="mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{pharmacy.name}</h3>
                          <Badge
                            variant={pharmacy.status === "영업중" ? "default" : "outline"}
                            className={pharmacy.status === "영업중" ? "bg-green-500" : ""}
                          >
                            {pharmacy.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs">{pharmacy.distance}</span>
                          <Badge
                            variant={pharmacy.stock ? "default" : "outline"}
                            className={pharmacy.stock ? "bg-primary" : ""}
                          >
                            {pharmacy.stock ? "재고 있음" : "재고 없음"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild className="w-full">
                    <Link href={`/map?medicine=${medicine.name}`}>지도에서 보기</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">주요 성분</h3>
                    <p>{medicine.ingredients}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">용법 용량</h3>
                    <p>{medicine.usage}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">부작용</h3>
                    <p>{medicine.sideEffects}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">주의사항</h3>
              {medicine.cautions.map((caution, index) => (
                <Alert
                  key={index}
                  variant={
                    caution.severity === "high" ? "destructive" : caution.severity === "medium" ? "default" : "outline"
                  }
                >
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>{caution.type}</AlertTitle>
                  <AlertDescription>{caution.description}</AlertDescription>
                </Alert>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">리뷰</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Tabs defaultValue="summary">
                  <TabsList>
                    <TabsTrigger value="summary">리뷰 요약</TabsTrigger>
                    <TabsTrigger value="all">전체 리뷰</TabsTrigger>
                    <TabsTrigger value="good">효과 좋음</TabsTrigger>
                    <TabsTrigger value="normal">보통</TabsTrigger>
                    <TabsTrigger value="bad">효과 없음</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="mt-4">
                    <MedicineReviewSummary
                      reviews={medicine.reviewSummary}
                      totalReviews={medicine.totalReviews}
                      totalParticipants={medicine.totalParticipants}
                    />
                  </TabsContent>

                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4">
                      {medicine.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  review.rating === "효과 좋음"
                                    ? "default"
                                    : review.rating === "보통"
                                      ? "outline"
                                      : "secondary"
                                }
                                className={
                                  review.rating === "효과 좋음"
                                    ? "bg-green-500"
                                    : review.rating === "효과 없음"
                                      ? "bg-red-500"
                                      : ""
                                }
                              >
                                {review.rating === "효과 좋음" && <ThumbsUp className="mr-1 h-3 w-3" />}
                                {review.rating === "효과 없음" && <ThumbsDown className="mr-1 h-3 w-3" />}
                                {review.rating}
                              </Badge>
                              <span className="font-medium">{review.user}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="mt-2 text-sm">{review.comment}</p>
                        </div>
                      ))}

                      {userReviews.length > 0 && (
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="default" className="bg-green-500">
                                <ThumbsUp className="mr-1 h-3 w-3" />
                                효과 좋음
                              </Badge>
                              <span className="font-medium">나의 리뷰</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {new Date().toISOString().split("T")[0]}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {userReviews.map((option, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {option}
                                </Badge>
                              ))}
                            </div>
                            {userComment && <p className="text-sm">{userComment}</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="good" className="mt-4">
                    <div className="space-y-4">
                      {medicine.reviews
                        .filter((review) => review.rating === "효과 좋음")
                        .map((review) => (
                          <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Badge variant="default" className="bg-green-500">
                                  <ThumbsUp className="mr-1 h-3 w-3" />
                                  {review.rating}
                                </Badge>
                                <span className="font-medium">{review.user}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="mt-2 text-sm">{review.comment}</p>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="normal" className="mt-4">
                    <div className="space-y-4">
                      {medicine.reviews
                        .filter((review) => review.rating === "보통")
                        .map((review) => (
                          <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{review.rating}</Badge>
                                <span className="font-medium">{review.user}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="mt-2 text-sm">{review.comment}</p>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="bad" className="mt-4">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">리뷰가 없습니다.</p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-4">
                  <MedicineReviewDialog onSubmit={handleReviewSubmit}>
                    <Button variant="outline" className="w-full">
                      리뷰 작성하기
                    </Button>
                  </MedicineReviewDialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
