import { useEffect } from 'react';

/**
 * Injects <meta name="robots" content="noindex, nofollow"> while the calling
 * page is mounted, and removes it on unmount.
 *
 * Needed because this is a client-rendered SPA on GitHub Pages: there is no
 * per-route HTML file and no way to set an X-Robots-Tag response header, so the
 * tag has to be added at runtime. Paired with the Disallow rules in
 * public/robots.txt, which stop well-behaved crawlers before they fetch.
 */
export function useNoindexMeta() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      meta.remove();
    };
  }, []);
}
