import { Fragment, type ReactNode } from 'react';

const PLACEHOLDER_PATTERN = /\{(\w+)\}/g;

/**
 * Replaces `{token}` placeholders in a translated string with React nodes, so
 * translators can move a link or an emphasised phrase anywhere in the sentence
 * without the component having to re-order JSX.
 *
 *   renderTemplate('Contact us at {email}.', { email: <a href="...">…</a> })
 *
 * Unknown placeholders are left untouched, which makes a missing value obvious
 * on screen instead of silently dropping text.
 */
export function renderTemplate(template: string, values: Record<string, ReactNode>): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  PLACEHOLDER_PATTERN.lastIndex = 0;

  while ((match = PLACEHOLDER_PATTERN.exec(template)) !== null) {
    const [token, key] = match;

    if (match.index > lastIndex) {
      nodes.push(template.slice(lastIndex, match.index));
    }

    nodes.push(key in values ? values[key] : token);
    lastIndex = match.index + token.length;
  }

  if (lastIndex < template.length) {
    nodes.push(template.slice(lastIndex));
  }

  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

/** Plain-string version of {@link renderTemplate}, for labels and attributes. */
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(PLACEHOLDER_PATTERN, (token, key: string) =>
    key in values ? String(values[key]) : token,
  );
}
