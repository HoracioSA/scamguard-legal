import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BASE_PATH } from './basePath';

/**
 * Markdown source links to other site pages with root-relative paths (e.g.
 * `/privacy`) so they still work when this content is reused verbatim on a
 * deploy target with no basePath. react-markdown renders plain `<a>` tags,
 * which (unlike next/link) don't get Next's basePath prefix applied
 * automatically, so it's added here instead.
 */
function withBasePath(href?: string): string | undefined {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  return `${BASE_PATH}${href}`;
}

/**
 * Reads a markdown file from ../content and renders it. HTML comments in the
 * source (maintainer notes, e.g. "this is a template, not legal advice") are
 * for whoever edits the .md file, not for site visitors — react-markdown
 * does NOT drop raw HTML by default, it escapes it as visible literal text,
 * so these are stripped explicitly before rendering. The visible DraftNotice
 * banner (rendered separately by each page) is what tells visitors this is
 * a draft.
 */
function stripHtmlComments(markdown: string): string {
  return markdown.replace(/<!--[\s\S]*?-->/g, '').trimStart();
}

export function MarkdownDocument({ filename }: { filename: string }) {
  const filePath = path.join(process.cwd(), 'content', filename);
  const content = stripHtmlComments(fs.readFileSync(filePath, 'utf8'));

  return (
    <div className="legal-doc">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ a: ({ href, ...props }) => <a href={withBasePath(href)} {...props} /> }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
