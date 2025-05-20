"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  const [registrationStep, setRegistrationStep] = useState(1)
  const [userType, setUserType] = useState<"general" | "pharmacist">("general")
  const [medicationTimes, setMedicationTimes] = useState<string[]>([])

  const handleNextStep = () => {
    setRegistrationStep(registrationStep + 1)
  }

  const handlePrevStep = () => {
    setRegistrationStep(registrationStep - 1)
  }

  const handleTimeToggle = (time: string) => {
    if (medicationTimes.includes(time)) {
      setMedicationTimes(medicationTimes.filter((t) => t !== time))
    } else {
      setMedicationTimes([...medicationTimes, time])
    }
  }

  const renderRegistrationStep = () => {
    switch (registrationStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">카카오로 시작하기</Button>
            </div>
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-muted"></span>
              <span className="relative bg-background px-2 text-xs text-muted-foreground">또는 이메일로 시작하기</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">비밀번호</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  비밀번호 찾기
                </Link>
              </div>
              <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <Button className="w-full" onClick={handleNextStep}>
              다음
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="register-email">이메일</Label>
              <Input
                id="register-email"
                type="email"
                placeholder="이메일을 입력하세요"
                defaultValue="user@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">비밀번호</Label>
              <Input id="register-password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">비밀번호 확인</Label>
              <Input id="confirm-password" type="password" placeholder="비밀번호를 다시 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" defaultValue="홍길동" />
            </div>
            <div className="space-y-2">
              <Label>회원 유형</Label>
              <RadioGroup
                defaultValue="general"
                onValueChange={(value) => setUserType(value as "general" | "pharmacist")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">일반 회원</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pharmacist" id="pharmacist" />
                  <Label htmlFor="pharmacist">약사</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                이전
              </Button>
              <Button onClick={handleNextStep}>다음</Button>
            </div>
          </div>
        )
      case 3:
        return userType === "general" ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nickname">닉네임</Label>
              <Input id="nickname" placeholder="닉네임을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label>건강 상태</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pregnant" />
                  <Label htmlFor="pregnant">임산부</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="elderly" />
                  <Label htmlFor="elderly">노약자</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="child" />
                  <Label htmlFor="child">소아</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">나이</Label>
              <Input id="age" type="number" placeholder="나이를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="conditions">질병 정보</Label>
              <Select>
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
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                이전
              </Button>
              <Button onClick={handleNextStep}>다음</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="license">약사 면허 번호</Label>
              <Input id="license" placeholder="약사 면허 번호를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pharmacy-id">약국 ID (HPID)</Label>
              <Input id="pharmacy-id" placeholder="약국 ID를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pharmacy-name">약국명</Label>
              <Input id="pharmacy-name" placeholder="약국명을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pharmacy-address">약국 주소</Label>
              <Input id="pharmacy-address" placeholder="약국 주소를 입력하세요" />
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                이전
              </Button>
              <Button>완료</Button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>복용 중인 약</Label>
              <div className="relative">
                <Input placeholder="약 이름을 검색하세요" />
                <div className="absolute w-full mt-1 bg-background border rounded-md shadow-lg z-10">
                  
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>타이레놀</span>
                  <Button variant="outline" size="sm">
                    삭제
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>복용 시간</Label>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <Button
                    key={i}
                    variant={medicationTimes.includes(`${i}:00`) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTimeToggle(`${i}:00`)}
                  >
                    {`${i.toString().padStart(2, "0")}:00`}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                이전
              </Button>
              <Button>완료</Button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">로그인</TabsTrigger>
            <TabsTrigger value="register">회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>로그인</CardTitle>
                <CardDescription>약알고 서비스를 이용하기 위해 로그인해주세요.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">비밀번호</Label>
                    <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                      비밀번호 찾기
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full">로그인</Button>
                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-muted"></span>
                  <span className="relative bg-background px-2 text-xs text-muted-foreground">또는</span>
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">카카오 로그인</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>회원가입 {registrationStep > 1 && `(${registrationStep}/4)`}</CardTitle>
                <CardDescription>약알고 서비스에 가입하고 다양한 기능을 이용해보세요.</CardDescription>
              </CardHeader>
              <CardContent>{renderRegistrationStep()}</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
