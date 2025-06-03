'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle } from 'lucide-react';
import { acceptAnswer } from '@/lib/queries/acceptAnswer';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface AnswerAcceptButtonProps {
  answerId: number;
  isAccepted: boolean;
  isQuestionAuthor: boolean;
  hasAcceptedAnswer: boolean;
}

export function AnswerAcceptButton({
  answerId,
  isAccepted,
  isQuestionAuthor,
  hasAcceptedAnswer,
}: AnswerAcceptButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 채택된 답변인 경우 뱃지만 표시
  if (isAccepted) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
        <Check className="h-4 w-4" />
        채택됨
      </div>
    );
  }

  // 채택된 답변이 아니고 이미 채택된 답변이 있으면 버튼 없음
  if (hasAcceptedAnswer) {
    return null;
  }

  // 질문 작성자가 아니면 버튼 없음
  if (!isQuestionAuthor) {
    return null;
  }

  const handleAccept = async () => {
    setIsLoading(true);
    try {
      await acceptAnswer(answerId);
      alert('답변이 채택되었습니다.');
      router.refresh(); // 페이지 새로고침
    } catch (error) {
      console.error('답변 채택 실패:', error);
      alert('답변 채택에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={hasAcceptedAnswer || isLoading}
          className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          {hasAcceptedAnswer ? '채택 완료됨' : '채택하기'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            답변 채택 확인
          </AlertDialogTitle>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>이 답변을 채택하시겠습니까?</div>
            <div className="text-amber-600 font-medium">
              ⚠️ 한 번 채택하면 취소할 수 없으며, 다른 답변을 채택할 수도 없습니다.
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
            {isLoading ? '채택 중...' : '채택하기'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
