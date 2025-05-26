export function getContentText(content: any): string {
  // If content is already a string, return it
  if (typeof content === 'string') {
    return content;
  }

  // If content is null or undefined, return empty string
  if (!content) {
    return '';
  }

  // If content is a Lexical editor object
  if (content.root) {
    try {
      let text = '';

      // Helper function to traverse the Lexical tree
      const traverseNode = (node: any) => {
        if (node.text) {
          text += node.text;
        }

        if (node.children) {
          node.children.forEach(traverseNode);
        }
      };

      // Start traversal from root
      if (content.root.children) {
        content.root.children.forEach(traverseNode);
      }

      return text.trim();
    } catch (error) {
      console.error('Error parsing Lexical content:', error);
      return '';
    }
  }

  // If content is an object but not a Lexical editor object
  return JSON.stringify(content);
}

export function getContentHtml(content: any): string {
  // If content is null or undefined, return empty string
  if (!content) {
    return '';
  }

  // If content is a Lexical editor object
  if (content.root) {
    try {
      let html = '';

      // Helper function to traverse the Lexical tree
      const traverseNode = (node: any) => {
        // Handle different node types
        switch (node.type) {
          case 'paragraph':
            html += `<p>${node.children?.map(traverseNode).join('') || ''}</p>`;
            break;
          case 'heading':
            const level = node.tag || 'h1';
            html += `<${level}>${node.children?.map(traverseNode).join('') || ''}</${level}>`;
            break;
          case 'text':
            let text = node.text || '';
            if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
            if (node.format & 2) text = `<em>${text}</em>`; // Italic
            if (node.format & 4) text = `<u>${text}</u>`; // Underline
            if (node.format & 8) text = `<s>${text}</s>`; // Strikethrough
            html += text;
            break;
          case 'list':
            const listTag = node.listType === 'number' ? 'ol' : 'ul';
            html += `<${listTag}>${node.children?.map(traverseNode).join('') || ''}</${listTag}>`;
            break;
          case 'listitem':
            html += `<li>${node.children?.map(traverseNode).join('') || ''}</li>`;
            break;
          case 'quote':
            html += `<blockquote>${node.children?.map(traverseNode).join('') || ''}</blockquote>`;
            break;
          case 'code':
            html += `<pre><code>${node.children?.map(traverseNode).join('') || ''}</code></pre>`;
            break;
          default:
            if (node.children) {
              html += node.children.map(traverseNode).join('');
            }
        }
      };

      // Start traversal from root
      if (content.root.children) {
        content.root.children.forEach(traverseNode);
      }

      return html;
    } catch (error) {
      console.error('Error parsing Lexical content:', error);
      return '';
    }
  }

  // If content is an object but not a Lexical editor object
  return JSON.stringify(content);
}
