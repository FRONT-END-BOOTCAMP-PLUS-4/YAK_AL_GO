// 의약품 데이터 저장 및 조회 기능 구현
import type {
  MediRepository,
  MediListRequest,
  MediListResult,
} from '@/backend/domain/repositories/MediRepository';
import type { CategoryType } from '@/backend/application/usecases/medicines/dto/MediListDto';
import { CATEGORY_KEYWORDS, DISEASE_CLASS_NO_MAP } from '@/backend/application/usecases/medicines/dto/MediListDto';
import { Medicine } from '@/backend/domain/entities/Medicine';

// Prisma 쿼리 조건 타입 정의
interface WhereCondition {
  cancel_date?: null;
  OR?: Array<{
    item_name?: { contains: string; mode: 'insensitive' };
    material_name?: { contains: string; mode: 'insensitive' };
    entp_name?: { contains: string; mode: 'insensitive' };
    class_no?: { contains: string; mode: 'insensitive' };
  }>;
  class_no?: { contains: string; mode: 'insensitive' };
  item_seq?: { gt: string };
}

// Prisma 정렬 조건 타입 정의
interface OrderByCondition {
  item_name?: 'asc' | 'desc';
  updated_at?: 'asc' | 'desc';
}

// Prisma 클라이언트 타입 정의
interface PrismaClient {
  medicines: {
    findMany: (args: {
      where?: WhereCondition;
      orderBy?: OrderByCondition;
      take?: number;
      skip?: number;
      select?: {
        item_seq: boolean;
        item_name: boolean;
        entp_name: boolean;
        class_no: boolean;
        chart: boolean;
        material_name: boolean;
        etc_otc_code: boolean;
        item_permit_date: boolean;
        cancel_date: boolean;
        cancel_name: boolean;
        change_date: boolean;
        created_at: boolean;
        updated_at: boolean;
        // PDF 문서 링크들 (상세페이지 핵심)
        ee_doc_id: boolean;
        ud_doc_id: boolean;
        nb_doc_id: boolean;
        insert_file: boolean;
        // 주의사항 정보 (모달/경고용)
        type_code: boolean;
        type_name: boolean;
        // 보관/포장 정보
        storage_method: boolean;
        valid_term: boolean;
        pack_unit: boolean;
        // 식별 정보
        bar_code: boolean;
        edi_code: boolean;
        // 기타 상세 정보
        bizrno: boolean;
        reexam_date: boolean;
        reexam_target: boolean;
      };
    }) => Promise<MedicineRecord[]>;
    count: (args: { where?: WhereCondition }) => Promise<number>;
    findUnique: (args: {
      where: { item_seq: string };
      select?: {
        item_seq: boolean;
        item_name: boolean;
        entp_name: boolean;
        class_no: boolean;
        chart: boolean;
        material_name: boolean;
        etc_otc_code: boolean;
        item_permit_date: boolean;
        cancel_date: boolean;
        cancel_name: boolean;
        change_date: boolean;
        created_at: boolean;
        updated_at: boolean;
        ee_doc_id: boolean;
        ud_doc_id: boolean;
        nb_doc_id: boolean;
        insert_file: boolean;
        type_code: boolean;
        type_name: boolean;
        storage_method: boolean;
        valid_term: boolean;
        pack_unit: boolean;
        bar_code: boolean;
        edi_code: boolean;
        bizrno: boolean;
        reexam_date: boolean;
        reexam_target: boolean;
      };
    }) => Promise<MedicineRecord | null>;
  };
}

// Prisma 조회 결과를 Medicine 엔티티로 변환하기 위한 타입
// Medicine 엔티티의 생성자 파라미터와 일치하도록 정의
interface MedicineRecord {
  item_seq: string; // Medicine.itemSeq
  item_name: string; // Medicine.itemName
  entp_name: string | null; // Medicine.entpName
  item_permit_date: Date | null; // Medicine.itemPermitDate
  etc_otc_code: string | null; // Medicine.etcOtcCode
  class_no: string | null; // Medicine.classNo
  chart: string | null; // Medicine.chart
  bar_code?: string | null; // Medicine.barCode
  material_name: string | null; // Medicine.materialName
  ee_doc_id?: string | null; // Medicine.eeDocId
  bizrno?: string | null; // Medicine.bizrno
  cancel_date: Date | null; // Medicine.cancelDate
  cancel_name: string | null; // Medicine.cancelName
  change_date: Date | null; // Medicine.changeDate
  created_at: Date | null; // Medicine.createdAt
  edi_code?: string | null; // Medicine.ediCode
  insert_file?: string | null; // Medicine.insertFile
  nb_doc_id?: string | null; // Medicine.nbDocId
  pack_unit?: string | null; // Medicine.packUnit
  reexam_date?: Date | null; // Medicine.reexamDate
  reexam_target?: string | null; // Medicine.reexamTarget
  storage_method?: string | null; // Medicine.storageMethod
  type_code?: string | null; // Medicine.typeCode
  type_name?: string | null; // Medicine.typeName
  ud_doc_id?: string | null; // Medicine.udDocId
  updated_at: Date | null; // Medicine.updatedAt
  valid_term?: string | null; // Medicine.validTerm
}

export class PrismaMediRepository implements MediRepository {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 의약품 목록 조회 (검색, 필터링, 정렬 지원)
   */
  async findAll(request: MediListRequest): Promise<MediListResult> {
    const { limit, page = 1, search, category, sortBy, cursor } = request;

    // 기본 조건 구성
    const whereCondition: WhereCondition = {
      // 취소되지 않은 의약품만 조회
      cancel_date: null,
    };

    // 검색 조건 추가 (의약품명, 성분, 제조사, 병명)
    if (search) {
      // 병명 검색 처리
      const normalizedSearch = search.toLowerCase().trim();
      const diseaseKeywords = DISEASE_CLASS_NO_MAP[normalizedSearch];
      
      if (diseaseKeywords && diseaseKeywords.length > 0) {
        // 병명 검색: CLASS_NO에서 해당 키워드들로 검색
        whereCondition.OR = [
          { item_name: { contains: search, mode: 'insensitive' } },
          { material_name: { contains: search, mode: 'insensitive' } },
          { entp_name: { contains: search, mode: 'insensitive' } },
          // 병명에 해당하는 CLASS_NO 키워드들로 검색
          ...diseaseKeywords.map(keyword => ({
            class_no: { contains: keyword, mode: 'insensitive' as const }
          }))
        ];
      } else {
        // 일반 검색: 의약품명, 성분, 제조사만 검색
        whereCondition.OR = [
          { item_name: { contains: search, mode: 'insensitive' } },
          { material_name: { contains: search, mode: 'insensitive' } },
          { entp_name: { contains: search, mode: 'insensitive' } },
        ];
      }
    }

    // 카테고리 필터링 (키워드 기반)
    if (category && category !== '전체') {
      const keyword = CATEGORY_KEYWORDS[category as CategoryType];
      if (keyword) {
        whereCondition.class_no = {
          contains: keyword,
          mode: 'insensitive',
        };
      }
    }

    // 커서 기반 페이지네이션 (무한스크롤용, 페이지네이션과 함께 사용 안함)
    if (cursor && !page) {
      whereCondition.item_seq = {
        gt: cursor,
      };
    }

    // 정렬 조건 설정
    const orderBy = this.getOrderByCondition(sortBy);

    try {
      // 전체 개수 조회 (페이지네이션용)
      const totalCount = await this.prisma.medicines.count({
        where: whereCondition,
      });

      // 페이지네이션 계산
      const skip = (page - 1) * limit;

      // 의약품 데이터 조회
      const medicines: MedicineRecord[] = await this.prisma.medicines.findMany({
        where: whereCondition,
        orderBy,
        take: limit + 1, // hasMore 판단을 위해 1개 더 조회
        skip: cursor ? 0 : skip, // 커서 사용 시 skip 안함
        select: {
          // 기본 식별 정보
          item_seq: true,
          item_name: true,
          entp_name: true,
          class_no: true,
          // 의약품 상세 정보
          chart: true,
          material_name: true,
          etc_otc_code: true,
          item_permit_date: true,
          // PDF 문서 링크들 (상세페이지 핵심)
          ee_doc_id: true,
          ud_doc_id: true,
          nb_doc_id: true,
          insert_file: true,
          // 주의사항 정보 (모달/경고용)
          type_code: true,
          type_name: true,
          // 보관/포장 정보
          storage_method: true,
          valid_term: true,
          pack_unit: true,
          // 식별 정보
          bar_code: true,
          edi_code: true,
          // 기타 상세 정보
          bizrno: true,
          reexam_date: true,
          reexam_target: true,
          // 시스템 정보
          cancel_date: true,
          cancel_name: true,
          change_date: true,
          created_at: true,
          updated_at: true,
        },
      });

      // hasMore 판단 및 실제 반환할 데이터 분리
      const hasMore = medicines.length > limit;
      const actualMedicines = hasMore ? medicines.slice(0, limit) : medicines;

      // Entity 변환
      const medicineEntities: Medicine[] = actualMedicines.map(
        (medicine: MedicineRecord) =>
          new Medicine(
            medicine.item_seq,
            medicine.item_name,
            medicine.entp_name || undefined,
            medicine.item_permit_date || undefined,
            medicine.etc_otc_code || undefined,
            medicine.class_no || undefined,
            medicine.chart || undefined,
            medicine.bar_code || undefined,
            medicine.material_name || undefined,
            medicine.ee_doc_id || undefined,
            medicine.bizrno || undefined,
            medicine.cancel_date || undefined,
            medicine.cancel_name || undefined,
            medicine.change_date || undefined,
            medicine.created_at || undefined,
            medicine.edi_code || undefined,
            medicine.insert_file || undefined,
            medicine.nb_doc_id || undefined,
            medicine.pack_unit || undefined,
            medicine.reexam_date || undefined,
            medicine.reexam_target || undefined,
            medicine.storage_method || undefined,
            medicine.type_code || undefined,
            medicine.type_name || undefined,
            medicine.ud_doc_id || undefined,
            medicine.updated_at || undefined,
            medicine.valid_term || undefined
          )
      );

      // 다음 커서 설정 (무한스크롤용)
      const nextCursor =
        hasMore && medicineEntities.length > 0
          ? medicineEntities[medicineEntities.length - 1].itemSeq
          : undefined;

      return {
        medicines: medicineEntities,
        hasMore,
        nextCursor,
        totalCount, // 전체 개수 반환
      };
    } catch (error) {
      console.error('의약품 목록 조회 오류:', error);
      throw new Error('의약품 목록을 조회하는 중 오류가 발생했습니다.');
    }
  }

  /**
   * 개별 의약품 상세 조회 (상세페이지용)
   */
  async findByItemSeq(itemSeq: string): Promise<Medicine | null> {
    try {
      const medicine: MedicineRecord | null = await this.prisma.medicines.findUnique({
        where: {
          item_seq: itemSeq,
        },
        select: {
          // 기본 식별 정보
          item_seq: true,
          item_name: true,
          entp_name: true,
          class_no: true,
          // 의약품 상세 정보
          chart: true,
          material_name: true,
          etc_otc_code: true,
          item_permit_date: true,
          // PDF 문서 링크들 (상세페이지 핵심)
          ee_doc_id: true,
          ud_doc_id: true,
          nb_doc_id: true,
          insert_file: true,
          // 주의사항 정보 (모달/경고용)
          type_code: true,
          type_name: true,
          // 보관/포장 정보
          storage_method: true,
          valid_term: true,
          pack_unit: true,
          // 식별 정보
          bar_code: true,
          edi_code: true,
          // 기타 상세 정보
          bizrno: true,
          reexam_date: true,
          reexam_target: true,
          // 시스템 정보
          cancel_date: true,
          cancel_name: true,
          change_date: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!medicine) {
        return null;
      }

      // Entity 변환
      return new Medicine(
        medicine.item_seq,
        medicine.item_name,
        medicine.entp_name || undefined,
        medicine.item_permit_date || undefined,
        medicine.etc_otc_code || undefined,
        medicine.class_no || undefined,
        medicine.chart || undefined,
        medicine.bar_code || undefined,
        medicine.material_name || undefined,
        medicine.ee_doc_id || undefined,
        medicine.bizrno || undefined,
        medicine.cancel_date || undefined,
        medicine.cancel_name || undefined,
        medicine.change_date || undefined,
        medicine.created_at || undefined,
        medicine.edi_code || undefined,
        medicine.insert_file || undefined,
        medicine.nb_doc_id || undefined,
        medicine.pack_unit || undefined,
        medicine.reexam_date || undefined,
        medicine.reexam_target || undefined,
        medicine.storage_method || undefined,
        medicine.type_code || undefined,
        medicine.type_name || undefined,
        medicine.ud_doc_id || undefined,
        medicine.updated_at || undefined,
        medicine.valid_term || undefined
      );
    } catch (error) {
      console.error('의약품 상세 조회 오류:', error);
      throw new Error('의약품 상세 정보를 조회하는 중 오류가 발생했습니다.');
    }
  }

  /**
   * 정렬 조건 생성
   */
  private getOrderByCondition(
    sortBy?: 'name' | 'reviews' | 'name_asc' | 'name_desc'
  ): OrderByCondition {
    switch (sortBy) {
      case 'name':
      case 'name_asc':
        return { item_name: 'asc' }; // 가나다순 오름차순
      case 'name_desc':
        return { item_name: 'desc' }; // 가나다순 내림차순
      case 'reviews':
        // TODO: 리뷰 테이블 연동 후 구현
        return { item_name: 'asc' }; // 임시로 가나다순
      default:
        return { updated_at: 'desc' }; // 기본: 최신순
    }
  }
}
