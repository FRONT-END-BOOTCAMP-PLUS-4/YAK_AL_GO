"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
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
import styles from "./map.module.scss";

// KakaoMap 컴포넌트 동적 import (SSR 비활성화)
const KakaoMap = dynamic(() => import("@/components/map/KakaoMap"), { ssr: false })

type Pharmacy = {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  status: string
  distance: string
  lat: number
  lng: number
  medicines: string[]
}

const medicines = ["타이레놀", "판콜에이", "게보린", "베아제", "훼스탈골드", "판피린"]

export default function MapPage() {
  const searchParams = useSearchParams()
  const medicineName = searchParams.get("medicine")

  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([])
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPharmacies, setFilteredPharmacies] = useState<Pharmacy[]>([])
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedMedicine, setSelectedMedicine] = useState(medicineName || "")
  const [selectedTime, setSelectedTime] = useState("")
  const [showFilterPopover, setShowFilterPopover] = useState(false)

  // 약국 데이터 fetch
  useEffect(() => {
    fetch("/api/pharmacies")
      .then(res => res.json())
      .then(data => {
        const mapped = data.map((item: any, idx: number) => ({
          id: item.id ?? idx,
          name: item.name ?? item.dutyName ?? "",
          address: item.address ?? item.dutyAddr ?? "",
          phone: item.phone ?? item.dutyTel1 ?? "",
          hours:
            item.hours ??
            ((item.dutyTime1s && item.dutyTime1c)
              ? `${item.dutyTime1s} - ${item.dutyTime1c}`
              : ""),
          status: item.status ?? "영업중",
          distance: item.distance ?? "",
          lat: Number(item.lat ?? item.wgs84Lat ?? 0),
          lng: Number(item.lng ?? item.wgs84Lon ?? 0),
          medicines: item.medicines ?? [],
        }))
        setPharmacies(mapped)
        setFilteredPharmacies(mapped)
      })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    filterPharmacies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedMedicine, selectedTime, pharmacies])

  const filterPharmacies = () => {
    let filtered = pharmacies

    if (searchQuery) {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.name.includes(searchQuery) || pharmacy.address.includes(searchQuery),
      )
    }

    if (selectedMedicine && selectedMedicine !== "all") {
      filtered = filtered.filter((pharmacy) => pharmacy.medicines.includes(selectedMedicine))
    }

    if (selectedTime && selectedTime !== "all") {
      const hour = Number.parseInt(selectedTime.split(":")[0])
      filtered = filtered.filter((pharmacy) => {
        const openHour = Number.parseInt(pharmacy.hours.split(" - ")[0]?.split(":")[0] ?? "0")
        const closeHour = Number.parseInt(pharmacy.hours.split(" - ")[1]?.split(":")[0] ?? "24")
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
    alert("현재 위치를 가져오는 중입니다...")
  }

  return (
    <div className={styles.mapContainer}>
      <div className={styles.header}>
        <h1>약국 찾기</h1>
        <p>내 주변 약국을 찾고 약품 재고를 확인해보세요.</p>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
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
        <Button className={styles.filterButton} onClick={getCurrentLocation}>
          <Navigation className="h-4 w-4" />내 위치
        </Button>
        <Popover open={showFilterPopover} onOpenChange={setShowFilterPopover}>
          <PopoverTrigger asChild>
            <Button variant="outline" className={styles.filterButton}>
              <Filter className="h-4 w-4" />
              필터
              {(selectedMedicine || selectedTime) && (
                <Badge className={styles.filterBadge}>
                  {(selectedMedicine && selectedMedicine !== "all" ? 1 : 0) + (selectedTime && selectedTime !== "all" ? 1 : 0)}
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

      {selectedMedicine && selectedMedicine !== "all" && (
        <div className={styles.selectedMedicineTag}>
          <Badge className={styles.medicineBadge}>
            약품: {selectedMedicine}
            <Button
              variant="ghost"
              size="icon"
              className={styles.closeButton}
              onClick={() => setSelectedMedicine("")}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      )}

      <div className={styles.mainContent}>
        <div className={styles.pharmacyList}>
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
                  <div className={styles.pharmacyListWrapper}>
                    {filteredPharmacies.length > 0 ? (
                      filteredPharmacies.map((pharmacy) => (
                        <Card
                          key={pharmacy.id}
                          className={`${styles.pharmacyCard} ${selectedPharmacy?.id === pharmacy.id ? styles.selected : ""} ${
                            selectedMedicine && pharmacy.medicines.includes(selectedMedicine) ? styles.hasMedicine : ""
                          }`}
                          onClick={() => setSelectedPharmacy(pharmacy)}
                        >
                          <CardContent className="p-4">
                            <div className={styles.pharmacyInfo}>
                              <div className={styles.pharmacyDetails}>
                                <h3>{pharmacy.name}</h3>
                                <p>{pharmacy.address}</p>
                                <div className={styles.hours}>
                                  <Clock />
                                  <span>{pharmacy.hours}</span>
                                </div>
                              </div>
                              <div className={styles.pharmacyStatus}>
                                <Badge
                                  variant={pharmacy.status === "영업중" ? "default" : "outline"}
                                  className={pharmacy.status === "영업중" ? "bg-green-500" : ""}
                                >
                                  {pharmacy.status}
                                </Badge>
                                <span className={styles.distance}>{pharmacy.distance}</span>
                              </div>
                            </div>
                            <div className={styles.medicineList}>
                              {pharmacy.medicines.map((medicine) => (
                                <Badge
                                  key={medicine}
                                  variant="outline"
                                  className={`${medicine === selectedMedicine ? styles.medicineBadge : ""}`}
                                >
                                  {medicine}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className={styles.emptyResult}>
                        <p>검색 결과가 없습니다.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="open" className="mt-4">
                  <div className={styles.pharmacyListWrapper}>
                    {filteredPharmacies
                      .filter((pharmacy) => pharmacy.status === "영업중")
                      .map((pharmacy) => (
                        <Card
                          key={pharmacy.id}
                          className={`${styles.pharmacyCard} ${selectedPharmacy?.id === pharmacy.id ? styles.selected : ""} ${
                            selectedMedicine && pharmacy.medicines.includes(selectedMedicine) ? styles.hasMedicine : ""
                          }`}
                          onClick={() => setSelectedPharmacy(pharmacy)}
                        >
                          <CardContent className="p-4">
                            <div className={styles.pharmacyInfo}>
                              <div className={styles.pharmacyDetails}>
                                <h3>{pharmacy.name}</h3>
                                <p>{pharmacy.address}</p>
                                <div className={styles.hours}>
                                  <Clock />
                                  <span>{pharmacy.hours}</span>
                                </div>
                              </div>
                              <div className={styles.pharmacyStatus}>
                                <Badge variant="default" className="bg-green-500">
                                  {pharmacy.status}
                                </Badge>
                                <span className={styles.distance}>{pharmacy.distance}</span>
                              </div>
                            </div>
                            <div className={styles.medicineList}>
                              {pharmacy.medicines.map((medicine) => (
                                <Badge
                                  key={medicine}
                                  variant="outline"
                                  className={`${medicine === selectedMedicine ? styles.medicineBadge : ""}`}
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
                  <div className={styles.pharmacyListWrapper}>
                    {filteredPharmacies
                      .filter((pharmacy) => pharmacy.status === "영업종료")
                      .map((pharmacy) => (
                        <Card
                          key={pharmacy.id}
                          className={`${styles.pharmacyCard} ${selectedPharmacy?.id === pharmacy.id ? styles.selected : ""} ${
                            selectedMedicine && pharmacy.medicines.includes(selectedMedicine) ? styles.hasMedicine : ""
                          }`}
                          onClick={() => setSelectedPharmacy(pharmacy)}
                        >
                          <CardContent className="p-4">
                            <div className={styles.pharmacyInfo}>
                              <div className={styles.pharmacyDetails}>
                                <h3>{pharmacy.name}</h3>
                                <p>{pharmacy.address}</p>
                                <div className={styles.hours}>
                                  <Clock />
                                  <span>{pharmacy.hours}</span>
                                </div>
                              </div>
                              <div className={styles.pharmacyStatus}>
                                <Badge variant="outline">{pharmacy.status}</Badge>
                                <span className={styles.distance}>{pharmacy.distance}</span>
                              </div>
                            </div>
                            <div className={styles.medicineList}>
                              {pharmacy.medicines.map((medicine) => (
                                <Badge
                                  key={medicine}
                                  variant="outline"
                                  className={`${medicine === selectedMedicine ? styles.medicineBadge : ""}`}
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

        <div className={styles.mapSection}>
          <Card className="h-full">
            <CardContent className={styles.mapContent}>
              {mapLoaded ? (
                <KakaoMap
                  pharmacies={filteredPharmacies.map((pharmacy) => ({
                    dutyName: pharmacy.name,
                    wgs84Lat: pharmacy.lat,
                    wgs84Lon: pharmacy.lng,
                  }))}
                  selected={
                    selectedPharmacy
                      ? filteredPharmacies.findIndex((p) => p.id === selectedPharmacy.id)
                      : null
                  }
                  onSelect={(idx) => {
                    if (idx === null) {
                      setSelectedPharmacy(null)
                    } else {
                      setSelectedPharmacy(filteredPharmacies[idx])
                    }
                  }}
                />
              ) : (
                <div className={styles.mapPlaceholder}>
                  <p>지도를 불러오는 중...</p>
                </div>
              )}

              {/* Pharmacy detail modal */}
              {selectedPharmacy && (
                <div className={styles.pharmacyDetail}>
                  <div className={styles.header}>
                    <h3>{selectedPharmacy.name}</h3>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedPharmacy(null)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={styles.infoGrid}>
                    <div>
                      <div className={styles.infoTitle}>영업 시간</div>
                      <div className={styles.infoContent}>{selectedPharmacy.hours}</div>
                    </div>
                    <div>
                      <div className={styles.infoTitle}>연락처</div>
                      <div className={styles.infoContent}>{selectedPharmacy.phone}</div>
                    </div>
                  </div>
                  <div className={styles.medicines}>
                    <div className={styles.title}>보유 약품</div>
                    <div className={styles.list}>
                      {selectedPharmacy.medicines.map((medicine: string) => (
                        <Badge
                          key={medicine}
                          variant="outline"
                          className={medicine === selectedMedicine ? styles.medicineBadge : ""}
                        >
                          {medicine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <Button>길찾기</Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">상세 정보</Button>
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
                                  className={medicine === selectedMedicine ? styles.medicineBadge : ""}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}