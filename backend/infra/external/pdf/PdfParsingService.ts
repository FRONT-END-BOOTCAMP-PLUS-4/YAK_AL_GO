// PDF 파싱 메인 서비스

import { PdfDownloadService } from './PdfDownloadService';
import { EffectParser } from './parsers/EffectParser';
import { UsageParser } from './parsers/UsageParser';
import { CautionParser } from './parsers/CautionParser';
import type {
  ParsedMedicineContent,
  EffectInfo,
  UsageInfo,
  CautionInfo,
  PdfParsingError,
} from './types/ParsedContent';

/**
 * PDF 파싱 메인 서비스
 * PDF 다운로드부터 텍스트 추출, 구조화된 파싱까지 전체 워크플로우 관리
 */
export class PdfParsingService {
  private readonly downloadService: PdfDownloadService;
  private readonly effectParser: EffectParser;
  private readonly usageParser: UsageParser;
  private readonly cautionParser: CautionParser;

  constructor() {
    this.downloadService = new PdfDownloadService();
    this.effectParser = new EffectParser();
    this.usageParser = new UsageParser();
    this.cautionParser = new CautionParser();
  }

  /**
   * PDF 파싱 라이브러리를 동적으로 로드
   * @returns pdf-parse 함수
   */
  private async getPdfParse() {
    try {
      const pdfParse = await import('pdf-parse');
      return pdfParse.default;
    } catch (error) {
      console.error('PDF 파싱 라이브러리 로드 실패:', error);
      throw new Error('PDF 파싱 라이브러리를 로드할 수 없습니다.');
    }
  }

  /**
   * 의약품의 모든 PDF 문서를 파싱하여 구조화된 정보 반환
   * @param docIds 문서 ID 객체
   * @returns 파싱된 의약품 상세 정보
   */
  async parseAllDocuments(docIds: {
    effectDocId?: string;
    usageDocId?: string;
    cautionDocId?: string;
  }): Promise<ParsedMedicineContent> {
    const results: ParsedMedicineContent = {
      parsedAt: new Date(),
      docIds,
    };

    const errors: PdfParsingError[] = [];

    try {
      // 병렬로 모든 PDF 파싱 실행
      const parsingPromises = [
        docIds.effectDocId ? this.parseEffectDocument(docIds.effectDocId) : Promise.resolve(null),
        docIds.usageDocId ? this.parseUsageDocument(docIds.usageDocId) : Promise.resolve(null),
        docIds.cautionDocId ? this.parseCautionDocument(docIds.cautionDocId) : Promise.resolve(null),
      ];

      const [effectResult, usageResult, cautionResult] = await Promise.allSettled(parsingPromises);

      // 효능효과 결과 처리
      if (effectResult.status === 'fulfilled' && effectResult.value) {
        results.effect = effectResult.value as EffectInfo;
      } else if (effectResult.status === 'rejected' && docIds.effectDocId) {
        errors.push(this.createParsingError(docIds.effectDocId, effectResult.reason));
      }

      // 용법용량 결과 처리
      if (usageResult.status === 'fulfilled' && usageResult.value) {
        results.usage = usageResult.value as UsageInfo;
      } else if (usageResult.status === 'rejected' && docIds.usageDocId) {
        errors.push(this.createParsingError(docIds.usageDocId, usageResult.reason));
      }

      // 주의사항 결과 처리
      if (cautionResult.status === 'fulfilled' && cautionResult.value) {
        results.caution = cautionResult.value as CautionInfo;
      } else if (cautionResult.status === 'rejected' && docIds.cautionDocId) {
        errors.push(this.createParsingError(docIds.cautionDocId, cautionResult.reason));
      }

      // 에러 로깅
      if (errors.length > 0) {
        console.warn('PDF 파싱 중 일부 오류 발생:', errors);
      }

      return results;

    } catch (error) {
      console.error('PDF 파싱 전체 프로세스 오류:', error);
      
      // 최소한의 빈 데이터라도 반환
      return {
        parsedAt: new Date(),
        docIds,
      };
    }
  }

  /**
   * 효능효과 문서 파싱
   * @param docId 효능효과 문서 ID
   * @returns 파싱된 효능효과 정보
   */
  async parseEffectDocument(docId: string): Promise<EffectInfo | null> {
    try {
      console.log(`효능효과 PDF 파싱 시작: ${docId}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(docId);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const effectInfo = this.effectParser.parseEffect(pdfData.text);
      
      console.log(`효능효과 PDF 파싱 완료: ${docId}`);
      return effectInfo;

    } catch (error) {
      console.error(`효능효과 PDF 파싱 실패 (${docId}):`, error);
      throw error;
    }
  }

  /**
   * 용법용량 문서 파싱
   * @param docId 용법용량 문서 ID
   * @returns 파싱된 용법용량 정보
   */
  async parseUsageDocument(docId: string): Promise<UsageInfo | null> {
    try {
      console.log(`용법용량 PDF 파싱 시작: ${docId}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(docId);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const usageInfo = this.usageParser.parseUsage(pdfData.text);
      
      console.log(`용법용량 PDF 파싱 완료: ${docId}`);
      return usageInfo;

    } catch (error) {
      console.error(`용법용량 PDF 파싱 실패 (${docId}):`, error);
      throw error;
    }
  }

  /**
   * 주의사항 문서 파싱
   * @param docId 주의사항 문서 ID
   * @returns 파싱된 주의사항 정보
   */
  async parseCautionDocument(docId: string): Promise<CautionInfo | null> {
    try {
      console.log(`주의사항 PDF 파싱 시작: ${docId}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(docId);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const cautionInfo = this.cautionParser.parseCaution(pdfData.text);
      
      console.log(`주의사항 PDF 파싱 완료: ${docId}`);
      return cautionInfo;

    } catch (error) {
      console.error(`주의사항 PDF 파싱 실패 (${docId}):`, error);
      throw error;
    }
  }

  /**
   * 단일 PDF 텍스트 추출 (디버깅/테스트용)
   * @param docId 문서 ID
   * @returns 추출된 텍스트
   */
  async extractPdfText(docId: string): Promise<string> {
    try {
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(docId);
      const pdfData = await pdfParse(pdfBuffer);
      return pdfData.text;
    } catch (error) {
      console.error(`PDF 텍스트 추출 실패 (${docId}):`, error);
      throw error;
    }
  }

  /**
   * PDF 파싱 가능 여부 확인 (헬스체크용)
   * @param docId 테스트할 문서 ID
   * @returns 파싱 가능 여부
   */
  async checkPdfAccessibility(docId: string): Promise<boolean> {
    try {
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(docId);
      const pdfData = await pdfParse(pdfBuffer);
      return pdfData.text.trim().length > 0;
    } catch (error) {
      console.error(`PDF 접근성 확인 실패 (${docId}):`, error);
      return false;
    }
  }

  /**
   * 다중 PDF 텍스트 추출 (배치 처리용)
   * @param docIds 문서 ID 배열
   * @returns 문서별 텍스트 맵
   */
  async extractMultiplePdfTexts(docIds: string[]): Promise<Map<string, string>> {
    const results = new Map<string, string>();
    
    if (docIds.length === 0) return results;

    const pdfParse = await this.getPdfParse();

    const extractPromises = docIds.map(async (docId) => {
      try {
        const text = await this.extractPdfText(docId);
        return { docId, text, success: true };
      } catch (error) {
        console.error(`PDF 텍스트 추출 실패 (${docId}):`, error);
        return { docId, text: '', success: false };
      }
    });

    const extractResults = await Promise.allSettled(extractPromises);
    
    for (const result of extractResults) {
      if (result.status === 'fulfilled' && result.value.success) {
        results.set(result.value.docId, result.value.text);
      }
    }

    return results;
  }

  /**
   * PDF 파싱 오류 정보 생성
   * @param docId 문서 ID
   * @param error 발생한 오류
   * @returns 구조화된 오류 정보
   */
  private createParsingError(docId: string, error: any): PdfParsingError {
    let errorType: PdfParsingError['errorType'] = 'PARSE_FAILED';
    let message = '알 수 없는 오류가 발생했습니다.';

    if (error instanceof Error) {
      message = error.message;
      
      if (message.includes('다운로드') || message.includes('네트워크') || message.includes('HTTP')) {
        errorType = 'DOWNLOAD_FAILED';
      } else if (message.includes('PDF') || message.includes('형식') || message.includes('유효하지 않은')) {
        errorType = 'INVALID_FORMAT';
      }
    }

    return {
      docId,
      errorType,
      message,
      timestamp: new Date(),
    };
  }
} 