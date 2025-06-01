'use client';

import { useState, useEffect, use, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MapPin, AlertTriangle, ArrowLeft, Loader2 } from 'lucide-react';
import { MedicineReviewDialog } from '@/components/medicine-review-dialog';
import { MedicineWarningDialog } from '@/components/medicine-warning-dialog';
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
    typeName?: string;
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
  severity: 'high' | 'medium' | 'low';
}

interface MedicineData {
  itemSeq: string;
  itemName: string;
  entpName: string;
  etcOtcName?: string;
  materialName?: string;
  storageMethod?: string;
  validTerm?: string;
  typeName?: string;
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
  const [userComment, setUserComment] = useState('');

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
      let lng = 126.978; // 서울 시청 경도

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
      }

      const params = new URLSearchParams({
        medicine: medicineName,
        lat: lat.toString(),
        lng: lng.toString(),
        showOnlyOpen: 'false', // 영업 여부와 관계없이 모든 약국 조회
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
      const filteredPharmacies = pharmaciesResult.filter((pharmacy) =>
        pharmacy.inventories.some(
          (inv) => inv.medicines.item_name === medicineName && inv.quantity > 0
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

      const response = await fetch(`/api/medicines/${itemSeq}/reviews?t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
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
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          selectedOptions,
        }),
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

        throw new Error(
          errorData.error?.message || `리뷰 등록에 실패했습니다. (${response.status})`
        );
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

      // 성공 메시지 표시
      if (result.data?.addedCount >= 0 || result.data?.removedCount >= 0) {
        const message = `리뷰가 성공적으로 업데이트되었습니다. (추가: ${result.data.addedCount}개, 제거: ${result.data.removedCount}개)`;
      }

      // 사용자 상태 미리 업데이트 (즉시 반영)
      setUserReviews([...selectedOptions]);
      setUserComment(comment);

      // 1초 지연 후 서버에서 최신 데이터 가져오기
      setTimeout(async () => {
        try {
          setLoading(true, '최신 리뷰 정보를 불러오는 중...');
          await fetchReviewStats(itemSeq);
        } catch (error) {
          console.error('리뷰 통계 업데이트 실패:', error);
          // 통계 업데이트 실패해도 사용자가 설정한 리뷰는 유지
        } finally {
          setLoading(false);
        }
      }, 1000);

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
      setLoading(false);
    }
  };

  // type_name 파싱 및 경고 생성 함수들
  const parseTypeNameWarnings = (typeName: string | undefined): CautionInfo[] => {
    if (!typeName) return [];

    const warnings: CautionInfo[] = [];
    const typeList = typeName.split(',').map((type) => type.trim());

    const warningMap: Record<
      string,
      { type: string; description: string; severity: 'high' | 'medium' | 'low' }
    > = {
      임부금기: {
        type: '임신 중 복용 금지',
        description:
          '임신 중이거나 임신 가능성이 있는 여성은 이 약을 복용하지 마세요. 태아에게 해를 끼칠 수 있습니다.',
        severity: 'high',
      },
      수유금기: {
        type: '수유 중 복용 금지',
        description:
          '수유 중인 여성은 이 약을 복용하지 마세요. 모유를 통해 아기에게 전달될 수 있습니다.',
        severity: 'high',
      },
      소아금기: {
        type: '소아 복용 금지',
        description: '소아(만 18세 미만)는 이 약을 복용하지 마세요. 안전성이 확립되지 않았습니다.',
        severity: 'high',
      },
      고령금기: {
        type: '고령자 복용 금지',
        description:
          '65세 이상 고령자는 이 약 복용 시 특별한 주의가 필요합니다. 의사와 상의하세요.',
        severity: 'high',
      },
      용량주의: {
        type: '용량 조절 필요',
        description:
          '개인의 상태에 따라 용량 조절이 필요할 수 있습니다. 정확한 용량을 지켜 복용하세요.',
        severity: 'medium',
      },
      투여기간주의: {
        type: '투여 기간 제한',
        description:
          '장기간 복용 시 부작용 위험이 증가할 수 있습니다. 의사의 지시에 따라 복용 기간을 조절하세요.',
        severity: 'medium',
      },
      첨가제주의: {
        type: '첨가제 알레르기 주의',
        description:
          '이 약에 포함된 첨가제에 알레르기가 있는 경우 복용하지 마세요. 성분을 확인해주세요.',
        severity: 'medium',
      },
      신장애주의: {
        type: '신장 질환자 주의',
        description: '신장 질환이 있는 경우 용량 조절이나 복용 중단이 필요할 수 있습니다.',
        severity: 'high',
      },
      간장애주의: {
        type: '간 질환자 주의',
        description: '간 질환이 있는 경우 용량 조절이나 복용 중단이 필요할 수 있습니다.',
        severity: 'high',
      },
      심장애주의: {
        type: '심장 질환자 주의',
        description: '심장 질환이 있는 경우 복용 전 의사와 상의하세요.',
        severity: 'high',
      },
      당뇨주의: {
        type: '당뇨병 환자 주의',
        description: '당뇨병이 있는 경우 혈당 수치 변화를 주의 깊게 관찰하세요.',
        severity: 'medium',
      },
      운전주의: {
        type: '운전 및 기계 조작 주의',
        description:
          '이 약 복용 후 졸음이나 어지러움이 올 수 있으니 운전이나 기계 조작을 피하세요.',
        severity: 'medium',
      },
      알코올주의: {
        type: '음주 금지',
        description: '이 약 복용 중에는 음주를 피하세요. 부작용이 증가할 수 있습니다.',
        severity: 'medium',
      },
    };

    typeList.forEach((type) => {
      if (warningMap[type]) {
        warnings.push(warningMap[type]);
      } else if (type) {
        // 매핑되지 않은 경고도 처리
        warnings.push({
          type: '주의사항',
          description: `${type} 관련 주의가 필요합니다. 복용 전 의사나 약사와 상의하세요.`,
          severity: 'medium',
        });
      }
    });

    return warnings;
  };

  // 기존 generateCautions와 type_name 경고를 합치는 함수
  const getAllCautions = (medicineData: MedicineData): CautionInfo[] => {
    const cautions: CautionInfo[] = [];

    // type_name 기반 경고 추가
    // 테스트용: typeName이 없으면 샘플 데이터 사용
    const typeNameToUse = medicineData.typeName || '임부금기,용량주의,첨가제주의'; // 테스트용 임시 데이터
    const typeNameWarnings = parseTypeNameWarnings(typeNameToUse);
    cautions.push(...typeNameWarnings);

    // 기존 parsedContent 기반 경고 추가
    if (medicineData.parsedContent?.caution) {
      const { contraindications, warnings, specialGroups } = medicineData.parsedContent.caution;

      contraindications?.forEach((contraindication) => {
        cautions.push({
          type: '금기사항',
          description: contraindication,
          severity: 'high',
        });
      });

      warnings?.forEach((warning) => {
        cautions.push({
          type: '주의사항',
          description: warning,
          severity: 'medium',
        });
      });

      specialGroups?.forEach((group) => {
        let severity: 'high' | 'medium' | 'low' = 'medium';

        if (group.includes('임신') || group.includes('간') || group.includes('심장')) {
          severity = 'high';
        } else if (group.includes('고령') || group.includes('소아')) {
          severity = 'medium';
        } else {
          severity = 'low';
        }

        cautions.push({
          type: '특수환자군',
          description: group,
          severity,
        });
      });
    }

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
    const inventory = pharmacy.inventories.find((inv) => inv.medicines.item_name === medicineName);
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
      const pharmacyIds = pharmaciesData.map((p) => p.hpid);
      params.set('pharmacyIds', pharmacyIds.join(','));

      // 자동 포커스 플래그
      params.set('autoFocus', 'true');
    }

    window.location.href = `/map?${params.toString()}`;
  };

  // 주요 성분 데이터 파싱 함수
  const parseMaterialName = (materialName: string | undefined): string => {
    if (!materialName) {
      return '성분 정보를 불러오는 중...';
    }

    try {
      // 쉼표와 슬래시로 구분된 성분들을 분리
      const components = materialName.split('/').filter((component) => component.trim());

      const parsedComponents = components
        .map((component) => {
          // 각 성분을 쉼표로 분리하여 파싱
          const parts = component
            .split(',')
            .map((part) => part.trim())
            .filter((part) => part);

          if (parts.length === 0) return null;

          const componentName = parts[0]; // 첫 번째는 성분명
          let dosage = '';
          let unit = '';

          // 용량과 단위 찾기
          for (let i = 1; i < parts.length; i++) {
            const part = parts[i];

            // 숫자가 포함된 부분을 용량으로 간주
            if (/\d/.test(part) && !dosage) {
              dosage = part;
            }

            // 단위로 보이는 부분 (밀리그램, 그램, 마이크로그램 등)
            if (
              ['밀리그램', '그램', 'mg', 'g', 'μg', '마이크로그램', '밀리리터', 'ml'].some((u) =>
                part.includes(u)
              )
            ) {
              unit = part;
            }
          }

          // 성분명만 있는 경우
          if (!dosage || dosage === '') {
            return componentName;
          }

          // 용량과 단위가 있는 경우
          if (unit) {
            return `${componentName} ${dosage}${unit}`;
          } else {
            return `${componentName} ${dosage}`;
          }
        })
        .filter((component) => component !== null);

      return parsedComponents.length > 0 ? parsedComponents.join(', ') : materialName; // 파싱 실패 시 원본 반환
    } catch (error) {
      console.error('성분 파싱 오류:', error);
      return materialName; // 오류 시 원본 반환
    }
  };

  // 의약품 이름 포맷팅 함수 - 괄호 부분 줄바꿈 및 용량 작게 표시
  const formatMedicineName = (itemName: string) => {
    if (!itemName) return null;

    // 괄호 분리: "타이레놀정 500mg (100정)" -> ["타이레놀정 500mg", "(100정)"]
    const bracketMatch = itemName.match(/^(.+?)(\s*\([^)]+\))(.*)$/);

    // 약품명에서 용량 정보 추출을 위한 정규식
    // 공백이 있는 경우 (타이레놀정 500mg)와 공백이 없는 경우 (자디스듀오서방정10/1000밀리그램) 모두 처리
    const extractDosage = (name: string) => {
      // 공백 없이 숫자가 바로 붙는 경우 (자디스듀오서방정10/1000밀리그램)
      const noSpaceMatch = name.match(
        /^(.+?)((?:\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)+\s*(?:mg|g|밀리그램|그램|마이크로그램|μg|ml|밀리리터))(.*)$/i
      );

      // 공백이 있는 경우 (타이레놀정 500mg)
      const withSpaceMatch = name.match(
        /^(.+?)\s+((?:\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)+\s*(?:mg|g|밀리그램|그램|마이크로그램|μg|ml|밀리리터))(.*)$/i
      );

      return noSpaceMatch || withSpaceMatch;
    };

    if (bracketMatch) {
      const mainPart = bracketMatch[1].trim(); // "타이레놀정 500mg"
      const bracketPart = bracketMatch[2].trim(); // "(100정)"
      const afterBracket = bracketMatch[3] ? bracketMatch[3].trim() : ''; // 괄호 뒤 텍스트

      const dosageMatch = extractDosage(mainPart);

      return (
        <div className="text-center">
          {/* 메인 부분 - 약품명만 크게 표시 */}
          <div className="text-xl font-bold">
            {dosageMatch ? dosageMatch[1] : mainPart} {/* 약품명 */}
          </div>

          {/* 용량 정보 - 작게 표시하고 줄바꿈 */}
          {dosageMatch && (
            <div className="text-base font-medium text-muted-foreground mt-1">
              {dosageMatch[2]} {/* 용량 */}
              {dosageMatch[3]} {/* 나머지 */}
            </div>
          )}

          {/* 괄호 뒤의 텍스트가 있으면 작게 표시 */}
          {afterBracket && (
            <div className="text-base font-medium text-muted-foreground mt-1">{afterBracket}</div>
          )}

          {/* 괄호 내용 (예: 100정) - 작게 표시 */}
          <div className="text-sm font-medium text-muted-foreground mt-1">{bracketPart}</div>
        </div>
      );
    } else {
      // 괄호가 없는 경우 - 용량만 작게 표시
      const dosageMatch = extractDosage(itemName);

      return (
        <div className="text-center">
          {/* 약품명만 크게 표시 */}
          <div className="text-xl font-bold">{dosageMatch ? dosageMatch[1] : itemName}</div>

          {/* 용량 정보 - 작게 표시하고 줄바꿈 */}
          {dosageMatch && (
            <div className="text-base font-medium text-muted-foreground mt-1">
              {dosageMatch[2]} {/* 용량 */}
              {dosageMatch[3]} {/* 나머지 */}
            </div>
          )}
        </div>
      );
    }
  };

  // cautions를 useMemo로 메모이제이션하여 Hook 순서 안정화
  const cautions = useMemo(() => {
    return medicineData ? getAllCautions(medicineData) : [];
  }, [medicineData]);

  // PDF 문서 URL 생성 함수
  const getPdfDocumentUrl = (docId: string | null): string | null => {
    if (!docId || !medicineData) return null;
    return `https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=${medicineData.itemSeq}&openDataInfoSeq=${docId}`;
  };

  // 에러 상태 - Hook 순서 안정화를 위해 여기로 이동
  if (error && !medicineData) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <AlertTriangle className="h-12 w-12 text-destructive" />
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">의약품 정보를 찾을 수 없습니다</h2>
            <p className="text-muted-foreground max-w-md">
              {error || '요청하신 의약품의 상세 정보를 불러올 수 없습니다.'}
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

        <MedicineWarningDialog medicineName={medicineData.itemName} warnings={cautions} />

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
                  {formatMedicineName(medicineData.itemName)}
                  <p className="text-base font-medium text-black mt-2">{medicineData.entpName}</p>
                  <div className="flex justify-center mt-2">
                    <Badge variant="outline">{medicineData.etcOtcName || '일반의약품'}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  재고 보유 약국
                  {pharmaciesLoading && <Loader2 className="h-4 w-4 animate-spin" />}
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
                        <div
                          key={pharmacy.hpid}
                          className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0"
                        >
                          <div className="mt-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{pharmacy.duty_name}</h3>
                              <Badge
                                variant={isOpen ? 'default' : 'outline'}
                                className={isOpen ? 'bg-green-500' : ''}
                              >
                                {isOpen ? '영업중' : '영업종료'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs">{formatDistance(pharmacy.distance)}</span>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={quantity > 0 ? 'default' : 'outline'}
                                  className={quantity > 0 ? 'bg-primary' : ''}
                                >
                                  {quantity > 0 ? `재고 ${quantity}개` : '재고 없음'}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">주요 성분</h3>
                  <div className="h-px bg-gray-200 w-full mt-2 mb-3"></div>
                  <div className="bg-muted/30 p-3 rounded-md">
                    <p className="text-sm leading-relaxed">
                      {parseMaterialName(medicineData.materialName)}
                    </p>
                  </div>
                 
                  {medicineData.storageMethod && (
                    <div className="mt-4">
                      <h3 className="text-lg font-bold">보관 방법</h3>
                      <div className="h-px bg-gray-200 w-full mt-2 mb-3"></div>
                      <div className="bg-muted/30 p-3 rounded-md">
                        <p className="text-sm leading-relaxed">{medicineData.storageMethod}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {cautions.length > 0 ? (
                <Card>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      주의 사항
                    </CardTitle>
                    <div className="h-px bg-gray-200 w-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div
                      className="max-h-[300px] overflow-y-auto scroll-container"
                      style={{
                        WebkitOverflowScrolling: 'touch',
                        boxSizing: 'border-box',
                        paddingRight: '24px', // 스크롤바와 내용 사이 간격 증가
                      }}
                    >
                      {/* type_name 기반 중요 경고 먼저 표시 */}
                      {(() => {
                        const typeNameWarnings = parseTypeNameWarnings(medicineData.typeName);
                        const highSeverityCautions = cautions.filter(
                          (caution) => caution.severity === 'high'
                        );
                        const mediumSeverityCautions = cautions.filter(
                          (caution) => caution.severity === 'medium'
                        );
                        const lowSeverityCautions = cautions.filter(
                          (caution) => caution.severity === 'low'
                        );

                        return (
                          <>
                            {/* 높은 위험도 경고 */}
                            {highSeverityCautions.length > 0 && (
                              <div className="space-y-3">
                                <h4 className="font-semibold text-red-600 flex items-center gap-2 text-base whitespace-nowrap">
                                  🚨 필수 확인 사항
                                </h4>
                                {highSeverityCautions.map((caution, index) => (
                                  <div
                                    key={`high-${index}`}
                                    className="bg-red-50 border border-red-200 rounded-lg overflow-hidden"
                                  >
                                    <div className="bg-red-100 px-4 py-2 border-b border-red-200">
                                      <span className="font-bold text-red-800">{caution.type}</span>
                                    </div>
                                    <div className="p-3 text-red-700">{caution.description}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 중간 위험도 경고 */}
                            {mediumSeverityCautions.length > 0 && (
                              <div className="space-y-3 mt-4">
                                <h4 className="font-semibold text-orange-600 flex items-center gap-2 text-base whitespace-nowrap">
                                  ⚠️ 주의 필요 사항
                                </h4>
                                {mediumSeverityCautions.map((caution, index) => (
                                  <div
                                    key={`medium-${index}`}
                                    className="bg-yellow-50 border border-yellow-200 rounded-lg overflow-hidden"
                                  >
                                    <div className="bg-yellow-100 px-4 py-2 border-b border-yellow-200">
                                      <span className="font-bold text-yellow-800">
                                        {caution.type}
                                      </span>
                                    </div>
                                    <div className="p-3 text-yellow-700">{caution.description}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 낮은 위험도 경고 */}
                            {lowSeverityCautions.length > 0 && (
                              <div className="space-y-3 mt-4">
                                <h4 className="font-semibold text-blue-600 flex items-center gap-2 text-base whitespace-nowrap">
                                  📋 일반 주의사항
                                </h4>
                                {lowSeverityCautions.map((caution, index) => (
                                  <div
                                    key={`low-${index}`}
                                    className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden"
                                  >
                                    <div className="bg-blue-100 px-4 py-2 border-b border-blue-200">
                                      <span className="font-bold text-blue-800">
                                        {caution.type}
                                      </span>
                                    </div>
                                    <div className="p-3 text-blue-700">{caution.description}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 전문의 상담 권고 */}
                            <div className="mt-5 p-4 bg-white border border-gray-200 rounded-lg">
                              <div className="flex items-start gap-3">
                                <div className="bg-gray-100 p-2 rounded-full mt-0.5">
                                  <AlertTriangle className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                  <h5 className="font-bold text-black">전문의 상담 권고</h5>
                                  <p className="text-sm text-gray-800 mt-1">
                                    위 주의사항에 해당하거나 복용 중 이상 반응이 나타날 경우, 즉시
                                    복용을 중단하고 의사나 약사와 상의하세요.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg">주의사항</CardTitle>
                    <div className="h-px bg-gray-200 w-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div
                      className="max-h-[300px] overflow-y-auto scroll-container"
                      style={{
                        WebkitOverflowScrolling: 'touch',
                        boxSizing: 'border-box',
                        paddingRight: '24px', // 스크롤바와 내용 사이 간격 증가
                      }}
                    >
                      <p className="text-muted-foreground">주의사항 정보가 없습니다.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* 통합된 PDF 문서 링크 - 모든 문서가 있는 경우에만 표시 */}
            {(medicineData.documents.effectDocId ||
              medicineData.documents.usageDocId ||
              medicineData.documents.cautionDocId) && (
              <Card>
                <CardContent className="p-4">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-lg mb-3">의약품 상세 정보</h3>

                    <div className="bg-white p-3 rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <a
                        href={
                          getPdfDocumentUrl(
                            medicineData.documents.effectDocId ||
                              medicineData.documents.usageDocId ||
                              medicineData.documents.cautionDocId
                          ) || '#'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-primary"
                      >
                        <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-file-text text-primary"
                            aria-label="문서 아이콘"
                          >
                            <title>문서 아이콘</title>
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" x2="8" y1="13" y2="13" />
                            <line x1="16" x2="8" y1="17" y2="17" />
                            <line x1="10" x2="8" y1="9" y2="9" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="font-medium text-primary">
                            효능효과, 용법용량, 부작용 정보 보기
                          </span>
                          <p className="text-xs text-gray-600 mt-1">
                            상세 설명서를 새 창에서 확인할 수 있습니다
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-external-link"
                            aria-label="외부 링크 아이콘"
                          >
                            <title>외부 링크 아이콘</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <p className="text-xs text-muted-foreground mt-1">
                      첫 번째 리뷰를 작성해보세요!
                    </p>
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
                        '부정적 리뷰',
                      ];

                      return categoryOrder
                        .map((categoryName) => {
                          const reviews = reviewStats[categoryName];
                          if (!reviews || reviews.length === 0) return null;

                          // 리뷰 개수(count)가 많은 순으로 정렬
                          const sortedReviews = [...reviews].sort((a, b) => b.count - a.count);
                          
                          // 각 카테고리당 최대 5개의 리뷰만 표시
                          const limitedReviews = sortedReviews.slice(0, 5);

                          return (
                            <div key={categoryName} className="mb-6">
                              <h4
                                className={`font-semibold text-base mb-3 flex items-center gap-2 ${
                                  categoryName === '부정적 리뷰' ? 'text-red-600' : ''
                                }`}
                              >
                                {categoryName}
                              </h4>
                              <div className="grid grid-cols-2 gap-2 mb-4">
                                {limitedReviews.map((review) => {
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
                                      <span
                                        className={`text-sm ${
                                          isUserSelected
                                            ? categoryName === '부정적 리뷰'
                                              ? 'font-medium text-red-700'
                                              : 'font-medium text-primary'
                                            : categoryName === '부정적 리뷰'
                                              ? 'text-red-600'
                                              : ''
                                        }`}
                                      >
                                        {review.text}
                                      </span>
                                      <span
                                        className={`text-xs ml-auto ${
                                          isUserSelected
                                            ? categoryName === '부정적 리뷰'
                                              ? 'text-red-600 font-medium'
                                              : 'text-primary font-medium'
                                            : 'text-muted-foreground'
                                        }`}
                                      >
                                        {review.count}
                                      </span>
                                      {isUserSelected && (
                                        <span
                                          className={`text-xs font-bold ${
                                            categoryName === '부정적 리뷰'
                                              ? 'text-red-600'
                                              : 'text-primary'
                                          }`}
                                        >
                                          ✓
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })
                        .filter(Boolean);
                    })()}

                    {/* 리뷰 통계 요약 */}
                    <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">
                          총 리뷰 수: {totalReviews.toLocaleString()}개
                        </span>
                        <span className="text-muted-foreground">
                          참여자: {totalParticipants.toLocaleString()}명
                        </span>
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
                    <MedicineReviewDialog userReviews={userReviews} isEditing={userReviews.length > 0} onSubmit={handleReviewSubmit}>
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
                          <Link href="/auth">로그인하고 리뷰 작성하기</Link>
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
  );
}