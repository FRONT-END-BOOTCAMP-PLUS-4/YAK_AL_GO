import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Clock, Hash } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { getContentText } from '@/lib/community/getContentText';
import { useMemo } from 'react';
import { TagResponseDto } from '@/backend/application/usecases/tag/dto/TagDto';

interface QuestionCardProps {
  qna: {
    id: string;
    title: string;
    content: any;
    tags?: TagResponseDto[];
    user: {
      id: string;
      name: string;
      email?: string;
      image: string;
      member_type?: number;
    };
    createdAt: string;
    answerCount: number;
  };
}

export const QuestionCard = ({ qna }: QuestionCardProps) => {
  const contentText = useMemo(() => getContentText(qna.content), [qna.content]);

  // Mockup user profile image - 실제 구현시 유저 데이터에서 가져올 예정
  const getUserInitials = (userId: string) => {
    if (!userId || typeof userId !== 'string') {
      return 'UN'; // Unknown user의 줄임말
    }
    return userId.slice(0, 2).toUpperCase();
  };

  const mockProfileImage = qna.user.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${qna.user.id}`;

  return (
    <Link href={`community/qnas/${qna.id}`} className="block">
      <Card className="h-full border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header */}
          <div className="p-3 pb-2 flex-grow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-xs font-medium text-primary">전문가 Q&A</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                {formatDate(qna.createdAt)}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-base leading-tight mb-1 line-clamp-2 text-gray-900 dark:text-gray-100">
              {qna.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mb-1.5 leading-relaxed">
              {contentText}
            </p>

            {/* Tags */}
            {qna.tags && qna.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-1">
                {qna.tags.map((tag: TagResponseDto) => (
                  <div
                    key={tag.id}
                    className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                    <Hash className="h-2.5 w-2.5" />
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-3 py-1.5 bg-neutral-50/50 dark:bg-neutral-800/30 border-t border-neutral-200/40 dark:border-neutral-700/30 mt-auto">
            <div className="flex items-center justify-between">
              {/* User info */}
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={mockProfileImage} alt={qna.user.id} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                    {getUserInitials(qna.user.id)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100">{qna.user.name}</span>
                  <span className="text-xs text-gray-500">질문자</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <MessageSquare className="h-3.5 w-3.5" />
                <span className="font-medium">{qna.answerCount}</span>
                <span className="text-xs">답변</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
