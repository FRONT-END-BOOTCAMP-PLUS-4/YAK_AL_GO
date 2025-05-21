'use client';

import { useState } from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { ImageIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { ImagesPlugin } from '@/components/editor/plugins/images-plugin';
import { ToolbarPlugin } from '@/components/editor/plugins/toolbar/toolbar-plugin';
import { ContentEditable } from '@/components/editor/editor-ui/content-editable';
import { InsertImageDialog } from '@/components/editor/plugins/images-plugin';
import { useToolbarContext } from '@/components/editor/context/toolbar-context';
import { Button } from '@/components/ui/button';
import { DragDropPastePlugin } from '@/components/editor/plugins/drag-drop-paste-plugin';
import { DraggableBlockPlugin } from '@/components/editor/plugins/draggable-block-plugin';
import { InlineImagePlugin } from '@/components/editor/plugins/inline-image-plugin';
import { HistoryToolbarPlugin } from '@/components/editor/plugins/toolbar/history-toolbar-plugin';
import { BlockInsertPlugin } from '@/components/editor/plugins/toolbar/block-insert-plugin';
import { InsertImage } from '@/components/editor/plugins/toolbar/block-insert/insert-image';
import { InsertInlineImage } from '@/components/editor/plugins/toolbar/block-insert/insert-inline-image';

export const placeholder = 'Start typing...';

function InsertImageButton() {
  const { activeEditor, showModal } = useToolbarContext();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        showModal('Insert Image', (onClose) => <InsertImageDialog activeEditor={activeEditor} onClose={onClose} />);
      }}
      className="flex items-center gap-1">
      <ImageIcon className="size-4" />
      <span>Image</span>
    </Button>
  );
}

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className="relative">
      <ToolbarPlugin>
        {() => (
          <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
            <HistoryToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <BlockInsertPlugin>
              <InsertImage />
              <InsertInlineImage />
            </BlockInsertPlugin>
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <AutoFocusPlugin />
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block overflow-auto min-h-72 px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <TabIndentationPlugin />
        <HistoryPlugin />
        <ImagesPlugin />
        <InlineImagePlugin />
        <DragDropPastePlugin />
        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
      </div>
    </div>
  );
}
