import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare } from 'lucide-react';

export function PostDetailHeader() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" asChild>
        <Link href="/community?tab=posts">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Link>
      </Button>
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-gray-600" />
        <h1 className="text-xl font-semibold text-gray-900">자유게시판</h1>
      </div>
    </div>
  );
}
