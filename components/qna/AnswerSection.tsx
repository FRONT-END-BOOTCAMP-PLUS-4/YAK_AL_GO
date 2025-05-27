'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Editor } from '@/components/blocks/editor-x/editor';
import { postAnswer } from '@/lib/queries/postAnswer';
import { initialValue } from '@/app/member/qnas/write/editorInitialValue';
import { useRef } from 'react';
import { SerializedEditorState } from 'lexical';
import { getEditorHtmlFromJSON } from '@/lib/community/getEditorHtmlFromJSON';

interface AnswerSectionProps {
  questionId: number;
}

// 답변 작성 컴포넌트
export function AnswerSection({ questionId }: AnswerSectionProps) {
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);
  const editorState = useRef<SerializedEditorState>(initialValue);

  // 답변 등록 함수
  const handleSubmit = () => {
    postAnswer({
      content: editorState.current,
      contentHTML: getEditorHtmlFromJSON(editorState.current),
      userId: '20250522', // 임시 유저 아이디
      qnaId: questionId,
    });
    setIsAnswerExpanded(false);
    editorState.current = initialValue;
    window.location.reload(); // 답변 등록 후 페이지 새로고침
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-primary">
              약사 답변
            </Badge>
            <h2 className="text-xl font-bold">답변 작성</h2>
          </div>
          <Button variant="outline" onClick={() => setIsAnswerExpanded(!isAnswerExpanded)}>
            {isAnswerExpanded ? '접기' : '답변하기'}
          </Button>
        </div>
      </CardHeader>
      {isAnswerExpanded && (
        <CardContent>
          <div className="space-y-4">
            <Editor
              editorSerializedState={editorState.current}
              onSerializedChange={(value) => (editorState.current = value)}
            />
            <div className="flex justify-end">
              <Button onClick={handleSubmit}>답변 등록</Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
