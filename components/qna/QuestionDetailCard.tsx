import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { formatDate } from '@/lib/community/formatDate';
import { ContentRenderer } from '@/components/qna/ContentRenderer';
import { QuestionOptionDropdown } from '@/components/qna/QuestionOptionDropdown';

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

interface QuestionDetailCardProps {
  question: {
    id?: number | undefined;
    title: string;
    contentHTML: string;
    userId: string;
    createdAt?: Date | undefined;
    tags?: Array<{
      id?: number | undefined;
      name: string;
    }>;
  };
  currentUserId: string;
}

export function QuestionDetailCard({ question, currentUserId }: QuestionDetailCardProps) {
  return (
    <Card className="h-full border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-5 pb-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-xs font-medium text-primary">전문가 Q&A</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              {question.createdAt ? formatDate(question.createdAt.toString()) : ''}
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
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                  {question.userId?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{question.userId}</span>
                <span className="text-xs text-gray-500">질문자</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Question Actions - Only visible to question owner */}
              {question.userId === currentUserId && question.id && <QuestionOptionDropdown questionId={question.id} />}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 mb-4 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Tags and Title */}
        <div className="px-5 pb-5">
          {/* Title */}
          <h1 className="font-semibold text-xl leading-tight mb-4 text-gray-900 dark:text-gray-100">
            {question.title}
          </h1>

          {/* Content */}
          <div className="prose prose-sm prose-gray max-w-none">
            <ContentRenderer contentHtml={question.contentHTML} />
          </div>

          {/* Tags */}
          {question.tags && question.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {question.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  <span className="text-gray-400">#</span>
                  {tag.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
