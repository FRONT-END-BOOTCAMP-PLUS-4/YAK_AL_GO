// PDF 다운로드 서비스

import axios from 'axios';

/**
 * PDF 다운로드 서비스
 * 공공데이터에서 PDF 문서를 다운로드하여 Buffer로 반환
 */
export class PdfDownloadService {
  private readonly baseUrl = 'https://nedrug.mfds.go.kr/pbp/cmn/itemDetail';
  private readonly timeout = 30000; // 30초 타임아웃

  /**
   * PDF 문서를 다운로드하여 Buffer로 반환
   * @param docId 문서 ID
   * @returns PDF Buffer
   */
  async downloadPdfBuffer(docId: string): Promise<Buffer> {
    if (!docId || docId.trim() === '') {
      throw new Error('문서 ID가 유효하지 않습니다.');
    }

    try {
      const url = `${this.baseUrl}/${docId.trim()}`;
      console.log(`PDF 다운로드 시작: ${url}`);

      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: this.timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/pdf,*/*',
        },
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
        throw new Error('다운로드된 파일이 유효한 PDF가 아닙니다.');
      }

      console.log(`PDF 다운로드 완료: ${docId} (${buffer.length} bytes)`);
      return buffer;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw new Error(`PDF 다운로드 타임아웃: ${docId}`);
        }
        if (error.response?.status === 404) {
          throw new Error(`PDF 문서를 찾을 수 없습니다: ${docId}`);
        }
        throw new Error(`PDF 다운로드 실패: ${error.message}`);
      }
      
      throw error instanceof Error ? error : new Error('알 수 없는 오류가 발생했습니다.');
    }
  }

  /**
   * Buffer가 유효한 PDF인지 확인
   * @param buffer 확인할 Buffer
   * @returns PDF 여부
   */
  private isPdfBuffer(buffer: Buffer): boolean {
    if (buffer.length < 4) return false;
    
    // PDF 헤더 확인 (%PDF-)
    const header = buffer.subarray(0, 4).toString('ascii');
    return header === '%PDF';
  }

  /**
   * 여러 PDF를 병렬로 다운로드
   * @param docIds 문서 ID 배열
   * @returns 문서별 Buffer 맵
   */
  async downloadMultiplePdfs(docIds: string[]): Promise<Map<string, Buffer>> {
    const results = new Map<string, Buffer>();
    
    if (docIds.length === 0) return results;

    const downloadPromises = docIds.map(async (docId) => {
      try {
        const buffer = await this.downloadPdfBuffer(docId);
        return { docId, buffer, success: true };
      } catch (error) {
        console.error(`PDF 다운로드 실패 (${docId}):`, error);
        return { docId, buffer: null, success: false };
      }
    });

    const downloadResults = await Promise.allSettled(downloadPromises);
    
    for (const result of downloadResults) {
      if (result.status === 'fulfilled' && result.value.success && result.value.buffer) {
        results.set(result.value.docId, result.value.buffer);
      }
    }

    return results;
  }
} 