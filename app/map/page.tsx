"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, X, Navigation, Clock, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Mock data for pharmacies
const pharmacies = [
  {
    id: 1,
    name: "건강약국",
    address: "서울시 강남구 역삼동 123-45",
    phone: "02-123-4567",
    hours: "09:00 - 21:00",
    status: "영업중",
    distance: "0.5km",
    lat: 37.501,
    lng: 127.036,
    medicines: ["타이레놀", "판콜에이", "게보린"],
  },
  {
    id: 2,
    name: "행복약국",
    address: "서울시 강남구 역삼동 234-56",
    phone: "02-234-5678",
    hours: "08:30 - 20:00",
    status: "영업중",
    distance: "1.2km",
    lat: 37.503,
    lng: 127.038,
    medicines: ["타이레놀", "베아제"],
  },
  {
    id: 3,
    name: "미소약국",
    address: "서울시 강남구 역삼동 345-67",
    phone: "02-345-6789",
    hours: "09:00 - 19:00",
    status: "영업종료",
    distance: "2.3km",
    lat: 37.505,
    lng: 127.04,
    medicines: ["판콜에이", "훼스탈골드"],
  },
  {
    id: 4,
    name: "온누리약국",
    address: "서울시 강남구 역삼동 456-78",
    phone: "02-456-7890",
    hours: "09:00 - 20:00",
    status: "영업중",
    distance: "1.8km",
    lat: 37.502,
    lng: 127.042,
    medicines: ["타이레놀", "판피린", "게보린"],
  },
  {
    id: 5,
    name: "새봄약국",
    address: "서울시 강남구 역삼동 567-89",
    phone: "02-567-8901",
    hours: "08:00 - 19:00",
    status: "영업종료",
    distance: "3.0km",
    lat: 37.506,
    lng: 127.035,
    medicines: ["베아제", "훼스탈골드"],
  },
]

// Mock data for medicines
const medicines = ["타이레놀", "판콜에이", "게보린", "베아제", "훼스탈골드", "판피린"]

export default function MapPage() {
  const searchParams = useSearchParams()
  const medicineName = searchParams.get("medicine")

  const [selectedPharmacy, setSelectedPharmacy] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPharmacies, setFilteredPharmacies] = useState(pharmacies)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedMedicine, setSelectedMedicine] = useState(medicineName || "")
  const [selectedTime, setSelectedTime] = useState("")
  const [showFilterPopover, setShowFilterPopover] = useState(false)

  useEffect(() => {
    // In a real app, you would load the Kakao Maps API here
    // For this example, we'll just simulate loading the map
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    filterPharmacies()
  }, [searchQuery, selectedMedicine, selectedTime])

  const filterPharmacies = () => {
    let filtered = pharmacies

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.name.includes(searchQuery) || pharmacy.address.includes(searchQuery),
      )
    }

    // Filter by medicine
    if (selectedMedicine) {
      filtered = filtered.filter((pharmacy) => pharmacy.medicines.includes(selectedMedicine))
    }

    // Filter by time (simplified for demo)
    if (selectedTime) {
      const hour = Number.parseInt(selectedTime.split(":")[0])
      filtered = filtered.filter((pharmacy) => {
        const openHour = Number.parseInt(pharmacy.hours.split(" - ")[0].split(":")[0])
        const closeHour = Number.parseInt(pharmacy.hours.split(" - ")[1].split(":")[0])
        return hour >= openHour && hour < closeHour
      })
    }

    setFilteredPharmacies(filtered)
  }

  const resetFilters = () => {
    setSelectedMedicine("")
    setSelectedTime("")
    setShowFilterPopover(false)
  }

  const getCurrentLocation = () => {
    // In a real app, you would use the browser's geolocation API
    alert("현재 위치를 가져오는 중입니다...")
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">약국 찾기</h1>
          <p className="text-muted-foreground">내 주변 약국을 찾고 약품 재고를 확인해보세요.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="약국 이름, 주소 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button className="flex gap-2" onClick={getCurrentLocation}>
            <Navigation className="h-4 w-4" />내 위치
          </Button>
          <Popover open={showFilterPopover} onOpenChange={setShowFilterPopover}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                필터
                {(selectedMedicine || selectedTime) && (
                  <Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                    {(selectedMedicine ? 1 : 0) + (selectedTime ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">필터</h3>
                <div className="space-y-2">
                  <Label htmlFor="medicine">약품</Label>
                  <Select value={selectedMedicine} onValueChange={setSelectedMedicine}>
                    <SelectTrigger id="medicine">
                      <SelectValue placeholder="약품 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      {medicines.map((medicine) => (
                        <SelectItem key={medicine} value={medicine}>
                          {medicine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">시간</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="시간 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                          {`${i.toString().padStart(2, "0")}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={resetFilters}>
                    초기화
                  </Button>
                  <Button size="sm" onClick={() => setShowFilterPopover(false)}>
                    적용
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {selectedMedicine && (
          <div className="flex items-center">
            <Badge className="bg-primary">
              약품: {selectedMedicine}
              <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0" onClick={() => setSelectedMedicine("")}>
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-[350px_1fr]">
          <div className="order-2 md:order-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">약국 목록</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">전체</TabsTrigger>
                    <TabsTrigger value="open">영업중</TabsTrigger>
                    <TabsTrigger value="closed">영업종료</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredPharmacies.length > 0 ? (
                        filteredPharmacies.map((pharmacy) => (
                          <Card
                            key={pharmacy.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPharmacy?.id === pharmacy.id ? "border-primary" : ""
                            } ${
                              selectedMedicine && pharmacy.medicines.includes(selectedMedicine)
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => setSelectedPharmacy(pharmacy)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold">{pharmacy.name}</h3>
                                  <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{pharmacy.hours}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge
                                    variant={pharmacy.status === "영업중" ? "default" : "outline"}
                                    className={pharmacy.status === "영업중" ? "bg-green-500" : ""}
                                  >
                                    {pharmacy.status}
                                  </Badge>
                                  <span className="text-xs">{pharmacy.distance}</span>
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {pharmacy.medicines.map((medicine) => (
                                  <Badge
                                    key={medicine}
                                    variant="outline"
                                    className={`text-xs ${
                                      medicine === selectedMedicine ? "bg-primary text-primary-foreground" : ""
                                    }`}
                                  >
                                    {medicine}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <p className="text-muted-foreground">검색 결과가 없습니다.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="open" className="mt-4">
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredPharmacies
                        .filter((pharmacy) => pharmacy.status === "영업중")
                        .map((pharmacy) => (
                          <Card
                            key={pharmacy.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPharmacy?.id === pharmacy.id ? "border-primary" : ""
                            } ${
                              selectedMedicine && pharmacy.medicines.includes(selectedMedicine)
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => setSelectedPharmacy(pharmacy)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold">{pharmacy.name}</h3>
                                  <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{pharmacy.hours}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge variant="default" className="bg-green-500">
                                    {pharmacy.status}
                                  </Badge>
                                  <span className="text-xs">{pharmacy.distance}</span>
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {pharmacy.medicines.map((medicine) => (
                                  <Badge
                                    key={medicine}
                                    variant="outline"
                                    className={`text-xs ${
                                      medicine === selectedMedicine ? "bg-primary text-primary-foreground" : ""
                                    }`}
                                  >
                                    {medicine}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="closed" className="mt-4">
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredPharmacies
                        .filter((pharmacy) => pharmacy.status === "영업종료")
                        .map((pharmacy) => (
                          <Card
                            key={pharmacy.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPharmacy?.id === pharmacy.id ? "border-primary" : ""
                            } ${
                              selectedMedicine && pharmacy.medicines.includes(selectedMedicine)
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => setSelectedPharmacy(pharmacy)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold">{pharmacy.name}</h3>
                                  <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{pharmacy.hours}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge variant="outline">{pharmacy.status}</Badge>
                                  <span className="text-xs">{pharmacy.distance}</span>
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {pharmacy.medicines.map((medicine) => (
                                  <Badge
                                    key={medicine}
                                    variant="outline"
                                    className={`text-xs ${
                                      medicine === selectedMedicine ? "bg-primary text-primary-foreground" : ""
                                    }`}
                                  >
                                    {medicine}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2">
            <Card className="h-full">
              <CardContent className="p-0 relative">
                {/* Map placeholder - in a real app, this would be a Kakao Map */}
                <div className="h-[600px] bg-muted flex items-center justify-center relative">
                  {mapLoaded ? (
                    <div className="text-center">
                      <p className="text-muted-foreground">여기에 카카오맵이 표시됩니다.</p>
                      <p className="text-xs text-muted-foreground mt-2">(실제 구현 시 카카오맵 API를 연동하세요)</p>
                      {/* Pharmacy markers would be placed here */}
                      {filteredPharmacies.map((pharmacy) => (
                        <div
                          key={pharmacy.id}
                          className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                            pharmacy.status === "영업중" ? "bg-green-500" : "bg-gray-400"
                          } ${selectedPharmacy?.id === pharmacy.id ? "w-8 h-8 z-10" : ""} ${
                            selectedMedicine && pharmacy.medicines.includes(selectedMedicine)
                              ? "ring-2 ring-primary ring-offset-2"
                              : ""
                          }`}
                          style={{
                            left: `${(((pharmacy.lng - 127.035) * 1000) % 100) + 50}%`,
                            top: `${(((pharmacy.lat - 37.5) * 1000) % 100) + 50}%`,
                          }}
                          onClick={() => setSelectedPharmacy(pharmacy)}
                        >
                          <MapPin
                            className={`h-4 w-4 text-white ${selectedPharmacy?.id === pharmacy.id ? "h-5 w-5" : ""}`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-muted-foreground">지도를 불러오는 중...</p>
                    </div>
                  )}

                  {/* Pharmacy detail modal */}
                  {selectedPharmacy && (
                    <div className="absolute bottom-4 left-4 right-4 bg-background rounded-lg shadow-lg p-4 border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{selectedPharmacy.name}</h3>
                          <p className="text-sm text-muted-foreground">{selectedPharmacy.address}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setSelectedPharmacy(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                          <p className="text-sm font-medium">영업 시간</p>
                          <p className="text-sm">{selectedPharmacy.hours}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">연락처</p>
                          <p className="text-sm">{selectedPharmacy.phone}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium">보유 약품</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedPharmacy.medicines.map((medicine: string) => (
                            <Badge
                              key={medicine}
                              variant="outline"
                              className={medicine === selectedMedicine ? "bg-primary text-primary-foreground" : ""}
                            >
                              {medicine}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button className="flex-1">길찾기</Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1">
                              상세 정보
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{selectedPharmacy.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium">주소</h4>
                                <p className="text-sm text-muted-foreground">{selectedPharmacy.address}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">연락처</h4>
                                <p className="text-sm text-muted-foreground">{selectedPharmacy.phone}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">영업 시간</h4>
                                <p className="text-sm text-muted-foreground">{selectedPharmacy.hours}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">보유 약품</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {selectedPharmacy.medicines.map((medicine: string) => (
                                    <Badge
                                      key={medicine}
                                      variant={medicine === selectedMedicine ? "default" : "outline"}
                                      className={medicine === selectedMedicine ? "bg-primary" : ""}
                                    >
                                      {medicine}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
