"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, MessageSquare, Pill } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">약을 알고 먹자</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  약품 정보 검색부터 가까운 약국 찾기까지, 약에 대한 모든 정보를 한 곳에서 확인하세요.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/medicines">약 검색하기</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/map">가까운 약국 찾기</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/30 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-secondary/30 blur-3xl"></div>
                <Card className="relative overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">약 검색</h3>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                          <Input type="text" placeholder="약 이름을 검색하세요" />
                          <Button type="submit" size="icon">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Search</span>
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">약국 찾기</h3>
                        <Button className="w-full justify-start" variant="outline" asChild>
                          <Link href="/map">
                            <MapPin className="mr-2 h-4 w-4" />
                            내 주변 약국 찾기
                          </Link>
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">질문 & 답변</h3>
                        <Button className="w-full justify-start" variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          전문가에게 질문하기
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-sub-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">주요 기능</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                약알고에서 제공하는 다양한 기능을 확인하세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Pill className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">약 정보 검색</h3>
                  <p className="text-sm text-muted-foreground">
                    약 이름, 성분으로 검색하여 상세 정보를 확인하세요. 효능, 부작용, 주의사항 등 모든 정보를 제공합니다.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">약국 찾기</h3>
                  <p className="text-sm text-muted-foreground">
                    내 위치 기반으로 가까운 약국을 찾고, 영업 시간과 재고 정보를 확인하세요.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">전문가 Q&A</h3>
                  <p className="text-sm text-muted-foreground">
                    약사, 의사 등 전문가에게 약에 관한 질문을 하고 답변을 받으세요.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">이용 방법</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                약알고 서비스를 이용하는 간단한 방법을 알아보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">약 검색</h3>
              <p className="text-sm text-muted-foreground">약 이름이나 성분으로 검색하여 원하는 약을 찾으세요.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">약국 찾기</h3>
              <p className="text-sm text-muted-foreground">지도에서 가까운 약국을 찾고 재고 정보를 확인하세요.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">질문하기</h3>
              <p className="text-sm text-muted-foreground">궁금한 점이 있다면 전문가에게 질문하고 답변을 받으세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">지금 바로 시작하세요</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                약알고와 함께 약에 대한 정확한 정보를 얻고 건강한 생활을 시작하세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/register">회원가입</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/medicines">약 검색하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
