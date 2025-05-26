export function ContentRenderer({ contentHtml }: { contentHtml: string }) {
  return (
    <article className="prose prose-sm dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
