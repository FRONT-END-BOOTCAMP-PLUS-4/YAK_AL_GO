"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapPin, AlertTriangle, ArrowLeft, ThumbsUp, ThumbsDown, Loader2 } from "lucide-react"
import { MedicineReviewDialog } from "@/components/medicine-review-dialog"
import { MedicineWarningDialog } from "@/components/medicine-warning-dialog"
import { MedicineReviewSummary } from "@/components/medicine-review-summary"

// API 응답 타입 정의
interface MediDetailApiResponse {
  success: boolean;
  data?: {
    itemSeq: string;
    itemName: string;
    entpName: string | null;
    chart: string | null;
    materialName: string | null;
    documents: {
      effectDocId: string | null;
      usageDocId: string | null;
      cautionDocId: string | null;
      insertFile: string | null;
    };
    parsedContent?: {
      effect?: {
        mainEffect: string;
        detailedEffect: string;
        targetDisease: string[];
        therapeuticClass: string;
      };
      usage?: {
        dosage: string;
        frequency: string;
        duration: string;
        administration: string;
        specialInstructions: string;
        ageSpecificDosage: {
          adult: string;
          child: string;
          elderly: string;
        };
      };
      caution?: {
        contraindications: string[];
        warnings: string[];
        precautions: string[];
        sideEffects: string[];
        interactions: string[];
        pregnancyWarning: string;
        childrenWarning: string;
        elderlyWarning: string;
      };
      parsedAt: string;
    };
    warnings: {
      typeCode: string | null;
      typeName: string | null;
      etcOtcCode: string | null;
    };
    storage: {
      storageMethod: string | null;
      validTerm: string | null;
      packUnit: string | null;
    };
    identification: {
      barCode: string | null;
      ediCode: string | null;
      classNo: string | null;
    };
    additional: {
      bizrno: string | null;
      reexamDate: string | null;
      reexamTarget: string | null;
      cancelDate: string | null;
      cancelName: string | null;
      changeDate: string | null;
    };
    system: {
      createdAt: string | null;
      updatedAt: string | null;
      itemPermitDate: string | null;
    };
  };
  error?: {
    code: string;
    message: string;
  };
}

// 주의사항 타입 정의
interface CautionInfo {
  type: string;
  description: string;
  severity: "high" | "medium" | "low";
}

// 텍스트 포맷팅 유틸리티 함수들
const formatTextWithLineBreaks = (text: string): string => {
  return text
    // 문장 끝 마침표 후 줄바꿈
    .replace(/\.\s*/g, '.\n')
    // 숫자와 단위 사이 공백 추가
    .replace(/(\d+)(mg|g|kg|ml|μg|mcg)/gi, '$1 $2')
    // 한글과 영문/숫자 사이 공백 추가
    .replace(/([가-힣])([a-zA-Z0-9])/g, '$1 $2')
    .replace(/([a-zA-Z0-9])([가-힣])/g, '$1 $2')
    // 연속된 줄바꿈 정리
    .replace(/\n{2,}/g, '\n')
    // 앞뒤 공백 제거
    .trim();
};

const formatBulletPoints = (items: string[]): string[] => {
  return items.map(item => {
    // 이미 불렛 포인트가 있으면 그대로, 없으면 추가
    if (item.match(/^[•·-]\s*/)) {
      return item;
    }
    return `• ${item}`;
  });
};

const formatDosageInfo = (text: string): string => {
  return text
    // ○ 기호 앞에 줄바꿈 추가
    .replace(/○/g, '\n○ ')
    // 의학 용어 사이 공백 추가
    .replace(/체중kg당/g, '체중 kg당')
    .replace(/(\d+)일/g, '$1일 ')
    .replace(/(\d+)회/g, '$1회 ')
    .replace(/(\d+)(mg|g|kg)/gi, '$1 $2')
    // 문장 구분 개선
    .replace(/\.(○|다음|환자)/g, '.\n$1')
    // 연속 공백 정리
    .replace(/\s+/g, ' ')
    .trim();
};

const formatMedicalText = (text: string): string => {
  return text
    // 의학 용어와 숫자 사이 공백
    .replace(/(\d+)(mg|g|kg|ml|μg|mcg|개월|주|일)/gi, '$1 $2')
    // 용량 관련 표현 개선
    .replace(/체중kg당/g, '체중 kg당')
    .replace(/1일(\d+)/g, '1일 $1')
    .replace(/1회(\d+)/g, '1회 $1')
    // 괄호 앞뒤 공백 추가
    .replace(/([가-힣])\(/g, '$1 (')
    .replace(/\)([가-힣])/g, ') $1')
    // 쉼표 뒤 공백 추가
    .replace(/,([가-힣a-zA-Z])/g, ', $1')
    // 연속 공백 정리
    .replace(/\s+/g, ' ')
    .trim();
};

const parseWarningsByCategory = (text: string): { [key: string]: string[] } => {
  const warnings: { [key: string]: string[] } = {
    '경고': [],
    '금기사항': [],
    '일반주의': [],
    '특수환자군': [],
  };

  // 경고 섹션 추출
  const warningMatch = text.match(/1\.\s*경고\s*([\s\S]*?)(?=2\.|$)/i);
  if (warningMatch) {
    const warningText = warningMatch[1];
    const warningItems = warningText.split(/\d+\)/).filter(item => item.trim().length > 10);
    warnings['경고'] = warningItems.map(item => formatMedicalText(item.trim()));
  }

  // 금기사항 섹션 추출  
  const contraindicationMatch = text.match(/2\.\s*다음\s*환자에는\s*투여하지\s*말\s*것\s*([\s\S]*?)(?=3\.|$)/i);
  if (contraindicationMatch) {
    const contrText = contraindicationMatch[1];
    const contrItems = contrText.split(/\d+\)/).filter(item => item.trim().length > 5);
    warnings['금기사항'] = contrItems.map(item => formatMedicalText(item.trim()));
  }

  return warnings;
};

export default function MedicineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15: params를 Promise로 처리
  const resolvedParams = use(params);
  const itemSeq = resolvedParams.id;

  const [medicineData, setMedicineData] = useState<MediDetailApiResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [pdfParsingStatus, setPdfParsingStatus] = useState<'pending' | 'parsing' | 'completed' | 'failed'>('pending');
  const [error, setError] = useState<string | null>(null);
  const [userReviews, setUserReviews] = useState<string[]>([]);
  const [userComment, setUserComment] = useState("");

  // API 호출 함수 (에러 처리 개선)
  const fetchMedicineDetail = async (itemSeq: string) => {
    try {
      setLoading(true);
      setError(null);
      setPdfParsingStatus('pending');

      console.log(`의약품 상세 조회 시작: ${itemSeq}`);

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
        }
        if (response.status >= 500) {
          throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      // Content-Type 확인
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('API가 JSON이 아닌 응답을 반환했습니다:', contentType);
        throw new Error('서버에서 올바르지 않은 응답을 받았습니다.');
      }

      const result: MediDetailApiResponse = await response.json();

      console.log('API 응답:', result);

      if (!result.success) {
        throw new Error(result.error?.message || '의약품 정보를 가져올 수 없습니다.');
      }

      // 기본 정보 먼저 설정
      setMedicineData(result.data || null);
      
      // PDF 파싱 상태 업데이트
      if (result.data?.parsedContent) {
        setPdfParsingStatus('completed');
      } else {
        // PDF 파싱이 진행 중이거나 실패한 경우
        const hasDocuments = result.data?.documents.effectDocId || 
                            result.data?.documents.usageDocId || 
                            result.data?.documents.cautionDocId;
        
        if (hasDocuments) {
          setPdfParsingStatus('failed');
        } else {
          setPdfParsingStatus('completed'); // PDF 문서가 없는 경우
        }
      }

      console.log(`의약품 상세 조회 완료: ${itemSeq}`);

    } catch (err) {
      console.error('의약품 상세 조회 오류:', err);
      
      // 네트워크 오류인 경우
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError('네트워크 연결을 확인해주세요.');
      } else {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      }
      setPdfParsingStatus('failed');
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    if (itemSeq) {
      fetchMedicineDetail(itemSeq);
    }
  }, [itemSeq]);

  // 주의사항 정보 생성
  const generateCautions = (medicine: NonNullable<typeof medicineData>): CautionInfo[] => {
    const cautions: CautionInfo[] = [];

    // PDF 파싱된 주의사항 활용
    if (medicine.parsedContent?.caution) {
      const { caution } = medicine.parsedContent;

      // 임신 관련 경고
      if (caution.pregnancyWarning) {
        cautions.push({
          type: "임산부",
          description: caution.pregnancyWarning,
          severity: "high",
        });
      }

      // 어린이 관련 경고
      if (caution.childrenWarning) {
        cautions.push({
          type: "어린이",
          description: caution.childrenWarning,
          severity: "medium",
        });
      }

      // 고령자 관련 경고
      if (caution.elderlyWarning) {
        cautions.push({
          type: "고령자",
          description: caution.elderlyWarning,
          severity: "medium",
        });
      }

      // 금기사항
      caution.contraindications.forEach((contraindication) => {
        cautions.push({
          type: "금기사항",
          description: contraindication,
          severity: "high",
        });
      });

      // 경고사항
      caution.warnings.forEach((warning) => {
        cautions.push({
          type: "경고",
          description: warning,
          severity: "medium",
        });
      });
    }

    // 기본 주의사항을 사용자 친화적으로 변환
    if (cautions.length === 0 && medicine.warnings.typeName) {
      const friendlyWarnings = convertToFriendlyWarnings(medicine.warnings.typeName);
      cautions.push(...friendlyWarnings);
    }

    return cautions;
  };

  // 의학 용어를 친근한 표현으로 변환하는 함수
  const convertToFriendlyWarnings = (typeName: string): CautionInfo[] => {
    const warnings: CautionInfo[] = [];
    
    // 쉼표로 구분된 주의사항들을 분리
    const warningTypes = typeName.split(',').map(warning => warning.trim());
    
    warningTypes.forEach(warning => {
      let friendlyMessage = '';
      let severity: "high" | "medium" | "low" = "medium";
      let category = '';

      // 의학 용어별 친근한 표현 매핑
      switch (warning) {
        case '임부금기':
          category = '임산부';
          friendlyMessage = '임신 중이거나 임신 가능성이 있는 경우 복용하지 마세요. 태아에게 영향을 줄 수 있습니다.';
          severity = 'high';
          break;

        case '수유부금기':
          category = '수유부';
          friendlyMessage = '모유 수유 중인 경우 복용하지 마세요. 모유를 통해 아기에게 전달될 수 있습니다.';
          severity = 'high';
          break;

        case '첨가제주의':
          category = '알레르기';
          friendlyMessage = '알레르기가 있는 분은 성분을 꼼꼼히 확인해주세요. 특정 첨가제에 반응할 수 있습니다.';
          severity = 'medium';
          break;

        case '소아금기':
          category = '어린이';
          friendlyMessage = '어린이에게는 사용하지 마세요. 성인용으로 제조된 의약품입니다.';
          severity = 'high';
          break;

        case '고령자주의':
          category = '고령자';
          friendlyMessage = '65세 이상 어르신은 의사와 상담 후 복용하세요. 부작용 위험이 높을 수 있습니다.';
          severity = 'medium';
          break;

        case '신장애주의':
          category = '신장 질환';
          friendlyMessage = '신장(콩팥) 기능이 좋지 않은 분은 의사와 상담 후 복용하세요.';
          severity = 'high';
          break;

        case '간장애주의':
          category = '간 질환';
          friendlyMessage = '간 기능이 좋지 않은 분은 의사와 상담 후 복용하세요.';
          severity = 'high';
          break;

        case '심장애주의':
          category = '심장 질환';
          friendlyMessage = '심장 질환이 있는 분은 의사와 상담 후 복용하세요.';
          severity = 'medium';
          break;

        case '운전주의':
          category = '운전 및 기계조작';
          friendlyMessage = '복용 후 졸음이나 어지러움이 올 수 있으니 운전이나 기계 조작 시 주의하세요.';
          severity = 'medium';
          break;

        case '중복투여주의':
          category = '중복 복용';
          friendlyMessage = '같은 성분의 다른 약과 함께 복용하지 마세요. 과복용 위험이 있습니다.';
          severity = 'medium';
          break;

        case '당뇨주의':
          category = '당뇨병';
          friendlyMessage = '당뇨병이 있는 분은 혈당 수치 변화를 주의 깊게 관찰하세요.';
          severity = 'medium';
          break;

        case '위장장애주의':
          category = '위장 질환';
          friendlyMessage = '위장 질환이 있는 분은 식후에 복용하거나 의사와 상담하세요.';
          severity = 'medium';
          break;

        case '혈액응고주의':
          category = '혈액응고 장애';
          friendlyMessage = '혈액응고 관련 약물을 복용 중인 분은 의사와 상담하세요.';
          severity = 'high';
          break;

        case '알코올주의':
          category = '음주';
          friendlyMessage = '복용 중에는 음주를 피해주세요. 부작용이 증가할 수 있습니다.';
          severity = 'medium';
          break;

        default:
          // 알 수 없는 용어인 경우 원문 그대로 표시하되 안내 추가
          category = '일반 주의사항';
          friendlyMessage = `${warning} - 자세한 내용은 의사나 약사와 상담해주세요.`;
          severity = 'low';
          break;
      }

      warnings.push({
        type: category,
        description: friendlyMessage,
        severity: severity,
      });
    });

    return warnings;
  };

  const handleReviewSubmit = (selectedOptions: string[], comment: string) => {
    setUserReviews(selectedOptions);
    setUserComment(comment);
    console.log("Review submitted:", { selectedOptions, comment });
  };

  // 용법용량 요약 함수
  const formatUsageInfo = (medicine: NonNullable<typeof medicineData>): string => {
    if (medicine.parsedContent?.usage) {
      const { usage } = medicine.parsedContent;
      
      // 기본 용법용량 정보 우선 표시
      let usageText = '';
      
      // 초기용량과 유지용량 정보 추출
      if (usage.dosage) {
        const dosageText = usage.dosage;
        
        // 이소티논 예시: "초기용량 체중kg당 0.5mg, 유지용량 0.5~1.0mg"
        if (dosageText.includes('초기용량') || dosageText.includes('유지용량')) {
          // 초기용량 추출
          const initialMatch = dosageText.match(/초기용량.*?체중\s*kg당\s*([\d.]+mg)/);
          const maintenanceMatch = dosageText.match(/유지용량.*?체중\s*kg당\s*([\d.~]+mg)/);
          
          if (initialMatch && maintenanceMatch) {
            usageText = `초기 ${initialMatch[1]}/kg, 유지 ${maintenanceMatch[1]}/kg`;
          } else if (initialMatch) {
            usageText = `초기용량: 체중 kg당 ${initialMatch[1]}`;
          } else {
            usageText = dosageText.substring(0, 100);
          }
        } else {
          usageText = dosageText.length > 80 ? dosageText.substring(0, 80) + '...' : dosageText;
        }
      }
      
      // 복용횟수 정보 추가
      if (usage.frequency && !usageText.includes('1일')) {
        const frequencyInfo = usage.frequency.length > 50 ? 
          usage.frequency.substring(0, 50) + '...' : usage.frequency;
        usageText += usageText ? `, ${frequencyInfo}` : frequencyInfo;
      }
      
      // 식사 관련 정보 추가
      if (usage.administration && usage.administration.includes('식사')) {
        usageText += ', 식사와 함께 복용';
      }
      
      return usageText || '용법용량 정보를 확인할 수 없습니다.';
    }
    
    return '용법용량 정보 없음';
  };

  // 부작용 요약 함수 (PDF 우선)
  const formatSideEffects = (medicine: NonNullable<typeof medicineData>): string => {
    if (medicine.parsedContent?.caution?.sideEffects) {
      const sideEffects = medicine.parsedContent.caution.sideEffects;
      
      if (sideEffects.length > 0) {
        // 중복 제거 및 정리
        const uniqueSideEffects = [...new Set(sideEffects)]
          .filter(effect => effect && effect.trim().length > 2)
          .map(effect => {
            // 긴 부작용 설명 단순화
            if (effect.length > 30) {
              const sentences = effect.split(/[.,]/).filter(s => s.trim().length > 3);
              return sentences[0]?.trim() || effect.substring(0, 30);
            }
            return effect.trim();
          })
          .slice(0, 5); // 최대 5개까지만 표시
        
        return uniqueSideEffects.join(', ') + (sideEffects.length > 5 ? ' 등' : '');
      }
    }
    
    return '부작용 정보를 확인할 수 없습니다.';
  };

  // 주요 효능 요약 함수 (PDF 우선)
  const formatMainEffect = (medicine: NonNullable<typeof medicineData>): string => {
    if (medicine.parsedContent?.effect) {
      const { effect } = medicine.parsedContent;
      
      // 주요 효능이 있으면 우선 표시
      if (effect.mainEffect) {
        // 이소티논 예시: "다른치료법으로잘치료되지않는중증의여드름"
        const mainEffect = effect.mainEffect;
        
        // 긴 텍스트 정리
        if (mainEffect.length > 100) {
          const sentences = mainEffect.split(/[.,]/).filter(s => s.trim().length > 5);
          return sentences[0]?.trim() + (sentences.length > 1 ? ' 등' : '') || mainEffect.substring(0, 100) + '...';
        }
        
        return mainEffect;
      } 
      
      // 대상 질병 정보로 대체
      if (effect.targetDisease.length > 0) {
        const diseases = effect.targetDisease.slice(0, 3);
        return diseases.join(', ') + (effect.targetDisease.length > 3 ? ' 등의 치료' : ' 치료');
      }
      
      // 상세 효능에서 추출
      if (effect.detailedEffect) {
        const firstSentence = effect.detailedEffect.split(/[.,]/)[0];
        return firstSentence.length > 80 ? firstSentence.substring(0, 80) + '...' : firstSentence;
      }
    }
    
    return '효능 정보를 확인할 수 없습니다.';
  };

  // 성분 정보 정리 함수 (기존 유지)
  const formatIngredients = (medicine: NonNullable<typeof medicineData>): string => {
    if (medicine.materialName) {
      const ingredients = medicine.materialName;
      
      // 주성분만 추출 (첫 번째 성분이 보통 주성분)
      const mainIngredient = ingredients.split(',')[0].trim();
      
      // mg, g 등의 단위가 포함되어 있으면 그대로 표시
      if (/\d+\s*(mg|g|μg|mcg|ml)/i.test(mainIngredient)) {
        return mainIngredient;
      }
      
      // 단위가 없으면 전체 성분명에서 주요 성분 추출
      const shortIngredients = ingredients.length > 60 
        ? ingredients.substring(0, 60) + '...'
        : ingredients;
      
      return shortIngredients;
    }
    
    return '성분 정보 없음';
  };

  // 로딩 상태
  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <div className="text-center">
            <p className="text-lg font-medium mb-2">의약품 정보를 불러오는 중...</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>• 기본 정보 조회</p>
              <p>• PDF 문서 파싱 (효능효과, 용법용량, 주의사항)</p>
              <p>• 최대 30초 소요될 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (error || !medicineData) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <AlertTriangle className="h-12 w-12 text-destructive" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">의약품 정보를 찾을 수 없습니다</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => fetchMedicineDetail(itemSeq)}>
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

  const medicine = medicineData;
  const cautions = generateCautions(medicine);

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
          <MedicineWarningDialog medicineName={medicine.itemName} warnings={cautions} />
        )}

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-48 h-48 bg-muted rounded-md flex items-center justify-center mb-4">
                  <span className="text-muted-foreground text-sm">이미지 준비중</span>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{medicine.itemName}</h2>
                  <p className="text-sm text-muted-foreground">{medicine.entpName || '제조사 정보 없음'}</p>
                  <div className="flex justify-center mt-2">
                    <Badge variant="outline">
                      {medicine.warnings.etcOtcCode === 'ETC' ? '전문의약품' : '일반의약품'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 임시 약국 정보 (추후 실제 API 연동) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">재고 보유 약국</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">약국 정보 준비중</p>
                </div>
                <div className="mt-4">
                  <Button asChild className="w-full">
                    <Link href={`/map?medicine=${medicine.itemName}`}>지도에서 보기</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* 핵심 정보 요약 카드 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">핵심 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-primary">주요 성분</h3>
                    <p className="text-base leading-relaxed">{formatIngredients(medicine)}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-primary">용법 용량</h3>
                    <p className="text-base leading-relaxed">{formatUsageInfo(medicine)}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 text-primary">주요 부작용</h3>
                    <p className="text-base leading-relaxed">{formatSideEffects(medicine)}</p>
                  </div>

                  {medicine.parsedContent?.effect && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-primary">효능 효과</h3>
                      <p className="text-base leading-relaxed">{formatMainEffect(medicine)}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 상세 정보 탭 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">상세 정보</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="effect" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="effect">효능·효과</TabsTrigger>
                    <TabsTrigger value="usage">용법·용량</TabsTrigger>
                    <TabsTrigger value="caution">주의사항</TabsTrigger>
                  </TabsList>
                  
                  {/* 효능·효과 탭 */}
                  <TabsContent value="effect" className="mt-6">
                    {medicine.parsedContent?.effect ? (
                      <div className="space-y-6">
                        {medicine.parsedContent.effect.mainEffect && (
                          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                            <h4 className="font-bold text-blue-800 mb-2">주요 효능</h4>
                            <p className="text-blue-700 whitespace-pre-line leading-relaxed">
                              {formatMedicalText(medicine.parsedContent.effect.mainEffect)}
                            </p>
                          </div>
                        )}
                        
                        {medicine.parsedContent.effect.detailedEffect && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">상세 효능</h4>
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                              {formatMedicalText(medicine.parsedContent.effect.detailedEffect)}
                            </p>
                          </div>
                        )}
                        
                        {medicine.parsedContent.effect.targetDisease.length > 0 && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">대상 질병</h4>
                            <div className="flex flex-wrap gap-2">
                              {medicine.parsedContent.effect.targetDisease.map((disease, index) => (
                                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                                  {formatMedicalText(disease)}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {medicine.parsedContent.effect.therapeuticClass && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">치료 분류</h4>
                            <Badge variant="outline" className="text-sm py-1 px-3">
                              {formatMedicalText(medicine.parsedContent.effect.therapeuticClass)}
                            </Badge>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">효능·효과 정보를 파싱할 수 없습니다.</p>
                        <p className="text-sm text-muted-foreground mt-2">PDF 문서에서 정보를 추출하지 못했습니다.</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  {/* 용법·용량 탭 */}
                  <TabsContent value="usage" className="mt-6">
                    {medicine.parsedContent?.usage ? (
                      <div className="space-y-6">
                        {/* 기본 용법용량 */}
                        <div className="grid gap-4 md:grid-cols-2">
                          {medicine.parsedContent.usage.dosage && (
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                              <h4 className="font-bold text-green-800 mb-2">용량</h4>
                              <p className="text-green-700 whitespace-pre-line leading-relaxed">
                                {formatDosageInfo(medicine.parsedContent.usage.dosage)}
                              </p>
                            </div>
                          )}
                          
                          {medicine.parsedContent.usage.frequency && (
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                              <h4 className="font-bold text-green-800 mb-2">복용 횟수</h4>
                              <p className="text-green-700 whitespace-pre-line leading-relaxed">
                                {formatMedicalText(medicine.parsedContent.usage.frequency)}
                              </p>
                            </div>
                          )}
                        </div>

                        {medicine.parsedContent.usage.administration && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">복용법</h4>
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed bg-gray-50 p-4 rounded-lg">
                              {formatMedicalText(medicine.parsedContent.usage.administration)}
                            </p>
                          </div>
                        )}
                        
                        {medicine.parsedContent.usage.specialInstructions && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">특별 지시사항</h4>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                              <p className="text-yellow-800 whitespace-pre-line leading-relaxed">
                                {formatMedicalText(medicine.parsedContent.usage.specialInstructions)}
                              </p>
                            </div>
                          </div>
                        )}

                        {medicine.parsedContent.usage.duration && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-3">치료 기간</h4>
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed bg-gray-50 p-4 rounded-lg">
                              {formatMedicalText(medicine.parsedContent.usage.duration)}
                            </p>
                          </div>
                        )}
                        
                        {/* 연령별 용량 */}
                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">연령별 용량</h4>
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="p-4 border rounded-lg">
                              <h5 className="font-semibold text-blue-600 mb-2">성인</h5>
                              <p className="text-sm text-gray-700">
                                {formatMedicalText(medicine.parsedContent.usage.ageSpecificDosage.adult || '별도 지시사항 없음')}
                              </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h5 className="font-semibold text-green-600 mb-2">소아</h5>
                              <p className="text-sm text-gray-700">
                                {formatMedicalText(medicine.parsedContent.usage.ageSpecificDosage.child || '별도 지시사항 없음')}
                              </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h5 className="font-semibold text-purple-600 mb-2">고령자</h5>
                              <p className="text-sm text-gray-700">
                                {formatMedicalText(medicine.parsedContent.usage.ageSpecificDosage.elderly || '별도 지시사항 없음')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">용법·용량 정보를 파싱할 수 없습니다.</p>
                        <p className="text-sm text-muted-foreground mt-2">PDF 문서에서 정보를 추출하지 못했습니다.</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  {/* 주의사항 탭 */}
                  <TabsContent value="caution" className="mt-6">
                    {medicine.parsedContent?.caution ? (
                      <div className="space-y-6">
                        {/* 임신 관련 경고 (최우선) */}
                        {medicine.parsedContent.caution.pregnancyWarning && (
                          <Alert variant="destructive" className="border-2">
                            <AlertTriangle className="h-5 w-5" />
                            <AlertTitle className="text-lg">임신 관련 경고</AlertTitle>
                            <AlertDescription className="mt-2 whitespace-pre-line leading-relaxed">
                              {formatMedicalText(medicine.parsedContent.caution.pregnancyWarning)}
                            </AlertDescription>
                          </Alert>
                        )}

                        {/* 금기사항 */}
                        {medicine.parsedContent.caution.contraindications.length > 0 && (
                          <div>
                            <h4 className="font-bold text-red-700 mb-4 text-lg">금기사항 (절대 복용 금지)</h4>
                            <div className="space-y-3">
                              {medicine.parsedContent.caution.contraindications.map((item, index) => (
                                <Alert key={index} variant="destructive">
                                  <AlertTriangle className="h-4 w-4" />
                                  <AlertDescription className="whitespace-pre-line leading-relaxed">
                                    {formatMedicalText(item)}
                                  </AlertDescription>
                                </Alert>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 경고사항 */}
                        {medicine.parsedContent.caution.warnings.length > 0 && (
                          <div>
                            <h4 className="font-bold text-orange-700 mb-4 text-lg">경고사항</h4>
                            <div className="space-y-3">
                              {medicine.parsedContent.caution.warnings.map((warning, index) => (
                                <Alert key={index} className="border-orange-200 bg-orange-50">
                                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                                  <AlertDescription className="text-orange-800 whitespace-pre-line leading-relaxed">
                                    {formatMedicalText(warning)}
                                  </AlertDescription>
                                </Alert>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 일반 주의사항 */}
                        {medicine.parsedContent.caution.precautions.length > 0 && (
                          <div>
                            <h4 className="font-bold text-blue-700 mb-4 text-lg">일반 주의사항</h4>
                            <div className="grid gap-3">
                              {medicine.parsedContent.caution.precautions.map((precaution, index) => (
                                <div key={index} className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                                  <p className="text-blue-800 whitespace-pre-line leading-relaxed">
                                    {formatMedicalText(precaution)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 부작용 상세 */}
                        {medicine.parsedContent.caution.sideEffects.length > 0 && (
                          <div>
                            <h4 className="font-bold text-purple-700 mb-4 text-lg">부작용 상세</h4>
                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                              <div className="grid gap-2 md:grid-cols-2">
                                {formatBulletPoints(medicine.parsedContent.caution.sideEffects.map(effect => formatMedicalText(effect))).map((effect, index) => (
                                  <p key={index} className="text-purple-800 text-sm">
                                    {effect}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 상호작용 */}
                        {medicine.parsedContent.caution.interactions.length > 0 && (
                          <div>
                            <h4 className="font-bold text-gray-800 mb-4 text-lg">약물 상호작용</h4>
                            <div className="space-y-2">
                              {medicine.parsedContent.caution.interactions.map((interaction, index) => (
                                <div key={index} className="p-3 bg-gray-50 border rounded-lg">
                                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                                    {formatMedicalText(interaction)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 특수 환자군 주의사항 */}
                        <div className="grid gap-4 md:grid-cols-2">
                          {medicine.parsedContent.caution.childrenWarning && (
                            <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                              <h5 className="font-bold text-green-800 mb-2">소아 주의사항</h5>
                              <p className="text-green-700 text-sm whitespace-pre-line leading-relaxed">
                                {formatMedicalText(medicine.parsedContent.caution.childrenWarning)}
                              </p>
                            </div>
                          )}

                          {medicine.parsedContent.caution.elderlyWarning && (
                            <div className="p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg">
                              <h5 className="font-bold text-indigo-800 mb-2">고령자 주의사항</h5>
                              <p className="text-indigo-700 text-sm whitespace-pre-line leading-relaxed">
                                {formatMedicalText(medicine.parsedContent.caution.elderlyWarning)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">주의사항 정보를 파싱할 수 없습니다.</p>
                        <p className="text-sm text-muted-foreground mt-2">PDF 문서에서 정보를 추출하지 못했습니다.</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 기존 주의사항 (PDF 파싱 실패 시 폴백) */}
            {(!medicine.parsedContent?.caution && cautions.length > 0) && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg">기본 주의사항</h3>
                {cautions.map((caution, index) => (
                  <Alert
                    key={index}
                    variant={
                      caution.severity === "high" ? "destructive" : caution.severity === "medium" ? "default" : undefined
                    }
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{caution.type}</AlertTitle>
                    <AlertDescription>{caution.description}</AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {/* PDF 파싱 상태 표시 */}
            {pdfParsingStatus === 'failed' && medicineData && (
              <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>PDF 파싱 정보</AlertTitle>
                <AlertDescription>
                  일부 상세 정보(PDF 문서)를 불러오지 못했습니다. 기본 정보는 정상적으로 표시됩니다.
                  {medicineData.documents.effectDocId && <span className="block text-xs mt-1">• 효능효과 문서 파싱 실패</span>}
                  {medicineData.documents.usageDocId && <span className="block text-xs mt-1">• 용법용량 문서 파싱 실패</span>}
                  {medicineData.documents.cautionDocId && <span className="block text-xs mt-1">• 주의사항 문서 파싱 실패</span>}
                </AlertDescription>
              </Alert>
            )}

            {pdfParsingStatus === 'completed' && medicineData?.parsedContent && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <ThumbsUp className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">상세 정보 로드 완료</AlertTitle>
                <AlertDescription className="text-green-700">
                  PDF 문서에서 추출한 상세한 효능효과, 용법용량, 주의사항 정보를 확인하실 수 있습니다.
                </AlertDescription>
              </Alert>
            )}

            {/* 임시 리뷰 섹션 (추후 실제 API 연동) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">리뷰</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <ThumbsUp className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">리뷰 기능 준비중</p>
                </div>
                <div className="mt-4">
                  <MedicineReviewDialog onSubmit={handleReviewSubmit}>
                    <Button variant="outline" className="w-full">
                      리뷰 작성하기
                    </Button>
                  </MedicineReviewDialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
