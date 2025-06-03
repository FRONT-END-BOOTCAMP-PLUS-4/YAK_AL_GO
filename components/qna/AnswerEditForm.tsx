'use client';
import { Button } from '@/components/ui/button';
import { useState, useRef, useCallback } from 'react';
import { updateAnswer } from '@/lib/queries/updateAnswer';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SerializedEditorState } from 'lexical';
import { getEditorHtmlFromJSON } from '@/lib/community/getEditorHtmlFromJSON';
import { getContentText } from '@/lib/community/getContentText';

// Editor 컴포넌트 동적 로딩
const Editor = dynamic(() => import('@/components/blocks/editor-x/editor').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <div className="h-48 w-full animate-pulse rounded-lg bg-muted" />,
});

interface AnswerEditFormProps {
  answer: {
    id?: number;
    content?: any;
    contentHTML: string;
  };
}

export function AnswerEditForm({ answer }: AnswerEditFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorState = useRef<SerializedEditorState>(answer.content || {});
  const router = useRouter();

  const handleCancelEdit = useCallback(() => {
    // URL에서 edit 파라미터 제거하여 편집 모드 종료
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('edit');
    router.replace(currentUrl.pathname + currentUrl.search);
  }, [router]);

  const handleSubmitEdit = useCallback(async () => {
    if (!answer.id) return;

    if (getContentText(editorState.current).trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      await updateAnswer(answer.id, {
        content: editorState.current,
        contentHTML: getEditorHtmlFromJSON(editorState.current),
      });

      // 편집 모드 종료하고 페이지 새로고침
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('edit');
      router.replace(currentUrl.pathname + currentUrl.search);
      router.refresh();
    } catch (error: any) {
      alert(error.message || '답변 수정에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  }, [answer.id, router]);

  return (
    <div className="space-y-4">
      <Editor
        editorSerializedState={editorState.current}
        onSerializedChange={(value) => (editorState.current = value)}
      />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={handleCancelEdit} disabled={isSubmitting}>
          취소
        </Button>
        <Button onClick={handleSubmitEdit} disabled={isSubmitting}>
          {isSubmitting ? '수정 중...' : '수정하기'}
        </Button>
      </div>
    </div>
  );
}
