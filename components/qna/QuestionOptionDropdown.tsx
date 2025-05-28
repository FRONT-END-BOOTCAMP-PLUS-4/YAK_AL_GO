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

interface QuestionOptionDropdownProps {
  questionId?: number;
}

export function QuestionOptionDropdown({ questionId }: QuestionOptionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">질문 옵션</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Edit className="h-4 w-4 mr-2" />
          수정
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600 focus:text-red-600">
          <Trash2 className="h-4 w-4 mr-2" />
          삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
