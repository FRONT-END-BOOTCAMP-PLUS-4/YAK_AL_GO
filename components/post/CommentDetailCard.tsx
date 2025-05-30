import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { CommentOptionDropdown } from '@/components/post/CommentOptionDropdown';

interface CommentDetailCardProps {
  comment: {
    id?: number | undefined;
    content: string;
    userId: string;
    createdAt?: string | undefined;
    users?: {
      id: string;
      name?: string;
      image?: string;
      member_type?: number;
    };
  };
  currentUserId: string;
}

export function CommentDetailCard({ comment, currentUserId }: CommentDetailCardProps) {
  return (
    <Card className="h-full border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Header with User Info */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.users?.image || ''} alt="User profile" />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-semibold">
                  {comment.users?.name?.charAt(0)?.toUpperCase() || comment.userId?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {comment.users?.name || comment.userId}
                  </span>
                  {comment.users?.member_type === 0 && <span className="text-xs text-gray-500">약사</span>}
                  {comment.users?.member_type === 1 && <span className="text-xs text-gray-500">의사</span>}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {comment.createdAt ? formatDate(comment.createdAt.toString()) : ''}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Comment Actions - Only visible to comment owner */}
              {(comment.users?.id === currentUserId || comment.userId === currentUserId) && comment.id && (
                <CommentOptionDropdown commentId={comment.id} />
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 mb-5 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Comment Content */}
        <div className="px-6 pb-6">
          <div className="prose prose-sm prose-gray max-w-none">
            <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {comment.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
