import { loadDictionary } from './dictionary-store';
import type { Locale } from './locales';
import type { Dictionary } from './translations';

/**
 * Moves the visitor to `target` once `locale`'s dictionary has loaded, so a
 * language change never renders a page without its copy.
 *
 * - If the visitor navigates elsewhere, or asks for another language, while
 *   the chunk is loading, this request is dropped instead of pulling them back.
 * - If the chunk cannot be fetched (for example a tab left open across a
 *   deploy, whose old chunk hash is gone), it falls back to a full page load:
 *   every locale URL is a prerendered file that loads the right chunk itself.
 */

let latestRequest = 0;

export function navigateWhenLocaleLoaded(
  locale: Locale,
  target: string,
  navigate: (to: string) => void,
  { replace = false }: { replace?: boolean } = {},
): void {
  const request = ++latestRequest;
  const startedAt = window.location.href;
  const isStillWanted = () => request === latestRequest && window.location.href === startedAt;

  loadDictionary(locale).then(
    () => {
      if (isStillWanted()) {
        navigate(target);
      }
    },
    () => {
      if (isStillWanted()) {
        if (replace) {
          window.location.replace(target);
        } else {
          window.location.assign(target);
        }
      }
    },
  );
}

const renderLoads = new Map<Locale, Promise<Dictionary>>();

/**
 * For a render that needs a dictionary that is not loaded yet (e.g. browser
 * Back into another language after a reload). Returns one stable promise per
 * locale, as React's `use()` requires. If the load fails, it reloads the
 * prerendered page for the current URL instead of crashing, and keeps the
 * current screen while it reloads.
 */
export function loadDictionaryForRender(locale: Locale): Promise<Dictionary> {
  let promise = renderLoads.get(locale);
  if (!promise) {
    promise = loadDictionary(locale).catch(() => {
      window.location.reload();
      return new Promise<never>(() => {});
    });
    renderLoads.set(locale, promise);
  }
  return promise;
}
