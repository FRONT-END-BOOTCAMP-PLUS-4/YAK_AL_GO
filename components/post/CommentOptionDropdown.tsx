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

interface CommentOptionDropdownProps {
  commentId?: number;
}

export function CommentOptionDropdown({ commentId }: CommentOptionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <MoreHorizontal className="h-3 w-3" />
          <span className="sr-only">댓글 옵션</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Edit className="h-3 w-3 mr-2" />
          수정
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600 focus:text-red-600">
          <Trash2 className="h-3 w-3 mr-2" />
          삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
