import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnswerSection } from '@/components/qna/AnswerSection';
import { ContentRenderer } from '@/components/qna/ContentRenderer';
import { ArrowLeft, User, Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { getQuestion } from '@/lib/queries/getQuestion';

export default async function QuestionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: questionId } = await params;
  const question = await getQuestion(questionId);
  console.log(question);
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
                {question.tags?.map((tag) => (
                  <Badge key={tag.id} variant="outline" className="text-xs">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
            <CardTitle className="text-xl">{question.title}</CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {question.userId}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {question.createdAt ? formatDate(question.createdAt.toString()) : ''}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ContentRenderer contentHtml={question.contentHTML} />
          </CardContent>
        </Card>

        <AnswerSection questionId={parseInt(questionId)} />

        {question.answers && question.answers.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">답변 {question.answers.length}개</h2>
            {question.answers.map((answer) => (
              <Card key={answer.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{answer.userId}</span>
                          <Badge variant="default" className="bg-primary">
                            {answer.user?.memberType}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {answer.createdAt ? formatDate(answer.createdAt.toString()) : ''}
                        </div>
                      </div>
                      {/* <p className="whitespace-pre-line">{answer.content}</p> */}
                      <ContentRenderer contentHtml={answer.contentHTML} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
