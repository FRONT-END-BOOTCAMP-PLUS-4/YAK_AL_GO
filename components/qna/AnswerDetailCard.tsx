import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { ContentRenderer } from '@/components/qna/ContentRenderer';
import { AnswerOptionDropdown } from '@/components/qna/AnswerOptionDropdown';

// Mock profile images for demonstration
const mockProfileImages = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
];

const getRandomProfileImage = () => {
  return mockProfileImages[Math.floor(Math.random() * mockProfileImages.length)];
};

interface AnswerDetailCardProps {
  answer: {
    id?: number | undefined;
    contentHTML: string;
    createdAt?: Date | undefined;
    users?: {
      id: string;
      name?: string;
      member_type?: number;
    };
  };
  currentUserId: string;
}

export function AnswerDetailCard({ answer, currentUserId }: AnswerDetailCardProps) {
  return (
    <Card className="h-full border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-5 pb-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-green-600">전문가 답변</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              {answer.createdAt ? formatDate(answer.createdAt.toString()) : ''}
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between">
            {/* User info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={getRandomProfileImage()} alt="User profile" />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-semibold">
                  {answer.users?.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{answer.users?.name}</span>
                <span className="text-xs text-gray-500">
                  {answer.users?.member_type === 0 && '약사'}
                  {answer.users?.member_type === 1 && '의사'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Future: Like/Helpful buttons can go here */}

              {/* Answer Actions - Only visible to answer owner */}
              {answer.users?.id === currentUserId && answer.id && <AnswerOptionDropdown answerId={answer.id} />}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 mb-4 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Answer Content */}
        <div className="px-5 pb-5">
          <div className="prose prose-sm prose-gray max-w-none">
            <ContentRenderer contentHtml={answer.contentHTML} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
