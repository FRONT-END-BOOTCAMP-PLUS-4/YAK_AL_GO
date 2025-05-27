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
import ProgressIndicator from "@/components/auth/ProgressIndicator"
import GeneralForm from "@/components/auth/GeneralForm"
import PharmacistForm from "@/components/auth/PharmacistForm"
import ErrorMessage from "@/components/auth/ErrorMessage"
import SignupMedicationStep from "@/components/auth/SignupMedicationStep"


export default function SignupStep1Page() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [userType, setUserType] = useState<"general" | "pharmacist">("general")
  const [error, setError] = useState("")

  console.log("Session data:", session)

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    // kakao_account
    email: "",
    photo: "",
    name : "",
    // 약사
    hpid: "",
    // 일반 회원
    birthyear: "", 
    member_type: 0, // general : 0, pharmacist : 1
    pregnent : 0, // 0없음 1임산부
    allergy :  0, // 0없음 2알레르기
    hypertension : 0, // 0없음 3고혈압
    diabetes : 0, // 0없음 4당뇨
    heartDisease : 0, // 0없음 5심장질환
    liverDisease : 0, // 0없음 6간질환
    kidneyDisease : 0, // 0없음 7신장질환
  })



  // <폼 입력 핸들러>
  // 입력 필드 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [step, setStep] = useState(1)
  // 일반 회원일 경우에 다음 컴포넌트 로드드
 const handleNextButton = ()=>{
  if (!formData.birthyear) {
        setError("나이, 항목을 입력해주세요.")
        return
  }
  
  setStep(2);
 }

  const handleSubmit = async () => {
    console.log(formData);
    // 폼 데이터 유효성 검사
    if( formData.member_type === 1 && !formData.hpid) {
      setError("약사 회원가입을 위해 약사 면허번호를 입력해주세요.");
      return
    }

    // db에 회원가입 요청
    const response = await fetch('api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("회원가입 성공:", data);

      // data에 필요한 정보가지고 next-auth이용 토큰 추가 인코딩
      
      router.push('/auth/complete'); // 회원가입 완료 페이지로 이동
    } else {
      const errorData = await response.json();
      console.error("회원가입 실패:", errorData);
      setError(errorData.message || "회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  }



  
if (status === "loading") {
    return <div>Loading...</div>  
  }
  return (
    <div className="container flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <ProgressIndicator userType={userType} step={step}/>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/auth">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <CardTitle className="text-2xl font-bold">
              {userType === "general" ? (step === 1 ? "회원가입 (1/2)"  : "회원가입 (2/2)"): "회원가입 (1/1)"}
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
                member_type: value === "general" ? 0 : 1,
              }))
            }}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">일반 회원</TabsTrigger>
              <TabsTrigger value="pharmacist">약사</TabsTrigger>
            </TabsList>
            {/* 일반회원 경우 */}
            <TabsContent value="general">
              {step === 1 ? <GeneralForm formData={formData} setFormData={setFormData} />
              : <SignupMedicationStep formData={formData} setFormData={setFormData} />}
            </TabsContent>
            {/* 약사인 경우 */}
            <TabsContent value="pharmacist">
              <PharmacistForm formData={formData} handleInputChange={handleInputChange} />
            </TabsContent>
          </Tabs>
          <ErrorMessage error={error} />
        </CardContent>
        <CardFooter>
          <Button onClick={(userType === 'general' && step === 1) ? handleNextButton : handleSubmit} className="w-full">
            {(userType === 'general' && step === 1) ? "다음" : "완료"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
