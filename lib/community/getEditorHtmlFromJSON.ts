import { createEditor, SerializedEditorState } from 'lexical';
import { $generateHtmlFromNodes } from '@lexical/html';
import { nodes } from '@/components/blocks/editor-x/nodes';
import { editorTheme } from '@/components/editor/themes/editor-theme';
export const getEditorHtmlFromJSON = (json: SerializedEditorState) => {
  const editor = createEditor({
    nodes,
    theme: editorTheme,
  });
  try {
    editor.setEditorState(editor.parseEditorState(json));
    let html = '';
    editor.update(() => {
      html = $generateHtmlFromNodes(editor);
    });
    return html;
  } catch (error) {
    console.error(error);
    return '';
  }
};
