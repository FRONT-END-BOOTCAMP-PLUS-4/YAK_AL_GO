'use client';
// UI 컴포넌트들
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

// tag 관련 컴포넌트들
import { TagSelect } from '@/components/qna/TagSelect';
import { Tag } from '@/backend/domain/entities/TagEntity';

// 훅들
import { useRef, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// editor 관련 데이터
import { initialValue } from '@/app/member/qnas/write/editorInitialValue';
import { SerializedEditorState } from 'lexical';
import { getEditorHtmlFromJSON } from '@/lib/community/getEditorHtmlFromJSON';

// 질문 생성시 데이터 캐시 무효화
import { QUESTIONS_QUERY_KEY } from '@/lib/constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

// Editor 컴포넌트 SSR 비활성화
const Editor = dynamic(() => import('@/components/blocks/editor-x/editor').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <div className="h-72 w-full animate-pulse rounded-lg bg-muted" />,
});

// 질문 작성 페이지
export default function WritePage() {
  // 태그 선택 상태
  const [tags, setTags] = useState<Tag[]>([]);
  // 제목 입력 상태
  const title = useRef<HTMLInputElement>(null);
  // editor 상태
  const editorState = useRef<SerializedEditorState>(initialValue);

  // 라우터, 쿼리 클라이언트
  const router = useRouter();
  const queryClient = useQueryClient();

  // 질문 작성 함수
  const handleSubmit = async (e: React.FormEvent) => {
    const htmlContent = getEditorHtmlFromJSON(editorState.current);

    // 폼 제출 방지
    e.preventDefault();
    try {
      // 질문 생성 요청
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.current?.value,
          content: editorState.current,
          contentHTML: htmlContent,
          tags,
          userId: '20250522',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create question');
      }

      const result = await response.json();
      console.log('Question created:', result);
      queryClient.invalidateQueries({ queryKey: QUESTIONS_QUERY_KEY });
      router.push('/community');
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">질문 작성</h1>
          <p className="text-muted-foreground">약에 관한 궁금한 점을 전문가에게 물어보세요.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    제목
                  </label>
                  <Input id="title" ref={title} placeholder="제목을 입력하세요" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">태그</label>
                  <TagSelect selectedTags={tags} onTagsChange={setTags} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">내용</label>
                  <Suspense fallback={<div className="h-72 w-full animate-pulse rounded-lg bg-muted" />}>
                    <Editor
                      editorSerializedState={editorState.current}
                      onSerializedChange={(value) => (editorState.current = value)}
                    />
                  </Suspense>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              취소
            </Button>
            <Button type="submit">작성하기</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
