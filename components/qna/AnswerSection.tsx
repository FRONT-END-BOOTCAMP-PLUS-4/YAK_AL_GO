'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Editor } from '@/components/blocks/editor-x/editor';
import { postAnswer } from '@/lib/queries/postAnswer';
import { initialValue } from '@/app/member/qnas/write/editorInitialValue';
import { useRef } from 'react';
import { SerializedEditorState } from 'lexical';
import { getEditorHtmlFromJSON } from '@/lib/community/getEditorHtmlFromJSON';
import { getContentText } from '@/lib/community/getContentText';
import { QUESTIONS_QUERY_KEY } from '@/lib/constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

interface AnswerSectionProps {
  questionId: number;
  currentUserId: string;
}

// 답변 작성 컴포넌트
export function AnswerSection({ questionId, currentUserId }: AnswerSectionProps) {
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);
  const editorState = useRef<SerializedEditorState>(initialValue);
  const queryClient = useQueryClient();

  // 답변 등록 함수
  const handleSubmit = async () => {
    if (currentUserId === '') {
      alert('로그인 후 이용해주세요.');
      return;
    }
    if (getContentText(editorState.current).trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      await postAnswer({
        content: editorState.current,
        contentHTML: getEditorHtmlFromJSON(editorState.current),
        userId: currentUserId,
        qnaId: questionId,
      });

      setIsAnswerExpanded(false);
      editorState.current = initialValue;
      queryClient.resetQueries({ queryKey: QUESTIONS_QUERY_KEY });
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold">답변 작성</h2>
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
