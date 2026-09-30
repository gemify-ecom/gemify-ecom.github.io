import type { CommonDictionary } from '../dictionary-types';

/** Site chrome (header, footer, shared buttons) in Japanese. */
export const commonJa: CommonDictionary = {
  brand: 'Gemify',
  skipToContent: 'メインコンテンツへスキップ',

  header: {
    logoAlt: 'Gemify ロゴ',
    navLabel: 'メインナビゲーション',
    apps: 'アプリ',
    services: 'サービス',
    about: '会社概要',
    faq: 'よくある質問',
    contact: 'お問い合わせ',
    exploreApps: 'アプリを見る',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
  },

  footer: {
    ctaHeading: 'Shopifyストアの運営をもっとシンプルに',
    ctaBody:
      '数百のマーチャントが当社のアプリで作業時間を削減し、売上を伸ばしています。',
    ctaButton: 'アプリを見る',
    brandBlurb:
      'マーチャントの時間を節約し、ビジネスの成長を支える強力なShopifyアプリを開発しています。',
    navigationHeading: 'ナビゲーション',
    navigationLabel: 'フッターナビゲーション',
    ourApps: 'アプリ一覧',
    services: '開発サービス',
    aboutUs: '会社概要',
    contact: 'お問い合わせ',
    resourcesHeading: 'リソース',
    resourcesLabel: 'リソース',
    faq: 'よくある質問',
    privacyPolicy: 'プライバシーポリシー',
    contactHeading: 'お問い合わせ',
    /** `{year}` is replaced with the current year. */
    copyright: '© {year} Gemify. 無断転載を禁じます。',
  },

  languageSwitcher: {
    heading: '言語',
    label: '言語を選択',
  },

  actions: {
    installFree: '無料でインストール',
    installFreeOnShopify: 'Shopifyに無料でインストール',
    contactUs: 'お問い合わせ',
    readFaq: 'よくある質問を見る',
    learnMore: '詳しく見る',
  },

  screencast: {
    subtitle: 'スクリーンキャストデモ',
    videoFallback: 'お使いのブラウザは動画の再生に対応していません。',
  },

  notFound: {
    heading: 'ページが見つかりません',
    body: 'お探しのページは存在しないか、移動した可能性があります。',
    homeCta: 'ホームページへ移動',
    faqCta: 'よくある質問を見る',
  },
};
