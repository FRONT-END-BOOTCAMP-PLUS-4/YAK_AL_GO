import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, CheckCircle, Calendar, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface SearchResultCardProps {
  result: {
    objectID: string;
    type: 'post' | 'question' | 'answer' | 'comment';
    title?: string;
    content: string;
    contentHTML?: string;
    createdAt: number;
    updatedAt: number;
    userId: string;
    userName?: string;
    userProfileImage?: string;
    tags?: string[];
    commentCount?: number;
    answerCount?: number;
    isAccepted?: boolean;
    questionId?: number;
    questionTitle?: string;
    postId?: number;
    postTitle?: string;
    _highlightResult?: any;
    _snippetResult?: any;
  };
}

export function SearchResultCard({ result }: SearchResultCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'post':
        return 'bg-blue-100 text-blue-800';
      case 'question':
        return 'bg-green-100 text-green-800';
      case 'answer':
        return 'bg-purple-100 text-purple-800';
      case 'comment':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'post':
        return '게시글';
      case 'question':
        return '질문';
      case 'answer':
        return '답변';
      case 'comment':
        return '댓글';
      default:
        return type;
    }
  };

  const getLink = () => {
    switch (result.type) {
      case 'post':
        return `/community/posts/${result.objectID.replace('post_', '')}`;
      case 'question':
        return `/community/qnas/${result.objectID.replace('question_', '')}`;
      case 'answer':
        return `/community/qnas/${result.questionId}`;
      case 'comment':
        return `/community/posts/${result.postId}`;
      default:
        return '#';
    }
  };

  const getDisplayTitle = () => {
    if (result.title) return result.title;
    if (result.questionTitle) return result.questionTitle;
    if (result.postTitle) return result.postTitle;
    return `${getTypeLabel(result.type)}`;
  };

  const getSnippet = () => {
    // Use Algolia snippet if available, otherwise truncate content
    if (result._snippetResult?.content?.value) {
      return result._snippetResult.content.value;
    }
    return result.content.length > 150 ? `${result.content.substring(0, 150)}...` : result.content;
  };

  const createdDate = new Date(result.createdAt * 1000);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className={getTypeColor(result.type)}>
                {getTypeLabel(result.type)}
              </Badge>
              {result.isAccepted && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  채택됨
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg leading-tight">
              <Link href={getLink()} className="hover:text-primary transition-colors">
                {getDisplayTitle()}
              </Link>
            </CardTitle>
            {(result.questionTitle || result.postTitle) && result.title && (
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {result.type === 'answer' && result.questionTitle && `질문: ${result.questionTitle}`}
                {result.type === 'comment' && result.postTitle && `게시글: ${result.postTitle}`}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className="text-sm text-muted-foreground mb-3 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: getSnippet() }}
        />

        {result.tags && result.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {result.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={result.userProfileImage} />
              <AvatarFallback className="text-xs">
                <User className="h-3 w-3" />
              </AvatarFallback>
            </Avatar>
            <span>{result.userName || '익명'}</span>
          </div>

          <div className="flex items-center gap-3">
            {result.commentCount !== undefined && (
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{result.commentCount}</span>
              </div>
            )}
            {result.answerCount !== undefined && (
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{result.answerCount}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDistanceToNow(createdDate, {
                  addSuffix: true,
                  locale: ko,
                })}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
