"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, MessageSquare, Pill, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLoadingContext } from "@/providers/LoadingProvider"

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { navigate } = useLoadingContext()

  const features = [
    {
      title: "약 정보 검색",
      description: "약 이름, 성분으로 검색하여 상세 정보를 확인하세요",
      detail: "효능, 부작용, 주의사항 등 모든 정보를 제공합니다",
      icon: Pill,
      color: "bg-blue-500",
      link: "/medicines",
    },
    {
      title: "가까운 약국 찾기",
      description: "내 위치 기반으로 가까운 약국을 찾아보세요",
      detail: "영업 시간과 재고 정보를 실시간으로 확인할 수 있습니다",
      icon: MapPin,
      color: "bg-green-500",
      link: "/map",
    },
    {
      title: "전문가 Q&A",
      description: "약사, 의사에게 직접 질문하고 답변을 받으세요",
      detail: "24시간 언제든지 전문가의 도움을 받을 수 있습니다",
      icon: MessageSquare,
      color: "bg-teal-500",
      link: "/community",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // 검색어를 URL 파라미터로 전달하여 medicines 페이지로 이동
      navigate(`/medicines?search=${encodeURIComponent(searchQuery.trim())}`, "약 정보를 검색하고 있어요...")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden">
        <div className="container px-4 md:px-6 py-6 md:py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  아픈 모든 순간
                  <br />
                  <span style={{ color: '#4FC4B8' }}>약알고</span>가 도와줍니다
                </h1>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  약에 대한 모든 궁금증을 해결하고,
                  <br />
                  가장 빠르고 편리하게 건강을 관리하세요.
                </p>
              </div>

              {/* Quick Search */}
              <div className="flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900">약 정보 빠른 검색</h3>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="약 이름을 입력하세요"
                    className="flex-1 border-gray-200 focus:border-teal-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Button 
                    className="px-6 text-white"
                    style={{ backgroundColor: '#81DED4' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6BC7BB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81DED4'}
                    onClick={handleSearch}
                    disabled={!searchQuery.trim()}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button 
                  size="lg" 
                  className="text-white"
                  style={{ backgroundColor: '#4FC4B8' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3DAA9F'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4FC4B8'}
                  onClick={() => navigate('/map', '내 주변 약국을 찾고 있어요...')}
                >
                  약국 찾기
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-opacity-10"
                  style={{ borderColor: '#4FC4B8', color: '#4FC4B8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4FC4B8'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#4FC4B8'
                  }}
                  onClick={() => navigate('/community', '전문가 Q&A로 이동하고 있어요...')}
                >
                  전문가 Q&A
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/main.png"
                  alt="약 정보를 확인하는 사람"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Features Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">약알고만의 특별한 기능들</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              언제 어디서나 편리하게 이용할 수 있는 다양한 서비스를 제공합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                      currentFeature === index
                        ? "bg-white shadow-lg border-2 scale-105"
                        : "bg-white/50 hover:bg-white hover:shadow-md"
                    }`}
                    style={{
                      borderColor: currentFeature === index ? '#4FC4B8' : 'transparent',
                    }}
                    onClick={() => setCurrentFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${feature.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-2">{feature.description}</p>
                        {currentFeature === index && (
                          <p className="text-sm text-gray-500 animate-fade-in">{feature.detail}</p>
                        )}
                      </div>
                      {currentFeature === index && <ArrowRight className="h-5 w-5 animate-pulse" style={{ color: '#4FC4B8' }} />}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative">
              <Card className="bg-white shadow-xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full ${features[currentFeature].color} flex items-center justify-center text-white`}
                    >
                      {(() => {
                        const Icon = features[currentFeature].icon
                        return <Icon className="h-10 w-10" />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{features[currentFeature].title}</h3>
                      <p className="text-gray-600 text-lg">{features[currentFeature].detail}</p>
                    </div>
                    <Button 
                      className="w-full text-white mt-6"
                      style={{ backgroundColor: '#4FC4B8' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3DAA9F'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4FC4B8'}
                      onClick={() => navigate(features[currentFeature].link, `${features[currentFeature].title} 페이지로 이동하고 있어요...`)}
                    >
                      자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#4FC4B8' }}>2만+</div>
              <div className="text-gray-600">등록된 약품 정보</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#4FC4B8' }}>5천+</div>
              <div className="text-gray-600">전국 약국 정보</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#4FC4B8' }}>24시간</div>
              <div className="text-gray-600">전문가 상담</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#4FC4B8' }}>5</div>
              <div className="text-gray-600">누적 사용자</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <div className="pb-1">약국 문 닫았다는 이유로</div>
              <div className="pb-2">바빠서 어쩔 수 없다는 이유로</div>
              <div style={{ color: '#4FC4B8' }}>더 이상 아픔을 참거나 미루지 마세요.</div>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              아플 때, 약알고를 열면
              <br />
              <span style={{ color: '#4FC4B8' }} className="font-semibold">약국이 우리를 찾아올 거예요.</span>
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button 
                size="lg" 
                className="text-white"
                style={{ backgroundColor: '#4FC4B8' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3DAA9F'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4FC4B8'}
                onClick={() => navigate('/auth', '회원가입 페이지로 이동하고 있어요...')}
              >
                지금 시작하기
              </Button>
              <Button 
                variant="outline" 
                className="text-gray-600 border-gray-300 hover:bg-gray-50"
                style={{ color: '#101827' }}
                onClick={() => navigate('/medicines', '서비스를 둘러보고 있어요...')}
              >
                서비스 둘러보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 md:py-24 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">약알고, 이렇게 활용해보세요</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">약 정보 검색</h3>
                <p className="text-gray-600 mb-6">
                  복용 중인 약이나 처방받은 약의 이름을 검색하여 상세 정보를 확인하세요.
                </p>
                <div className="flex items-center justify-center gap-2 text-teal-600 font-medium">
                  <Search className="h-4 w-4" />
                  바로 검색
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">약국 찾기</h3>
                <p className="text-gray-600 mb-6">내 위치 기반으로 가까운 약국을 찾고 영업시간과 재고를 확인하세요.</p>
                <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                  <MapPin className="h-4 w-4" />
                  약국 찾기
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">전문가 상담</h3>
                <p className="text-gray-600 mb-6">궁금한 점이 있다면 약사나 의사에게 직접 질문하고 답변을 받으세요.</p>
                <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                  <MessageSquare className="h-4 w-4" />
                  질문하기
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
