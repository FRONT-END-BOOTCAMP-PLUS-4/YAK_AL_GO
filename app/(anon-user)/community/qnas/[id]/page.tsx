import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnswerSection } from '@/components/qna/AnswerSection';
import { ArrowLeft, User, Clock, ThumbsUp } from 'lucide-react';

// Mock data for question detail
const expertQuestion = {
  id: 1,
  title: '타이레놀과 아스피린을 함께 복용해도 될까요?',
  content:
    '두통이 심해서 타이레놀과 아스피린을 함께 복용해도 괜찮을지 궁금합니다. 평소에 타이레놀을 복용하고 있는데, 오늘은 두통이 더 심해서 아스피린도 함께 복용하고 싶습니다. 부작용이나 주의사항이 있을까요?',
  author: 'user1',
  date: '2023-05-10',
  tags: ['진통제', '복용법'],
  answers: [
    {
      id: 1,
      content:
        '타이레놀(아세트아미노펜)과 아스피린은 작용 기전이 다른 약물이지만, 함께 복용 시 위장 장애 위험이 증가할 수 있습니다. 특히 아스피린은 위장 점막을 자극할 수 있어 주의가 필요합니다. 가능하면 의사나 약사와 상담 후 복용하시는 것이 좋습니다.',
      author: '건강약국',
      role: '약사',
      date: '2023-05-10',
    },
    {
      id: 2,
      content:
        '두 약을 함께 복용하는 것보다 한 가지 약물로 충분한 용량을 복용하는 것이 더 안전합니다. 타이레놀만으로 통증이 조절되지 않는다면 의사와 상담하여 다른 진통제를 처방받는 것이 좋습니다.',
      author: '행복약국',
      role: '약사',
      date: '2023-05-11',
    },
  ],
};

// Convert to async server component
export default async function QuestionDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the question details based on the ID
  // This is where you would make your database query or API call
  const question = expertQuestion;

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/community">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Q&A</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="bg-primary">
                Q&A
              </Badge>
              <div className="flex flex-wrap gap-1">
                {question.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <CardTitle className="text-xl">{question.title}</CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {question.author}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {question.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{question.content}</p>
          </CardContent>
        </Card>
        <AnswerSection questionId={params.id} />

        <div className="space-y-4">
          <h2 className="text-xl font-bold">답변 {question.answers.length}개</h2>
          {question.answers.map((answer: any) => (
            <Card key={answer.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{answer.author}</span>
                        <Badge variant="default" className="bg-primary">
                          {answer.role}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{answer.date}</div>
                    </div>
                    <p className="whitespace-pre-line">{answer.content}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        도움이 됐어요 {answer.likes}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
