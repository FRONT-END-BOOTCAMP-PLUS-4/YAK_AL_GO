import { ReactNode } from 'react';

interface AnswerDetailListProps {
  children: ReactNode;
  answerCount: number;
}

export function AnswerDetailList({ children, answerCount }: AnswerDetailListProps) {
  if (answerCount === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">답변 {answerCount}개</h2>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
