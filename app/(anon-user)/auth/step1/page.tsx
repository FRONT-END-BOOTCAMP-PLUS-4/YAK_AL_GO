"use client"

import type React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

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
  const { data: session, status } = useSession()
  const router = useRouter()

  const [userType, setUserType] = useState<"general" | "pharmacist">("general")
  const [error, setError] = useState("")

  console.log("Session data:", session)

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    id : "",
    email: "",
    photo: "",
    name : "",
    birthyear: "",
    member_type: 0, // general : 0, pharmacist : 1
    pregnent : 0, // 0없음 1임산부
    allergy :  0, // 0없음 2알레르기
    hypertension : 0, // 0없음 3고혈압
    diabetes : 0, // 0없음 4당뇨
    heartDisease : 0, // 0없음 5심장질환
    liverDisease : 0, // 0없음 6간질환
    kidneyDisease : 0, // 0없음 7신장질환
    hpid: "",
  })



  // <폼 입력 핸들러>
  // 입력 필드 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

 



  // 다음 단계로 이동
  const handleNextStep = async () => {
    console.log(formData);
    // 폼 데이터 유효성 검사
    if (userType === "general") {
      setFormData((prev) => ({
            ...prev,
            member_type : 0
          }));
      if (!formData.birthyear) {
        setError("나이, 항목을 입력해주세요.")
        return
      }
    } else {
        setFormData((prev) => ({
        ...prev,
        member_type : 1
      }));
      if (!formData.hpid) {
        setError("약국 ID 항목을 입력해주세요.")
        return
      }

    }
    
    // 여기서 JWT와 세션 업데이트를 위한 api 호출
    const response = await fetch("/api/auth/update-session", {
      method : "POST",
      headers: { "Content-Type" : "application/json" },
      body : JSON.stringify(formData),
    });

    if (response.ok) {
      // 일반 회원인 경우에만 2단계로 이동, 약사는 바로 완료
      if (userType === "general") {
        router.push("/auth/step2")
    } else {
        router.push("/auth/complete")
      }
    } else{
      setError("세션 업데이트에 실패했습니다. 다시 시도해주세요.")
      return
    }
    // 일반 회원인 경우에만 2단계로 이동, 약사는 바로 완료
  }
  
if (status === "loading") {
    return <div>Loading...</div>  
  }
  return (
    <div className="container flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            {userType === "general" ? (
              // General user has 2 steps
              <div className="flex items-center space-x-2">
                <div className="h-2 w-8 rounded-full bg-primary"/>
                <div className="h-2 w-8 rounded-full bg-gray-300" />
              </div>
            ) : (
              // Pharmacist has only 1 step
              <div className="flex items-center space-x-2">
                <div className="h-2 w-8 rounded-full bg-primary"/>
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
              {/* userType정의 */}
              {userType === "general" ? "회원가입 (1/2)" : "회원가입 (1/1)"}
            </CardTitle>
          </div>

        </CardHeader>
        <CardContent>
          <Tabs 
          defaultValue={userType} 
          onValueChange={(value) => {
            setUserType(value as "general" | "pharmacist")
            setFormData((prev) => ({
              ...prev,
              member_type: value === "general" ? 0 : 1, // 0: 일반 회원, 1: 약사
            }))
          }}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">일반 회원</TabsTrigger>
              <TabsTrigger value="pharmacist">약사</TabsTrigger>
            </TabsList>
          
            <TabsContent value="general" className="space-y-4 mt-4">
              {/* 일반 회원 폼 */}
              <div className="space-y-2">
                <Label htmlFor="age">나이</Label>
                <Input
                  id="birthyear"
                  name="birthyear"
                  type="number" // form 형태는 str? 
                  placeholder="나이를 입력하세요"
                  value={formData.birthyear} // 값 초기화
                  onChange={handleInputChange}
                  required // 필수 입력
                />
              </div>
              <div className="space-y-2">
                <Label>건강 상태</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pregnant"
                      checked={formData.pregnent === 1}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({
                          ...prev,
                          pregnent: checked ? 1 : 0 // 1이면 임산부, 0이면 아니오
                        }));
                      }}
                    />
                    <Label htmlFor="pregnant">임산부</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="allergy"
                      checked={formData.allergy === 2}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({
                          ...prev,
                          allergy: checked ? 2 : 0 // 2이면 알레르기 있음, 0이면 없음
                        }));
                      }}
                    />
                    <Label htmlFor="allergy">알레르기</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="disease">질병 정보</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hypertension"
                      // formData.hypertension 값에 따라 체크 상태 설정
                      checked={formData.hypertension === 3} // 1이면 체크됨
                      onCheckedChange={(checked) => {
                        // 체크 상태에 따라 formData.hypertension 업데이트
                        setFormData((prev) => ({
                          ...prev,
                          hypertension: checked ? 3 : 0, // 체크되면 1, 아니면 0
                        }));
                      }}
                    />
                    <Label htmlFor="hypertension">고혈압</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="diabetes"
                      // formData.diabetes 값에 따라 체크 상태 설정
                      checked={formData.diabetes === 4} // 1이면 체크됨
                      onCheckedChange={(checked) => {
                        // 체크 상태에 따라 formData.diabetes 업데이트
                        setFormData((prev) => ({
                          ...prev,
                          diabetes: checked ? 4 : 0, // 체크되면 1, 아니면 0
                        }));
                      }}
                    />
                    <Label htmlFor="diabetes">당뇨</Label>
                  </div>
                  {/* 심장질환 체크박스 */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="heartDisease"
                      // formData.heartDisease 값에 따라 체크 상태 설정
                      checked={formData.heartDisease === 5} // 1이면 체크됨
                      onCheckedChange={(checked) => {
                        // 체크 상태에 따라 formData.heartDisease 업데이트
                        setFormData((prev) => ({
                          ...prev,
                          heartDisease: checked ? 5 : 0, // 체크되면 1, 아니면 0
                        }));
                      }}
                    />
                    <Label htmlFor="heartDisease">심장질환</Label>
                  </div>

                  {/* 간질환 체크박스 */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="liverDisease"
                      // formData.liverDisease 값에 따라 체크 상태 설정
                      checked={formData.liverDisease === 6} // 1이면 체크됨
                      onCheckedChange={(checked) => {
                        // 체크 상태에 따라 formData.liverDisease 업데이트
                        setFormData((prev) => ({
                          ...prev,
                          liverDisease: checked ? 6 : 0, // 체크되면 1, 아니면 0
                        }));
                      }}
                    />
                    <Label htmlFor="liverDisease">간질환</Label>
                  </div>

                  {/* 신장질환 체크박스 */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="kidneyDisease"
                      // formData.kidneyDisease 값에 따라 체크 상태 설정
                      checked={formData.kidneyDisease === 7} // 1이면 체크됨
                      onCheckedChange={(checked) => {
                        // 체크 상태에 따라 formData.kidneyDisease 업데이트
                        setFormData((prev) => ({
                          ...prev,
                          kidneyDisease: checked ? 7 : 0, // 체크되면 1, 아니면 0
                        }));
                      }}
                    />
                    <Label htmlFor="kidneyDisease">신장질환</Label>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pharmacist" className="space-y-4 mt-4">
              {/* 약사 회원 폼 */}
              <div className="space-y-2">
                <Label htmlFor="hpid">약국 ID (HPID)</Label>
                <Input
                  id="hpid"
                  name="hpid"
                  placeholder="약국 ID를 입력하세요"
                  value={formData.hpid}
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
