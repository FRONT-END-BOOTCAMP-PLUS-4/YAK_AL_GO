'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
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
  views: 120,
  type: 'expert',
  answers: [
    {
      id: 1,
      content:
        '타이레놀(아세트아미노펜)과 아스피린은 작용 기전이 다른 약물이지만, 함께 복용 시 위장 장애 위험이 증가할 수 있습니다. 특히 아스피린은 위장 점막을 자극할 수 있어 주의가 필요합니다. 가능하면 의사나 약사와 상담 후 복용하시는 것이 좋습니다.',
      author: '건강약국',
      role: '약사',
      date: '2023-05-10',
      likes: 15,
      isExpert: true,
    },
    {
      id: 2,
      content:
        '두 약을 함께 복용하는 것보다 한 가지 약물로 충분한 용량을 복용하는 것이 더 안전합니다. 타이레놀만으로 통증이 조절되지 않는다면 의사와 상담하여 다른 진통제를 처방받는 것이 좋습니다.',
      author: '행복약국',
      role: '약사',
      date: '2023-05-11',
      likes: 8,
      isExpert: true,
    },
  ],
};

const communityPost = {
  id: 4,
  title: '혈압약 부작용 경험 공유해주세요.',
  content: '최근 혈압약을 처방받았는데 부작용이 있으신 분들 경험 공유 부탁드립니다. 어지러움이 있어서 걱정이 됩니다.',
  author: 'user4',
  date: '2023-05-03',
  tags: ['혈압약', '부작용'],
  views: 210,
  type: 'community',
  comments: [
    {
      id: 1,
      content: '저도 처음에는 어지러움이 있었는데 1주일 정도 지나니 적응이 되더라고요.',
      author: 'user5',
      date: '2023-05-03',
    },
    {
      id: 2,
      content: '저는 복용 시간을 저녁으로 바꾸니 부작용이 줄었어요.',
      author: 'user6',
      date: '2023-05-04',
    },
    {
      id: 3,
      content: '의사선생님께 말씀드려서 다른 약으로 바꿨더니 괜찮아졌어요.',
      author: 'user7',
      date: '2023-05-05',
    },
  ],
};

export default function QuestionDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the question details based on the ID
  const [question, setQuestion] = useState<any>(null);
  const [commentText, setCommentText] = useState('');
  const [answerText, setAnswerText] = useState('');

  useEffect(() => {
    // Simulate fetching data based on ID
    if (params.id === '1' || params.id === '2' || params.id === '3') {
      setQuestion(expertQuestion);
    } else {
      setQuestion(communityPost);
    }
  }, [params.id]);

  if (!question) {
    return <div className="container py-8">로딩 중...</div>;
  }

  const isExpertQuestion = question.type === 'expert';

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/qna">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{isExpertQuestion ? '전문가 Q&A' : '커뮤니티'}</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant={isExpertQuestion ? 'default' : 'outline'}
                className={isExpertQuestion ? 'bg-primary' : ''}>
                {isExpertQuestion ? '전문가 Q&A' : '커뮤니티'}
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
              <div>조회 {question.views}</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{question.content}</p>
          </CardContent>
        </Card>

        {isExpertQuestion ? (
          // Expert Q&A - Show answers
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
                          {answer.isExpert && (
                            <Badge variant="default" className="bg-primary">
                              {answer.role}
                            </Badge>
                          )}
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

            {/* Only show answer form for pharmacists */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">답변 작성</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="약사만 답변을 작성할 수 있습니다."
                  className="min-h-[150px]"
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>답변 등록</Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          // Community post - Show comments
          <div className="space-y-4">
            <h2 className="text-xl font-bold">댓글 {question.comments.length}개</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {question.comments.map((comment: any) => (
                    <div key={comment.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <Textarea
                  placeholder="댓글을 작성해주세요."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <Button className="self-end">댓글 등록</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
