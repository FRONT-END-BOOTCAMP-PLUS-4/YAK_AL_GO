'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CommentForm } from './CommentForm';

interface Comment {
  id: number;
  content: string;
  author: string;
  date: string;
}

interface CommentSectionProps {
  postId: number;
}

export function CommentSection({ postId }: CommentSectionProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <CommentForm postId={postId} />
        </CardContent>
      </Card>
    </div>
  );
}
