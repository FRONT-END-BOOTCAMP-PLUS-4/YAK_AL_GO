import { AnswerDetailCard } from './AnswerDetailCard';

interface Answer {
  id?: number | undefined;
  contentHTML: string;
  createdAt?: Date | undefined;
  users?: {
    id: string;
    name?: string;
    member_type?: number;
  };
}

interface AnswerDetailListProps {
  answers: Answer[];
  currentUserId: string;
}

export function AnswerDetailList({ answers, currentUserId }: AnswerDetailListProps) {
  if (!answers || answers.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">답변 {answers.length}개</h2>

      <div className="space-y-4">
        {answers.map((answer, index) => (
          <AnswerDetailCard key={answer.id ?? `answer-${index}`} answer={answer} currentUserId={currentUserId} />
        ))}
      </div>
    </div>
  );
}
