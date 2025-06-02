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
      // 디버깅을 위한 로깅
      console.log('=== 주의사항 PDF 원본 텍스트 ===');
      console.log(text.substring(0, 500) + '...');
      console.log('텍스트 총 길이:', text.length);
      
      const cleanText = this.cleanText(text);
      console.log('=== 정리된 주의사항 텍스트 ===');
      console.log(cleanText.substring(0, 500) + '...');
      
      const result = {
        contraindications: this.extractContraindications(cleanText),
        warnings: this.extractWarnings(cleanText),
        precautions: this.extractPrecautions(cleanText),
        sideEffects: this.extractSideEffects(cleanText),
        interactions: this.extractInteractions(cleanText),
        pregnancyWarning: this.extractPregnancyWarning(cleanText),
        childrenWarning: this.extractChildrenWarning(cleanText),
        elderlyWarning: this.extractElderlyWarning(cleanText),
      };
      
      console.log('=== 주의사항 파싱 결과 ===');
      console.log('금기사항:', result.contraindications.length, '개');
      console.log('경고사항:', result.warnings.length, '개');
      console.log('일반주의:', result.precautions.length, '개');
      console.log('부작용:', result.sideEffects.length, '개');
      console.log('상호작용:', result.interactions.length, '개');
      console.log('임신경고:', result.pregnancyWarning);
      console.log('어린이경고:', result.childrenWarning);
      console.log('고령자경고:', result.elderlyWarning);
      
      return result;
    } catch (error) {
      console.error('주의사항 파싱 오류:', error);
      return this.getEmptyCautionInfo();
    }
  }

  /**
   * 금기사항 추출 (개선된 버전)
   */
  private extractContraindications(text: string): string[] {
    console.log('금기사항 추출 시작');
    
    const contraindications: string[] = [];
    
    const patterns = [
      // 표준 금기사항 패턴
      /금기(?:사항)?\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|경고|주의|부작용|용법|효과)|\n\n\n|$)/i,
      
      // 투여하지 말 것
      /투여하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|경고|주의|부작용)|\n\n|$)/i,
      
      // 다음 환자에게는 투여하지 말 것
      /다음.*?환자에게는?\s*투여하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|경고|주의)|\n\n|$)/i,
      
      // 다음의 경우 투여하지 말 것
      /다음의?\s*경우.*?투여하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 복용하지 말 것
      /복용하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 사용하지 말 것
      /사용하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        console.log(`금기사항 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        const items = this.extractListItems(match[1]);
        console.log(`추출된 금기사항 ${items.length}개:`, items);
        contraindications.push(...items);
      }
    }

    // 특정 키워드 기반 금기사항 추출
    const keywordBasedContraindications = this.extractContraindicationsByKeywords(text);
    if (keywordBasedContraindications.length > 0) {
      contraindications.push(...keywordBasedContraindications);
    }

    const result = this.cleanAndFilterItems(contraindications);
    console.log(`최종 금기사항 ${result.length}개:`, result);
    return result;
  }

  /**
   * 키워드 기반 금기사항 추출
   */
  private extractContraindicationsByKeywords(text: string): string[] {
    const contraindications: string[] = [];
    
    const keywordPatterns = [
      /(임산부|임신부|수유부).*?(?:금기|투여\s*금지|사용\s*금지)/gi,
      /(알레르기|과민반응).*?(?:금기|투여\s*금지)/gi,
      /(간부전|신부전|심부전).*?(?:금기|투여\s*금지)/gi,
      /(12세\s*미만|18세\s*미만).*?(?:금기|투여\s*금지)/gi,
    ];

    for (const pattern of keywordPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        contraindications.push(...matches.map(match => match.trim()));
        console.log(`키워드 기반 금기사항 추출:`, matches);
      }
    }

    return contraindications;
  }

  /**
   * 경고사항 추출 (개선된 버전)
   */
  private extractWarnings(text: string): string[] {
    console.log('경고사항 추출 시작');
    
    const warnings: string[] = [];
    
    const patterns = [
      // 표준 경고 패턴
      /경고\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|주의|부작용|상호작용|금기)|\n\n\n|$)/i,
      
      // 중요한 경고
      /중요한?\s*경고\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|주의)|\n\n|$)/i,
      
      // 치명적 위험
      /치명적.*?위험\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 심각한 부작용
      /심각한?\s*부작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 생명위험
      /(생명\s*위험|위험한?\s*부작용)\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        console.log(`경고사항 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        const items = this.extractListItems(match[1]);
        console.log(`추출된 경고사항 ${items.length}개:`, items);
        warnings.push(...items);
      }
    }

    // 키워드 기반 경고사항 추출
    const keywordBasedWarnings = this.extractWarningsByKeywords(text);
    if (keywordBasedWarnings.length > 0) {
      warnings.push(...keywordBasedWarnings);
    }

    const result = this.cleanAndFilterItems(warnings);
    console.log(`최종 경고사항 ${result.length}개:`, result);
    return result;
  }

  /**
   * 키워드 기반 경고사항 추출
   */
  private extractWarningsByKeywords(text: string): string[] {
    const warnings: string[] = [];
    
    const keywordPatterns = [
      /(즉시|응급|응급실).*?(중단|중지|병원)/gi,
      /(아나필락시스|쇼크|호흡곤란).*?경고/gi,
      /(혈압\s*급상승|혈당\s*급상승).*?주의/gi,
    ];

    for (const pattern of keywordPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        warnings.push(...matches.map(match => match.trim()));
        console.log(`키워드 기반 경고사항 추출:`, matches);
      }
    }

    return warnings;
  }

  /**
   * 일반 주의사항 추출 (개선된 버전)
   */
  private extractPrecautions(text: string): string[] {
    console.log('일반 주의사항 추출 시작');
    
    const precautions: string[] = [];
    
    const patterns = [
      // 표준 주의사항 패턴
      /주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용|상호작용|보관|저장)|\n\n\n|$)/i,
      
      // 일반적 주의사항
      /일반적\s*주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용)|\n\n|$)/i,
      
      // 주의할 점
      /주의할?\s*점\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|부작용)|\n\n|$)/i,
      
      // 복용 시 주의사항
      /복용\s*시\s*주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 사용 시 주의사항
      /사용\s*시\s*주의사항\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        console.log(`주의사항 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        const items = this.extractListItems(match[1]);
        console.log(`추출된 주의사항 ${items.length}개:`, items);
        precautions.push(...items);
      }
    }

    // 키워드 기반 주의사항 추출
    const keywordBasedPrecautions = this.extractPrecautionsByKeywords(text);
    if (keywordBasedPrecautions.length > 0) {
      precautions.push(...keywordBasedPrecautions);
    }

    const result = this.cleanAndFilterItems(precautions);
    console.log(`최종 주의사항 ${result.length}개:`, result);
    return result;
  }

  /**
   * 키워드 기반 주의사항 추출
   */
  private extractPrecautionsByKeywords(text: string): string[] {
    const precautions: string[] = [];
    
    const keywordPatterns = [
      /(운전|기계\s*조작).*?주의/gi,
      /(알코올|음주).*?(?:금지|피해|주의)/gi,
      /(위장장애|소화불량).*?주의/gi,
      /(졸음|어지러움).*?주의/gi,
    ];

    for (const pattern of keywordPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        precautions.push(...matches.map(match => match.trim()));
        console.log(`키워드 기반 주의사항 추출:`, matches);
      }
    }

    return precautions;
  }

  /**
   * 부작용 추출 (개선된 버전)
   */
  private extractSideEffects(text: string): string[] {
    console.log('부작용 추출 시작');
    
    const sideEffects: string[] = [];
    
    const patterns = [
      // 표준 부작용 패턴
      /부작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|상호작용|보관|저장|경고)|\n\n\n|$)/i,
      
      // 이상반응
      /이상반응\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|상호작용)|\n\n|$)/i,
      
      // 나타날 수 있는 증상
      /다음과?\s*같은?\s*증상.*?나타날?\s*수\s*있.*?[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 부작용 증상
      /부작용\s*증상\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 나타날 수 있는 부작용
      /나타날?\s*수\s*있는?\s*부작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        console.log(`부작용 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        const items = this.extractListItems(match[1]);
        console.log(`추출된 부작용 ${items.length}개:`, items);
        sideEffects.push(...items);
      }
    }

    // 빈도별 부작용 정보도 추출
    const frequencyBasedEffects = this.extractFrequencyBasedSideEffects(text);
    if (frequencyBasedEffects.length > 0) {
      sideEffects.push(...frequencyBasedEffects);
    }

    // 키워드 기반 부작용 추출
    const keywordBasedEffects = this.extractSideEffectsByKeywords(text);
    if (keywordBasedEffects.length > 0) {
      sideEffects.push(...keywordBasedEffects);
    }

    const result = this.cleanAndFilterItems(sideEffects);
    console.log(`최종 부작용 ${result.length}개:`, result);
    return result;
  }

  /**
   * 키워드 기반 부작용 추출
   */
  private extractSideEffectsByKeywords(text: string): string[] {
    const sideEffects: string[] = [];
    
    // 일반적인 부작용 키워드들
    const sideEffectKeywords = [
      '두통', '어지러움', '졸음', '구역', '구토', '설사', '변비', '복통',
      '발진', '가려움', '두드러기', '호흡곤란', '가슴답답함', '심계항진',
      '피로', '무력감', '식욕부진', '불면', '신경과민', '우울', '불안'
    ];

    for (const keyword of sideEffectKeywords) {
      const regex = new RegExp(`(${keyword}[^.\n]*?)`, 'gi');
      const matches = text.match(regex);
      if (matches) {
        sideEffects.push(...matches.map(match => match.trim()));
      }
    }

    return sideEffects;
  }

  /**
   * 상호작용 추출 (개선된 버전)
   */
  private extractInteractions(text: string): string[] {
    console.log('상호작용 추출 시작');
    
    const interactions: string[] = [];
    
    const patterns = [
      // 표준 상호작용 패턴
      /(?:약물)?상호작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|보관|저장|경고)|\n\n\n|$)/i,
      
      // 다른 약물과의 상호작용
      /다른.*?약물과.*?상호작용\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 병용 주의
      /병용.*?주의\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 함께 복용하지 말 것
      /함께\s*복용하지\s*말\s*것\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
      
      // 병용금기
      /병용금기\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        console.log(`상호작용 패턴 매칭 성공: ${pattern.source.substring(0, 30)}...`);
        const items = this.extractListItems(match[1]);
        console.log(`추출된 상호작용 ${items.length}개:`, items);
        interactions.push(...items);
      }
    }

    // 키워드 기반 상호작용 추출
    const keywordBasedInteractions = this.extractInteractionsByKeywords(text);
    if (keywordBasedInteractions.length > 0) {
      interactions.push(...keywordBasedInteractions);
    }

    const result = this.cleanAndFilterItems(interactions);
    console.log(`최종 상호작용 ${result.length}개:`, result);
    return result;
  }

  /**
   * 키워드 기반 상호작용 추출
   */
  private extractInteractionsByKeywords(text: string): string[] {
    const interactions: string[] = [];
    
    const keywordPatterns = [
      /(와파린|아스피린|항응고제).*?상호작용/gi,
      /(리튬|디곡신|메토트렉세이트).*?상호작용/gi,
      /(알코올|음주).*?상호작용/gi,
      /(항생제|항우울제|항경련제).*?상호작용/gi,
    ];

    for (const pattern of keywordPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        interactions.push(...matches.map(match => match.trim()));
        console.log(`키워드 기반 상호작용 추출:`, matches);
      }
    }

    return interactions;
  }

  /**
   * 임신 관련 경고 추출 (개선된 버전)
   */
  private extractPregnancyWarning(text: string): string {
    console.log('임신 관련 경고 추출 시작');
    
    const patterns = [
      // 표준 임신 경고 패턴
      /임신.*?(?:금기|주의|경고)\s*[:：]?\s*([^.\n]+)/i,
      /임부.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
      /임신.*?중.*?(?:사용|복용).*?[:：]?\s*([^.\n]+)/i,
      /태아.*?(?:위험|영향)\s*[:：]?\s*([^.\n]+)/i,
      
      // 임신부 금기
      /임신부.*?금기\s*[:：]?\s*([^.\n]+)/i,
      
      // 수유부 관련
      /수유.*?(?:금기|주의|중단)\s*[:：]?\s*([^.\n]+)/i,
      
      // 가임기 여성
      /가임기.*?여성.*?(?:주의|금기)\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        console.log(`임신 경고 패턴 매칭: ${warning}`);
        
        if (warning.length > 5) {
          console.log(`임신 관련 경고 추출 성공: ${warning}`);
          return warning;
        }
      }
    }

    // 임부금기 키워드 확인
    if (text.includes('임부금기') || text.includes('임신금기')) {
      console.log('임부금기 키워드 발견');
      return '임신 중 복용 금지';
    }

    // 수유금기 키워드 확인
    if (text.includes('수유금기')) {
      console.log('수유금기 키워드 발견');
      return '수유 중 복용 금지';
    }

    console.log('임신 관련 경고 추출 실패');
    return '임신 관련 경고 정보가 없습니다.';
  }

  /**
   * 어린이 관련 경고 추출 (개선된 버전)
   */
  private extractChildrenWarning(text: string): string {
    console.log('어린이 관련 경고 추출 시작');
    
    const patterns = [
      // 표준 소아 경고 패턴
      /(?:소아|어린이|아이).*?(?:주의|경고|금기)\s*[:：]?\s*([^.\n]+)/i,
      /(?:12세|15세|18세)\s*미만.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
      /소아.*?(?:안전성|유효성).*?[:：]?\s*([^.\n]+)/i,
      
      // 연령 제한
      /(?:6세|12세|15세)\s*(?:미만|이하).*?(?:금기|사용금지)\s*[:：]?\s*([^.\n]+)/i,
      
      // 소아 투여
      /소아.*?투여.*?[:：]?\s*([^.\n]+)/i,
      
      // 어린이 복용
      /어린이.*?복용.*?[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        console.log(`어린이 경고 패턴 매칭: ${warning}`);
        
        if (warning.length > 5) {
          console.log(`어린이 관련 경고 추출 성공: ${warning}`);
          return warning;
        }
      }
    }

    // 소아금기 키워드 확인
    if (text.includes('소아금기') || text.includes('12세 미만 금기')) {
      console.log('소아금기 키워드 발견');
      return '소아 복용 금지';
    }

    console.log('어린이 관련 경고 추출 실패');
    return '어린이 관련 경고 정보가 없습니다.';
  }

  /**
   * 고령자 관련 경고 추출 (개선된 버전)
   */
  private extractElderlyWarning(text: string): string {
    console.log('고령자 관련 경고 추출 시작');
    
    const patterns = [
      // 표준 고령자 경고 패턴
      /(?:고령자|노인|65세\s*이상).*?(?:주의|경고|신중)\s*[:：]?\s*([^.\n]+)/i,
      /고령자.*?(?:투여|복용).*?[:：]?\s*([^.\n]+)/i,
      /노인.*?(?:감량|신중).*?[:：]?\s*([^.\n]+)/i,
      
      // 연령별 주의
      /(?:65세|70세)\s*이상.*?(?:주의|감량)\s*[:：]?\s*([^.\n]+)/i,
      
      // 고령자 투여
      /고령자.*?투여.*?[:：]?\s*([^.\n]+)/i,
      
      // 신중 투여
      /신중.*?투여.*?고령자\s*[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const warning = match[1].trim();
        console.log(`고령자 경고 패턴 매칭: ${warning}`);
        
        if (warning.length > 5) {
          console.log(`고령자 관련 경고 추출 성공: ${warning}`);
          return warning;
        }
      }
    }

    console.log('고령자 관련 경고 추출 실패');
    return '고령자 관련 경고 정보가 없습니다.';
  }

  /**
   * 빈도별 부작용 추출 (개선된 버전)
   */
  private extractFrequencyBasedSideEffects(text: string): string[] {
    console.log('빈도별 부작용 추출 시작');
    
    const frequencyEffects: string[] = [];
    
    const frequencyPatterns = [
      // 매우 흔하게
      /매우\s*흔하게?\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:흔하게|때때로|드물게|매우\s*드물게)|\n\n|$)/i,
      
      // 흔하게
      /흔하게?\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:때때로|드물게|매우\s*드물게)|\n\n|$)/i,
      
      // 때때로
      /때때로\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:드물게|매우\s*드물게)|\n\n|$)/i,
      
      // 드물게
      /드물게?\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:매우\s*드물게)|\n\n|$)/i,
      
      // 매우 드물게
      /매우\s*드물게?\s*[:：]?\s*([\s\S]*?)(?=\n\n|$)/i,
    ];

    for (const pattern of frequencyPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const effectText = match[1].trim();
        const effects = this.extractListItems(effectText);
        
        if (effects.length > 0) {
          console.log(`빈도별 부작용 추출:`, effects);
          frequencyEffects.push(...effects);
        }
      }
    }

    return frequencyEffects;
  }

  /**
   * 리스트 항목 추출 (개선된 버전)
   */
  private extractListItems(text: string): string[] {
    if (!text || text.trim().length === 0) {
      return [];
    }

    const items: string[] = [];
    
    // 다양한 구분자로 분리
    const separators = [
      /\d+[\.\)]\s*/g,     // 1. 2) 형태
      /[가-힣][\.\)]\s*/g, // 가. 나) 형태
      /[-·•○]\s*/g,       // 불렛 포인트
      /,\s*/g,            // 쉼표
      /;\s*/g,            // 세미콜론
      /\n/g,              // 줄바꿈
    ];

    let processedText = text;
    
    // 각 구분자로 분리 시도
    for (const separator of separators) {
      const parts = processedText.split(separator);
      if (parts.length > 1) {
        items.push(...parts
          .map(part => part.trim())
          .filter(part => part.length > 2)
          .filter(part => !part.match(/^[가-힣]?[\.\)]\s*$/))
        );
        break; // 첫 번째로 성공한 분리 방법 사용
      }
    }

    // 분리되지 않은 경우 전체를 하나의 항목으로
    if (items.length === 0 && text.trim().length > 5) {
      items.push(text.trim());
    }

    console.log(`리스트 항목 추출: ${items.length}개 항목`);
    return items;
  }

  /**
   * 항목 정리 및 필터링 (개선된 버전)
   */
  private cleanAndFilterItems(items: string[]): string[] {
    return items
      // 중복 제거
      .filter((item, index, array) => array.indexOf(item) === index)
      
      // 최소 길이 필터
      .filter(item => item.length > 3)
      
      // 최대 길이 필터
      .filter(item => item.length < 300)
      
      // 불필요한 내용 제거
      .filter(item => !item.includes('undefined'))
      .filter(item => !item.match(/^[0-9\.\)\s]*$/))
      .filter(item => !item.match(/^[가-힣]\.\s*$/))
      
      // 텍스트 정리
      .map(item => item
        .replace(/^\d+[\.\)]\s*/, '')
        .replace(/^[가-힣][\.\)]\s*/, '')
        .replace(/^[-·•○]\s*/, '')
        .trim()
      )
      
      // 다시 길이 체크
      .filter(item => item.length > 2)
      
      // 최대 항목 수 제한
      .slice(0, 20);
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
   * 빈 주의사항 정보 반환
   */
  private getEmptyCautionInfo(): CautionInfo {
    return {
      contraindications: [],
      warnings: [],
      precautions: [],
      sideEffects: [],
      interactions: [],
      pregnancyWarning: '임신 관련 경고 정보를 파싱할 수 없습니다.',
      childrenWarning: '어린이 관련 경고 정보를 파싱할 수 없습니다.',
      elderlyWarning: '고령자 관련 경고 정보를 파싱할 수 없습니다.',
    };
  }
} 