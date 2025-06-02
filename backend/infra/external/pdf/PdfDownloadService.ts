// PDF 다운로드 서비스

import axios from 'axios';

/**
 * PDF 다운로드 서비스
 * 식약처 공공데이터에서 PDF 문서를 다운로드하여 Buffer로 반환
 */
export class PdfDownloadService {
  private readonly baseUrl = 'https://nedrug.mfds.go.kr/pbp/cmn/pdfViewer';
  private readonly timeout = 30000; // 30초 타임아웃

  /**
   * PDF 문서를 다운로드하여 Buffer로 반환
   * @param itemSeq 의약품 일련번호 (item_seq)
   * @param docType 문서 타입 (EE, UD, NB)
   * @returns PDF Buffer
   */
  async downloadPdfBuffer(itemSeq: string, docType: string): Promise<Buffer> {
    if (!itemSeq || itemSeq.trim() === '') {
      throw new Error('의약품 일련번호가 유효하지 않습니다.');
    }

    if (!docType || !['EE', 'UD', 'NB'].includes(docType)) {
      throw new Error('문서 타입이 유효하지 않습니다. (EE, UD, NB만 허용)');
    }

    const cleanItemSeq = itemSeq.trim();
    const url = `${this.baseUrl}/${cleanItemSeq}/${docType}`;
    
    try {
      console.log(`PDF 다운로드 시작: ${url}`);

      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: this.timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/pdf,application/octet-stream,*/*',
          'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
          'Referer': 'https://nedrug.mfds.go.kr',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
        maxRedirects: 5,
      });

      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: PDF 다운로드 실패`);
      }

      const buffer = Buffer.from(response.data);
      
      if (buffer.length === 0) {
        throw new Error('다운로드된 PDF가 비어있습니다.');
      }

      // PDF 헤더 검증
      if (!this.isPdfBuffer(buffer)) {
        // HTML 응답인지 확인 (로그인 페이지나 오류 페이지일 가능성)
        const textContent = buffer.toString('utf8', 0, Math.min(1000, buffer.length));
        if (textContent.includes('<html') || textContent.includes('<!DOCTYPE')) {
          console.warn('HTML 응답 받음. PDF가 아닌 웹페이지가 반환되었습니다.');
          console.warn('응답 내용:', textContent.substring(0, 300) + '...');
          throw new Error('PDF 파일이 아닌 HTML 페이지가 반환되었습니다. URL을 확인해주세요.');
        } else {
          console.warn('유효하지 않은 PDF 헤더:', buffer.toString('hex', 0, Math.min(20, buffer.length)));
          throw new Error('다운로드된 파일이 유효한 PDF가 아닙니다.');
        }
      }

      console.log(`✅ PDF 다운로드 성공: ${cleanItemSeq}/${docType} (${buffer.length} bytes)`);
      return buffer;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw new Error(`PDF 다운로드 타임아웃: ${cleanItemSeq}/${docType}`);
        }
        if (error.response?.status === 404) {
          throw new Error(`PDF 문서를 찾을 수 없습니다: ${cleanItemSeq}/${docType}`);
        }
        if (error.response?.status === 403) {
          throw new Error(`PDF 문서 접근이 금지되었습니다: ${cleanItemSeq}/${docType}`);
        }
        throw new Error(`PDF 다운로드 실패 (${cleanItemSeq}/${docType}): ${error.message}`);
      }
      
      throw error instanceof Error ? error : new Error('알 수 없는 오류가 발생했습니다.');
    }
  }

  /**
   * 구 버전 호환성을 위한 레거시 메서드
   * @deprecated downloadPdfBuffer(itemSeq, docType) 사용 권장
   */
  async downloadPdfBufferLegacy(docId: string): Promise<Buffer> {
    throw new Error('레거시 메서드입니다. downloadPdfBuffer(itemSeq, docType)를 사용해주세요.');
  }

  /**
   * Buffer가 PDF 파일인지 검증
   * @param buffer 파일 Buffer
   * @returns PDF 여부
   */
  private isPdfBuffer(buffer: Buffer): boolean {
    if (buffer.length < 4) {
      return false;
    }
    
    // PDF 파일은 '%PDF' 또는 0x25504446로 시작
    const header = buffer.toString('ascii', 0, 4);
    return header === '%PDF';
  }

  /**
   * 특정 의약품의 모든 PDF 문서를 병렬로 다운로드
   * @param itemSeq 의약품 일련번호
   * @param docTypes 다운로드할 문서 타입들
   * @returns 문서타입별 Buffer 맵
   */
  async downloadAllPdfs(itemSeq: string, docTypes: string[]): Promise<Map<string, Buffer>> {
    const results = new Map<string, Buffer>();
    
    if (!itemSeq || docTypes.length === 0) return results;

    console.log(`다중 PDF 다운로드 시작: ${itemSeq} - [${docTypes.join(', ')}]`);

    const downloadPromises = docTypes.map(async (docType) => {
      try {
        const buffer = await this.downloadPdfBuffer(itemSeq, docType);
        return { docType, buffer, success: true };
      } catch (error) {
        console.error(`PDF 다운로드 실패 (${itemSeq}/${docType}):`, error);
        return { docType, buffer: null, success: false };
      }
    });

    const downloadResults = await Promise.allSettled(downloadPromises);
    
    let successCount = 0;
    for (const result of downloadResults) {
      if (result.status === 'fulfilled' && result.value.success && result.value.buffer) {
        results.set(result.value.docType, result.value.buffer);
        successCount++;
      }
    }

    console.log(`다중 PDF 다운로드 완료: ${successCount}/${docTypes.length}개 성공`);
    return results;
  }

  /**
   * PDF URL 생성 (테스트용)
   * @param itemSeq 의약품 일련번호
   * @param docType 문서 타입
   * @returns 생성된 PDF URL
   */
  generatePdfUrl(itemSeq: string, docType: string): string {
    return `${this.baseUrl}/${itemSeq}/${docType}`;
  }
} 