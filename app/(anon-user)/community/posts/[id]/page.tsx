import { CommentSection } from '@/components/post/CommentSection';
import { PostDetailHeader } from '@/components/post/PostDetailHeader';
import { PostDetailCard } from '@/components/post/PostDetailCard';
import { CommentDetailList } from '@/components/post/CommentDetailList';
import { CommentDetailCard } from '@/components/post/CommentDetailCard';
import { getPost } from '@/lib/queries/getPost';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

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
    image?: string;
    member_type: number;
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: postId } = await params;
  // 게시물 정보 조회: 게시물, 댓글, 태그, 유저 등의 정보를 담고 있다.
  const post = await getPost(postId);

  // 유저 정보 조회
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id ?? '';

  // 댓글 등록 버튼을 누르면 CommentSection 컴포넌트가 렌더링된다. 댓글 등록 후 페이지 새로고침된다.
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl py-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <PostDetailHeader />

          {/* Post Card */}
          <PostDetailCard post={post} currentUserId={currentUserId} />

          {/* Comment Section */}
          <CommentSection postId={parseInt(postId)} currentUserId={currentUserId} />

          {/* Comments */}
          <CommentDetailList commentCount={post.comments?.length || 0}>
            {post.comments?.map((comment: Comment, index: number) => (
              <CommentDetailCard
                key={comment.id ?? `comment-${index}`}
                comment={comment}
                currentUserId={currentUserId}
              />
            ))}
          </CommentDetailList>
        </div>
      </div>
    </div>
  );
}
