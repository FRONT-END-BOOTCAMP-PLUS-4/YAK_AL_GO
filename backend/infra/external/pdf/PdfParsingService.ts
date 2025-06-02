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
} from './types/ParsedContent';

/**
 * PDF 파싱 에러 정보
 */
interface PdfParsingError {
  docType: string; // 문서 타입 (EE, UD, NB)
  errorType: 'DOWNLOAD_FAILED' | 'PARSE_FAILED' | 'INVALID_FORMAT';
  message: string;
  timestamp: Date;
}

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
   * PDF Parse 라이브러리 동적 로드
   * @returns pdf-parse 함수
   */
  private async getPdfParse(): Promise<any> {
    try {
      // 동적 import로 pdf-parse 로드
      const pdfParse = await import('pdf-parse');
      return pdfParse.default || pdfParse;
    } catch (error) {
      console.error('pdf-parse 라이브러리 로드 실패:', error);
      throw new Error('PDF 파싱 라이브러리를 로드할 수 없습니다.');
    }
  }

  /**
   * 의약품의 모든 PDF 문서를 파싱하여 구조화된 정보 반환
   * @param params 파싱 파라미터
   * @returns 파싱된 의약품 상세 정보
   */
  async parseAllDocuments(params: {
    itemSeq: string;
    effectDocId?: string;
    usageDocId?: string;
    cautionDocId?: string;
  }): Promise<ParsedMedicineContent> {
    console.log('=== PDF 파싱 전체 프로세스 시작 ===');
    console.log('의약품 일련번호:', params.itemSeq);
    console.log('문서 ID들:', {
      effect: params.effectDocId || 'NULL',
      usage: params.usageDocId || 'NULL',
      caution: params.cautionDocId || 'NULL'
    });
    
    const results: ParsedMedicineContent = {
      parsedAt: new Date(),
      docIds: {
        effectDocId: params.effectDocId,
        usageDocId: params.usageDocId,
        cautionDocId: params.cautionDocId,
      },
    };

    const errors: PdfParsingError[] = [];

    try {
      // 병렬로 모든 PDF 파싱 실행
      console.log('PDF 파싱 병렬 실행 시작...');
      
      const parsingPromises = [
        params.effectDocId ? this.parseEffectDocument(params.itemSeq, 'EE') : Promise.resolve(null),
        params.usageDocId ? this.parseUsageDocument(params.itemSeq, 'UD') : Promise.resolve(null),
        params.cautionDocId ? this.parseCautionDocument(params.itemSeq, 'NB') : Promise.resolve(null),
      ];

      console.log(`총 ${parsingPromises.filter(p => p !== null).length}개의 파싱 작업 대기 중...`);
      
      const [effectResult, usageResult, cautionResult] = await Promise.allSettled(parsingPromises);

      console.log('=== 파싱 결과 요약 ===');
      console.log('효능효과 파싱 상태:', effectResult.status);
      console.log('용법용량 파싱 상태:', usageResult.status);
      console.log('주의사항 파싱 상태:', cautionResult.status);

      // 효능효과 결과 처리
      if (effectResult.status === 'fulfilled' && effectResult.value) {
        results.effect = effectResult.value as EffectInfo;
        console.log('✅ 효능효과 파싱 성공:', {
          mainEffect: results.effect.mainEffect?.substring(0, 50) + '...',
          targetDiseaseCount: results.effect.targetDisease?.length || 0
        });
      } else if (effectResult.status === 'rejected' && params.effectDocId) {
        const error = this.createParsingError('EE', effectResult.reason);
        errors.push(error);
        console.log('❌ 효능효과 파싱 실패:', error.message);
      } else if (!params.effectDocId) {
        console.log('ℹ️ 효능효과 문서 ID가 없음');
      }

      // 용법용량 결과 처리
      if (usageResult.status === 'fulfilled' && usageResult.value) {
        results.usage = usageResult.value as UsageInfo;
        console.log('✅ 용법용량 파싱 성공:', {
          dosage: results.usage.dosage?.substring(0, 50) + '...',
          frequency: results.usage.frequency,
        });
      } else if (usageResult.status === 'rejected' && params.usageDocId) {
        const error = this.createParsingError('UD', usageResult.reason);
        errors.push(error);
        console.log('❌ 용법용량 파싱 실패:', error.message);
      } else if (!params.usageDocId) {
        console.log('ℹ️ 용법용량 문서 ID가 없음');
      }

      // 주의사항 결과 처리
      if (cautionResult.status === 'fulfilled' && cautionResult.value) {
        results.caution = cautionResult.value as CautionInfo;
        console.log('✅ 주의사항 파싱 성공:', {
          contraindicationsCount: results.caution.contraindications?.length || 0,
          sideEffectsCount: results.caution.sideEffects?.length || 0,
          warningsCount: results.caution.warnings?.length || 0,
        });
      } else if (cautionResult.status === 'rejected' && params.cautionDocId) {
        const error = this.createParsingError('NB', cautionResult.reason);
        errors.push(error);
        console.log('❌ 주의사항 파싱 실패:', error.message);
      } else if (!params.cautionDocId) {
        console.log('ℹ️ 주의사항 문서 ID가 없음');
      }

      // 최종 결과 요약
      console.log('=== 최종 파싱 결과 ===');
      console.log('성공한 파싱:', {
        effect: !!results.effect,
        usage: !!results.usage,
        caution: !!results.caution,
      });
      console.log('파싱 에러 수:', errors.length);

      // 에러 로깅
      if (errors.length > 0) {
        console.warn('PDF 파싱 중 일부 오류 발생:', errors);
      } else {
        console.log('🎉 모든 PDF 파싱 완료!');
      }

      return results;

    } catch (error) {
      console.error('PDF 파싱 전체 프로세스 오류:', error);
      
      // 최소한의 빈 데이터라도 반환
      return {
        parsedAt: new Date(),
        docIds: {
          effectDocId: params.effectDocId,
          usageDocId: params.usageDocId,
          cautionDocId: params.cautionDocId,
        },
      };
    }
  }

  /**
   * 효능효과 문서 파싱
   * @param itemSeq 의약품 일련번호
   * @param docType 문서 타입 (EE)
   * @returns 파싱된 효능효과 정보
   */
  async parseEffectDocument(itemSeq: string, docType: string): Promise<EffectInfo | null> {
    try {
      console.log(`효능효과 PDF 파싱 시작: ${itemSeq}/${docType}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(itemSeq, docType);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const effectInfo = this.effectParser.parseEffect(pdfData.text);
      
      console.log(`효능효과 PDF 파싱 완료: ${itemSeq}/${docType}`);
      return effectInfo;

    } catch (error) {
      console.error(`효능효과 PDF 파싱 실패 (${itemSeq}/${docType}):`, error);
      throw error;
    }
  }

  /**
   * 용법용량 문서 파싱
   * @param itemSeq 의약품 일련번호
   * @param docType 문서 타입 (UD)
   * @returns 파싱된 용법용량 정보
   */
  async parseUsageDocument(itemSeq: string, docType: string): Promise<UsageInfo | null> {
    try {
      console.log(`용법용량 PDF 파싱 시작: ${itemSeq}/${docType}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(itemSeq, docType);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const usageInfo = this.usageParser.parseUsage(pdfData.text);
      
      console.log(`용법용량 PDF 파싱 완료: ${itemSeq}/${docType}`);
      return usageInfo;

    } catch (error) {
      console.error(`용법용량 PDF 파싱 실패 (${itemSeq}/${docType}):`, error);
      throw error;
    }
  }

  /**
   * 주의사항 문서 파싱
   * @param itemSeq 의약품 일련번호
   * @param docType 문서 타입 (NB)
   * @returns 파싱된 주의사항 정보
   */
  async parseCautionDocument(itemSeq: string, docType: string): Promise<CautionInfo | null> {
    try {
      console.log(`주의사항 PDF 파싱 시작: ${itemSeq}/${docType}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(itemSeq, docType);
      const pdfData = await pdfParse(pdfBuffer);
      
      if (!pdfData.text || pdfData.text.trim().length === 0) {
        throw new Error('PDF에서 텍스트를 추출할 수 없습니다.');
      }

      const cautionInfo = this.cautionParser.parseCaution(pdfData.text);
      
      console.log(`주의사항 PDF 파싱 완료: ${itemSeq}/${docType}`);
      return cautionInfo;

    } catch (error) {
      console.error(`주의사항 PDF 파싱 실패 (${itemSeq}/${docType}):`, error);
      throw error;
    }
  }

  /**
   * PDF 텍스트 추출 (테스트용)
   * @param itemSeq 의약품 일련번호
   * @param docType 문서 타입
   * @returns 추출된 텍스트
   */
  async extractPdfText(itemSeq: string, docType: string): Promise<string> {
    try {
      console.log(`PDF 텍스트 추출 시작: ${itemSeq}/${docType}`);
      
      const pdfParse = await this.getPdfParse();
      const pdfBuffer = await this.downloadService.downloadPdfBuffer(itemSeq, docType);
      const pdfData = await pdfParse(pdfBuffer);
      
      console.log(`PDF 텍스트 추출 완료: ${itemSeq}/${docType} (${pdfData.text.length} 문자)`);
      return pdfData.text;

    } catch (error) {
      console.error(`PDF 텍스트 추출 실패 (${itemSeq}/${docType}):`, error);
      throw error;
    }
  }

  /**
   * 파싱 에러 객체 생성
   * @param docType 문서 타입
   * @param error 에러 객체
   * @returns 구조화된 파싱 에러
   */
  private createParsingError(docType: string, error: any): PdfParsingError {
    let errorType: 'DOWNLOAD_FAILED' | 'PARSE_FAILED' | 'INVALID_FORMAT' = 'PARSE_FAILED';
    
    if (error.message.includes('다운로드') || error.message.includes('HTTP')) {
      errorType = 'DOWNLOAD_FAILED';
    } else if (error.message.includes('PDF') || error.message.includes('형식')) {
      errorType = 'INVALID_FORMAT';
    }
    
    return {
      docType,
      errorType,
      message: error.message,
      timestamp: new Date()
    };
  }
} 