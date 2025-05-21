"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, X, Navigation, Clock, Filter, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// KakaoMap 컴포넌트 동적 import (SSR 비활성화)
const KakaoMap = dynamic(() => import("@/components/map/KakaoMap"), { ssr: false })

// Pharmacy type based on Prisma schema
interface Medicine {
  item_seq: string
  item_name: string
}

interface Inventory {
  id: number
  quantity: number
  itemSeq: string
  hpid: string
  medicines: Medicine
}

interface Pharmacy {
  hpid: string
  duty_name: string
  duty_addr: string
  duty_tel1: string
  wgs84_lat: number
  wgs84_lon: number
  duty_time1s: string
  duty_time1c: string
  duty_time2s: string
  duty_time2c: string
  duty_time3s: string
  duty_time3c: string
  duty_time4s: string
  duty_time4c: string
  duty_time5s: string
  duty_time5c: string
  duty_time6s: string
  duty_time6c: string
  duty_time7s: string
  duty_time7c: string
  inventories: Inventory[]
}

export default function MapPage() {
  const searchParams = useSearchParams()
  const medicineName = searchParams.get("medicine")

  const [selectedPharmacyIndex, setSelectedPharmacyIndex] = useState<number | null>(null)
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([])
  const [filteredPharmacies, setFilteredPharmacies] = useState<Pharmacy[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMedicine, setSelectedMedicine] = useState(medicineName || "전체")
  const [selectedTime, setSelectedTime] = useState("")
  const [showFilterPopover, setShowFilterPopover] = useState(false)
  const [medicines, setMedicines] = useState<string[]>([])
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null)

  // 4자리 숫자 형태의 시간을 "시:분" 형태로 변환하는 함수
  const formatTimeString = (timeStr: string | null | undefined): string => {
    if (!timeStr) return ""

    // 이미 "시:분" 형태인 경우 그대로 반환
    if (timeStr.includes(":")) return timeStr

    // 4자리 숫자 형태인 경우 "시:분" 형태로 변환
    if (timeStr.length === 4) {
      const hour = timeStr.substring(0, 2)
      const minute = timeStr.substring(2, 4)
      return `${hour}:${minute}`
    }

    return timeStr
  }

  // Fetch pharmacies and medicines data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Fetch pharmacies
        const pharmaciesUrl = selectedMedicine
          ? `/api/map?medicine=${encodeURIComponent(selectedMedicine)}`
          : "/api/map"

        const pharmaciesRes = await fetch(pharmaciesUrl)
        const pharmaciesData = await pharmaciesRes.json()

        if (Array.isArray(pharmaciesData)) {
          setPharmacies(pharmaciesData)
          setFilteredPharmacies(pharmaciesData)
        }

        // Fetch medicines for filter
        const medicinesRes = await fetch("/api/medicines")
        const medicinesData = await medicinesRes.json()

        if (Array.isArray(medicinesData)) {
          const medicineNames = [...new Set(medicinesData.map((med: Medicine) => med.item_name))]
          setMedicines(medicineNames)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedMedicine])

  // Filter pharmacies based on search query and filters
  useEffect(() => {
    filterPharmacies()
  }, [searchQuery, selectedTime, pharmacies])

  const filterPharmacies = () => {
    let filtered = [...pharmacies]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.duty_name.includes(searchQuery) || pharmacy.duty_addr.includes(searchQuery),
      )
    }

    // Filter by time (simplified for demo)
    if (selectedTime) {
      const [hour, minute] = selectedTime.split(":").map(Number)
      const dayOfWeek = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.

      filtered = filtered.filter((pharmacy) => {
        // Get the correct time fields based on day of week
        let startTime, endTime

        switch (dayOfWeek) {
          case 0: // Sunday
            startTime = formatTimeString(pharmacy.duty_time7s)
            endTime = formatTimeString(pharmacy.duty_time7c)
            break
          case 1: // Monday
            startTime = formatTimeString(pharmacy.duty_time1s)
            endTime = formatTimeString(pharmacy.duty_time1c)
            break
          case 2: // Tuesday
            startTime = formatTimeString(pharmacy.duty_time2s)
            endTime = formatTimeString(pharmacy.duty_time2c)
            break
          case 3: // Wednesday
            startTime = formatTimeString(pharmacy.duty_time3s)
            endTime = formatTimeString(pharmacy.duty_time3c)
            break
          case 4: // Thursday
            startTime = formatTimeString(pharmacy.duty_time4s)
            endTime = formatTimeString(pharmacy.duty_time4c)
            break
          case 5: // Friday
            startTime = formatTimeString(pharmacy.duty_time5s)
            endTime = formatTimeString(pharmacy.duty_time5c)
            break
          case 6: // Saturday
            startTime = formatTimeString(pharmacy.duty_time6s)
            endTime = formatTimeString(pharmacy.duty_time6c)
            break
          default:
            startTime = formatTimeString(pharmacy.duty_time1s)
            endTime = formatTimeString(pharmacy.duty_time1c)
        }

        if (!startTime || !endTime) return false

        const [startHour, startMinute] = startTime.split(":").map(Number)
        const [endHour, endMinute] = endTime.split(":").map(Number)

        const currentTimeInMinutes = hour * 60 + minute
        const startTimeInMinutes = startHour * 60 + startMinute
        const endTimeInMinutes = endHour * 60 + endMinute

        // Handle cases where closing time is on the next day (e.g., 22:00 - 02:00)
        if (endTimeInMinutes < startTimeInMinutes) {
          return currentTimeInMinutes >= startTimeInMinutes || currentTimeInMinutes <= endTimeInMinutes
        }

        return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes
      })
    }

    setFilteredPharmacies(filtered)
  }

  const resetFilters = () => {
    setSelectedMedicine("전체")
    setSelectedTime("")
    setShowFilterPopover(false)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation({ lat: latitude, lng: longitude })

          // Sort pharmacies by distance from current location
          if (pharmacies.length > 0) {
            const sortedPharmacies = [...pharmacies].sort((a, b) => {
              const distA = calculateDistance(latitude, longitude, Number(a.wgs84_lat), Number(a.wgs84_lon))
              const distB = calculateDistance(latitude, longitude, Number(b.wgs84_lat), Number(b.wgs84_lon))
              return distA - distB
            })

            setFilteredPharmacies(sortedPharmacies)
          }
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("위치 정보를 가져오는데 실패했습니다.")
        },
      )
    } else {
      alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.")
    }
  }

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in km
    return d
  }

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180)
  }

  // Format distance for display
  const formatDistance = (lat: number, lon: number) => {
    if (!currentLocation) return ""

    const distance = calculateDistance(currentLocation.lat, currentLocation.lng, Number(lat), Number(lon))

    return distance < 1 ? `${(distance * 1000).toFixed(0)}m` : `${distance.toFixed(1)}km`
  }

  // Check if pharmacy is currently open
  const isPharmacyOpen = (pharmacy: Pharmacy) => {
    const now = new Date()
    const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours()
    const minute = now.getMinutes()

    // Get the correct time fields based on day of week
    let startTime, endTime

    switch (dayOfWeek) {
      case 0: // Sunday
        startTime = formatTimeString(pharmacy.duty_time7s)
        endTime = formatTimeString(pharmacy.duty_time7c)
        break
      case 1: // Monday
        startTime = formatTimeString(pharmacy.duty_time1s)
        endTime = formatTimeString(pharmacy.duty_time1c)
        break
      case 2: // Tuesday
        startTime = formatTimeString(pharmacy.duty_time2s)
        endTime = formatTimeString(pharmacy.duty_time2c)
        break
      case 3: // Wednesday
        startTime = formatTimeString(pharmacy.duty_time3s)
        endTime = formatTimeString(pharmacy.duty_time3c)
        break
      case 4: // Thursday
        startTime = formatTimeString(pharmacy.duty_time4s)
        endTime = formatTimeString(pharmacy.duty_time4c)
        break
      case 5: // Friday
        startTime = formatTimeString(pharmacy.duty_time5s)
        endTime = formatTimeString(pharmacy.duty_time5c)
        break
      case 6: // Saturday
        startTime = formatTimeString(pharmacy.duty_time6s)
        endTime = formatTimeString(pharmacy.duty_time6c)
        break
      default:
        return false
    }

    if (!startTime || !endTime) return false

    // Parse hours and minutes
    const [startHour, startMinute] = startTime.split(":").map(Number)
    const [endHour, endMinute] = endTime.split(":").map(Number)

    // Convert to minutes for easier comparison
    const currentTimeInMinutes = hour * 60 + minute
    const startTimeInMinutes = startHour * 60 + startMinute
    const endTimeInMinutes = endHour * 60 + endMinute

    // Handle cases where closing time is on the next day (e.g., 22:00 - 02:00)
    if (endTimeInMinutes < startTimeInMinutes) {
      return currentTimeInMinutes >= startTimeInMinutes || currentTimeInMinutes <= endTimeInMinutes
    }

    return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes
  }

  // Get formatted operating hours for today
  const getTodayHours = (pharmacy: Pharmacy) => {
    const dayOfWeek = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.

    switch (dayOfWeek) {
      case 0: // Sunday
        return pharmacy.duty_time7s && pharmacy.duty_time7c
          ? `${formatTimeString(pharmacy.duty_time7s)} - ${formatTimeString(pharmacy.duty_time7c)}`
          : "휴무일"
      case 1: // Monday
        return pharmacy.duty_time1s && pharmacy.duty_time1c
          ? `${formatTimeString(pharmacy.duty_time1s)} - ${formatTimeString(pharmacy.duty_time1c)}`
          : "휴무일"
      case 2: // Tuesday
        return pharmacy.duty_time2s && pharmacy.duty_time2c
          ? `${formatTimeString(pharmacy.duty_time2s)} - ${formatTimeString(pharmacy.duty_time2c)}`
          : "휴무일"
      case 3: // Wednesday
        return pharmacy.duty_time3s && pharmacy.duty_time3c
          ? `${formatTimeString(pharmacy.duty_time3s)} - ${formatTimeString(pharmacy.duty_time3c)}`
          : "휴무일"
      case 4: // Thursday
        return pharmacy.duty_time4s && pharmacy.duty_time4c
          ? `${formatTimeString(pharmacy.duty_time4s)} - ${formatTimeString(pharmacy.duty_time4c)}`
          : "휴무일"
      case 5: // Friday
        return pharmacy.duty_time5s && pharmacy.duty_time5c
          ? `${formatTimeString(pharmacy.duty_time5s)} - ${formatTimeString(pharmacy.duty_time5c)}`
          : "휴무일"
      case 6: // Saturday
        return pharmacy.duty_time6s && pharmacy.duty_time6c
          ? `${formatTimeString(pharmacy.duty_time6s)} - ${formatTimeString(pharmacy.duty_time6c)}`
          : "휴무일"
      default:
        return "정보 없음"
    }
  }

  // Get medicine names from pharmacy inventories
  const getPharmacyMedicines = (pharmacy: Pharmacy) => {
    return pharmacy.inventories.map((inv) => inv.medicines.item_name)
  }

  // Handle pharmacy selection
  const handleSelectPharmacy = (index: number | null) => {
    setSelectedPharmacyIndex(index)
    setSelectedPharmacy(index !== null ? filteredPharmacies[index] : null)
  }

  // 요일별 영업 시간 포맷팅
  const formatWeekdayHours = (startTime: string | null | undefined, endTime: string | null | undefined) => {
    if (!startTime || !endTime) return "휴무일"
    return `${formatTimeString(startTime)} - ${formatTimeString(endTime)}`
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
                {(selectedMedicine !== "전체" || selectedTime) && (
                  <Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                    {(selectedMedicine !== "전체" ? 1 : 0) + (selectedTime ? 1 : 0)}
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
                      <SelectItem value="전체">전체</SelectItem>
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
                      <SelectItem value="00:00">전체</SelectItem>
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

        {selectedMedicine !== "전체" && (
          <div className="flex items-center">
            <Badge className="bg-primary">
              약품: {selectedMedicine}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 p-0"
                onClick={() => setSelectedMedicine("전체")}
              >
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
                    {isLoading ? (
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <Card key={i}>
                            <CardContent className="p-4">
                              <Skeleton className="h-6 w-3/4 mb-2" />
                              <Skeleton className="h-4 w-full mb-2" />
                              <Skeleton className="h-4 w-1/2" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                        {filteredPharmacies.length > 0 ? (
                          filteredPharmacies.map((pharmacy, index) => (
                            <Card
                              key={pharmacy.hpid}
                              className={`cursor-pointer transition-all hover:shadow-md ${
                                selectedPharmacyIndex === index ? "border-primary" : ""
                              } ${
                                selectedMedicine !== "전체" && getPharmacyMedicines(pharmacy).includes(selectedMedicine)
                                  ? "border-primary border-2"
                                  : ""
                              }`}
                              onClick={() => handleSelectPharmacy(index)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-bold">{pharmacy.duty_name}</h3>
                                    <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Clock className="h-3 w-3 text-muted-foreground" />
                                      <span className="text-xs">{getTodayHours(pharmacy)}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-1">
                                    <Badge
                                      variant={isPharmacyOpen(pharmacy) ? "default" : "outline"}
                                      className={isPharmacyOpen(pharmacy) ? "bg-green-500" : ""}
                                    >
                                      {isPharmacyOpen(pharmacy) ? "영업중" : "영업종료"}
                                    </Badge>
                                    {currentLocation && (
                                      <span className="text-xs">
                                        {formatDistance(Number(pharmacy.wgs84_lat), Number(pharmacy.wgs84_lon))}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {pharmacy.inventories.slice(0, 3).map((inventory) => (
                                    <Badge
                                      key={inventory.id}
                                      variant="outline"
                                      className={`text-xs ${
                                        inventory.medicines.item_name === selectedMedicine
                                          ? "bg-primary text-primary-foreground"
                                          : ""
                                      }`}
                                    >
                                      {inventory.medicines.item_name}
                                    </Badge>
                                  ))}
                                  {pharmacy.inventories.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{pharmacy.inventories.length - 3}
                                    </Badge>
                                  )}
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
                    )}
                  </TabsContent>
                  <TabsContent value="open" className="mt-4">
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredPharmacies
                        .filter((pharmacy) => isPharmacyOpen(pharmacy))
                        .map((pharmacy, index) => (
                          <Card
                            key={pharmacy.hpid}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPharmacyIndex === index ? "border-primary" : ""
                            } ${
                              selectedMedicine !== "전체" && getPharmacyMedicines(pharmacy).includes(selectedMedicine)
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => handleSelectPharmacy(index)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold">{pharmacy.duty_name}</h3>
                                  <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{getTodayHours(pharmacy)}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge variant="default" className="bg-green-500">
                                    영업중
                                  </Badge>
                                  {currentLocation && (
                                    <span className="text-xs">
                                      {formatDistance(Number(pharmacy.wgs84_lat), Number(pharmacy.wgs84_lon))}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {pharmacy.inventories.slice(0, 3).map((inventory) => (
                                  <Badge
                                    key={inventory.id}
                                    variant="outline"
                                    className={`text-xs ${
                                      inventory.medicines.item_name === selectedMedicine
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                    }`}
                                  >
                                    {inventory.medicines.item_name}
                                  </Badge>
                                ))}
                                {pharmacy.inventories.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{pharmacy.inventories.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="closed" className="mt-4">
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {filteredPharmacies
                        .filter((pharmacy) => !isPharmacyOpen(pharmacy))
                        .map((pharmacy, index) => (
                          <Card
                            key={pharmacy.hpid}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPharmacyIndex === index ? "border-primary" : ""
                            } ${
                              selectedMedicine !== "전체" && getPharmacyMedicines(pharmacy).includes(selectedMedicine)
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => handleSelectPharmacy(index)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold">{pharmacy.duty_name}</h3>
                                  <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{getTodayHours(pharmacy)}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge variant="outline">영업종료</Badge>
                                  {currentLocation && (
                                    <span className="text-xs">
                                      {formatDistance(Number(pharmacy.wgs84_lat), Number(pharmacy.wgs84_lon))}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {pharmacy.inventories.slice(0, 3).map((inventory) => (
                                  <Badge
                                    key={inventory.id}
                                    variant="outline"
                                    className={`text-xs ${
                                      inventory.medicines.item_name === selectedMedicine
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                    }`}
                                  >
                                    {inventory.medicines.item_name}
                                  </Badge>
                                ))}
                                {pharmacy.inventories.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{pharmacy.inventories.length - 3}
                                  </Badge>
                                )}
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
                <div className="h-[600px] bg-muted relative">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">지도를 불러오는 중...</p>
                    </div>
                  ) : (
                    <KakaoMap
                      pharmacies={filteredPharmacies.map((p) => ({
                        dutyName: p.duty_name,
                        wgs84Lat: Number(p.wgs84_lat),
                        wgs84Lon: Number(p.wgs84_lon),
                      }))}
                      selected={selectedPharmacyIndex}
                      onSelect={handleSelectPharmacy}
                    />
                  )}

                  {/* Pharmacy detail modal */}
                  {selectedPharmacy && (
                    <div className="absolute bottom-4 left-4 right-4 bg-background rounded-lg shadow-lg p-4 border z-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{selectedPharmacy.duty_name}</h3>
                          <p className="text-sm text-muted-foreground">{selectedPharmacy.duty_addr}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedPharmacy(null)
                            setSelectedPharmacyIndex(null)
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                          <p className="text-sm font-medium">영업 시간</p>
                          <p className="text-sm">{getTodayHours(selectedPharmacy)}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">연락처</p>
                          <p className="text-sm">{selectedPharmacy.duty_tel1 || "정보 없음"}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium">보유 약품</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedPharmacy.inventories.map((inventory) => (
                            <Badge
                              key={inventory.id}
                              variant="outline"
                              className={
                                inventory.medicines.item_name === selectedMedicine
                                  ? "bg-primary text-primary-foreground"
                                  : ""
                              }
                            >
                              {inventory.medicines.item_name} ({inventory.quantity}개)
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          className="flex-1 gap-1"
                          onClick={() => {
                            // Open in Kakao Maps or Naver Maps
                            const mapUrl = `https://map.kakao.com/link/to/${selectedPharmacy.duty_name},${selectedPharmacy.wgs84_lat},${selectedPharmacy.wgs84_lon}`
                            window.open(mapUrl, "_blank")
                          }}
                        >
                          길찾기
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 gap-1"
                          onClick={() => {
                            // Call the pharmacy
                            if (selectedPharmacy.duty_tel1) {
                              window.location.href = `tel:${selectedPharmacy.duty_tel1}`
                            } else {
                              alert("전화번호 정보가 없습니다.")
                            }
                          }}
                        >
                          <Phone className="h-4 w-4" />
                          전화하기
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1">
                              상세 정보
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{selectedPharmacy.duty_name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium">주소</h4>
                                <p className="text-sm text-muted-foreground">{selectedPharmacy.duty_addr}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">연락처</h4>
                                <p className="text-sm text-muted-foreground">
                                  {selectedPharmacy.duty_tel1 || "정보 없음"}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-medium">영업 시간</h4>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  <div>
                                    <p className="text-xs font-medium">월요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time1s, selectedPharmacy.duty_time1c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">화요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time2s, selectedPharmacy.duty_time2c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">수요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time3s, selectedPharmacy.duty_time3c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">목요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time4s, selectedPharmacy.duty_time4c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">금요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time5s, selectedPharmacy.duty_time5c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">토요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time6s, selectedPharmacy.duty_time6c)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">일요일</p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(selectedPharmacy.duty_time7s, selectedPharmacy.duty_time7c)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium">보유 약품</h4>
                                <div className="flex flex-wrap gap-1 mt-1 max-h-[150px] overflow-y-auto">
                                  {selectedPharmacy.inventories.map((inventory) => (
                                    <Badge
                                      key={inventory.id}
                                      variant={
                                        inventory.medicines.item_name === selectedMedicine ? "default" : "outline"
                                      }
                                      className={inventory.medicines.item_name === selectedMedicine ? "bg-primary" : ""}
                                    >
                                      {inventory.medicines.item_name} ({inventory.quantity}개)
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
