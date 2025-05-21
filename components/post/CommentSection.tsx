import { Card, CardContent } from '@/components/ui/card';
import { CommentForm } from './CommentForm';

interface Comment {
  id: number;
  content: string;
  author: string;
  date: string;
}

interface CommentSectionProps {
  question: {
    comments: Comment[];
  };
}

export function CommentSection({ question }: CommentSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">댓글 {question.comments.length}개</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {question.comments.map((comment) => (
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
        <CommentForm />
      </Card>
    </div>
  );
}
