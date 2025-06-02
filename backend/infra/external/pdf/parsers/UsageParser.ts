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
      // 디버깅을 위한 로깅
      console.log('=== 용법용량 PDF 원본 텍스트 ===');
      console.log(text.substring(0, 500) + '...');
      console.log('텍스트 총 길이:', text.length);
      
      const cleanText = this.cleanText(text);
      console.log('=== 정리된 용법용량 텍스트 ===');
      console.log(cleanText.substring(0, 500) + '...');
      
      const result = {
        dosage: this.extractDosage(cleanText),
        frequency: this.extractFrequency(cleanText),
        duration: this.extractDuration(cleanText),
        administration: this.extractAdministration(cleanText),
        specialInstructions: this.extractSpecialInstructions(cleanText),
        ageSpecificDosage: this.extractAgeSpecificDosage(cleanText),
      };
      
      console.log('=== 용법용량 파싱 결과 ===');
      console.log('용량:', result.dosage);
      console.log('빈도:', result.frequency);
      console.log('기간:', result.duration);
      console.log('복용법:', result.administration);
      console.log('특별지시:', result.specialInstructions);
      console.log('연령별용량:', result.ageSpecificDosage);
      
      return result;
    } catch (error) {
      console.error('용법용량 파싱 오류:', error);
      return this.getEmptyUsageInfo();
    }
  }

  /**
   * 용량 정보 추출 (개선된 버전)
   */
  private extractDosage(text: string): string {
    console.log('용량 정보 추출 시작');
    
    const dosagePatterns = [
      // 표준 용량 패턴
      /(?:용법|용량|투여량|복용량)\s*[·\s]*(?:용량)?\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*)/i,
      
      // 성인 용량 패턴
      /성인\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*)/i,
      
      // 일반적 용량 패턴
      /일반적으로\s*([^.\n]*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*)/i,
      
      // 1회 용량 패턴
      /(?:1회|한번에|매회)\s*([0-9]+(?:\.[0-9]+)?\s*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*)/i,
      
      // 체중 기반 용량
      /체중\s*kg\s*당\s*([^.\n]*(?:mg|g|ml)[^.\n]*)/i,
      
      // 숫자로 시작하는 용량
      /([0-9]+(?:\.[0-9]+)?\s*(?:mg|g|ml|정|알|캡슐|포|앰플)(?:\s*씩)?[^.\n]*)/i,
      
      // 광범위한 패턴
      /((?:성인|환자|투여|복용)[^.\n]*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*)/i,
    ];

    for (const pattern of dosagePatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const dosage = this.cleanDosageText(match[1].trim());
        console.log(`용량 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        console.log(`추출된 용량: ${dosage}`);
        
        if (dosage.length > 3 && /mg|g|ml|정|알|캡슐|포|앰플/.test(dosage)) {
          return dosage;
        }
      }
    }

    // 패턴 매칭 실패 시 키워드 기반 추출
    return this.extractDosageByKeywords(text);
  }

  /**
   * 키워드 기반 용량 추출
   */
  private extractDosageByKeywords(text: string): string {
    console.log('키워드 기반 용량 추출 시도');
    
    // 용량 단위가 포함된 문장 찾기
    const dosageRegex = /[^.\n]*(?:mg|g|ml|정|알|캡슐|포|앰플)[^.\n]*/gi;
    const matches = text.match(dosageRegex);
    
    if (matches && matches.length > 0) {
      const bestMatch = matches
        .filter(match => match.length > 5 && match.length < 200)
        .filter(match => /\d/.test(match)) // 숫자가 포함된 것만
        .sort((a, b) => {
          // 더 구체적인 정보가 있는 것 우선
          const aScore = (a.match(/\d/g) || []).length + (a.includes('1회') ? 2 : 0);
          const bScore = (b.match(/\d/g) || []).length + (b.includes('1회') ? 2 : 0);
          return bScore - aScore;
        })[0];
      
      if (bestMatch) {
        const cleaned = this.cleanDosageText(bestMatch.trim());
        console.log(`키워드 기반 용량 추출 성공: ${cleaned}`);
        return cleaned;
      }
    }
    
    return '용량 정보를 파싱할 수 없습니다. PDF 문서를 직접 확인해주세요.';
  }

  /**
   * 복용 횟수 추출 (개선된 버전)
   */
  private extractFrequency(text: string): string {
    console.log('복용 횟수 추출 시작');
    
    const frequencyPatterns = [
      // 표준 빈도 패턴
      /(?:1일|하루|매일)\s*([0-9]+)\s*회/i,
      /(?:매일|일일|day)\s*([0-9]+)\s*회/i,
      /([0-9]+)\s*회\s*(?:\/일|매일|하루|day)/i,
      
      // 복용횟수 명시
      /(?:복용횟수|투여횟수|빈도)\s*[:：]?\s*([^.\n]+)/i,
      
      // 시간별 복용
      /(아침|점심|저녁|식전|식후|취침전).*?(?:복용|투여)/gi,
      
      // 간격 기반
      /([0-9]+)\s*시간\s*간격/i,
      /([0-9]+)\s*시간마다/i,
      
      // 일반적 패턴
      /(?:매일|하루).*?(?:복용|투여|회)/gi,
    ];

    for (const pattern of frequencyPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let frequency = match[1].trim();
        
        console.log(`빈도 패턴 매칭: ${frequency}`);
        
        // 숫자만 있는 경우 형식 맞춤
        if (/^\d+$/.test(frequency)) {
          frequency = `1일 ${frequency}회`;
        }
        
        if (frequency.length > 2) {
          console.log(`복용 횟수 추출 성공: ${frequency}`);
          return frequency;
        }
      }
    }

    // 시간 기반 복용법 추출
    const timeBasedFrequency = this.extractTimeBasedFrequency(text);
    if (timeBasedFrequency) {
      return timeBasedFrequency;
    }

    return '복용 횟수 정보를 파싱할 수 없습니다.';
  }

  /**
   * 시간 기반 복용 빈도 추출
   */
  private extractTimeBasedFrequency(text: string): string | null {
    const timePatterns = [
      /(아침|점심|저녁|식전|식후|취침전).*?(?:복용|투여)/gi,
      /(?:매일|하루).*?(?:복용|투여)/gi,
      /([0-9]+)\s*시간마다/i,
    ];

    for (const pattern of timePatterns) {
      const matches = text.match(pattern);
      if (matches && matches.length > 0) {
        const timeInfo = matches.join(', ');
        if (timeInfo.length > 5) {
          console.log(`시간 기반 빈도 추출: ${timeInfo}`);
          return timeInfo;
        }
      }
    }

    return null;
  }

  /**
   * 복용 기간 추출 (개선된 버전)
   */
  private extractDuration(text: string): string {
    console.log('복용 기간 추출 시작');
    
    const durationPatterns = [
      // 표준 기간 패턴
      /(?:복용기간|투여기간|치료기간|기간)\s*[:：]?\s*([^.\n]+)/i,
      
      // 숫자 기반 기간
      /([0-9]+)\s*(?:일|주|개월|달|년)(?:\s*(?:간|동안|이상|이하|정도))?/i,
      
      // 최대/최소 기간
      /(?:최대|최소|최장|최단)\s*([0-9]+\s*(?:일|주|개월|달|년)[^.\n]*)/i,
      
      // 증상 개선까지
      /증상.*?개선.*?까지\s*([^.\n]+)/i,
      /호전.*?까지\s*([^.\n]+)/i,
      
      // 지속적 복용
      /(지속적|계속|연속).*?(?:복용|투여)[^.\n]*/i,
    ];

    for (const pattern of durationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const duration = match[1].trim();
        console.log(`기간 패턴 매칭: ${duration}`);
        
        if (duration.length > 2 && duration.length < 100) {
          console.log(`복용 기간 추출 성공: ${duration}`);
          return duration;
        }
      }
    }

    // 일반적인 기간 표현 찾기
    const generalDuration = this.extractGeneralDuration(text);
    if (generalDuration) {
      return generalDuration;
    }

    return '복용 기간 정보를 파싱할 수 없습니다.';
  }

  /**
   * 일반적인 기간 표현 추출
   */
  private extractGeneralDuration(text: string): string | null {
    const patterns = [
      /\d+\s*일/g,
      /\d+\s*주/g,
      /\d+\s*개월/g,
      /장기간/g,
      /단기간/g,
    ];

    for (const pattern of patterns) {
      const matches = text.match(pattern);
      if (matches && matches.length > 0) {
        const duration = matches[0];
        console.log(`일반 기간 표현 추출: ${duration}`);
        return duration;
      }
    }

    return null;
  }

  /**
   * 복용법 추출 (식전/식후 등) - 개선된 버전
   */
  private extractAdministration(text: string): string {
    console.log('복용법 추출 시작');
    
    const administrationPatterns = [
      // 명시적 복용법
      /(?:복용법|복용방법|투여방법|복용시기)\s*[:：]?\s*([^.\n]+)/i,
      
      // 식사 관련
      /(식전|식후|식간|공복).*?(?:복용|투여)/i,
      
      // 시간 관련
      /(아침|점심|저녁|취침전|잠자리|밤).*?(?:복용|투여)/i,
      
      // 물과 함께
      /(?:물과?\s*함께|충분한\s*물로|미지근한\s*물)\s*([^.\n]+)/i,
      
      // 씹지 말고
      /(씹지\s*말고|통째로|그대로)\s*([^.\n]+)/i,
      
      // 특별한 복용법
      /(공복에|빈속에|위장장애|위장보호)\s*([^.\n]+)/i,
    ];

    const administrationInfo: string[] = [];

    for (const pattern of administrationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const info = match[1].trim();
        console.log(`복용법 패턴 매칭: ${info}`);
        
        if (info.length > 2) {
          administrationInfo.push(info);
        }
      }
    }

    // 식사 관련 정보 추가
    const mealTiming = this.extractMealTiming(text);
    if (mealTiming) {
      administrationInfo.push(mealTiming);
    }

    // 특별 지시사항 추가
    const specialInstructions = this.extractAdministrationInstructions(text);
    if (specialInstructions.length > 0) {
      administrationInfo.push(...specialInstructions);
    }

    const result = administrationInfo.length > 0 
      ? [...new Set(administrationInfo)].join(', ') 
      : '복용법 정보를 파싱할 수 없습니다.';
    
    console.log(`최종 복용법: ${result}`);
    return result;
  }

  /**
   * 복용법 관련 특별 지시사항 추출
   */
  private extractAdministrationInstructions(text: string): string[] {
    const instructions: string[] = [];
    
    const patterns = [
      /물\s*(?:과|와)?\s*함께.*?복용/gi,
      /씹지\s*말고.*?복용/gi,
      /공복.*?복용/gi,
      /식전.*?복용/gi,
      /식후.*?복용/gi,
      /취침전.*?복용/gi,
    ];

    for (const pattern of patterns) {
      const matches = text.match(pattern);
      if (matches) {
        instructions.push(...matches.map(match => match.trim()));
      }
    }

    return instructions;
  }

  /**
   * 특별 지시사항 추출 (개선된 버전)
   */
  private extractSpecialInstructions(text: string): string {
    console.log('특별 지시사항 추출 시작');
    
    const instructionPatterns = [
      // 명시적 지시사항
      /(?:특별\s*지시사항|주의사항|유의사항)\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용|저장|보관)|\n\n|$)/i,
      
      // 주의할 점
      /(?:주의할\s*점|유의할\s*점)\s*[:：]?\s*([^.\n]+)/i,
      
      // 반드시/꼭 해야 할 것
      /(?:반드시|꼭|절대)\s*([^.\n]+)/gi,
      
      // 피해야 할 것
      /(?:피하|금지|하지\s*말)\s*([^.\n]+)/gi,
      
      // 복용 중 주의사항
      /복용\s*중\s*([^.\n]+)/gi,
      
      // 음식/음료 관련
      /(알코올|술|음주|커피|차|우유).*?(?:금지|피하|주의)/gi,
    ];

    const instructions: string[] = [];

    for (const pattern of instructionPatterns) {
      let match;
      if (pattern.flags?.includes('g')) {
        while ((match = pattern.exec(text)) !== null) {
          if (match[1] || match[0]) {
            const instruction = (match[1] || match[0]).trim();
            if (instruction.length > 5) {
              instructions.push(instruction);
              console.log(`특별 지시사항 추출: ${instruction}`);
            }
          }
        }
      } else {
        match = text.match(pattern);
        if (match && match[1]) {
          const instruction = match[1].trim();
          if (instruction.length > 5) {
            instructions.push(instruction);
            console.log(`특별 지시사항 추출: ${instruction}`);
          }
        }
      }
    }

    const result = instructions.length > 0 
      ? [...new Set(instructions)].join(' / ') 
      : '특별 지시사항 정보가 없습니다.';
    
    console.log(`최종 특별 지시사항: ${result}`);
    return result;
  }

  /**
   * 연령별 용량 추출 (개선된 버전)
   */
  private extractAgeSpecificDosage(text: string): {
    adult: string;
    child: string;
    elderly: string;
  } {
    console.log('연령별 용량 추출 시작');
    
    return {
      adult: this.extractAdultDosage(text),
      child: this.extractChildDosage(text),
      elderly: this.extractElderlyDosage(text),
    };
  }

  /**
   * 성인 용량 추출 (개선된 버전)
   */
  private extractAdultDosage(text: string): string {
    const adultPatterns = [
      /성인\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
      /(?:15세|18세)\s*이상\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
      /일반적으로\s*성인\s*([^.\n]*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
    ];

    for (const pattern of adultPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const dosage = this.cleanDosageText(match[1].trim());
        if (dosage.length > 3) {
          console.log(`성인 용량 추출: ${dosage}`);
          return dosage;
        }
      }
    }

    return '성인 용량 정보 없음';
  }

  /**
   * 소아 용량 추출 (개선된 버전)
   */
  private extractChildDosage(text: string): string {
    const childPatterns = [
      /(?:소아|어린이|아이|12세\s*미만|15세\s*미만)\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐|kg)[^.\n]*)/i,
      /체중\s*kg\s*당\s*([^.\n]*(?:mg|g|ml)[^.\n]*)/i,
      /(?:소아|어린이).*?용량\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of childPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const dosage = this.cleanDosageText(match[1].trim());
        if (dosage.length > 3) {
          console.log(`소아 용량 추출: ${dosage}`);
          return dosage;
        }
      }
    }

    return '소아 용량 정보 없음';
  }

  /**
   * 고령자 용량 추출 (개선된 버전)
   */
  private extractElderlyDosage(text: string): string {
    const elderlyPatterns = [
      /(?:고령자|노인|65세\s*이상)\s*[:：]?\s*([^.\n]*(?:mg|g|ml|정|알|캡슐)[^.\n]*)/i,
      /고령자.*?용량\s*[:：]?\s*([^.\n]+)/i,
      /노인.*?투여\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of elderlyPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const dosage = this.cleanDosageText(match[1].trim());
        if (dosage.length > 3) {
          console.log(`고령자 용량 추출: ${dosage}`);
          return dosage;
        }
      }
    }

    return '고령자 용량 정보 없음';
  }

  /**
   * 식사 시기 추출 (개선된 버전)
   */
  private extractMealTiming(text: string): string | null {
    const mealPatterns = [
      /(식전|식후|식간|공복).*?(?:복용|투여)/i,
      /(?:아침|점심|저녁).*?(?:식전|식후).*?(?:복용|투여)/i,
    ];

    for (const pattern of mealPatterns) {
      const match = text.match(pattern);
      if (match && match[0]) {
        const timing = match[0].trim();
        console.log(`식사 시기 추출: ${timing}`);
        return timing;
      }
    }

    return null;
  }

  /**
   * 텍스트 정리 (개선된 버전)
   */
  private cleanText(text: string): string {
    return text
      // 줄바꿈 정리
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      
      // 과도한 줄바꿈 제거
      .replace(/\n{3,}/g, '\n\n')
      
      // 과도한 공백 제거
      .replace(/\s{3,}/g, ' ')
      
      // 탭 문자 제거
      .replace(/\t/g, ' ')
      
      // 특수 문자 정리
      .replace(/[""'']/g, '"')
      .replace(/[‧・]/g, '·')
      
      .trim();
  }

  /**
   * 용량 텍스트 정리 (개선된 버전)
   */
  private cleanDosageText(text: string): string {
    return text
      // 번호 제거
      .replace(/^\d+[\.\)]\s*/, '')
      .replace(/^[가-힣][\.\)]\s*/, '')
      
      // 불필요한 기호 제거
      .replace(/^[-·•○]\s*/, '')
      
      // 의학 단위 앞뒤 공백 정리
      .replace(/(\d+)\s*(mg|g|ml|μg|mcg)/gi, '$1$2')
      
      // 단위와 단어 사이 공백 추가
      .replace(/(mg|g|ml|μg|mcg)([가-힣a-zA-Z])/gi, '$1 $2')
      
      // 연속된 공백 정리
      .replace(/\s{2,}/g, ' ')
      
      .trim();
  }

  /**
   * 빈 용법용량 정보 반환
   */
  private getEmptyUsageInfo(): UsageInfo {
    return {
      dosage: '용량 정보를 파싱할 수 없습니다. PDF 문서를 직접 확인해주세요.',
      frequency: '복용 횟수 정보를 파싱할 수 없습니다.',
      duration: '복용 기간 정보를 파싱할 수 없습니다.',
      administration: '복용법 정보를 파싱할 수 없습니다.',
      specialInstructions: '특별 지시사항이 없습니다.',
      ageSpecificDosage: {
        adult: '성인 용량 정보 없음',
        child: '소아 용량 정보 없음',
        elderly: '고령자 용량 정보 없음',
      },
    };
  }
} 