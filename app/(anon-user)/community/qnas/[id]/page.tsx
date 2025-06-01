import { AnswerSection } from '@/components/qna/AnswerSection';
import { getQuestion } from '@/lib/queries/getQuestion';
import { QuestionDetailHeader } from '@/components/qna/QuestionDetailHeader';
import { QuestionDetailCard } from '@/components/qna/QuestionDetailCard';
import { AnswerDetailList } from '@/components/qna/AnswerDetailList';
import { AnswerDetailCard } from '@/components/qna/AnswerDetailCard';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { QuestionOptionDropdown } from '@/components/qna/QuestionOptionDropdown';

interface Answer {
  id?: number | undefined;
  content?: any;
  contentHTML: string;
  createdAt?: Date | undefined;
  isAccepted?: boolean;
  users?: {
    id: string;
    name?: string;
    image?: string;
    member_type?: number;
  };
}

export default async function QuestionDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id: questionId } = await params;
  const { edit } = await searchParams;

  // 질문 정보 조회: 질문, 답변, 태그, 유저 등의 정보를 담고 있다.
  const question = await getQuestion(questionId);
  console.log(question);

  // 유저 정보 조회
  const session = await getServerSession(authOptions);
  const userType = session?.user?.member_type || 0;
  const currentUserId = session?.user?.id ?? '';

  // 편집 중인 답변 ID
  const editingAnswerId = typeof edit === 'string' ? parseInt(edit) : null;

  // 답변 등록 버튼을 누르면 AnswerSection 컴포넌트가 렌더링된다. 답변 등록 후 페이지 새로고침된다.
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl py-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <QuestionDetailHeader />

          {/* Question Card */}
          <QuestionDetailCard question={question}>
            {(question.user?.id === currentUserId || question.userId === currentUserId) && question.id && (
              <QuestionOptionDropdown questionId={question.id} answerCount={question.answers?.length || 0} />
            )}
          </QuestionDetailCard>

          {/* Answer Section */}
          {userType !== 0 && <AnswerSection questionId={parseInt(questionId)} currentUserId={currentUserId} />}

          {/* Answers */}
          <AnswerDetailList answerCount={question.answers?.length || 0}>
            {question.answers?.map((answer: Answer, index: number) => (
              <AnswerDetailCard
                key={answer.id ?? `answer-${index}`}
                answer={answer}
                currentUserId={currentUserId}
                isEditing={editingAnswerId === answer.id}
              />
            ))}
          </AnswerDetailList>
        </div>
      </div>
    </div>
  );
}
