"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export default function SignupStep1Page() {
  const router = useRouter()
  const [userType, setUserType] = useState<"general" | "pharmacist">("general")
  const [kakaoUserInfo, setKakaoUserInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    nickname: "",
    age: "",
    healthConditions: [] as string[],
    licenseNumber: "",
    pharmacyId: "",
    pharmacyName: "",
    pharmacyAddress: "",
  })

  // 세션 스토리지에서 카카오 사용자 정보 가져오기
  useEffect(() => {
    const userInfoStr = sessionStorage.getItem("kakaoUserInfo")
    if (userInfoStr) {
      const userInfo = JSON.parse(userInfoStr)
      setKakaoUserInfo(userInfo)
      setFormData((prev) => ({
        ...prev,
        email: userInfo.email || prev.email,
        name: userInfo.name || prev.name,
      }))
    }
    // 리다이렉트 로직 제거
  }, [])

  // 폼 입력 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // 체크박스 핸들러
  const handleCheckboxChange = (value: string, field: string) => {
    setFormData((prev) => {
      const currentValues = prev[field as keyof typeof prev] as string[]
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter((item) => item !== value),
        }
      } else {
        return {
          ...prev,
          [field]: [...currentValues, value],
        }
      }
    })
  }

  // 셀렉트 핸들러
  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // 다음 단계로 이동
  const handleNextStep = () => {
    // 폼 데이터 유효성 검사
    if (userType === "general") {
      if (!formData.nickname || !formData.age) {
        setError("모든 필수 항목을 입력해주세요.")
        return
      }
    } else {
      if (!formData.licenseNumber || !formData.pharmacyId || !formData.pharmacyName || !formData.pharmacyAddress) {
        setError("모든 필수 항목을 입력해주세요.")
        return
      }
    }

    // 세션 스토리지에 폼 데이터 저장
    sessionStorage.setItem(
      "signupData",
      JSON.stringify({
        ...formData,
        userType,
      }),
    )

    // 일반 회원인 경우에만 2단계로 이동, 약사는 바로 완료
    if (userType === "general") {
      router.push("/auth/step2")
    } else {
      router.push("/auth/complete")
    }
  }

  return (
    <div className="container flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            {userType === "general" ? (
              // General user has 2 steps
              <div className="flex items-center space-x-2">
                <div className="h-2 w-8 rounded-full bg-primary"></div>
                <div className="h-2 w-8 rounded-full bg-gray-300"></div>
              </div>
            ) : (
              // Pharmacist has only 1 step
              <div className="flex items-center space-x-2">
                <div className="h-2 w-8 rounded-full bg-primary"></div>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/auth">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <CardTitle className="text-2xl font-bold">
              {userType === "general" ? "회원가입 (1/2)" : "회원가입 (1/1)"}
            </CardTitle>
          </div>

          <CardDescription>
            {kakaoUserInfo
              ? "기본 정보를 입력해주세요"
              : "카카오 로그인 없이 직접 접근하셨습니다. 정보를 입력해주세요."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={userType} onValueChange={(value) => setUserType(value as "general" | "pharmacist")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">일반 회원</TabsTrigger>
              <TabsTrigger value="pharmacist">약사</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4 mt-4">
              {/* 일반 회원 폼 */}
              {/* <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!!kakaoUserInfo?.email}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="이름을 입력하세요"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!!kakaoUserInfo?.name}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nickname">닉네임</Label>
                <Input
                  id="nickname"
                  name="nickname"
                  placeholder="닉네임을 입력하세요"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  required
                />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="age">나이</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="나이를 입력하세요"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>건강 상태</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pregnant"
                      checked={formData.healthConditions.includes("pregnant")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleCheckboxChange("pregnant", "healthConditions")
                        } else {
                          handleCheckboxChange("pregnant", "healthConditions")
                        }
                      }}
                    />
                    <Label htmlFor="pregnant">임산부</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="elderly"
                      checked={formData.healthConditions.includes("elderly")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleCheckboxChange("elderly", "healthConditions")
                        } else {
                          handleCheckboxChange("elderly", "healthConditions")
                        }
                      }}
                    />
                    <Label htmlFor="elderly">노약자</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="child"
                      checked={formData.healthConditions.includes("child")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleCheckboxChange("child", "healthConditions")
                        } else {
                          handleCheckboxChange("child", "healthConditions")
                        }
                      }}
                    />
                    <Label htmlFor="child">소아</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="conditions">질병 정보</Label>
                <Select onValueChange={(value) => handleSelectChange(value, "healthConditions")}>
                  <SelectTrigger id="conditions">
                    <SelectValue placeholder="질병 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hypertension">고혈압</SelectItem>
                    <SelectItem value="diabetes">당뇨</SelectItem>
                    <SelectItem value="heart">심장질환</SelectItem>
                    <SelectItem value="liver">간질환</SelectItem>
                    <SelectItem value="kidney">신장질환</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="pharmacist" className="space-y-4 mt-4">
              {/* 약사 회원 폼 */}
              {/* <div className="space-y-2">
                <Label htmlFor="email-pharmacist">이메일</Label>
                <Input
                  id="email-pharmacist"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!!kakaoUserInfo?.email}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name-pharmacist">이름</Label>
                <Input
                  id="name-pharmacist"
                  name="name"
                  placeholder="이름을 입력하세요"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!!kakaoUserInfo?.name}
                  required
                />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">약사 면허 번호</Label>
                <Input
                  id="licenseNumber"
                  name="licenseNumber"
                  placeholder="약사 면허 번호를 입력하세요"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pharmacyId">약국 ID (HPID)</Label>
                <Input
                  id="pharmacyId"
                  name="pharmacyId"
                  placeholder="약국 ID를 입력하세요"
                  value={formData.pharmacyId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pharmacyName">약국명</Label>
                <Input
                  id="pharmacyName"
                  name="pharmacyName"
                  placeholder="약국명을 입력하세요"
                  value={formData.pharmacyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pharmacyAddress">약국 주소</Label>
                <Input
                  id="pharmacyAddress"
                  name="pharmacyAddress"
                  placeholder="약국 주소를 입력하세요"
                  value={formData.pharmacyAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </TabsContent>
          </Tabs>

          {error && <p className="text-sm text-destructive mt-4">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNextStep} className="w-full">
            {userType === "general" ? "다음" : "완료"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
