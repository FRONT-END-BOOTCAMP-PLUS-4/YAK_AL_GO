import { ReactNode } from 'react';

interface CommentDetailListProps {
  children: ReactNode;
  commentCount: number;
}

export function CommentDetailList({ children, commentCount }: CommentDetailListProps) {
  if (commentCount === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">댓글 {commentCount}개</h2>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
