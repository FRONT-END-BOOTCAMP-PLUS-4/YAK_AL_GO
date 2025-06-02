// 효능효과 PDF 파서

import type { EffectInfo } from '../types/ParsedContent';

/**
 * 효능효과 PDF 파서
 * 효능효과 문서에서 구조화된 정보를 추출
 */
export class EffectParser {
  /**
   * PDF 텍스트에서 효능효과 정보 추출
   * @param text PDF에서 추출된 텍스트
   * @returns 구조화된 효능효과 정보
   */
  parseEffect(text: string): EffectInfo {
    try {
      // 디버깅을 위한 로깅
      console.log('=== 효능효과 PDF 원본 텍스트 ===');
      console.log(text.substring(0, 500) + '...');
      console.log('텍스트 총 길이:', text.length);
      
      const cleanText = this.cleanText(text);
      console.log('=== 정리된 텍스트 ===');
      console.log(cleanText.substring(0, 500) + '...');
      
      const result = {
        mainEffect: this.extractMainEffect(cleanText),
        detailedEffect: this.extractDetailedEffect(cleanText),
        targetDisease: this.extractTargetDiseases(cleanText),
        therapeuticClass: this.extractTherapeuticClass(cleanText),
      };
      
      console.log('=== 파싱 결과 ===');
      console.log('주요 효능:', result.mainEffect);
      console.log('상세 효능:', result.detailedEffect);
      console.log('대상 질병:', result.targetDisease);
      console.log('치료 분류:', result.therapeuticClass);
      
      return result;
    } catch (error) {
      console.error('효능효과 파싱 오류:', error);
      return this.getEmptyEffectInfo();
    }
  }

  /**
   * 주요 효능 추출 (개선된 버전)
   */
  private extractMainEffect(text: string): string {
    // 더 많은 효능효과 섹션 패턴 (실제 PDF 구조에 맞춤)
    const patterns = [
      // 표준 효능효과 패턴
      /효능[·・\s]*효과\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의|경고|금기|부작용|상호작용|\d+\.|가\.|나\.|다\.)|\n\n\n|$)/i,
      
      // 이 약의 효능효과 패턴
      /이\s*약의?\s*효능[·・\s]*효과\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의|경고)|\n\n|$)/i,
      
      // 적응증 패턴
      /적응증\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의|경고)|\n\n|$)/i,
      
      // 치료 대상 패턴
      /다음\s*질환의?\s*치료\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
      
      // 사용목적 패턴
      /사용\s*목적\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
      
      // 투여목적 패턴
      /투여\s*목적\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
      
      // 광범위한 패턴 (마지막 시도)
      /(치료|개선|완화|예방|억제).{10,200}/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let effect = match[1].trim();
        
        console.log(`패턴 매칭 성공: ${pattern.source.substring(0, 50)}...`);
        console.log(`원본 추출 텍스트: ${effect.substring(0, 200)}...`);
        
        // 텍스트 정리
        effect = this.cleanEffectText(effect);
        
        // 최소 길이 체크 (너무 짧은 텍스트 제외)
        if (effect.length > 15) {
          console.log(`정리된 효능 텍스트: ${effect}`);
          return effect;
        }
      }
    }

    // 패턴 매칭 실패 시 전체 텍스트에서 키워드 기반 추출
    return this.extractEffectByKeywords(text);
  }

  /**
   * 키워드 기반 효능 추출 (패턴 매칭 실패 시 대안)
   */
  private extractEffectByKeywords(text: string): string {
    console.log('키워드 기반 효능 추출 시도');
    
    // 의학적 키워드들
    const medicalKeywords = [
      '치료', '개선', '완화', '예방', '억제', '감소', '증진', '회복',
      '항염', '항균', '항바이러스', '진통', '해열', '소염',
      '고혈압', '당뇨', '감염', '염증', '통증', '발열', '알레르기'
    ];
    
    // 키워드가 포함된 문장들 추출
    const sentences = text.split(/[.!?]\s+/);
    const effectSentences = sentences.filter(sentence => {
      return medicalKeywords.some(keyword => sentence.includes(keyword)) && 
             sentence.length > 10 && sentence.length < 300;
    });
    
    if (effectSentences.length > 0) {
      const bestSentence = effectSentences[0].trim();
      console.log(`키워드 기반 추출 성공: ${bestSentence}`);
      return bestSentence;
    }
    
    // 최종 대안: 텍스트 첫 부분 반환
    const firstPart = text.substring(0, 200).trim();
    if (firstPart.length > 20) {
      console.log(`첫 부분 추출: ${firstPart}`);
      return firstPart;
    }
    
    return '효능효과 정보를 정확히 파싱할 수 없습니다. PDF 문서를 직접 확인해주세요.';
  }

  /**
   * 효능 텍스트 정리
   */
  private cleanEffectText(text: string): string {
    return text
      // 번호 제거
      .replace(/^\d+[\.\)]\s*/, '')
      .replace(/^[가-힣]\.\s*/, '')
      
      // 불필요한 기호 제거
      .replace(/^[-·•○]\s*/, '')
      
      // 괄호 안의 영어나 숫자 정리
      .replace(/\([^)]*\)/g, match => {
        if (match.length > 20) return '';
        return match;
      })
      
      // 연속된 공백 정리
      .replace(/\s+/g, ' ')
      
      // 문장 끝 정리
      .replace(/[\.]+$/, '.')
      
      .trim();
  }

  /**
   * 상세 효능 추출 (개선된 버전)
   */
  private extractDetailedEffect(text: string): string {
    console.log('상세 효능 추출 시작');
    
    // 더 긴 텍스트를 위한 패턴들
    const detailedPatterns = [
      /효능[·・\s]*효과\s*[:：]?\s*([\s\S]{100,}?)(?=\n\s*(?:용법|복용|투여|주의사항|저장|보관|\d+\.\s*[용주경금])|\n\n\n|$)/i,
      /이\s*약은?\s*([\s\S]{80,}?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
      /적응증.*?[:：]?\s*([\s\S]{100,}?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
    ];

    for (const pattern of detailedPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let detailed = match[1].trim();
        
        // 상세 텍스트 정리
        detailed = this.cleanDetailedText(detailed);
        
        // 충분히 길고 의미있는 텍스트인지 확인
        if (detailed.length > 80 && detailed.includes('치료') || detailed.includes('효과')) {
          console.log(`상세 효능 추출 성공: ${detailed.substring(0, 100)}...`);
          return detailed;
        }
      }
    }

    console.log('상세 효능 추출 실패, 주요 효능 반환');
    return this.extractMainEffect(text);
  }

  /**
   * 대상 질병 추출 (개선된 버전)
   */
  private extractTargetDiseases(text: string): string[] {
    console.log('대상 질병 추출 시작');
    
    const diseases: string[] = [];
    
    // 다양한 질병명 패턴들
    const diseasePatterns = [
      // 직접적인 적응증
      /적응증\s*[:：]?\s*([^.\n]+)/gi,
      
      // 치료 대상
      /(?:치료|개선|완화|예방).*?대상.*?[:：]?\s*([^.\n]+)/gi,
      
      // 다음 질환
      /다음\s*질환.*?[:：]?\s*([^.\n]+)/gi,
      
      // 투여 목적
      /(?:에|의|를|을)\s*(?:치료|개선|완화|예방).*?[:：]?\s*([^.\n]+)/gi,
      
      // 질병명이 포함된 문장
      /(고혈압|당뇨|감염|염증|통증|발열|알레르기|천식|관절염|골다공증|우울증|불안|불면|소화불량|변비|설사|기침|가래)[^.\n]*/gi,
    ];

    for (const pattern of diseasePatterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match[1]) {
          const diseaseText = match[1].trim();
          const extractedDiseases = this.extractDiseaseNames(diseaseText);
          diseases.push(...extractedDiseases);
          
          console.log(`질병명 후보 추출: ${diseaseText}`);
        }
      }
    }

    // 중복 제거 및 정리
    const uniqueDiseases = [...new Set(diseases)]
      .filter(disease => disease.length > 2 && disease.length < 100)
      .filter(disease => !disease.includes('undefined'))
      .slice(0, 15); // 최대 15개

    console.log(`최종 질병 목록: ${uniqueDiseases.join(', ')}`);
    return uniqueDiseases;
  }

  /**
   * 치료 분류 추출 (개선된 버전)
   */
  private extractTherapeuticClass(text: string): string {
    console.log('치료 분류 추출 시작');
    
    const classPatterns = [
      // 표준 분류 패턴
      /(?:약물)?분류\s*[:：]?\s*([^.\n]+)/i,
      /(?:치료|약리)(?:적)?\s*분류\s*[:：]?\s*([^.\n]+)/i,
      /(?:약리|의약품)\s*분류\s*[:：]?\s*([^.\n]+)/i,
      
      // 계열 정보
      /(?:이\s*약은)\s*([^.]+?)(?:에\s*속하|계열|분류)/i,
      /(항생제|소염제|진통제|해열제|항염진통제|혈압약|당뇨약|항히스타민제|스테로이드)[^.\n]*/i,
      
      // ATC 분류
      /ATC.*?[:：]?\s*([^.\n]+)/i,
      
      // 성분 기반 분류
      /주성분.*?[:：]?\s*([^.\n]+)/i,
    ];

    for (const pattern of classPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const classification = match[1].trim();
        if (classification.length > 3 && classification.length < 200) {
          console.log(`치료 분류 추출 성공: ${classification}`);
          return classification;
        }
      }
    }

    console.log('치료 분류 추출 실패');
    return '분류 정보를 파싱할 수 없습니다.';
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
   * 상세 텍스트 정리 (개선된 버전)
   */
  private cleanDetailedText(text: string): string {
    return text
      // 번호 제거
      .replace(/^\d+[\.\)]\s*/, '')
      .replace(/^[가-힣][\.\)]\s*/, '')
      
      // 불필요한 기호 제거
      .replace(/^[-·•○]\s*/, '')
      
      // 줄바꿈을 공백으로 변경 (단, 문장 끝은 유지)
      .replace(/\n(?![.!?])/g, ' ')
      
      // 연속된 공백 정리
      .replace(/\s{2,}/g, ' ')
      
      // 문장 부호 정리
      .replace(/\s*([.!?])\s*/g, '$1 ')
      
      .trim();
  }

  /**
   * 일반적인 접미사 제거
   */
  private removeCommonSuffixes(text: string): string {
    const suffixes = [
      /\s*에\s*사용합니다?\.?$/,
      /\s*입니다?\.?$/,
      /\s*됩니다?\.?$/,
      /\s*이다\.?$/,
      /\s*한다\.?$/,
      /\s*등\.?$/,
    ];

    let cleaned = text;
    for (const suffix of suffixes) {
      cleaned = cleaned.replace(suffix, '');
    }

    return cleaned.trim();
  }

  /**
   * 질병명 추출 (개선된 버전)
   */
  private extractDiseaseNames(text: string): string[] {
    // 다양한 구분자로 분리
    return text
      .split(/[,;，；\n\-·•○]/)
      .map(disease => disease.trim())
      .filter(disease => disease.length > 2)
      .map(disease => disease.replace(/^\d+[\.\)]\s*/, ''))
      .map(disease => disease.replace(/^[-·•○]\s*/, ''))
      .map(disease => disease.replace(/등$/, ''))
      .filter(disease => disease.length > 1);
  }

  /**
   * 빈 효능효과 정보 반환
   */
  private getEmptyEffectInfo(): EffectInfo {
    return {
      mainEffect: '효능효과 정보를 파싱할 수 없습니다. PDF 문서를 직접 확인해주세요.',
      detailedEffect: '상세 효능효과 정보를 파싱할 수 없습니다.',
      targetDisease: [],
      therapeuticClass: '분류 정보 없음',
    };
  }
} 