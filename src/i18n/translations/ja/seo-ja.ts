import type { SeoDictionary } from '../dictionary-types';

/**
 * Search and social metadata in Japanese: one title and description per page,
 * written into `<head>` by the prerender step and on client-side navigation.
 * App names, plan names, and prices are not translated.
 */
export const seoJa: SeoDictionary = {
  /** Label for the first breadcrumb, pointing at the home page. */
  breadcrumbHome: 'ホーム',

  pages: {
    home: {
      title: 'Gemify | 注文一括削除・住所ロック・llms.txtのShopifyアプリ',
      description:
        'マーチャントの実際の課題を解決するShopifyアプリ。注文と顧客の一括削除、デフォルト住所の上書き防止、AI向けllms.txtの公開に対応。すべてのアプリに無料プランがあります。',
    },
    faq: {
      title: 'よくある質問: GemifyのShopifyアプリ、料金、プライバシー | Gemify',
      description:
        'Bulk Delete Orders、Default Address Lock、LLMs-full.txtに関するよくある質問。機能、料金、請求、データのプライバシー、Shopifyプランとの互換性についてお答えします。',
    },
    services: {
      title: 'Shopifyアプリ開発・カスタマイズ・不具合修正 | Gemify',
      description:
        'Shopifyアプリのカスタム開発、アプリのカスタマイズ、APIバージョンのアップグレード、不具合修正。Gemifyのアプリにも他社のShopifyアプリにも対応。お見積もり無料、リリース後のサポート付き。',
    },
    privacyPolicy: {
      title: 'プライバシーポリシー | Gemify',
      description:
        'GemifyのShopifyアプリが、マーチャントと顧客のデータをどのように収集、利用、保存、保護するかを説明します。GDPRおよびCPRAに基づく権利や、顧客データに関する請求についても記載しています。',
    },
    bulkDeleteOrders: {
      title: 'Shopify注文の一括削除アプリ: 下書き注文・顧客にも対応 | Gemify',
      description:
        'Shopifyの注文、下書き注文、顧客を一括削除。強力なフィルター、自動キャンセル、リアルタイムのジョブ履歴、CSVレポートに対応。無料プランあり、年間36ドルで無制限に利用できます。',
    },
    defaultAddressLock: {
      title: 'Default Address Lock: Shopifyのデフォルト住所の上書きを防止 | Gemify',
      description:
        '別の配送先への注文で、Shopifyが顧客のデフォルト住所を上書きしてしまうのを防ぎます。スマートな判別、リアルタイムの復元、アクティビティダッシュボードに対応。無料プランあり。',
    },
    llmsTxt: {
      title: 'LLMs-full.txt: Shopifyストアのllms.txt・agents.mdを生成 | Gemify',
      description:
        'agents.md、llms.txt、llms-full.txtをShopifyストアの独自ドメインで公開し、ChatGPT、Claude、Geminiがカタログを正しく理解できるようにします。定期的な自動更新に対応。無料プランあり。',
    },
    japanMultiship: {
      title: 'Japan Multiship: 1件のShopify注文を複数のお届け先へ | Gemify',
      description:
        'Shopifyアプリストアに近日公開予定。1件の注文を日本国内の最大20件のお届け先へ、1回の支払いで。お届け先ごとの送料表示とヤマト運輸B2クラウド向けCSV出力に対応。',
    },
    bestStoreLocator: {
      title: 'Best Store Locator: APIキー不要のShopify店舗マップ | Gemify',
      description:
        'Shopifyアプリストアに近日公開予定。店舗、取扱店、販売代理店を検索可能な地図で表示。地図機能を内蔵し、プレビュー付きCSVインポート、営業中の店舗検索に対応。',
    },
    checkoutProbe: {
      title: 'Checkout Probe: ShopifyのWebMCPチェックアウトテスト | Gemify',
      description:
        'Shopifyアプリストアに近日公開予定。チェックアウトをWebMCPに対応。AIショッピングエージェントと同じ方法でテストし、問題ごとの解決方法を得られます。',
    },
    notFound: {
      title: 'ページが見つかりません | Gemify',
      description: 'お探しのページは存在しません。GemifyのShopifyアプリをご覧ください。',
    },
  },

  /** Screencast pages are not indexed; `{app}` is the app name. */
  screencast: {
    title: '{app}のスクリーンキャストデモ | Gemify',
    description: 'Gemifyが提供するShopifyアプリ、{app}の短いスクリーンキャストデモをご覧ください。',
  },
  help: {
    title: '{app} ヘルプ | Gemify',
    description: 'Gemify の Shopify アプリ {app} の設定方法と使い方。',
  },
};
