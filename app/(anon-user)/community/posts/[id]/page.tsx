import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { ArrowLeft, User, Clock, ThumbsUp } from 'lucide-react';
import { CommentSection } from '@/components/post/CommentSection';

// Mock data for question detail
const dummyPosts = {
  id: 4,
  title: '혈압약 부작용 경험 공유해주세요.',
  content: '최근 혈압약을 처방받았는데 부작용이 있으신 분들 경험 공유 부탁드립니다. 어지러움이 있어서 걱정이 됩니다.',
  author: 'user4',
  date: '2023-05-03',
  tags: ['혈압약', '부작용'],
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

async function getPostData(id: string) {
  // In a real application, this would be a database query
  return dummyPosts;
}

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const question = await getPostData(params.id);

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
          <h1 className="text-2xl font-bold">커뮤니티</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="bg-primary">
                커뮤니티
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
        <CommentSection question={question} />
      </div>
    </div>
  );
}
