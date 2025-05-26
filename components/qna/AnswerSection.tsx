'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Editor } from '@/components/blocks/editor-x/editor';
import { postAnswer } from '@/lib/queries/postAnswer';

interface AnswerSectionProps {
  questionId: number;
}

export function AnswerSection({ questionId }: AnswerSectionProps) {
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);
  const [answerContent, setAnswerContent] = useState('');

  const handleSubmit = () => {
    postAnswer({
      content: answerContent,
      contentHTML: answerContent,
      userId: '1',
      qnaId: questionId,
    });
    setIsAnswerExpanded(false);
    setAnswerContent('');
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
              onChange={(editorState) => {
                setAnswerContent(editorState.toString());
              }}
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
