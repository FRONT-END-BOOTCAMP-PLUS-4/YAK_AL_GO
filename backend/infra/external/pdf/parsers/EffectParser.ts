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
      const cleanText = this.cleanText(text);
      
      return {
        mainEffect: this.extractMainEffect(cleanText),
        detailedEffect: this.extractDetailedEffect(cleanText),
        targetDisease: this.extractTargetDiseases(cleanText),
        therapeuticClass: this.extractTherapeuticClass(cleanText),
      };
    } catch (error) {
      console.error('효능효과 파싱 오류:', error);
      return this.getEmptyEffectInfo();
    }
  }

  /**
   * 주요 효능 추출
   */
  private extractMainEffect(text: string): string {
    // 다양한 효능효과 섹션 패턴
    const patterns = [
      /효능[·・]?효과\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:[1-9]|가\.|나\.|다\.|라\.|주의|용법|복용|투여|저장|보관|포장|유효)|\n\n|$)/i,
      /이\s*약의?\s*효능[·・]?효과\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
      /적응증\s*[:：]?\s*([\s\S]*?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let effect = match[1].trim();
        
        // 불필요한 부분 제거
        effect = effect.replace(/^\d+\.\s*/, ''); // 번호 제거
        effect = effect.replace(/^-\s*/, ''); // 대시 제거
        effect = this.removeCommonSuffixes(effect);
        
        if (effect.length > 10) {
          return effect;
        }
      }
    }

    return '효능효과 정보를 찾을 수 없습니다.';
  }

  /**
   * 상세 효능 추출
   */
  private extractDetailedEffect(text: string): string {
    // 상세 설명이 포함된 긴 텍스트 추출
    const detailedPatterns = [
      /효능[·・]?효과\s*[:：]?\s*([\s\S]{100,}?)(?=\n\s*(?:용법|복용|투여|주의사항|저장|보관)|\n\n\n|$)/i,
      /이\s*약은?\s*([\s\S]{50,}?)(?=\n\s*(?:용법|복용|투여|주의)|\n\n|$)/i,
    ];

    for (const pattern of detailedPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let detailed = match[1].trim();
        detailed = this.cleanDetailedText(detailed);
        
        if (detailed.length > 50) {
          return detailed;
        }
      }
    }

    return this.extractMainEffect(text); // 상세 정보가 없으면 주요 효능 반환
  }

  /**
   * 대상 질병 추출
   */
  private extractTargetDiseases(text: string): string[] {
    const diseases: string[] = [];
    
    // 질병명 패턴들
    const diseasePatterns = [
      /(?:치료|개선|완화|예방).*?(?:에|의|를|을)\s*(?:사용|적용|투여).*?[:：]?\s*([^.]+)/gi,
      /적응증\s*[:：]?\s*([^.]+)/gi,
      /다음\s*질환[에게]?\s*[:：]?\s*([^.]+)/gi,
    ];

    for (const pattern of diseasePatterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match[1]) {
          const diseaseText = match[1].trim();
          const extractedDiseases = this.extractDiseaseNames(diseaseText);
          diseases.push(...extractedDiseases);
        }
      }
    }

    // 중복 제거 및 정리
    return [...new Set(diseases)]
      .filter(disease => disease.length > 2 && disease.length < 100)
      .slice(0, 10); // 최대 10개
  }

  /**
   * 치료 분류 추출
   */
  private extractTherapeuticClass(text: string): string {
    const classPatterns = [
      /(?:약물)?분류\s*[:：]?\s*([^.\n]+)/i,
      /(?:치료|약리)(?:적)?\s*분류\s*[:：]?\s*([^.\n]+)/i,
      /(?:이\s*약은)\s*([^.]+?)(?:에\s*속하|계열|분류)/i,
    ];

    for (const pattern of classPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const classification = match[1].trim();
        if (classification.length > 3 && classification.length < 100) {
          return classification;
        }
      }
    }

    return '분류 정보 없음';
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
   * 상세 텍스트 정리
   */
  private cleanDetailedText(text: string): string {
    return text
      .replace(/^\d+\.\s*/, '')
      .replace(/^-\s*/, '')
      .replace(/\n+/g, ' ')
      .replace(/\s{2,}/g, ' ')
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
    ];

    let cleaned = text;
    for (const suffix of suffixes) {
      cleaned = cleaned.replace(suffix, '');
    }

    return cleaned.trim();
  }

  /**
   * 질병명 추출
   */
  private extractDiseaseNames(text: string): string[] {
    // 쉼표, 세미콜론, 줄바꿈으로 구분된 질병명들
    return text
      .split(/[,;，；\n]/)
      .map(disease => disease.trim())
      .filter(disease => disease.length > 2)
      .map(disease => disease.replace(/^\d+\.\s*/, ''))
      .map(disease => disease.replace(/^-\s*/, ''));
  }

  /**
   * 빈 효능효과 정보 반환
   */
  private getEmptyEffectInfo(): EffectInfo {
    return {
      mainEffect: '효능효과 정보를 파싱할 수 없습니다.',
      detailedEffect: '상세 정보를 확인할 수 없습니다.',
      targetDisease: [],
      therapeuticClass: '분류 정보 없음',
    };
  }
} 