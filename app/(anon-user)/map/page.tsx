"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, X, Navigation, Clock, Filter, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dynamic from "next/dynamic";

// KakaoMap 컴포넌트 동적 import (SSR 비활성화)
const KakaoMap = dynamic(() => import("@/components/map/KakaoMap"), {
  ssr: false,
});

// Pharmacy type based on Prisma schema
interface Medicine {
  item_seq: string;
  item_name: string;
}

interface Inventory {
  id: number;
  quantity: number;
  itemSeq: string;
  hpid: string;
  medicines: Medicine;
}

interface Pharmacy {
  hpid: string;
  duty_name: string;
  duty_addr: string;
  duty_tel1: string;
  wgs84_lat: number;
  wgs84_lon: number;
  duty_time1s: string;
  duty_time1c: string;
  duty_time2s: string;
  duty_time2c: string;
  duty_time3s: string;
  duty_time3c: string;
  duty_time4s: string;
  duty_time4c: string;
  duty_time5s: string;
  duty_time5c: string;
  duty_time6s: string;
  duty_time6c: string;
  duty_time7s: string;
  duty_time7c: string;
  inventories: Inventory[];
  isOpen?: boolean; // 영업 상태 표시를 위한 속성 추가
}

export default function MapPage() {
  const searchParams = useSearchParams();
  const medicineName = searchParams.get("medicine");

  // 현재 시간 가져오기
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentDay = now.getDay().toString(); // 현재 요일 (0-6)

  const [selectedPharmacyIndex, setSelectedPharmacyIndex] = useState<
    number | null
  >(null);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [filteredPharmacies, setFilteredPharmacies] = useState<Pharmacy[]>([]);

  const [selectedMedicine, setSelectedMedicine] = useState(
    medicineName || "전체"
  );

  // 시간 필터 상태 변경
  const [selectedDay, setSelectedDay] = useState<string>(currentDay);
  const [selectedHour, setSelectedHour] = useState<string>(
    currentHour.toString()
  );
  const [selectedMinute, setSelectedMinute] = useState<string>(
    currentMinute.toString()
  );
  const [showOnlyOpen, setShowOnlyOpen] = useState<boolean>(true); // 기본적으로 영업중인 약국만 표시

  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const [medicines, setMedicines] = useState<string[]>([]);
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 현재 선택된 요일을 숫자로 변환하는 상태 추가
  const [dayNumber, setDayNumber] = useState<number>(now.getDay());

  // 초기 위치 설정 (서울 중심)
  const [defaultLocation] = useState<{ lat: number; lng: number }>({
    lat: 37.5665,
    lng: 126.978,
  });

  // 지도 중심 위치를 추적하는 상태 변수 추가
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>(
    defaultLocation
  );

  // 위치 업데이트 소스를 추적하기 위한 ref
  const locationUpdateSourceRef = useRef<"user" | "map" | "init">("init");

  // Kakao Maps API 로딩 상태 관리
  useEffect(() => {
    const loadKakaoMap = async () => {
      if (!window.kakao?.maps) {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&autoload=false`;

        document.head.appendChild(script);
      }
    };

    loadKakaoMap();
  }, []);

  // 4자리 숫자 형태의 시간을 "시:분" 형태로 변환하는 함수
  const formatTimeString = (
    timeStr: string | null | undefined
  ): string | null => {
    if (!timeStr) {
      return null; // null 또는 undefined인 경우 null 반환
    }

    // 이미 "시:분" 형태인 경우 그대로 반환
    if (timeStr.includes(":")) {
      return timeStr;
    }

    // 4자리 숫자 형태인 경우 "시:분" 형태로 변환
    if (timeStr.length === 4) {
      const hour = timeStr.substring(0, 2);
      const minute = timeStr.substring(2, 4);
      return `${hour}:${minute}`;
    }

    return timeStr;
  };

  // 요일 선택 시 dayNumber 상태 업데이트
  const handleDayChange = (value: string) => {
    setSelectedDay(value);
    const day = Number.parseInt(value, 10);
    setDayNumber(day);
  };

  // 시간 입력 처리
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록
    if (/^\d*$/.test(value)) {
      // 0-23 범위 내에서만 허용
      const hour = Number.parseInt(value, 10);
      if (!value || (hour >= 0 && hour <= 23)) {
        setSelectedHour(value);
      }
    }
  };

  // 분 입력 처리
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록
    if (/^\d*$/.test(value)) {
      // 0-59 범위 내에서만 허용
      const minute = Number.parseInt(value, 10);
      if (!value || (minute >= 0 && minute <= 59)) {
        setSelectedMinute(value);
      }
    }
  };

  // 컴포넌트 마운트 시 초기 요일 설정
  useEffect(() => {
    setDayNumber(Number.parseInt(selectedDay, 10));
  }, [selectedDay]);

  // Fetch pharmacies and medicines data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pharmacies
        const pharmaciesUrl = selectedMedicine
          ? `/api/map?medicine=${encodeURIComponent(selectedMedicine)}`
          : "/api/map";

        const pharmaciesRes = await fetch(pharmaciesUrl);
        const pharmaciesData = await pharmaciesRes.json();

        if (Array.isArray(pharmaciesData)) {
          // 각 약국의 영업 상태 확인
          const pharmaciesWithOpenStatus = pharmaciesData.map((pharmacy) => ({
            ...pharmacy,
            isOpen: checkPharmacyOpenAtTime(
              pharmacy,
              dayNumber,
              new Date().getHours(),
              new Date().getMinutes()
            ),
          }));

          setPharmacies(pharmaciesWithOpenStatus);

          // 약국 데이터를 가져온 후 현재 지도 중심 기준으로 정렬
          sortPharmaciesByDistance(pharmaciesWithOpenStatus, mapCenter);
        }

        // Fetch medicines for filter
        const medicinesRes = await fetch("/api/medicines");
        const medicinesData = await medicinesRes.json();

        if (Array.isArray(medicinesData)) {
          const medicineNames = [
            ...new Set(medicinesData.map((med: Medicine) => med.item_name)),
          ];
          setMedicines(medicineNames);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedMedicine, dayNumber, mapCenter]);

  // 약국을 거리순으로 정렬하는 함수
  const sortPharmaciesByDistance = (
    pharmaciesToSort: Pharmacy[],
    center: { lat: number; lng: number }
  ) => {
    const sorted = [...pharmaciesToSort].sort((a, b) => {
      const distA = calculateDistance(
        center.lat,
        center.lng,
        Number(a.wgs84_lat),
        Number(a.wgs84_lon)
      );
      const distB = calculateDistance(
        center.lat,
        center.lng,
        Number(b.wgs84_lat),
        Number(b.wgs84_lon)
      );
      return distA - distB;
    });

    setFilteredPharmacies(sorted);
  };

  // Filter pharmacies based on search query and filters
  useEffect(() => {
    filterPharmacies();
  }, [
    searchQuery,
    selectedDay,
    selectedHour,
    selectedMinute,
    pharmacies,
    dayNumber,
    showOnlyOpen,
  ]);

  // checkPharmacyOpenAtTime 함수
  const checkPharmacyOpenAtTime = (
    pharmacy: Pharmacy,
    day: number,
    hour: number,
    minute: number
  ): boolean => {
    // 요일에 따른 시작/종료 시간 가져오기
    let startTimeStr, endTimeStr;

    switch (day) {
      case 0: // Sunday
        startTimeStr = pharmacy.duty_time7s;
        endTimeStr = pharmacy.duty_time7c;
        break;
      case 1: // Monday
        startTimeStr = pharmacy.duty_time1s;
        endTimeStr = pharmacy.duty_time1c;
        break;
      case 2: // Tuesday
        startTimeStr = pharmacy.duty_time2s;
        endTimeStr = pharmacy.duty_time2c;
        break;
      case 3: // Wednesday
        startTimeStr = pharmacy.duty_time3s;
        endTimeStr = pharmacy.duty_time3c;
        break;
      case 4: // Thursday
        startTimeStr = pharmacy.duty_time4s;
        endTimeStr = pharmacy.duty_time4c;
        break;
      case 5: // Friday
        startTimeStr = pharmacy.duty_time5s;
        endTimeStr = pharmacy.duty_time5c;
        break;
      case 6: // Saturday
        startTimeStr = pharmacy.duty_time6s;
        endTimeStr = pharmacy.duty_time6c;
        break;
      default:
        return false;
    }

    // 시작 시간이나 종료 시간이 null, undefined 또는 빈 문자열이면 영업 종료
    if (
      !startTimeStr ||
      !endTimeStr ||
      startTimeStr === "" ||
      endTimeStr === ""
    ) {
      return false;
    }

    const startTime = formatTimeString(startTimeStr);
    const endTime = formatTimeString(endTimeStr);

    // 변환된 시간이 null이면 영업 종료
    if (!startTime || !endTime) {
      return false;
    }

    // 시간 비교
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const checkTimeInMinutes = hour * 60 + minute;
    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    // 종료 시간이 시작 시간보다 이른 경우 (다음 날까지 영업)
    let isOpen;
    if (endTimeInMinutes < startTimeInMinutes) {
      isOpen =
        checkTimeInMinutes >= startTimeInMinutes ||
        checkTimeInMinutes <= endTimeInMinutes;
    } else {
      isOpen =
        checkTimeInMinutes >= startTimeInMinutes &&
        checkTimeInMinutes <= endTimeInMinutes;
    }

    return isOpen;
  };

  // 선택된 요일과 시간에 약국이 영업 중인지 확인하는 함수
  const checkPharmacyOpenAtSelectedTime = (pharmacy: Pharmacy): boolean => {
    // 선택된 시간이 없으면 현재 시간 사용
    const hour = selectedHour
      ? Number.parseInt(selectedHour)
      : new Date().getHours();
    const minute = selectedMinute
      ? Number.parseInt(selectedMinute)
      : new Date().getMinutes();
    return checkPharmacyOpenAtTime(pharmacy, dayNumber, hour, minute);
  };

  // filterPharmacies 함수
  const filterPharmacies = () => {
    let filtered = [...pharmacies];

    // 검색어로 필터링
    if (searchQuery) {
      filtered = filtered.filter(
        (pharmacy) =>
          pharmacy.duty_name.includes(searchQuery) ||
          pharmacy.duty_addr.includes(searchQuery) ||
          // 약품명으로도 검색 가능하도록 추가
          pharmacy.inventories.some((inv) =>
            inv.medicines.item_name.includes(searchQuery)
          )
      );
    }

    // 항상 선택된 요일 기준으로 영업 상태 확인
    filtered = filtered.map((pharmacy) => {
      const isOpen = checkPharmacyOpenAtSelectedTime(pharmacy);
      return {
        ...pharmacy,
        isOpen,
      };
    });

    // 영업중인 약국만 표시 옵션이 활성화되어 있으면 필터링
    if (showOnlyOpen) {
      filtered = filtered.filter((pharmacy) => pharmacy.isOpen);
    }

    // 필터링 후에도 거리순 정렬 유지
    filtered.sort((a, b) => {
      const distA = calculateDistance(
        mapCenter.lat,
        mapCenter.lng,
        Number(a.wgs84_lat),
        Number(a.wgs84_lon)
      );
      const distB = calculateDistance(
        mapCenter.lat,
        mapCenter.lng,
        Number(b.wgs84_lat),
        Number(b.wgs84_lon)
      );
      return distA - distB;
    });

    setFilteredPharmacies(filtered);
  };

  const resetFilters = () => {
    const now = new Date();
    setSelectedMedicine("전체");
    setSelectedDay(now.getDay().toString());
    setDayNumber(now.getDay());
    setSelectedHour(now.getHours().toString());
    setSelectedMinute(now.getMinutes().toString());
    setShowFilterPopover(false);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setCurrentLocation(newLocation);
          setMapCenter(newLocation); // 현재 위치를 지도 중심으로 설정
          locationUpdateSourceRef.current = "user";

          // 선택된 약국 초기화
          if (selectedPharmacyIndex !== null) {
            setSelectedPharmacyIndex(null);
            setSelectedPharmacy(null);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("위치 정보를 가져오는데 실패했습니다.");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );
    } else {
      alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
    }
  };

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  // Format distance for display
  const formatDistance = (lat: number, lon: number) => {
    const distance = calculateDistance(
      mapCenter.lat,
      mapCenter.lng,
      Number(lat),
      Number(lon)
    );
    return distance < 1
      ? `${(distance * 1000).toFixed(0)}m`
      : `${distance.toFixed(1)}km`;
  };

  // Get formatted operating hours for today
  const getTodayHours = (pharmacy: Pharmacy) => {
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

    let startTime, endTime;

    switch (dayOfWeek) {
      case 0: // Sunday
        startTime = formatTimeString(pharmacy.duty_time7s);
        endTime = formatTimeString(pharmacy.duty_time7c);
        break;
      case 1: // Monday
        startTime = formatTimeString(pharmacy.duty_time1s);
        endTime = formatTimeString(pharmacy.duty_time1c);
        break;
      case 2: // Tuesday
        startTime = formatTimeString(pharmacy.duty_time2s);
        endTime = formatTimeString(pharmacy.duty_time2c);
        break;
      case 3: // Wednesday
        startTime = formatTimeString(pharmacy.duty_time3s);
        endTime = formatTimeString(pharmacy.duty_time3c);
        break;
      case 4: // Thursday
        startTime = formatTimeString(pharmacy.duty_time4s);
        endTime = formatTimeString(pharmacy.duty_time4c);
        break;
      case 5: // Friday
        startTime = formatTimeString(pharmacy.duty_time5s);
        endTime = formatTimeString(pharmacy.duty_time5c);
        break;
      case 6: // Saturday
        startTime = formatTimeString(pharmacy.duty_time6s);
        endTime = formatTimeString(pharmacy.duty_time6c);
        break;
      default:
        return "정보 없음";
    }

    if (!startTime || !endTime) return "휴무일";

    return `${startTime} - ${endTime}`;
  };

  // Get medicine names from pharmacy inventories
  const getPharmacyMedicines = (pharmacy: Pharmacy) => {
    return pharmacy.inventories.map((inv) => inv.medicines.item_name);
  };

  // Handle pharmacy selection
  const handleSelectPharmacy = (index: number | null) => {
    setSelectedPharmacyIndex(index);
    setSelectedPharmacy(index !== null ? filteredPharmacies[index] : null);

    // 선택된 약국이 있을 때만 지도 중심을 약국 위치로 설정
    if (index !== null) {
      const pharmacy = filteredPharmacies[index];
      const pharmacyLocation = {
        lat: Number(pharmacy.wgs84_lat),
        lng: Number(pharmacy.wgs84_lon),
      };
      setMapCenter(pharmacyLocation);
      locationUpdateSourceRef.current = "user";
    }
    // 선택이 해제될 때는 지도 중심을 변경하지 않음 (else 블록 없음)
  };

  // 요일별 영업 시간 포맷팅
  const formatWeekdayHours = (
    startTimeStr: string | null | undefined,
    endTimeStr: string | null | undefined
  ) => {
    if (!startTimeStr || !endTimeStr) return "휴무일";

    const startTime = formatTimeString(startTimeStr);
    const endTime = formatTimeString(endTimeStr);

    if (!startTime || !endTime) return "휴무일";

    return `${startTime} - ${endTime}`;
  };

  // 지도 중심 변경 핸들러 추가
  const handleMapCenterChanged = (center: { lat: number; lng: number }) => {
    // 항상 mapCenter 업데이트 및 약국 리스트 재정렬
    setMapCenter(center);
    locationUpdateSourceRef.current = "map";

    // 지도 중심이 변경되면 약국 리스트를 재정렬
    if (filteredPharmacies.length > 0) {
      sortPharmaciesByDistance(filteredPharmacies, center);
    }

    // 플래그 초기화
    setTimeout(() => {
      locationUpdateSourceRef.current = "map";
    }, 100);
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">약국 찾기</h1>
          <p className="text-muted-foreground">
            내 주변 약국을 찾고 약품 재고를 확인해보세요.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="약국 이름, 주소, 약품명 검색"
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
          <Popover
            open={showFilterPopover}
            onOpenChange={(open) => {
              setShowFilterPopover(open);
              // 지도 중심 변경 방지를 위한 플래그 설정
              locationUpdateSourceRef.current = "map";

              // 현재 지도 중심 유지
              const currentCenter = { ...mapCenter };
              setMapCenter(currentCenter);
            }}
          >
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                필터
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">필터</h3>
                <div className="space-y-2">
                  <Label htmlFor="medicine">약품</Label>
                  <Select
                    value={selectedMedicine}
                    onValueChange={setSelectedMedicine}
                  >
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

                {/* 요일 선택 */}
                <div className="space-y-2">
                  <Label htmlFor="day">요일</Label>
                  <Select value={selectedDay} onValueChange={handleDayChange}>
                    <SelectTrigger id="day">
                      <SelectValue placeholder="요일 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">월요일</SelectItem>
                      <SelectItem value="2">화요일</SelectItem>
                      <SelectItem value="3">수요일</SelectItem>
                      <SelectItem value="4">목요일</SelectItem>
                      <SelectItem value="5">금요일</SelectItem>
                      <SelectItem value="6">토요일</SelectItem>
                      <SelectItem value="0">일요일</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 시간과 분 입력 (한 줄에 배치) */}
                <div className="space-y-2">
                  <Label>시간</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={selectedHour}
                      onChange={handleHourChange}
                      placeholder="시"
                      className="w-1/2"
                    />
                    <span>:</span>
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={selectedMinute}
                      onChange={handleMinuteChange}
                      placeholder="분"
                      className="w-1/2"
                    />
                  </div>
                </div>

                {/* 영업중 필터링 옵션 */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showOnlyOpen"
                    checked={showOnlyOpen}
                    onChange={(e) => setShowOnlyOpen(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label
                    htmlFor="showOnlyOpen"
                    className="text-sm cursor-pointer"
                  >
                    영업중인 약국만 보기
                  </Label>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={resetFilters}>
                    초기화
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-6 md:grid-cols-[350px_1fr]">
          <div className="order-2 md:order-1">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">약국 목록</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                    {filteredPharmacies.length > 0 ? (
                      filteredPharmacies.map((pharmacy, index) => (
                        <Card
                          key={pharmacy.hpid}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedPharmacyIndex === index
                              ? "border-primary"
                              : ""
                          } ${
                            selectedMedicine !== "전체" &&
                            getPharmacyMedicines(pharmacy).includes(
                              selectedMedicine
                            )
                              ? "border-primary border-2"
                              : ""
                          }`}
                          onClick={() => handleSelectPharmacy(index)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-bold">
                                  {pharmacy.duty_name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {pharmacy.duty_addr}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-xs">
                                    {getTodayHours(pharmacy)}
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="text-xs">
                                  {formatDistance(
                                    Number(pharmacy.wgs84_lat),
                                    Number(pharmacy.wgs84_lon)
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {pharmacy.inventories
                                .slice(0, 3)
                                .map((inventory) => (
                                  <Badge
                                    key={inventory.id}
                                    variant="outline"
                                    className={`text-xs ${
                                      inventory.medicines.item_name ===
                                      selectedMedicine
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
                        <p className="text-muted-foreground">
                          검색 결과가 없습니다.
                        </p>
                      </div>
                    )}
                  </div>
                }
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2">
            <Card className="h-full">
              <CardContent className="p-0 relative">
                <div className="h-[600px] bg-muted relative">
                  {
                    <KakaoMap
                      pharmacies={filteredPharmacies.map((p) => ({
                        dutyName: p.duty_name,
                        wgs84Lat: Number(p.wgs84_lat),
                        wgs84Lon: Number(p.wgs84_lon),
                      }))}
                      selected={selectedPharmacyIndex}
                      onSelect={handleSelectPharmacy}
                      currentLocation={currentLocation}
                      mapCenter={mapCenter}
                      defaultCenter={defaultLocation}
                      onCenterChanged={handleMapCenterChanged}
                    />
                  }

                  {/* Pharmacy detail modal */}
                  {selectedPharmacy && (
                    <div className="absolute bottom-4 left-4 right-4 bg-background rounded-lg shadow-lg p-4 border z-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">
                            {selectedPharmacy.duty_name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedPharmacy.duty_addr}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            // 약국 정보창 닫기
                            setSelectedPharmacy(null);
                            setSelectedPharmacyIndex(null);

                            // 지도 중심 변경 방지를 위한 플래그 설정
                            locationUpdateSourceRef.current = "map";

                            // 추가: 현재 지도 중심 유지
                            const currentCenter = { ...mapCenter };
                            setMapCenter(currentCenter);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                          <p className="text-sm font-medium">영업 시간</p>
                          <p className="text-sm">
                            {getTodayHours(selectedPharmacy)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">연락처</p>
                          <p className="text-sm">
                            {selectedPharmacy.duty_tel1 || "정보 없음"}
                          </p>
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
                                inventory.medicines.item_name ===
                                selectedMedicine
                                  ? "bg-primary text-primary-foreground"
                                  : ""
                              }
                            >
                              {inventory.medicines.item_name} (
                              {inventory.quantity}개)
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          className="flex-1 gap-1"
                          onClick={() => {
                            // Open in Kakao Maps or Naver Maps
                            const mapUrl = `https://map.kakao.com/link/to/${selectedPharmacy.duty_name},${selectedPharmacy.wgs84_lat},${selectedPharmacy.wgs84_lon}`;
                            window.open(mapUrl, "_blank");
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
                              window.location.href = `tel:${selectedPharmacy.duty_tel1}`;
                            } else {
                              alert("전화번호 정보가 없습니다.");
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
                              <DialogTitle>
                                {selectedPharmacy.duty_name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium">주소</h4>
                                <p className="text-sm text-muted-foreground">
                                  {selectedPharmacy.duty_addr}
                                </p>
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
                                    <p className="text-xs font-medium">
                                      월요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time1s,
                                        selectedPharmacy.duty_time1c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      화요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time2s,
                                        selectedPharmacy.duty_time2c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      수요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time3s,
                                        selectedPharmacy.duty_time3c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      목요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time4s,
                                        selectedPharmacy.duty_time4c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      금요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time5s,
                                        selectedPharmacy.duty_time5c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      토요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time6s,
                                        selectedPharmacy.duty_time6c
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium">
                                      일요일
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatWeekdayHours(
                                        selectedPharmacy.duty_time7s,
                                        selectedPharmacy.duty_time7c
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium">보유 약품</h4>
                                <div className="flex flex-wrap gap-1 mt-1 max-h-[150px] overflow-y-auto">
                                  {selectedPharmacy.inventories.map(
                                    (inventory) => (
                                      <Badge
                                        key={inventory.id}
                                        variant={
                                          inventory.medicines.item_name ===
                                          selectedMedicine
                                            ? "default"
                                            : "outline"
                                        }
                                        className={
                                          inventory.medicines.item_name ===
                                          selectedMedicine
                                            ? "bg-primary"
                                            : ""
                                        }
                                      >
                                        {inventory.medicines.item_name} (
                                        {inventory.quantity}개)
                                      </Badge>
                                    )
                                  )}
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
  );
}
