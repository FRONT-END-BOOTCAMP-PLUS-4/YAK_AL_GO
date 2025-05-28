import { AnswerSection } from '@/components/qna/AnswerSection';
import { getQuestion } from '@/lib/queries/getQuestion';
import { QuestionDetailHeader } from '@/components/qna/QuestionDetailHeader';
import { QuestionDetailCard } from '@/components/qna/QuestionDetailCard';
import { AnswerDetailList } from '@/components/qna/AnswerDetailList';

export default async function QuestionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: questionId } = await params;
  // 질문 정보 조회: 질문, 답변, 태그, 유저 등의 정보를 담고 있다.
  const question = await getQuestion(questionId);

  // TODO: 실제 로그인한 사용자 정보를 가져오는 로직으로 교체
  const currentUserId = '20250522'; // 임시 현재 사용자 ID

  // 답변 등록 버튼을 누르면 AnswerSection 컴포넌트가 렌더링된다. 답변 등록 후 페이지 새로고침된다.
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl py-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <QuestionDetailHeader />

          {/* Question Card */}
          <QuestionDetailCard question={question} currentUserId={currentUserId} />

          {/* Answer Section */}
          <AnswerSection questionId={parseInt(questionId)} />

          {/* Answers */}
          <AnswerDetailList answers={question.answers || []} currentUserId={currentUserId} />
        </div>
      </div>
    </div>
  );
}
