'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Edit, Trash2 } from 'lucide-react';
import { deleteAnswer } from '@/lib/queries/deleteAnswer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AnswerOptionDropdownProps {
  answerId?: number;
}

export function AnswerOptionDropdown({ answerId }: AnswerOptionDropdownProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('edit', answerId?.toString() || '');
    router.replace(currentUrl.pathname + currentUrl.search);
  };

  const handleDelete = async () => {
    if (!answerId) return;

    const confirmed = confirm('정말로 이 답변을 삭제하시겠습니까?');
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      await deleteAnswer(answerId);
      router.refresh();
    } catch (error: any) {
      alert(error.message || '답변 삭제에 실패했습니다.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" disabled={isDeleting}>
          <MoreHorizontal className="h-3 w-3" />
          <span className="sr-only">답변 옵션</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEdit}>
          <Edit className="h-3 w-3 mr-2" />
          수정
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={handleDelete} disabled={isDeleting}>
          <Trash2 className="h-3 w-3 mr-2" />
          {isDeleting ? '삭제 중...' : '삭제'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
