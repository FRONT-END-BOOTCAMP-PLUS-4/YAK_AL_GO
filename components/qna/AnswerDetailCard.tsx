import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { ContentRenderer } from '@/components/qna/ContentRenderer';
import { AnswerOptionDropdown } from '@/components/qna/AnswerOptionDropdown';
import { AnswerEditForm } from '@/components/qna/AnswerEditForm';
import { Suspense, ReactNode } from 'react';

interface AnswerDetailCardProps {
  answer: {
    id?: number | undefined;
    content?: any;
    contentHTML: string;
    createdAt?: Date | undefined;
    isAccepted?: boolean;
    users?: {
      id: string;
      name?: string;
      image?: string;
      member_type?: number;
    };
  };
  currentUserId: string;
  isEditing?: boolean;
  children?: ReactNode;
}

export function AnswerDetailCard({ answer, currentUserId, isEditing = false, children }: AnswerDetailCardProps) {
  return (
    <Card
      className={`h-full border bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg overflow-hidden ${
        answer.isAccepted ? 'border-blue-300 bg-blue-50 dark:bg-blue-950' : 'border-gray-200'
      }`}>
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-5 pb-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-green-600">전문가 답변</span>
              {answer.isAccepted && <img src="/character.svg" alt="채택됨" className="w-5 h-5" />}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              {answer.createdAt ? formatDate(answer.createdAt.toString()) : ''}
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between">
            {/* User info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={answer.users?.image} alt="User profile" />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-semibold">
                  {answer.users?.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{answer.users?.name}</span>
                <span className="text-xs text-gray-500">
                  {answer.users?.member_type === 1 && '약사'}
                  {answer.users?.member_type === 2 && '의사'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Accept Button (passed as children) */}
              {children}

              {/* Answer Actions - Only visible to answer owner */}
              {answer.users?.id === currentUserId && answer.id && !answer.isAccepted && (
                <AnswerOptionDropdown answerId={answer.id} />
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 mb-4 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Answer Content */}
        <div className="px-5 pb-5">
          {isEditing ? (
            // 편집 모드 - 클라이언트 컴포넌트
            <Suspense fallback={<div className="h-48 w-full animate-pulse rounded-lg bg-muted" />}>
              <AnswerEditForm answer={answer} />
            </Suspense>
          ) : (
            // 일반 모드 - 서버 컴포넌트 (SEO 친화적)
            <div className="prose prose-sm prose-gray max-w-none">
              <ContentRenderer contentHtml={answer.contentHTML} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
