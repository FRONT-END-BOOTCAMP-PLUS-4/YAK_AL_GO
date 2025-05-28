// 의약품 목록 조회 사용 usecase

import type { MediRepository, MediListRequest } from '@/backend/domain/repositories/MediRepository';
import type { Medicine } from '@/backend/domain/entities/Medicine';
import type {
  MediListRequestDto,
  MediListResponseDto,
  MediBasicDto,
} from '@/backend/application/usecases/medicines/dto/MediListDto';

/**
 * 의약품 목록 조회 UseCase
 * Repository에서 Entity를 받아 DTO로 변환하여 반환
 */
export class MediListUsecase {
  constructor(private readonly mediRepository: MediRepository) {}

  /**
   * 의약품 목록 조회 실행
   * @param requestDto 화면에서 전달받은 요청 DTO
   * @returns 화면에 전달할 응답 DTO
   */
  async execute(requestDto: MediListRequestDto): Promise<MediListResponseDto> {
    try {
      // DTO를 Repository 요청 형태로 변환
      const repositoryRequest: MediListRequest = {
        limit: requestDto.limit,
        search: requestDto.search,
        category: requestDto.category,
        sortBy: requestDto.sortBy,
        cursor: requestDto.cursor,
      };

      // Repository에서 Entity 목록 조회
      const result = await this.mediRepository.findAll(repositoryRequest);

      // Entity를 DTO로 변환
      const mediBasicDtos: MediBasicDto[] = result.medicines.map((medicine: Medicine) =>
        this.convertEntityToDto(medicine)
      );

      // 응답 DTO 구성
      return {
        medicines: mediBasicDtos,
        hasMore: result.hasMore,
        nextCursor: result.nextCursor,
        totalCount: result.totalCount,
      };
    } catch (error) {
      console.error('의약품 목록 조회 UseCase 오류:', error);
      throw new Error('의약품 목록 조회 중 오류가 발생했습니다.');
    }
  }

  /**
   * Medicine Entity를 MediBasicDto로 변환
   * @param medicine 의약품 엔티티
   * @returns 의약품 기본 정보 DTO
   */
  private convertEntityToDto(medicine: Medicine): MediBasicDto {
    return {
      itemSeq: medicine.itemSeq,
      itemName: medicine.itemName,
      entpName: medicine.entpName || '', // undefined인 경우 빈 문자열로 변환
      classNo: medicine.classNo || '', // undefined인 경우 빈 문자열로 변환
      chart: medicine.chart,
      materialName: medicine.materialName,
      etcOtcCode: medicine.etcOtcCode,
    };
  }
}
