// 용법용량 PDF 파서

import type { UsageInfo } from '../types/ParsedContent';

/**
 * 용법용량 PDF 파서
 * 용법용량 문서에서 구조화된 정보를 추출
 */
export class UsageParser {
  /**
   * PDF 텍스트에서 용법용량 정보 추출
   * @param text PDF에서 추출된 텍스트
   * @returns 구조화된 용법용량 정보
   */
  parseUsage(text: string): UsageInfo {
    try {
      const cleanText = this.cleanText(text);
      
      return {
        dosage: this.extractDosage(cleanText),
        frequency: this.extractFrequency(cleanText),
        duration: this.extractDuration(cleanText),
        administration: this.extractAdministration(cleanText),
        specialInstructions: this.extractSpecialInstructions(cleanText),
        ageSpecificDosage: this.extractAgeSpecificDosage(cleanText),
      };
    } catch (error) {
      console.error('용법용량 파싱 오류:', error);
      return this.getEmptyUsageInfo();
    }
  }

  /**
   * 용량 정보 추출
   */
  private extractDosage(text: string): string {
    const dosagePatterns = [
      /(?:용량|투여량|복용량)\s*[:：]?\s*([^.\n]+)/i,
      /(?:성인|일반적으로)\s*([0-9]+(?:\.[0-9]+)?\s*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
      /(?:1회|한번에)\s*([0-9]+(?:\.[0-9]+)?\s*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
      /([0-9]+(?:\.[0-9]+)?\s*(?:mg|g|ml|정|알|캡슐)(?:\s*씩)?)/i,
    ];

    for (const pattern of dosagePatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const dosage = match[1].trim();
        if (dosage.length > 2) {
          return this.cleanDosageText(dosage);
        }
      }
    }

    return '용량 정보를 찾을 수 없습니다.';
  }

  /**
   * 복용 횟수 추출
   */
  private extractFrequency(text: string): string {
    const frequencyPatterns = [
      /(?:1일|하루)\s*([0-9]+)\s*회/i,
      /(?:매일|일일)\s*([0-9]+)\s*회/i,
      /([0-9]+)\s*회\s*(?:\/일|매일|하루)/i,
      /(?:복용횟수|투여횟수)\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of frequencyPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const frequency = match[1].trim();
        if (/^\d+$/.test(frequency)) {
          return `1일 ${frequency}회`;
        }
        return frequency;
      }
    }

    // 일반적인 패턴 찾기
    const commonPatterns = [
      /(?:아침|점심|저녁|식전|식후|취침전).*?복용/gi,
      /(?:매일|하루).*?(?:복용|투여)/gi,
    ];

    for (const pattern of commonPatterns) {
      const match = text.match(pattern);
      if (match && match[0]) {
        return match[0];
      }
    }

    return '복용 횟수 정보를 찾을 수 없습니다.';
  }

  /**
   * 복용 기간 추출
   */
  private extractDuration(text: string): string {
    const durationPatterns = [
      /(?:복용기간|투여기간|치료기간)\s*[:：]?\s*([^.\n]+)/i,
      /([0-9]+)\s*(?:일|주|개월|달|년)(?:\s*(?:간|동안|이상|이하))?/i,
      /(?:최대|최소)\s*([0-9]+\s*(?:일|주|개월|달|년))/i,
    ];

    for (const pattern of durationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const duration = match[1].trim();
        if (duration.length > 1) {
          return duration;
        }
      }
    }

    return '복용 기간 정보를 찾을 수 없습니다.';
  }

  /**
   * 복용법 추출 (식전/식후 등)
   */
  private extractAdministration(text: string): string {
    const administrationPatterns = [
      /(?:복용법|복용방법|투여방법)\s*[:：]?\s*([^.\n]+)/i,
      /(식전|식후|식간|공복|취침전|아침|점심|저녁).*?(?:복용|투여)/i,
      /(?:물과?\s*함께|충분한\s*물로)\s*([^.\n]+)/i,
    ];

    const administrationInfo: string[] = [];

    for (const pattern of administrationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        administrationInfo.push(match[1].trim());
      }
    }

    // 식사 관련 정보
    const mealTiming = this.extractMealTiming(text);
    if (mealTiming) {
      administrationInfo.push(mealTiming);
    }

    return administrationInfo.length > 0 
      ? administrationInfo.join(', ') 
      : '복용법 정보를 찾을 수 없습니다.';
  }

  /**
   * 특별 지시사항 추출
   */
  private extractSpecialInstructions(text: string): string {
    const instructionPatterns = [
      /(?:특별\s*지시사항|주의사항)\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용|저장)|\n\n|$)/i,
      /(?:주의할\s*점|유의사항)\s*[:：]?\s*([^.\n]+)/i,
      /(?:반드시|꼭|절대)\s*([^.\n]+)/i,
    ];

    const instructions: string[] = [];

    for (const pattern of instructionPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const instruction = match[1].trim();
        if (instruction.length > 5) {
          instructions.push(instruction);
        }
      }
    }

    return instructions.length > 0 
      ? instructions.join(' ') 
      : '특별 지시사항이 없습니다.';
  }

  /**
   * 연령별 용량 추출
   */
  private extractAgeSpecificDosage(text: string): {
    adult: string;
    child: string;
    elderly: string;
  } {
    return {
      adult: this.extractAdultDosage(text),
      child: this.extractChildDosage(text),
      elderly: this.extractElderlyDosage(text),
    };
  }

  /**
   * 성인 용량 추출
   */
  private extractAdultDosage(text: string): string {
    const adultPatterns = [
      /성인\s*[:：]?\s*([^.\n]+)/i,
      /(?:15세|18세)\s*이상\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of adultPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    return this.extractDosage(text); // 일반 용량 반환
  }

  /**
   * 소아 용량 추출
   */
  private extractChildDosage(text: string): string {
    const childPatterns = [
      /(?:소아|어린이|아이)\s*[:：]?\s*([^.\n]+)/i,
      /(?:15세|12세|6세)\s*미만\s*[:：]?\s*([^.\n]+)/i,
      /(?:kg당|체중\s*1kg)\s*([^.\n]+)/i,
    ];

    for (const pattern of childPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    return '소아 용량 정보가 없습니다.';
  }

  /**
   * 고령자 용량 추출
   */
  private extractElderlyDosage(text: string): string {
    const elderlyPatterns = [
      /(?:고령자|노인|65세\s*이상)\s*[:：]?\s*([^.\n]+)/i,
      /(?:신중히|감량하여)\s*([^.\n]+)/i,
    ];

    for (const pattern of elderlyPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    return '고령자 용량 정보가 없습니다.';
  }

  /**
   * 식사 타이밍 추출
   */
  private extractMealTiming(text: string): string | null {
    const mealPatterns = [
      /(식전|식후|식간|공복)(?:\s*30분|\s*1시간)?/i,
      /(아침|점심|저녁)\s*(?:식사\s*)?(?:전|후)/i,
    ];

    for (const pattern of mealPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[0];
      }
    }

    return null;
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
   * 용량 텍스트 정리
   */
  private cleanDosageText(text: string): string {
    return text
      .replace(/^\d+\.\s*/, '')
      .replace(/^-\s*/, '')
      .replace(/\s*입니다\.?$/, '')
      .replace(/\s*됩니다\.?$/, '')
      .trim();
  }

  /**
   * 빈 용법용량 정보 반환
   */
  private getEmptyUsageInfo(): UsageInfo {
    return {
      dosage: '용량 정보를 파싱할 수 없습니다.',
      frequency: '복용 횟수 정보를 파싱할 수 없습니다.',
      duration: '복용 기간 정보를 파싱할 수 없습니다.',
      administration: '복용법 정보를 파싱할 수 없습니다.',
      specialInstructions: '특별 지시사항을 파싱할 수 없습니다.',
      ageSpecificDosage: {
        adult: '성인 용량 정보 없음',
        child: '소아 용량 정보 없음',
        elderly: '고령자 용량 정보 없음',
      },
    };
  }
} 