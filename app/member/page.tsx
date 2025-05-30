'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pill, MessageSquare, User, Settings, Package, Heart, Store } from 'lucide-react';

// Mock data for user profile
const userProfile = {
  name: '홍길동',
  email: 'user@example.com',
  role: '일반 회원', // "일반 회원" or "약사"
  joinDate: '2023-01-15',
  medicines: [
    {
      id: 1,
      name: '타이레놀',
      dosage: '1일 3회, 1회 1정',
      startDate: '2023-05-01',
      endDate: '2023-05-10',
      active: false,
      times: ['09:00', '13:00', '19:00'],
    },
    {
      id: 2,
      name: '판피린',
      dosage: '1일 2회, 1회 1정',
      startDate: '2023-05-05',
      endDate: '2023-05-15',
      active: true,
      times: ['08:00', '20:00'],
    },
    {
      id: 3,
      name: '베아제',
      dosage: '식후 30분, 1회 1정',
      startDate: '2023-05-08',
      endDate: '계속',
      active: true,
      times: ['08:30', '13:30', '19:30'],
    },
  ],
  health: [
    {
      id: 1,
      name: '고혈압',
      since: '2022-01',
      medication: '혈압약',
    },
    {
      id: 2,
      name: '알레르기',
      since: '2020-03',
      medication: '항히스타민제',
    },
  ],
  questions: [
    {
      id: 1,
      title: '타이레놀과 아스피린을 함께 복용해도 될까요?',
      date: '2023-05-10',
      answers: 2,
      type: 'expert',
    },
    {
      id: 2,
      title: '혈압약 부작용 경험 공유해주세요.',
      date: '2023-05-03',
      answers: 5,
      type: 'community',
    },
  ],
  favorites: [
    {
      id: 3,
      title: '항생제 복용 후 유산균 섭취 시간',
      date: '2023-05-05',
      answers: 1,
      type: 'expert',
    },
  ],
  isPharmacist: true, // 약사 여부 (재고 관리 버튼 표시 여부)
  pharmacyInfo: {
    name: '건강약국',
    address: '서울시 강남구 역삼동 123-45',
    licenseNumber: '12345678',
  },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [medicationTimes, setMedicationTimes] = useState<Record<number, string[]>>({
    1: ['09:00', '13:00', '19:00'],
    2: ['08:00', '20:00'],
    3: ['08:30', '13:30', '19:30'],
  });

  const handleTimeToggle = (medicineId: number, time: string) => {
    const currentTimes = medicationTimes[medicineId] || [];
    if (currentTimes.includes(time)) {
      setMedicationTimes({
        ...medicationTimes,
        [medicineId]: currentTimes.filter((t) => t !== time),
      });
    } else {
      setMedicationTimes({
        ...medicationTimes,
        [medicineId]: [...currentTimes, time],
      });
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">마이알고</h1>
          <p className="text-muted-foreground">내 정보와 복용 중인 약, 건강 상태 등을 관리하세요.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={userProfile.name} />
                  <AvatarFallback>{userProfile.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{userProfile.name}</h2>
                  <p className="text-sm text-muted-foreground">{userProfile.email}</p>
                  <Badge className="mt-2">{userProfile.role}</Badge>
                </div>
                <div className="w-full border-t pt-4 mt-2">
                  <nav className="grid gap-1">
                    <Button
                      variant={activeTab === 'profile' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('profile')}>
                      <User className="mr-2 h-4 w-4" />내 정보
                    </Button>
                    <Button
                      variant={activeTab === 'medicines' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('medicines')}>
                      <Pill className="mr-2 h-4 w-4" />
                      복용 중인 약
                    </Button>
                    <Button
                      variant={activeTab === 'health' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('health')}>
                      <Package className="mr-2 h-4 w-4" />
                      건강 상태
                    </Button>
                    <Button
                      variant={activeTab === 'posts' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('posts')}>
                      <MessageSquare className="mr-2 h-4 w-4" />내 게시글
                    </Button>
                    <Button
                      variant={activeTab === 'favorites' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('favorites')}>
                      <Heart className="mr-2 h-4 w-4" />
                      관심 게시글
                    </Button>
                    <Button
                      variant={activeTab === 'settings' ? 'default' : 'ghost'}
                      className="justify-start"
                      onClick={() => setActiveTab('settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      설정
                    </Button>

                    {/* 약사인 경우에만 재고 관리 버튼 표시 */}
                    {userProfile.isPharmacist && (
                      <>
                        <div className="h-px bg-border my-2"></div>
                        <Button variant="default" className="justify-start mt-2" asChild>
                          <Link href="/pharmacy/inventory">
                            <Store className="mr-2 h-4 w-4" />
                            약국 재고 관리
                          </Link>
                        </Button>
                      </>
                    )}
                  </nav>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>내 정보</CardTitle>
                  <CardDescription>개인 정보를 확인하고 수정할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" defaultValue={userProfile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nickname">닉네임</Label>
                    <Input id="nickname" defaultValue="약알고유저" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" placeholder="새 비밀번호" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-confirm">비밀번호 확인</Label>
                    <Input id="password-confirm" type="password" placeholder="비밀번호 확인" />
                  </div>

                  {/* 약사인 경우 약국 정보 표시 */}
                  {userProfile.isPharmacist && (
                    <>
                      <div className="h-px bg-border my-4"></div>
                      <h3 className="text-lg font-medium mb-2">약국 정보</h3>
                      <div className="space-y-2">
                        <Label htmlFor="pharmacy-name">약국명</Label>
                        <Input id="pharmacy-name" defaultValue={userProfile.pharmacyInfo.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pharmacy-address">약국 주소</Label>
                        <Input id="pharmacy-address" defaultValue={userProfile.pharmacyInfo.address} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="license-number">약사 면허 번호</Label>
                        <Input id="license-number" defaultValue={userProfile.pharmacyInfo.licenseNumber} />
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">저장</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === 'medicines' && (
              <Card>
                <CardHeader>
                  <CardTitle>복용 중인 약</CardTitle>
                  <CardDescription>현재 복용 중인 약과 복용 기록을 관리할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="current">
                    <TabsList>
                      <TabsTrigger value="current">현재 복용 중</TabsTrigger>
                      <TabsTrigger value="history">복용 기록</TabsTrigger>
                    </TabsList>
                    <TabsContent value="current" className="mt-4">
                      <div className="space-y-4">
                        {userProfile.medicines
                          .filter((med) => med.active)
                          .map((medicine) => (
                            <Card key={medicine.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-bold">{medicine.name}</h3>
                                    <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
                                    <p className="text-sm mt-1">
                                      {medicine.startDate} ~ {medicine.endDate}
                                    </p>
                                    <div className="mt-2">
                                      <p className="text-sm font-medium mb-1">복용 시간</p>
                                      <div className="flex flex-wrap gap-1">
                                        {Array.from({ length: 24 }).map((_, i) => {
                                          const time = `${i.toString().padStart(2, '0')}:00`;
                                          return (
                                            <Button
                                              key={i}
                                              variant={
                                                medicationTimes[medicine.id]?.includes(time) ? 'default' : 'outline'
                                              }
                                              size="sm"
                                              className="h-8 px-2 text-xs"
                                              onClick={() => handleTimeToggle(medicine.id, time)}>
                                              {time}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    복용 완료
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        <Button className="w-full">약 추가하기</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="history" className="mt-4">
                      <div className="space-y-4">
                        {userProfile.medicines
                          .filter((med) => !med.active)
                          .map((medicine) => (
                            <Card key={medicine.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-bold">{medicine.name}</h3>
                                    <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
                                    <p className="text-sm mt-1">
                                      {medicine.startDate} ~ {medicine.endDate}
                                    </p>
                                  </div>
                                  <Badge variant="outline">복용 완료</Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {activeTab === 'health' && (
              <Card>
                <CardHeader>
                  <CardTitle>건강 상태</CardTitle>
                  <CardDescription>건강 상태와 질병 정보를 관리할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userProfile.health.map((condition) => (
                      <Card key={condition.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold">{condition.name}</h3>
                              <p className="text-sm text-muted-foreground">{condition.since}부터</p>
                              <p className="text-sm mt-1">복용 약: {condition.medication}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              수정
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button className="w-full">건강 정보 추가</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'posts' && (
              <Card>
                <CardHeader>
                  <CardTitle>내 게시글</CardTitle>
                  <CardDescription>내가 작성한 질문과 게시글을 확인할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="expert">
                    <TabsList>
                      <TabsTrigger value="expert">전문가 Q&A</TabsTrigger>
                      <TabsTrigger value="community">커뮤니티</TabsTrigger>
                    </TabsList>
                    <TabsContent value="expert" className="mt-4">
                      <div className="space-y-4">
                        {userProfile.questions
                          .filter((q) => q.type === 'expert')
                          .map((question) => (
                            <Link href={`/qna/${question.id}`} key={question.id}>
                              <Card className="transition-all hover:shadow-md">
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="font-bold">{question.title}</h3>
                                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                        <div>{question.date}</div>
                                        <div>답변 {question.answers}개</div>
                                      </div>
                                    </div>
                                    <Badge variant="default" className="bg-primary">
                                      전문가 Q&A
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="community" className="mt-4">
                      <div className="space-y-4">
                        {userProfile.questions
                          .filter((q) => q.type === 'community')
                          .map((question) => (
                            <Link href={`/qna/${question.id}`} key={question.id}>
                              <Card className="transition-all hover:shadow-md">
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="font-bold">{question.title}</h3>
                                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                        <div>{question.date}</div>
                                        <div>댓글 {question.answers}개</div>
                                      </div>
                                    </div>
                                    <Badge variant="outline">커뮤니티</Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {activeTab === 'favorites' && (
              <Card>
                <CardHeader>
                  <CardTitle>관심 게시글</CardTitle>
                  <CardDescription>내가 관심 표시한 게시글을 확인할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userProfile.favorites.map((question) => (
                      <Link href={`/qna/${question.id}`} key={question.id}>
                        <Card className="transition-all hover:shadow-md">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-bold">{question.title}</h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                  <div>{question.date}</div>
                                  <div>답변 {question.answers}개</div>
                                </div>
                              </div>
                              <Badge
                                variant={question.type === 'expert' ? 'default' : 'outline'}
                                className={question.type === 'expert' ? 'bg-primary' : ''}>
                                {question.type === 'expert' ? '전문가 Q&A' : '커뮤니티'}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <CardTitle>설정</CardTitle>
                  <CardDescription>계정 설정 및 알림 설정을 관리할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notifications">알림 설정</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="email-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="email-notifications">이메일 알림</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="push-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="push-notifications">푸시 알림</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="medication-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="medication-notifications">약 복용 알림</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">언어 설정</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="ko">한국어</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="pt-4 border-t">
                    <Button variant="destructive">계정 삭제</Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">저장</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
