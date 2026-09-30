import { Layout } from '../components/layout';
import { PageHero } from '../components/page-hero';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';

/**
 * Rendered for any URL that matches no page. The prerender step writes it to
 * `404.html`, which GitHub Pages serves with a real 404 status, so unknown
 * URLs never look like duplicate content to search engines.
 */
export function NotFoundPage() {
  const { notFound } = useTranslations('common');

  return (
    <Layout showFooterCTA={false}>
      <PageHero label="404" title={notFound.heading} lede={notFound.body}>
        <LocalizedLink to="/" className={PRIMARY_BUTTON_ON_INK}>
          {notFound.homeCta}
        </LocalizedLink>
        <LocalizedLink to="/faq" className={TEXT_LINK_ON_INK}>
          {notFound.faqCta}
        </LocalizedLink>
      </PageHero>
    </Layout>
  );
}
