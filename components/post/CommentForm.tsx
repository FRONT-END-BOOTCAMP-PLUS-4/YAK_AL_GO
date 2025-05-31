'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { POSTS_QUERY_KEY } from '@/lib/constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

interface CommentFormProps {
  postId: number;
  currentUserId: string;
  onCommentSubmitted?: () => void;
}

export function CommentForm({ postId, currentUserId, onCommentSubmitted }: CommentFormProps) {
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    if (currentUserId === '') {
      alert('로그인 후 이용해주세요.');
      return;
    }
    if (!commentText.trim()) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: commentText,
          userId: currentUserId,
          postId: postId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create comment');
      }

      setCommentText('');
      queryClient.resetQueries({ queryKey: POSTS_QUERY_KEY });
      onCommentSubmitted?.();
      window.location.reload();
    } catch (error) {
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="댓글을 작성해주세요."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button className="self-end" onClick={handleSubmit} disabled={isSubmitting || !commentText.trim()}>
        {isSubmitting ? '등록 중...' : '댓글 등록'}
      </Button>
    </div>
  );
}
