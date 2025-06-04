"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapPin, AlertTriangle, ArrowLeft, Loader2 } from "lucide-react"
import { MedicineReviewDialog } from "@/components/medicine-review-dialog"
import { MedicineWarningDialog } from "@/components/medicine-warning-dialog"
import { useLoadingContext } from '@/providers/LoadingProvider';
import { selectMedicineImage } from '@/utils/medicineFormatter';
import { useSession } from 'next-auth/react';

// API 응답 타입 정의
interface MediDetailApiResponse {
  success: boolean;
  data?: {
    itemSeq: string;
    itemName: string;
    entpName: string;
    etcOtcName?: string;
    materialName?: string;
    storageMethod?: string;
    validTerm?: string;
    documents: {
      effectDocId: string | null;
      usageDocId: string | null;
      cautionDocId: string | null;
    };
    parsedContent?: {
      effect?: {
        mainEffect?: string;
        detailedEffect?: string;
        targetDiseases?: string[];
        therapeuticCategory?: string;
      };
      usage?: {
        dosage?: string;
        frequency?: string;
        duration?: string;
        administrationMethod?: string;
        ageSpecificDosage?: string;
      };
      caution?: {
        contraindications?: string[];
        warnings?: string[];
        sideEffects?: string[];
        interactions?: string[];
        specialGroups?: string[];
      };
      parsedAt?: string;
    };
  };
  error?: { 
    code: string; 
    message: string; 
  };
}

interface CautionInfo {
  type: string;
  description: string;
  severity: "high" | "medium" | "low";
}

interface MedicineData {
  itemSeq: string;
  itemName: string;
  entpName: string;
  etcOtcName?: string;
  materialName?: string;
  storageMethod?: string;
  validTerm?: string;
  documents: {
    effectDocId: string | null;
    usageDocId: string | null;
    cautionDocId: string | null;
  };
  parsedContent?: {
    effect?: {
      mainEffect?: string;
      detailedEffect?: string;
      targetDiseases?: string[];
      therapeuticCategory?: string;
    };
    usage?: {
      dosage?: string;
      frequency?: string;
      duration?: string;
      administrationMethod?: string;
      ageSpecificDosage?: string;
    };
    caution?: {
      contraindications?: string[];
      warnings?: string[];
      sideEffects?: string[];
      interactions?: string[];
      specialGroups?: string[];
    };
    parsedAt?: string;
  };
}

// 약국 관련 타입 정의
interface InventoryDto {
  id: number;
  quantity: number;
  itemSeq: string;
  hpid: string;
  medicines: {
    item_seq: string;
    item_name: string;
    entp_name: string;
  };
}

interface PharmacyData {
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
  inventories: InventoryDto[];
  isOpen?: boolean;
  distance?: number;
}

// 리뷰 통계 관련 타입 추가
interface ReviewStatItem {
  id: number;
  emoji: string;
  text: string;
  count: number;
}

interface ReviewStatsApiResponse {
  success: boolean;
  data?: {
    reviewStats: Record<string, ReviewStatItem[]>;
    totalReviews: number;
    totalParticipants: number;
    userReviews: string[];
  };
  error?: {
    code: string;
    message: string;
  };
}

export default function MedicineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [medicineData, setMedicineData] = useState<MedicineData | null>(null);
  const [pharmaciesData, setPharmaciesData] = useState<PharmacyData[]>([]);
  const [pharmaciesLoading, setPharmaciesLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userReviews, setUserReviews] = useState<string[]>([]);
  const [userComment, setUserComment] = useState("");
  
  // 리뷰 통계 관련 상태 추가
  const [reviewStats, setReviewStats] = useState<Record<string, ReviewStatItem[]>>({});
  const [reviewStatsLoading, setReviewStatsLoading] = useState(false);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalParticipants, setTotalParticipants] = useState(0);
  
  const { setLoading } = useLoadingContext();
  const { data: session, status } = useSession();

  const itemSeq = resolvedParams.id;

  const fetchMedicineDetail = async (itemSeq: string) => {
    try {
      setLoading(true, '의약품 정보를 불러오는 중...');
      setError(null);

      const response = await fetch(`/api/medicines/${itemSeq}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // HTTP 상태 코드 체크
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('해당 의약품을 찾을 수 없습니다.');
        } else if (response.status === 500) {
          throw new Error('서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          throw new Error(`서버 오류 (${response.status})`);
        }
      }

      // Content-Type 검증
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error('서버에서 올바르지 않은 응답을 받았습니다.');
      }

      const result: MediDetailApiResponse = await response.json();

      if (!result.success) {
        throw new Error(result.error?.message || '의약품 정보를 가져오는데 실패했습니다.');
      }

      if (!result.data) {
        throw new Error('의약품 데이터가 없습니다.');
      }

      setMedicineData(result.data);
      
      // 의약품 정보를 가져온 후 해당 의약품을 보유한 약국 정보 조회
      if (result.data.itemName) {
        await fetchPharmaciesWithMedicine(result.data.itemName);
      }
    } catch (error: any) {
      console.error('의약품 상세 조회 오류:', error);
      
      // 네트워크 오류 vs 애플리케이션 오류 구분
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setError('네트워크 연결을 확인해주세요.');
      } else {
        setError(error.message || '의약품 정보를 불러오는 중 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPharmaciesWithMedicine = async (medicineName: string) => {
    try {
      setPharmaciesLoading(true);
      
      // 현재 위치를 가져와서 거리 계산에 사용 (위치 권한이 없으면 서울 시청 기준)
      let lat = 37.5665; // 서울 시청 위도
      let lng = 126.9780; // 서울 시청 경도
      
      try {
        if (navigator.geolocation) {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          lat = position.coords.latitude;
          lng = position.coords.longitude;
        }
      } catch (geoError) {
        // 위치 권한이 없어도 기본 위치로 진행
        console.log('위치 권한이 없습니다. 기본 위치를 사용합니다.');
      }

      const params = new URLSearchParams({
        medicine: medicineName,
        lat: lat.toString(),
        lng: lng.toString(),
        showOnlyOpen: 'false' // 영업 여부와 관계없이 모든 약국 조회
      });

      const response = await fetch(`/api/map?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('약국 정보를 가져오는데 실패했습니다.');
      }

      const pharmaciesResult: PharmacyData[] = await response.json();
      
      // 해당 의약품을 실제로 보유한 약국만 필터링 (API에서 이미 필터링되지만 한번 더 확인)
      const filteredPharmacies = pharmaciesResult.filter(pharmacy => 
        pharmacy.inventories.some(inv => 
          inv.medicines.item_name === medicineName && inv.quantity > 0
        )
      );

      // 거리순으로 정렬 (distance가 있는 경우)
      const sortedPharmacies = filteredPharmacies.sort((a, b) => {
        return (a.distance || 0) - (b.distance || 0);
      });

      // 상위 5개 약국만 표시
      setPharmaciesData(sortedPharmacies.slice(0, 5));
    } catch (error: any) {
      console.error('약국 조회 오류:', error);
      // 약국 조회 실패 시에도 의약품 정보는 표시하고, 빈 배열로 설정
      setPharmaciesData([]);
    } finally {
      setPharmaciesLoading(false);
    }
  };

  // 리뷰 통계를 가져오는 함수 수정
  const fetchReviewStats = async (itemSeq: string) => {
    try {
      setReviewStatsLoading(true);

      const response = await fetch(`/api/medicines/${itemSeq}/reviews`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: 리뷰 통계를 불러올 수 없습니다.`);
      }

      const result: ReviewStatsApiResponse = await response.json();

      if (!result.success) {
        throw new Error(result.error?.message || '리뷰 통계를 불러오는데 실패했습니다.');
      }

      if (result.data) {
        setReviewStats(result.data.reviewStats);
        setTotalReviews(result.data.totalReviews);
        setTotalParticipants(result.data.totalParticipants);
        setUserReviews(result.data.userReviews || []);
      }
    } catch (error: any) {
      console.error('리뷰 통계 조회 오류:', error);
      // 리뷰 통계 실패는 전체 페이지 오류로 처리하지 않음
      setReviewStats({});
      setTotalReviews(0);
      setTotalParticipants(0);
      setUserReviews([]);
    } finally {
      setReviewStatsLoading(false);
    }
  };

  useEffect(() => {
    if (itemSeq) {
      fetchMedicineDetail(itemSeq);
      fetchReviewStats(itemSeq);
    }
  }, [itemSeq]);

  const handleReviewSubmit = async (selectedOptions: string[], comment: string) => {
    if (!session) {
      console.error('로그인이 필요합니다.');
      return;
    }

    try {
      setLoading(true, '리뷰를 등록하는 중...');

      const response = await fetch(`/api/medicines/${itemSeq}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedOptions
        })
      });

      // 응답 상태 확인
      if (!response.ok) {
        // 응답 내용 확인 (빈 응답 처리)
        const responseText = await response.text();
        let errorData;
        
        try {
          errorData = responseText ? JSON.parse(responseText) : {};
        } catch (parseError) {
          console.error('서버 응답 파싱 오류:', parseError);
          throw new Error(`서버 오류 (${response.status}): 응답을 해석할 수 없습니다.`);
        }
        
        throw new Error(errorData.error?.message || `리뷰 등록에 실패했습니다. (${response.status})`);
      }

      // Content-Type 검증
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error('서버에서 올바르지 않은 응답 형식을 받았습니다.');
      }

      // 응답 텍스트 확인 후 JSON 파싱
      const responseText = await response.text();
      if (!responseText) {
        throw new Error('서버에서 빈 응답을 받았습니다.');
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON 파싱 오류:', parseError);
        console.error('응답 내용:', responseText);
        throw new Error('서버 응답을 해석할 수 없습니다.');
      }

      if (!result.success) {
        throw new Error(result.error?.message || '리뷰 등록에 실패했습니다.');
      }

      // 성공시 리뷰 통계 새로고침
      await fetchReviewStats(itemSeq);
      
      // 사용자 상태 업데이트
      setUserComment(comment);
      
      console.log("리뷰 업데이트 성공:", result.data);
      
      // 성공 메시지 표시 (선택 사항)
      if (result.data?.addedCount > 0 || result.data?.removedCount > 0) {
        const message = `리뷰가 성공적으로 업데이트되었습니다. (추가: ${result.data.addedCount}개, 제거: ${result.data.removedCount}개)`;
        console.log(message);
      }

    } catch (error: any) {
      console.error('리뷰 등록 오류:', error);
      
      // 특정 에러 타입에 따른 메시지 개선
      let errorMessage = error.message || '리뷰 등록 중 오류가 발생했습니다.';
      
      if (error.message.includes('최대') && error.message.includes('개까지')) {
        errorMessage = '선택할 수 있는 리뷰 개수를 초과했습니다. 최대 5개까지만 선택해주세요.';
      } else if (error.message.includes('네트워크') || error instanceof TypeError) {
        errorMessage = '네트워크 연결을 확인해주세요.';
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const generateCautions = (medicineData: MedicineData): CautionInfo[] => {
    const cautions: CautionInfo[] = [];

    if (!medicineData.parsedContent?.caution) {
      return cautions;
    }

    const { contraindications, warnings, specialGroups } = medicineData.parsedContent.caution;

    // 금기사항 (높은 위험도)
    contraindications?.forEach((contraindication) => {
      cautions.push({
        type: "금기사항",
        description: contraindication,
        severity: "high"
      });
    });

    // 경고사항 (중간 위험도)
    warnings?.forEach((warning) => {
      cautions.push({
        type: "주의사항",
        description: warning,
        severity: "medium"
      });
    });

    // 특수환자군 (위험도 별도 판정)
    specialGroups?.forEach((group) => {
      let severity: "high" | "medium" | "low" = "medium";
      
      if (group.includes("임신") || group.includes("간") || group.includes("심장")) {
        severity = "high";
      } else if (group.includes("고령") || group.includes("소아")) {
        severity = "medium";
      } else {
        severity = "low";
      }

      cautions.push({
        type: "특수환자군",
        description: group,
        severity
      });
    });

    return cautions;
  };

  // 영업 상태 확인 함수
  const checkPharmacyOpen = (pharmacy: PharmacyData): boolean => {
    const now = new Date();
    const currentDay = now.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 100 + currentMinute;

    let openTime: string = '';
    let closeTime: string = '';

    // 요일별 영업시간 확인
    switch (currentDay) {
      case 1: // 월요일
        openTime = pharmacy.duty_time1s;
        closeTime = pharmacy.duty_time1c;
        break;
      case 2: // 화요일
        openTime = pharmacy.duty_time2s;
        closeTime = pharmacy.duty_time2c;
        break;
      case 3: // 수요일
        openTime = pharmacy.duty_time3s;
        closeTime = pharmacy.duty_time3c;
        break;
      case 4: // 목요일
        openTime = pharmacy.duty_time4s;
        closeTime = pharmacy.duty_time4c;
        break;
      case 5: // 금요일
        openTime = pharmacy.duty_time5s;
        closeTime = pharmacy.duty_time5c;
        break;
      case 6: // 토요일
        openTime = pharmacy.duty_time6s;
        closeTime = pharmacy.duty_time6c;
        break;
      case 0: // 일요일
        openTime = pharmacy.duty_time7s;
        closeTime = pharmacy.duty_time7c;
        break;
    }

    if (!openTime || !closeTime) {
      return false; // 영업시간 정보가 없으면 닫힌 것으로 간주
    }

    const openTimeInt = parseInt(openTime.replace(':', ''));
    const closeTimeInt = parseInt(closeTime.replace(':', ''));

    return currentTime >= openTimeInt && currentTime <= closeTimeInt;
  };

  // 거리 포맷팅 함수
  const formatDistance = (distance?: number): string => {
    if (!distance) return '-';
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
  };

  // 재고 수량 확인 함수
  const getInventoryQuantity = (pharmacy: PharmacyData, medicineName: string): number => {
    const inventory = pharmacy.inventories.find(inv => 
      inv.medicines.item_name === medicineName
    );
    return inventory?.quantity || 0;
  };

  // 지도에서 보기 핸들러
  const handleViewOnMap = () => {
    if (!medicineData) return;
    
    const params = new URLSearchParams();
    params.set('medicine', medicineData.itemName);
    
    // 재고가 있는 약국들의 정보 전달
    if (pharmaciesData.length > 0) {
      // 첫 번째 약국의 위치를 중심점으로 설정
      const firstPharmacy = pharmaciesData[0];
      params.set('centerLat', firstPharmacy.wgs84_lat.toString());
      params.set('centerLng', firstPharmacy.wgs84_lon.toString());
      
      // 약국 ID 목록 전달 (필터링에 사용)
      const pharmacyIds = pharmaciesData.map(p => p.hpid);
      params.set('pharmacyIds', pharmacyIds.join(','));
      
      // 자동 포커스 플래그
      params.set('autoFocus', 'true');
    }
    
    window.location.href = `/map?${params.toString()}`;
  };

  // 에러 상태
  if (error && !medicineData) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <AlertTriangle className="h-12 w-12 text-destructive" />
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">의약품 정보를 찾을 수 없습니다</h2>
            <p className="text-muted-foreground max-w-md">
              {error || "요청하신 의약품의 상세 정보를 불러올 수 없습니다."}
            </p>
            <div className="flex gap-2">
              <Button onClick={() => fetchMedicineDetail(itemSeq)} variant="outline">
                다시 시도
              </Button>
              <Button asChild>
                <Link href="/medicines">의약품 목록으로 돌아가기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 의약품 데이터가 없는 경우 로딩 상태 유지
  if (!medicineData) {
    return null; // LoadingProvider가 로딩 화면을 처리
  }

  const cautions = generateCautions(medicineData);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/medicines">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">약 상세 정보</h1>
        </div>

        {/* Warning Dialog for high severity cautions */}
        {cautions.length > 0 && (
          <MedicineWarningDialog 
            medicineName={medicineData.itemName} 
            warnings={cautions} 
          />
        )}

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={selectMedicineImage(medicineData.itemSeq)}
                  alt={medicineData.itemName}
                  width={200}
                  height={200}
                  className="rounded-md object-cover mb-4"
                />
                <div className="text-center">
                  <h2 className="text-xl font-bold">{medicineData.itemName}</h2>
                  <p className="text-sm text-muted-foreground">{medicineData.entpName}</p>
                  <div className="flex justify-center mt-2">
                    <Badge variant="outline">
                      {medicineData.etcOtcName || "일반의약품"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  재고 보유 약국
                  {pharmaciesLoading && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {pharmaciesLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">재고 정보를 확인하는 중...</p>
                    </div>
                  </div>
                ) : pharmaciesData.length > 0 ? (
                  <div className="space-y-4">
                    {pharmaciesData.map((pharmacy) => {
                      const isOpen = checkPharmacyOpen(pharmacy);
                      const quantity = getInventoryQuantity(pharmacy, medicineData.itemName);
                      
                      return (
                        <div key={pharmacy.hpid} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
                          <div className="mt-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{pharmacy.duty_name}</h3>
                              <Badge
                                variant={isOpen ? "default" : "outline"}
                                className={isOpen ? "bg-green-500" : ""}
                              >
                                {isOpen ? "영업중" : "영업종료"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs">{formatDistance(pharmacy.distance)}</span>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={quantity > 0 ? "default" : "outline"}
                                  className={quantity > 0 ? "bg-primary" : ""}
                                >
                                  {quantity > 0 ? `재고 ${quantity}개` : "재고 없음"}
                                </Badge>
                              </div>
                            </div>
                            {pharmacy.duty_tel1 && (
                              <div className="mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-xs"
                                  onClick={() => {
                                    window.location.href = `tel:${pharmacy.duty_tel1}`;
                                  }}
                                >
                                  📞 {pharmacy.duty_tel1}
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-muted-foreground space-y-2">
                      <p>현재 이 의약품을 보유한</p>
                      <p>주변 약국이 없습니다.</p>
                      <p className="text-xs">다른 지역에서 재고를 확인해보세요.</p>
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <Button className="w-full" onClick={handleViewOnMap}>
                    지도에서 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">주요 성분</h3>
                    <p>{medicineData.materialName || "성분 정보를 불러오는 중..."}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">효능 효과</h3>
                    <p>{medicineData.parsedContent?.effect?.mainEffect || medicineData.parsedContent?.effect?.detailedEffect || "효능효과 정보를 파싱하는 중..."}</p>
                    {medicineData.parsedContent?.effect?.targetDiseases && medicineData.parsedContent.effect.targetDiseases.length > 0 && (
                      <div className="mt-2">
                        <span className="text-sm font-medium">대상 질병: </span>
                        <span className="text-sm">{medicineData.parsedContent.effect.targetDiseases.join(', ')}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">용법 용량</h3>
                    <div className="space-y-2">
                      {medicineData.parsedContent?.usage?.dosage && (
                        <p><span className="font-medium">용량:</span> {medicineData.parsedContent.usage.dosage}</p>
                      )}
                      {medicineData.parsedContent?.usage?.frequency && (
                        <p><span className="font-medium">빈도:</span> {medicineData.parsedContent.usage.frequency}</p>
                      )}
                      {medicineData.parsedContent?.usage?.administrationMethod && (
                        <p><span className="font-medium">복용법:</span> {medicineData.parsedContent.usage.administrationMethod}</p>
                      )}
                      {!medicineData.parsedContent?.usage && (
                        <p>용법용량 정보를 파싱하는 중...</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">부작용</h3>
                    <div>
                      {medicineData.parsedContent?.caution?.sideEffects && medicineData.parsedContent.caution.sideEffects.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                          {medicineData.parsedContent.caution.sideEffects.map((sideEffect, index) => (
                            <li key={index} className="text-sm">{sideEffect}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>부작용 정보를 파싱하는 중...</p>
                      )}
                    </div>
                  </div>
                  {medicineData.storageMethod && (
                    <div>
                      <h3 className="font-bold text-lg">보관방법</h3>
                      <p>{medicineData.storageMethod}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {cautions.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg">주의사항</h3>
                {cautions.map((caution, index) => (
                  <Alert
                    key={index}
                    variant={
                      caution.severity === "high" ? "destructive" : caution.severity === "medium" ? "default" : null
                    }
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{caution.type}</AlertTitle>
                    <AlertDescription>{caution.description}</AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">리뷰</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {reviewStatsLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center space-y-2">
                      <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                      <p className="text-sm text-muted-foreground">리뷰 통계를 불러오는 중...</p>
                    </div>
                  </div>
                ) : Object.keys(reviewStats).length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">아직 등록된 리뷰가 없습니다.</p>
                    <p className="text-xs text-muted-foreground mt-1">첫 번째 리뷰를 작성해보세요!</p>
                  </div>
                ) : (
                  <>
                    {/* 동적 리뷰 통계 표시 - 카테고리 순서 고정 */}
                    {(() => {
                      // 카테고리 순서 정의
                      const categoryOrder = [
                        '효과',
                        '복용 편의성', 
                        '부작용',
                        '가격/접근성',
                        '기타 만족도',
                        '부정적 리뷰'
                      ];

                      return categoryOrder.map((categoryName) => {
                        const reviews = reviewStats[categoryName];
                        if (!reviews || reviews.length === 0) return null;

                        return (
                          <div key={categoryName} className="mb-6">
                            <h4 className={`font-semibold text-base mb-3 flex items-center gap-2 ${
                              categoryName === '부정적 리뷰' ? 'text-red-600' : ''
                            }`}>
                              {categoryName}
                            </h4>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {reviews.map((review) => {
                                // 사용자가 이 리뷰를 선택했는지 확인
                                const isUserSelected = userReviews.includes(review.text);
                                
                                return (
                                  <div 
                                    key={review.id} 
                                    className={`flex items-center gap-2 p-2 rounded-md border ${
                                      isUserSelected
                                        ? categoryName === '부정적 리뷰'
                                          ? 'bg-red-100 border-red-500 ring-1 ring-red-300'
                                          : 'bg-primary/10 border-primary ring-1 ring-primary/20'
                                        : 'bg-muted/50 border-border'
                                    }`}
                                  >
                                    <span>{review.emoji}</span>
                                    <span className={`text-sm ${
                                      isUserSelected 
                                        ? categoryName === '부정적 리뷰'
                                          ? 'font-medium text-red-700'
                                          : 'font-medium text-primary'
                                        : categoryName === '부정적 리뷰'
                                        ? 'text-red-600'
                                        : ''
                                    }`}>
                                      {review.text}
                                    </span>
                                    <span className={`text-xs ml-auto ${
                                      isUserSelected 
                                        ? categoryName === '부정적 리뷰'
                                          ? 'text-red-600 font-medium'
                                          : 'text-primary font-medium'
                                        : 'text-muted-foreground'
                                    }`}>
                                      {review.count}
                                    </span>
                                    {isUserSelected && (
                                      <span className={`text-xs font-bold ${
                                        categoryName === '부정적 리뷰' ? 'text-red-600' : 'text-primary'
                                      }`}>
                                        ✓
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }).filter(Boolean);
                    })()}

                    {/* 리뷰 통계 요약 */}
                    <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">총 리뷰 수: {totalReviews.toLocaleString()}개</span>
                        <span className="text-muted-foreground">참여자: {totalParticipants.toLocaleString()}명</span>
                      </div>
                      {userReviews.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-border">
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">✓</span>
                            <span className="text-xs text-muted-foreground">
                              체크표시는 내가 선택한 리뷰입니다
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                <div className="mt-4">
                  {status === 'loading' ? (
                    <Button variant="outline" className="w-full" disabled>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      로딩 중...
                    </Button>
                  ) : session ? (
                    <MedicineReviewDialog 
                      userReviews={userReviews}
                      onSubmit={handleReviewSubmit}
                    >
                      <Button variant="outline" className="w-full">
                        {userReviews.length > 0 ? '리뷰 수정하기' : '리뷰 작성하기'}
                      </Button>
                    </MedicineReviewDialog>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">
                          리뷰를 작성하려면 로그인이 필요합니다
                        </p>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/auth">
                            로그인하고 리뷰 작성하기
                          </Link>
                        </Button>
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
