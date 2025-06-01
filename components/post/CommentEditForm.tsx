'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState, useCallback } from 'react';
import { updateComment } from '@/lib/queries/updateComment';
import { useRouter } from 'next/navigation';

interface CommentEditFormProps {
  comment: {
    id?: number;
    content: string;
  };
}

export function CommentEditForm({ comment }: CommentEditFormProps) {
  const [content, setContent] = useState(comment.content);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleCancelEdit = useCallback(() => {
    // URL에서 edit 파라미터 제거하여 편집 모드 종료
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('edit');
    router.replace(currentUrl.pathname + currentUrl.search);
  }, [router]);

  const handleSubmitEdit = useCallback(async () => {
    if (!comment.id) return;

    if (content.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      await updateComment(comment.id, {
        content: content.trim(),
      });

      // 편집 모드 종료하고 페이지 새로고침
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('edit');
      router.replace(currentUrl.pathname + currentUrl.search);
      router.refresh();
    } catch (error: any) {
      alert(error.message || '댓글 수정에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  }, [comment.id, content, router]);

  return (
    <div className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글을 입력해주세요..."
        rows={3}
        className="resize-none"
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
