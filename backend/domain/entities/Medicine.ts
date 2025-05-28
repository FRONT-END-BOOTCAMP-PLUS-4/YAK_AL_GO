// 의약품 엔티티 정의
export class Medicine {
  constructor(
    public readonly itemSeq: string, // 품목일련번호 (Primary Key)
    public readonly itemName: string, // 품목명
    public readonly entpName?: string, // 업체명
    public readonly itemPermitDate?: Date, // 허가일자
    public readonly etcOtcCode?: string, // 전문/일반의약품 구분코드
    public readonly classNo?: string, // 분류번호
    public readonly chart?: string, // 성상
    public readonly barCode?: string, // 표준코드
    public readonly materialName?: string, // 원료성분
    public readonly eeDocId?: string, // 효능효과 문서ID
    public readonly bizrno?: string, // 사업자등록번호
    public readonly cancelDate?: Date, // 취소일자
    public readonly cancelName?: string, // 취소사유
    public readonly changeDate?: Date, // 변경일자
    public readonly createdAt?: Date, // 생성일시
    public readonly ediCode?: string, // EDI 코드
    public readonly insertFile?: string, // 첨부파일
    public readonly nbDocId?: string, // 용법용량 문서ID
    public readonly packUnit?: string, // 포장단위
    public readonly reexamDate?: Date, // 재심사일자
    public readonly reexamTarget?: string, // 재심사대상
    public readonly storageMethod?: string, // 저장방법
    public readonly typeCode?: string, // 제형코드
    public readonly typeName?: string, // 제형명
    public readonly udDocId?: string, // 사용상주의사항 문서ID
    public readonly updatedAt?: Date, // 수정일시
    public readonly validTerm?: string // 유효기간
  ) {}

  /**
   * 의약품 검색용 텍스트 생성
   * @returns 검색 가능한 모든 텍스트 조합
   */
  getSearchableText(): string {
    const searchFields = [this.itemName, this.entpName, this.materialName, this.typeName].filter(
      Boolean
    );

    return searchFields.join(' ').toLowerCase();
  }

  /**
   * 의약품 기본 정보 요약
   * @returns 기본 정보 문자열
   */
  getSummary(): string {
    return `${this.itemName} (${this.entpName || '업체명 없음'})`;
  }
}
