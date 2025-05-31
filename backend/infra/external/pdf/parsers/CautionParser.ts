// 주의사항 PDF 파서

import type { CautionInfo } from '../types/ParsedContent';

/**
 * 주의사항 PDF 파서
 * 주의사항 문서에서 구조화된 정보를 추출
 */
export class CautionParser {
  /**
   * PDF 텍스트에서 주의사항 정보 추출
   * @param text PDF에서 추출된 텍스트
   * @returns 구조화된 주의사항 정보
   */
  parseCaution(text: string): CautionInfo {
    try {
      const cleanText = this.cleanText(text);
      
      return {
        contraindications: this.extractContraindications(cleanText),
        warnings: this.extractWarnings(cleanText),
        precautions: this.extractPrecautions(cleanText),
        sideEffects: this.extractSideEffects(cleanText),
        interactions: this.extractInteractions(cleanText),
        pregnancyWarning: this.extractPregnancyWarning(cleanText),
        childrenWarning: this.extractChildrenWarning(cleanText),
        elderlyWarning: this.extractElderlyWarning(cleanText),
      };
    } catch (error) {
      console.error('주의사항 파싱 오류:', error);
      return this.getEmptyCautionInfo();
    }
  }

  /**
   * 금기사항 추출
   */
  private extractContraindications(text: string): string[] {
    const contraindications: string[] = [];
    
    const patterns = [
      /금기(?:사항)?\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|경고|주의|부작용)|\n\n|$)/i,
      /투여하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|경고|주의)|\n\n|$)/i,
      /다음.*?환자에게는?\s*투여하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const items = this.extractListItems(match[1]);
        contraindications.push(...items);
      }
    }

    return this.cleanAndFilterItems(contraindications);
  }

  /**
   * 경고사항 추출
   */
  private extractWarnings(text: string): string[] {
    const warnings: string[] = [];
    
    const patterns = [
      /경고\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|주의|부작용|상호작용)|\n\n|$)/i,
      /중요한?\s*경고\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      /치명적.*?위험\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const items = this.extractListItems(match[1]);
        warnings.push(...items);
      }
    }

    return this.cleanAndFilterItems(warnings);
  }

  /**
   * 일반 주의사항 추출
   */
  private extractPrecautions(text: string): string[] {
    const precautions: string[] = [];
    
    const patterns = [
      /주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용|상호작용|보관)|\n\n|$)/i,
      /일반적\s*주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      /주의할?\s*점\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const items = this.extractListItems(match[1]);
        precautions.push(...items);
      }
    }

    return this.cleanAndFilterItems(precautions);
  }

  /**
   * 부작용 추출
   */
  private extractSideEffects(text: string): string[] {
    const sideEffects: string[] = [];
    
    const patterns = [
      /부작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|상호작용|보관|저장)|\n\n|$)/i,
      /이상반응\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      /다음과?\s*같은?\s*증상.*?나타날?\s*수\s*있.*?[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const items = this.extractListItems(match[1]);
        sideEffects.push(...items);
      }
    }

    // 빈도별 부작용 정보도 추출
    const frequencyBasedEffects = this.extractFrequencyBasedSideEffects(text);
    sideEffects.push(...frequencyBasedEffects);

    return this.cleanAndFilterItems(sideEffects);
  }

  /**
   * 상호작용 추출
   */
  private extractInteractions(text: string): string[] {
    const interactions: string[] = [];
    
    const patterns = [
      /(?:약물)?상호작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|보관|저장)|\n\n|$)/i,
      /다른.*?약물과.*?상호작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      /병용.*?주의\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const items = this.extractListItems(match[1]);
        interactions.push(...items);
      }
    }

    return this.cleanAndFilterItems(interactions);
  }

  /**
   * 임신 관련 경고 추출
   */
  private extractPregnancyWarning(text: string): string {
    const patterns = [
      /임신.*?(?:금기|주의|경고)\s*[:：]?\s*([^.\n]+)/i,
      /임부.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
      /임신.*?중.*?(?:사용|복용).*?[:：]?\s*([^.\n]+)/i,
      /태아.*?(?:위험|영향)\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        if (warning.length > 5) {
          return warning;
        }
      }
    }

    // 임부금기 타입명에서 추출
    if (text.includes('임부금기')) {
      return '임신 중 복용 금지';
    }

    return '임신 관련 경고 정보가 없습니다.';
  }

  /**
   * 어린이 관련 경고 추출
   */
  private extractChildrenWarning(text: string): string {
    const patterns = [
      /(?:소아|어린이|아이).*?(?:주의|경고|금기)\s*[:：]?\s*([^.\n]+)/i,
      /(?:12세|15세)\s*미만.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
      /소아.*?(?:안전성|유효성).*?[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        if (warning.length > 5) {
          return warning;
        }
      }
    }

    return '어린이 관련 경고 정보가 없습니다.';
  }

  /**
   * 고령자 관련 경고 추출
   */
  private extractElderlyWarning(text: string): string {
    const patterns = [
      /(?:고령자|노인|65세.*?이상).*?(?:주의|경고)\s*[:：]?\s*([^.\n]+)/i,
      /고령자.*?(?:신중히|감량).*?[:：]?\s*([^.\n]+)/i,
      /노인.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        if (warning.length > 5) {
          return warning;
        }
      }
    }

    return '고령자 관련 경고 정보가 없습니다.';
  }

  /**
   * 빈도별 부작용 추출
   */
  private extractFrequencyBasedSideEffects(text: string): string[] {
    const effects: string[] = [];
    
    const frequencyPatterns = [
      /(?:매우\s*흔하게|매우\s*자주)\s*[:：]?\s*([^.\n]+)/gi,
      /(?:흔하게|자주)\s*[:：]?\s*([^.\n]+)/gi,
      /(?:때때로|가끔)\s*[:：]?\s*([^.\n]+)/gi,
      /(?:드물게|희귀하게)\s*[:：]?\s*([^.\n]+)/gi,
    ];

    for (const pattern of frequencyPatterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match[1]) {
          effects.push(match[1].trim());
        }
      }
    }

    return effects;
  }

  /**
   * 리스트 항목 추출
   */
  private extractListItems(text: string): string[] {
    const items: string[] = [];
    
    // 번호나 기호로 시작하는 항목들
    const patterns = [
      /(?:^|\n)\s*(?:\d+\.|가\.|나\.|다\.|라\.|마\.|바\.|사\.|아\.|자\.|차\.|카\.|타\.|파\.|하\.)\s*([^.\n]+)/gi,
      /(?:^|\n)\s*[-•·]\s*([^.\n]+)/gi,
      /(?:^|\n)\s*\(?\d+\)?\s*([^.\n]+)/gi,
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match[1]) {
          const item = match[1].trim();
          if (item.length > 3) {
            items.push(item);
          }
        }
      }
    }

    // 패턴이 없으면 문장 단위로 분리
    if (items.length === 0) {
      const sentences = text.split(/[.。！!]/);
      for (const sentence of sentences) {
        const cleanSentence = sentence.trim();
        if (cleanSentence.length > 5) {
          items.push(cleanSentence);
        }
      }
    }

    return items;
  }

  /**
   * 항목들 정리 및 필터링
   */
  private cleanAndFilterItems(items: string[]): string[] {
    return items
      .map(item => item.trim())
      .filter(item => item.length > 3 && item.length < 500)
      .map(item => item.replace(/^\d+\.\s*/, ''))
      .map(item => item.replace(/^[-•·]\s*/, ''))
      .filter((item, index, arr) => arr.indexOf(item) === index) // 중복 제거
      .slice(0, 20); // 최대 20개
  }

  /**
   * 텍스트 정리
   */
  private cleanText(text: string): string {
    return text
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  /**
   * 빈 주의사항 정보 반환
   */
  private getEmptyCautionInfo(): CautionInfo {
    return {
      contraindications: [],
      warnings: [],
      precautions: [],
      sideEffects: [],
      interactions: [],
      pregnancyWarning: '임신 관련 정보를 파싱할 수 없습니다.',
      childrenWarning: '어린이 관련 정보를 파싱할 수 없습니다.',
      elderlyWarning: '고령자 관련 정보를 파싱할 수 없습니다.',
    };
  }
} 