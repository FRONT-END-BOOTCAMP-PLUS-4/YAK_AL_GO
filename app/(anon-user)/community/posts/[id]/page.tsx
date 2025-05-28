import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CommentSection } from '@/components/post/CommentSection';
import { ContentRenderer } from '@/components/qna/ContentRenderer';
import { ArrowLeft, User, Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { getPost } from '@/lib/queries/getPost';

interface Tag {
  id: number;
  name: string;
}

interface Comment {
  id: number;
  content: string;
  userId: string;
  createdAt: string;
  users?: {
    id: string;
    name: string;
    member_type: number;
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: postId } = await params;
  // 게시물 정보 조회: 게시물, 댓글, 태그, 유저 등의 정보를 담고 있다.
  const post = await getPost(postId);

  // 댓글 등록 버튼을 누르면 CommentSection 컴포넌트가 렌더링된다. 댓글 등록 후 페이지 새로고침된다.
  return (
    <div className="container max-w-4xl py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/community?tab=posts">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">자유게시판</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="bg-green-600">
                자유게시판
              </Badge>
              <div className="flex flex-wrap gap-1">
                {post.tags?.map((tag: Tag) => (
                  <Badge key={tag.id} variant="outline" className="text-xs">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.userId}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.createdAt ? formatDate(post.createdAt.toString()) : ''}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ContentRenderer contentHtml={post.contentHTML} />
          </CardContent>
        </Card>

        <CommentSection postId={parseInt(postId)} />

        {post.comments && post.comments.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">댓글 {post.comments.length}개</h2>
            {post.comments.map((comment: Comment) => (
              <Card key={comment.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comment.users?.name || comment.userId}</span>
                          {comment.users?.member_type === 0 && (
                            <Badge variant="default" className="bg-primary">
                              약사
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {comment.createdAt ? formatDate(comment.createdAt.toString()) : ''}
                        </div>
                      </div>
                      <p className="whitespace-pre-line">{comment.content}</p>
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
