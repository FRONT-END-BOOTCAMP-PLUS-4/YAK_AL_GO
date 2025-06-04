/**
 * 통합 에러 페이지 컴포넌트
 * 
 * 사용법:
 * - 404: /not-found (기본)
 * - 403: /not-found?error=403
 * - 500: /not-found?error=500
 * - 502: /not-found?error=502
 * - 503: /not-found?error=503
 * 
 * 예시: 
 * router.push('/not-found?error=500');
 * window.location.href = '/not-found?error=403';
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft, Shield, Server, Wifi, Clock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

// 에러 타입별 정보 정의
const errorConfig = {
  404: {
    title: '앗! 길을 잃으셨나요?',
    subtitle: '찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.',
    icon: '404',
    iconBg: '#4FC4B8',
    sectionTitle: '이런 기능은 어떠세요?',
    suggestions: [
      { icon: 'search', text: '약 정보 검색으로 궁금한 약 찾아보기' },
      { icon: 'location', text: '가까운 약국 찾아보기' },
      { icon: 'chat', text: '전문가에게 궁금한 점 물어보기' }
    ],
    actions: [
      { href: '/', label: '홈으로 돌아가기', primary: true },
      { href: '/medicines', label: '약 검색하기', primary: false }
    ]
  },
  403: {
    title: '접근이 제한되었습니다',
    subtitle: '이 페이지에 접근할 권한이 없습니다. 로그인이 필요하거나 관리자 권한이 필요할 수 있습니다.',
    icon: 'shield',
    iconBg: '#EF4444',
    sectionTitle: '문제를 해결해보세요',
    suggestions: [
      { icon: 'user', text: '로그인 후 다시 시도해보세요' },
      { icon: 'shield', text: '계정 권한을 확인해보세요' },
      { icon: 'help', text: '관리자에게 문의해보세요' }
    ],
    actions: [
      { href: '/auth', label: '로그인하기', primary: true },
      { href: '/', label: '홈으로 돌아가기', primary: false }
    ]
  },
  500: {
    title: '서버에 문제가 발생했습니다',
    subtitle: '일시적인 서버 오류입니다. 잠시 후 다시 시도해 주세요.',
    icon: 'server',
    iconBg: '#F59E0B',
    sectionTitle: '이렇게 해보세요',
    suggestions: [
      { icon: 'refresh', text: '잠시 후 페이지를 새로고침해보세요' },
      { icon: 'cache', text: '브라우저 캐시를 지워보세요' },
      { icon: 'support', text: '문제가 지속되면 고객지원팀에 문의하세요' }
    ],
    actions: [
      { href: 'refresh', label: '페이지 새로고침', primary: true },
      { href: '/', label: '홈으로 돌아가기', primary: false }
    ]
  },
  502: {
    title: '게이트웨이 오류가 발생했습니다',
    subtitle: '서버 간 통신에 문제가 있습니다. 곧 정상화될 예정입니다.',
    icon: 'wifi',
    iconBg: '#8B5CF6',
    sectionTitle: '연결 문제 해결 방법',
    suggestions: [
      { icon: 'network', text: '네트워크 연결 상태를 확인해보세요' },
      { icon: 'clock', text: '잠시 후 다시 시도해보세요' },
      { icon: 'status', text: '서비스 상태 페이지를 확인해보세요' }
    ],
    actions: [
      { href: 'refresh', label: '다시 시도', primary: true },
      { href: '/', label: '홈으로 돌아가기', primary: false }
    ]
  },
  503: {
    title: '서비스를 일시적으로 사용할 수 없습니다',
    subtitle: '현재 서버 점검 중이거나 과부하 상태입니다. 잠시 후 이용해 주세요.',
    icon: 'clock',
    iconBg: '#06B6D4',
    sectionTitle: '서비스 복구를 기다리는 동안',
    suggestions: [
      { icon: 'maintenance', text: '서버 점검이 진행 중일 수 있습니다' },
      { icon: 'announcement', text: '공지사항을 확인해보세요' },
      { icon: 'schedule', text: '나중에 다시 방문해주세요' }
    ],
    actions: [
      { href: 'refresh', label: '다시 시도', primary: true },
      { href: '/', label: '홈으로 돌아가기', primary: false }
    ]
  }
};

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get('error') || '404';
  
  // 동적으로 에러 설정 가져오기
  const getErrorConfig = (code: string) => {
    switch (code) {
      case '403': return errorConfig['403'];
      case '500': return errorConfig['500'];
      case '502': return errorConfig['502'];
      case '503': return errorConfig['503'];
      default: return errorConfig['404'];
    }
  };
  
  const currentError = getErrorConfig(errorCode);

  const handleAction = (href: string) => {
    if (href === 'refresh') {
      window.location.reload();
    } else if (href === 'back') {
      window.history.back();
    }
  };

  const renderIcon = (iconType: string, errorCode?: string) => {
    // 에러별 아이콘 색상 설정
    const getIconColor = () => {
      switch (errorCode) {
        case '403': return '#EF4444';  // 빨강
        case '500': return '#F59E0B';  // 주황
        case '502': return '#8B5CF6';  // 보라
        case '503': return '#06B6D4';  // 청록
        default: return '#4FC4B8';     // 기본 브랜드 컬러
      }
    };
    
    const iconProps = { className: "h-4 w-4", style: { color: getIconColor() } };
    
    switch (iconType) {
      case 'search':
        return <Search {...iconProps} />;
      case 'location':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        );
      case 'chat':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        );
      case 'user':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        );
      case 'shield':
        return <Shield {...iconProps} />;
      case 'help':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case 'refresh':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        );
      case 'cache':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'support':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        );
      case 'network':
        return <Wifi {...iconProps} />;
      case 'clock':
        return <Clock {...iconProps} />;
      case 'status':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'maintenance':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      case 'announcement':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      case 'schedule':
        return (
          <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return <Search {...iconProps} />;
    }
  };

  const renderCharacterIcon = () => {
    const iconStyle = { backgroundColor: currentError.iconBg };
    
    switch (currentError.icon) {
      case 'shield':
        return (
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={iconStyle}>
            <Shield className="w-8 h-8 text-white" />
          </div>
        );
      case 'server':
        return (
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={iconStyle}>
            <Server className="w-8 h-8 text-white" />
          </div>
        );
      case 'wifi':
        return (
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={iconStyle}>
            <Wifi className="w-8 h-8 text-white" />
          </div>
        );
      case 'clock':
        return (
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={iconStyle}>
            <Clock className="w-8 h-8 text-white" />
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={iconStyle}>
            <span className="text-xl font-bold text-white">{currentError.icon}</span>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8">
          {/* Character Animation */}
          <div className="relative character-container">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <Image
                src="/character.svg"
                alt="약알고 캐릭터"
                width={192}
                height={192}
                className="w-full h-full drop-shadow-lg character-float"
              />
              {/* 에러 코드 오버레이 */}
              <div className="absolute -top-4 -right-4 badge-404">
                {renderCharacterIcon()}
              </div>
            </div>
            
            {/* 물결 효과 */}
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-teal-200 to-transparent rounded-full pulse-ring"></div>
          </div>

          {/* 메인 메시지 */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {currentError.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {currentError.subtitle}
              <br />
              <span style={{ color: '#4FC4B8' }} className="font-semibold">약알고</span>가 다시 길을 안내해드릴게요!
            </p>
          </div>

          {/* 추천 액션 */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              {currentError.sectionTitle}
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              {currentError.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center gap-2">
                  {renderIcon(suggestion.icon, errorCode)}
                  <span>{suggestion.text}</span>
                </div>
              ))}
            </div>
            
            {/* 에러별 추가 도움말 */}
            {errorCode === '403' && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-xs text-red-700">
                  <strong>💡 팁:</strong> 회원가입 후 이용하시거나, 로그인 상태를 확인해주세요.
                </p>
              </div>
            )}
            
            {(errorCode === '500' || errorCode === '502' || errorCode === '503') && (
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs text-amber-700">
                  <strong>⏰ 예상 복구 시간:</strong> 대부분 5-10분 내에 자동으로 해결됩니다.
                </p>
              </div>
            )}
          </div>

          {/* 액션 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="text-white"
              style={{ backgroundColor: '#4FC4B8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3DAA9F')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4FC4B8')}
            >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Link>
            </Button>
            
            {errorCode === '403' ? (
              <Button 
                asChild 
                size="lg"
                className="hover:bg-opacity-10"
                style={{ borderColor: '#4FC4B8', color: '#4FC4B8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4FC4B8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#4FC4B8';
                }}
              >
                <Link href="/auth">
                  <Shield className="h-4 w-4 mr-2" />
                  로그인하기
                </Link>
              </Button>
            ) : errorCode === '500' || errorCode === '502' || errorCode === '503' ? (
              <Button 
                variant="outline" 
                size="lg"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => window.location.reload()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                다시 시도
              </Button>
            ) : (
              <Button 
                variant="outline" 
                asChild 
                size="lg"
                className="hover:bg-opacity-10"
                style={{ borderColor: '#4FC4B8', color: '#4FC4B8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4FC4B8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#4FC4B8';
                }}
              >
                <Link href="/medicines">
                  <Search className="h-4 w-4 mr-2" />
                  약 검색하기
                </Link>
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              이전 페이지로
            </Button>
          </div>

          {/* 도움말 텍스트 */}
          <div className="text-sm text-gray-500 max-w-lg mx-auto">
            <p>
              문제가 계속 발생한다면{' '}
              <a 
                href="https://github.com/FRONT-END-BOOTCAMP-PLUS-4/YAK_AL_GO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: '#4FC4B8' }}
              >
                GitHub 이슈
              </a>
              로 신고해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
