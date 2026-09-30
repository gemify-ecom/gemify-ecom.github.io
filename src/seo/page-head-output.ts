import type { HeadTag, PageHead } from './page-head';

/**
 * Two ways to output a {@link PageHead}: as an HTML string for the prerendered
 * files, and as live DOM nodes after a client-side navigation. Every managed
 * tag carries `data-page-head` so the client can swap the previous page's
 * tags (including the prerendered ones) without touching anything else.
 */

const MANAGED_ATTRIBUTE = 'data-page-head';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** JSON inside `<script>` must not be able to close the tag early. */
function escapeScriptContent(value: string): string {
  return value.replace(/</g, '\\u003c');
}

function tagToHtml({ tag, attributes, content }: HeadTag): string {
  const attrs = Object.entries({ ...attributes, [MANAGED_ATTRIBUTE]: '' })
    .map(([name, value]) => (value === '' ? name : `${name}="${escapeHtml(value)}"`))
    .join(' ');

  return tag === 'script'
    ? `<script ${attrs}>${escapeScriptContent(content ?? '')}</script>`
    : `<${tag} ${attrs} />`;
}

/** Serialises the title and managed tags for a static HTML file. */
export function pageHeadToHtml(head: PageHead): string {
  return [`<title>${escapeHtml(head.title)}</title>`, ...head.tags.map(tagToHtml)].join('\n    ');
}

/** Replaces the previous page's managed tags with this page's tags. */
export function applyPageHead(head: PageHead): void {
  document.documentElement.lang = head.lang;
  document.title = head.title;

  document.head.querySelectorAll(`[${MANAGED_ATTRIBUTE}]`).forEach((element) => element.remove());

  for (const { tag, attributes, content } of head.tags) {
    const element = document.createElement(tag);
    for (const [name, value] of Object.entries(attributes)) {
      element.setAttribute(name, value);
    }
    element.setAttribute(MANAGED_ATTRIBUTE, '');
    if (content) {
      element.textContent = content;
    }
    document.head.appendChild(element);
  }
}
