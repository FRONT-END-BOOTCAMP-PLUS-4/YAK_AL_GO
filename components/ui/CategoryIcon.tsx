import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CategoryIconProps {
  src: string;
  alt: string;
  size?: number | 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * 의약품 카테고리 SVG 아이콘 컴포넌트
 * @param src SVG 파일 경로
 * @param alt 대체 텍스트
 * @param size 아이콘 크기 (픽셀 또는 프리셋)
 * @param className 추가 CSS 클래스
 */
const CategoryIcon = ({ src, alt, size = 'md', className }: CategoryIconProps) => {
  // 크기 프리셋 매핑
  const getSizeValue = (sizeInput: number | string) => {
    if (typeof sizeInput === 'number') return sizeInput;

    switch (sizeInput) {
      case 'sm':
        return 16;
      case 'md':
        return 24;
      case 'lg':
        return 32;
      default:
        return 24;
    }
  };

  const sizeValue = getSizeValue(size);

  return (
    <Image
      src={src}
      alt={alt}
      width={sizeValue}
      height={sizeValue}
      className={cn('flex-shrink-0 object-contain', className)}
      priority={false}
    />
  );
};

export default CategoryIcon;
