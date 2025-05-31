// 의약품 상세 정보 조회 사용 usecase

import type { MediRepository } from '@/backend/domain/repositories/MediRepository';
import type { Medicine } from '@/backend/domain/entities/Medicine';
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
  constructor(private readonly mediRepository: MediRepository) {}

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

      // Medicine Entity를 DTO로 변환
      const detailDto = this.convertToDetailDto(medicine);

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
   * @returns MediDetailDto
   */
  private convertToDetailDto(medicine: Medicine): MediDetailDto {
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
