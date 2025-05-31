'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CommentForm } from './CommentForm';

interface CommentSectionProps {
  postId: number;
  currentUserId: string;
}

export function CommentSection({ postId, currentUserId }: CommentSectionProps) {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);

  const handleCommentSubmitted = () => {
    setIsCommentExpanded(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold">댓글 작성</h2>
          </div>
          <Button variant="outline" onClick={() => setIsCommentExpanded(!isCommentExpanded)}>
            {isCommentExpanded ? '접기' : '댓글 작성'}
          </Button>
        </div>
      </CardHeader>
      {isCommentExpanded && (
        <CardContent>
          <CommentForm postId={postId} currentUserId={currentUserId} onCommentSubmitted={handleCommentSubmitted} />
        </CardContent>
      )}
    </Card>
  );
}
