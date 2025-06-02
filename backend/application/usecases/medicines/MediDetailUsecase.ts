// 의약품 상세 정보 조회 사용 usecase

import type { MediRepository } from '@/backend/domain/repositories/MediRepository';
import type { Medicine } from '@/backend/domain/entities/Medicine';
import { PdfParsingService } from '@/backend/infra/external/pdf/PdfParsingService';
import type {
  MediDetailDto,
  MediDetailRequestDto,
  MediDetailResponseDto,
  MediDocumentInfo,
  MediWarningInfo,
  MediStorageInfo,
  MediIdentificationInfo,
  MediAdditionalInfo,
  MediSystemInfo,
} from './dto/MediDetailDto';

/**
 * 의약품 상세 정보 조회 UseCase
 * Repository 계층과 Controller 계층 사이의 비즈니스 로직 처리
 */
export class MediDetailUsecase {
  private readonly pdfParsingService: PdfParsingService;

  constructor(private readonly mediRepository: MediRepository) {
    this.pdfParsingService = new PdfParsingService();
  }

  /**
   * 의약품 상세 정보 조회
   * @param request 조회 요청 정보
   * @returns 의약품 상세 정보 또는 에러 응답
   */
  async getMedicineDetail(request: MediDetailRequestDto): Promise<MediDetailResponseDto> {
    try {
      // 입력 검증
      if (!request.itemSeq || request.itemSeq.trim() === '') {
        return {
          success: false,
          error: {
            code: 'INVALID_ITEM_SEQ',
            message: '유효하지 않은 의약품 일련번호입니다.',
          },
        };
      }

      // Repository에서 의약품 조회
      const medicine = await this.mediRepository.findByItemSeq(request.itemSeq.trim());

      if (!medicine) {
        return {
          success: false,
          error: {
            code: 'MEDICINE_NOT_FOUND',
            message: '해당 의약품을 찾을 수 없습니다.',
          },
        };
      }

      // 취소된 의약품 체크
      if (medicine.cancelDate) {
        return {
          success: false,
          error: {
            code: 'MEDICINE_CANCELLED',
            message: '취소된 의약품입니다.',
          },
        };
      }

      // PDF 파싱 (비동기, 실패해도 기본 정보는 반환)
      let parsedContent;
      try {
        console.log(`\n📄 === PDF 파싱 프로세스 시작 ===`);
        console.log(`의약품: ${medicine.itemName} (${medicine.itemSeq})`);
        console.log(`제조사: ${medicine.entpName || '정보 없음'}`);
        console.log(`문서 현황:`);
        console.log(`  • EE (효능효과): ${medicine.eeDocId || '❌ 없음'}`);
        console.log(`  • UD (용법용량): ${medicine.udDocId || '❌ 없음'}`);
        console.log(`  • NB (주의사항): ${medicine.nbDocId || '❌ 없음'}`);
        
        const availableDocCount = [medicine.eeDocId, medicine.udDocId, medicine.nbDocId].filter(id => id).length;
        console.log(`파싱 대상 문서: ${availableDocCount}/3개`);
        
        parsedContent = await this.pdfParsingService.parseAllDocuments({
          itemSeq: medicine.itemSeq,
          effectDocId: medicine.eeDocId,
          usageDocId: medicine.udDocId,
          cautionDocId: medicine.nbDocId,
        });
        
        console.log(`\n✅ PDF 파싱 프로세스 완료 - itemSeq: ${medicine.itemSeq}`);
        
        // 🔍 파싱된 PDF 내용 상세 분석 및 로깅
        console.log('\n📊 ====== PDF 파싱 상세 결과 분석 ======');
        console.log(`📋 의약품 기본 정보:`);
        console.log(`   • 품목명: ${medicine.itemName}`);
        console.log(`   • 제조사: ${medicine.entpName || '정보 없음'}`);
        console.log(`   • 품목일련번호: ${medicine.itemSeq}`);
        console.log(`   • 파싱 완료 시간: ${parsedContent.parsedAt}`);
        
        // EE 문서 (효능효과) 파싱 결과 분석
        console.log(`\n🎯 === EE 문서 (효능효과) 파싱 결과 ===`);
        if (medicine.eeDocId) {
          if (parsedContent.effect) {
            console.log(`   ✅ 파싱 성공`);
            console.log(`   📄 문서 ID: ${medicine.eeDocId}`);
            console.log(`   📝 주요 효능: ${parsedContent.effect.mainEffect ? 
              parsedContent.effect.mainEffect.substring(0, 100) + '...' : '❌ 추출 실패'}`);
            console.log(`   📖 상세 효능: ${parsedContent.effect.detailedEffect ? 
              `${parsedContent.effect.detailedEffect.length}글자` : '❌ 추출 실패'}`);
            console.log(`   🎯 대상 질병: ${parsedContent.effect.targetDisease?.length || 0}개 추출`);
            if (parsedContent.effect.targetDisease?.length > 0) {
              parsedContent.effect.targetDisease.slice(0, 3).forEach((disease, idx) => {
                console.log(`      ${idx + 1}. ${disease}`);
              });
              if (parsedContent.effect.targetDisease.length > 3) {
                console.log(`      ... 외 ${parsedContent.effect.targetDisease.length - 3}개`);
              }
            }
            console.log(`   💊 치료 분류: ${parsedContent.effect.therapeuticClass || '❌ 추출 실패'}`);
          } else {
            console.log(`   ❌ 파싱 실패 - 문서 ID: ${medicine.eeDocId}`);
            console.log(`   🔍 가능한 원인: PDF 다운로드 실패, 텍스트 추출 실패, 파싱 패턴 불일치`);
          }
        } else {
          console.log(`   ⚠️ 문서 없음 - EE 문서 ID가 데이터베이스에 없습니다`);
        }
        
        // UD 문서 (용법용량) 파싱 결과 분석
        console.log(`\n💊 === UD 문서 (용법용량) 파싱 결과 ===`);
        if (medicine.udDocId) {
          if (parsedContent.usage) {
            console.log(`   ✅ 파싱 성공`);
            console.log(`   📄 문서 ID: ${medicine.udDocId}`);
            console.log(`   💉 용량 정보: ${parsedContent.usage.dosage ? 
              parsedContent.usage.dosage.substring(0, 80) + '...' : '❌ 추출 실패'}`);
            console.log(`   ⏰ 복용 횟수: ${parsedContent.usage.frequency || '❌ 추출 실패'}`);
            console.log(`   📋 복용법: ${parsedContent.usage.administration ? 
              `${parsedContent.usage.administration.length}글자` : '❌ 추출 실패'}`);
            console.log(`   ⏱️ 치료 기간: ${parsedContent.usage.duration ? 
              parsedContent.usage.duration.substring(0, 50) + '...' : '❌ 추출 실패'}`);
            console.log(`   ⚠️ 특별 지시: ${parsedContent.usage.specialInstructions ? 
              parsedContent.usage.specialInstructions.substring(0, 50) + '...' : '❌ 없음'}`);
            console.log(`   👥 연령별 용량:`);
            console.log(`      • 성인: ${parsedContent.usage.ageSpecificDosage.adult || '정보 없음'}`);
            console.log(`      • 소아: ${parsedContent.usage.ageSpecificDosage.child || '정보 없음'}`);
            console.log(`      • 고령자: ${parsedContent.usage.ageSpecificDosage.elderly || '정보 없음'}`);
          } else {
            console.log(`   ❌ 파싱 실패 - 문서 ID: ${medicine.udDocId}`);
            console.log(`   🔍 가능한 원인: PDF 다운로드 실패, 텍스트 추출 실패, 파싱 패턴 불일치`);
          }
        } else {
          console.log(`   ⚠️ 문서 없음 - UD 문서 ID가 데이터베이스에 없습니다`);
        }
        
        // NB 문서 (주의사항) 파싱 결과 분석
        console.log(`\n⚠️ === NB 문서 (주의사항) 파싱 결과 ===`);
        if (medicine.nbDocId) {
          if (parsedContent.caution) {
            console.log(`   ✅ 파싱 성공`);
            console.log(`   📄 문서 ID: ${medicine.nbDocId}`);
            console.log(`   🚫 금기사항: ${parsedContent.caution.contraindications?.length || 0}개 추출`);
            if (parsedContent.caution.contraindications?.length > 0) {
              parsedContent.caution.contraindications.slice(0, 2).forEach((item, idx) => {
                console.log(`      ${idx + 1}. ${item.substring(0, 60)}...`);
              });
              if (parsedContent.caution.contraindications.length > 2) {
                console.log(`      ... 외 ${parsedContent.caution.contraindications.length - 2}개`);
              }
            }
            console.log(`   ⚠️ 경고사항: ${parsedContent.caution.warnings?.length || 0}개 추출`);
            console.log(`   📝 일반주의: ${parsedContent.caution.precautions?.length || 0}개 추출`);
            console.log(`   🤒 부작용: ${parsedContent.caution.sideEffects?.length || 0}개 추출`);
            console.log(`   💊 상호작용: ${parsedContent.caution.interactions?.length || 0}개 추출`);
            console.log(`   🤰 임신 경고: ${parsedContent.caution.pregnancyWarning ? '✅ 있음' : '❌ 없음'}`);
            console.log(`   👶 어린이 경고: ${parsedContent.caution.childrenWarning ? '✅ 있음' : '❌ 없음'}`);
            console.log(`   👴 고령자 경고: ${parsedContent.caution.elderlyWarning ? '✅ 있음' : '❌ 없음'}`);
          } else {
            console.log(`   ❌ 파싱 실패 - 문서 ID: ${medicine.nbDocId}`);
            console.log(`   🔍 가능한 원인: PDF 다운로드 실패, 텍스트 추출 실패, 파싱 패턴 불일치`);
          }
        } else {
          console.log(`   ⚠️ 문서 없음 - NB 문서 ID가 데이터베이스에 없습니다`);
        }
        
        // 전체 파싱 성공률 계산 및 요약
        console.log(`\n📊 === 파싱 성공률 및 최종 요약 ===`);
        const totalExpected = availableDocCount;
        const successCount = [
          parsedContent.effect ? 1 : 0,
          parsedContent.usage ? 1 : 0,
          parsedContent.caution ? 1 : 0
        ].reduce((sum, val) => sum + val, 0);
        
        const successRate = totalExpected > 0 ? (successCount / totalExpected * 100).toFixed(1) : '0';
        console.log(`   📈 전체 성공률: ${successRate}% (${successCount}/${totalExpected})`);
        console.log(`   🎯 효능효과(EE): ${parsedContent.effect ? '✅ 성공' : '❌ 실패'}`);
        console.log(`   💊 용법용량(UD): ${parsedContent.usage ? '✅ 성공' : '❌ 실패'}`);
        console.log(`   ⚠️ 주의사항(NB): ${parsedContent.caution ? '✅ 성공' : '❌ 실패'}`);
        
        if (successCount === totalExpected && totalExpected > 0) {
          console.log(`   🎉 완벽한 파싱! 모든 문서가 성공적으로 처리되었습니다.`);
        } else if (successCount > 0) {
          console.log(`   ⚠️ 부분 성공: 일부 문서는 정상 파싱되었습니다.`);
        } else {
          console.log(`   😞 전체 실패: 모든 문서 파싱이 실패했습니다.`);
        }
        
        console.log(`====== PDF 파싱 상세 결과 분석 완료 ======\n`);
        
      } catch (pdfError) {
        console.error(`\n❌ === PDF 파싱 전체 실패 ===`);
        console.error(`의약품: ${medicine.itemName} (${medicine.itemSeq})`);
        console.error(`오류 내용:`, pdfError);
        console.log(`🔄 기본 정보만 제공하고 계속 진행합니다.`);
        console.log(`=====================================\n`);
        // PDF 파싱 실패해도 기본 정보는 제공
        parsedContent = undefined;
      }

      // Medicine Entity를 DTO로 변환
      const detailDto = this.convertToDetailDto(medicine, parsedContent);

      return {
        success: true,
        data: detailDto,
      };
    } catch (error) {
      console.error('의약품 상세 조회 오류:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: '의약품 상세 정보를 조회하는 중 오류가 발생했습니다.',
        },
      };
    }
  }

  /**
   * Medicine Entity를 MediDetailDto로 변환
   * @param medicine Medicine Entity
   * @param parsedContent PDF 파싱 결과 (선택적)
   * @returns MediDetailDto
   */
  private convertToDetailDto(medicine: Medicine, parsedContent?: any): MediDetailDto {
    // PDF 문서 정보 구성
    const documents: MediDocumentInfo = {
      effectDocId: medicine.eeDocId || null,
      usageDocId: medicine.udDocId || null,
      cautionDocId: medicine.nbDocId || null,
      insertFile: medicine.insertFile || null,
    };

    // 주의사항 정보 구성
    const warnings: MediWarningInfo = {
      typeCode: medicine.typeCode || null,
      typeName: medicine.typeName || null,
      etcOtcCode: medicine.etcOtcCode || null,
    };

    // 보관/포장 정보 구성
    const storage: MediStorageInfo = {
      storageMethod: medicine.storageMethod || null,
      validTerm: medicine.validTerm || null,
      packUnit: medicine.packUnit || null,
    };

    // 식별 정보 구성
    const identification: MediIdentificationInfo = {
      barCode: medicine.barCode || null,
      ediCode: medicine.ediCode || null,
      classNo: medicine.classNo || null,
    };

    // 기타 상세 정보 구성
    const additional: MediAdditionalInfo = {
      bizrno: medicine.bizrno || null,
      reexamDate: medicine.reexamDate || null,
      reexamTarget: medicine.reexamTarget || null,
      cancelDate: medicine.cancelDate || null,
      cancelName: medicine.cancelName || null,
      changeDate: medicine.changeDate || null,
    };

    // 시스템 정보 구성
    const system: MediSystemInfo = {
      createdAt: medicine.createdAt || null,
      updatedAt: medicine.updatedAt || null,
      itemPermitDate: medicine.itemPermitDate || null,
    };

    return {
      itemSeq: medicine.itemSeq,
      itemName: medicine.itemName,
      entpName: medicine.entpName || null,
      chart: medicine.chart || null,
      materialName: medicine.materialName || null,
      documents,
      parsedContent: parsedContent || undefined,
      warnings,
      storage,
      identification,
      additional,
      system,
    };
  }

  /**
   * 의약품 주의사항 유형 확인
   * @param medicine Medicine Entity
   * @returns 주의사항 유형 배열
   */
  private getWarningTypes(medicine: Medicine): string[] {
    const warningTypes: string[] = [];

    if (medicine.typeName) {
      // typeName에서 주의사항 유형 추출 (쉼표로 구분)
      const types = medicine.typeName.split(',').map((type) => type.trim());
      warningTypes.push(...types);
    }

    return warningTypes;
  }

  /**
   * 의약품이 특정 주의사항을 가지고 있는지 확인
   * @param medicine Medicine Entity
   * @param warningType 확인할 주의사항 유형
   * @returns 해당 주의사항 보유 여부
   */
  private hasWarningType(medicine: Medicine, warningType: string): boolean {
    const warningTypes = this.getWarningTypes(medicine);
    return warningTypes.some((type) => type.includes(warningType));
  }
}
