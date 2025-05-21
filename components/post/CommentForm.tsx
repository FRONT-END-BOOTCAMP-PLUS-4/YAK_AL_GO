'use client';

import { useState } from 'react';
import { CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function CommentForm() {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = () => {
    // TODO: Implement comment submission
    console.log('Submitting comment:', commentText);
    setCommentText('');
  };

  return (
    <CardFooter className="flex-col items-start gap-4">
      <Textarea
        placeholder="댓글을 작성해주세요."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button className="self-end" onClick={handleSubmit}>
        댓글 등록
      </Button>
    </CardFooter>
  );
}
