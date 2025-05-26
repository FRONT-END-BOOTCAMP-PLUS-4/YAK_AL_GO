'use client';

import { getContentHtml } from '@/lib/community/getContentText';

export function ContentRenderer({ content }: { content: any }) {
  const html = getContentHtml(content);

  return (
    <article className="prose prose-sm dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
