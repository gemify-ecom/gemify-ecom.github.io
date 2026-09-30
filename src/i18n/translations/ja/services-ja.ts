import type { ServicesDictionary } from '../dictionary-types';

/**
 * Services page copy in Japanese: custom work beyond Gemify's own apps.
 * The home page teaser reuses `services` (titles and descriptions) from here.
 */
export const servicesJa: ServicesDictionary = {
  hero: {
    badge: 'Shopifyアプリ開発サービス',
    title: 'Shopifyアプリの開発とサポート',
    subtitle:
      '自社アプリの提供に加えて、Shopifyアプリのカスタム開発、既存アプリのカスタマイズ、最新のShopify APIへのアップグレード、ストアの妨げになる不具合の修正も承ります。Gemifyのアプリにも、他社のShopifyアプリにも対応します。',
    primaryCta: '無料で見積もりを依頼',
    secondaryCta: '進め方を見る',
  },

  servicesHeading: 'ご提供できること',
  servicesIntro:
    'ストアに必要なことをお聞かせください。Shopify上で動き、アプリに関わることであれば、お手伝いできます。',
  services: [
    {
      title: 'カスタムアプリ開発',
      description:
        '既存のアプリにない機能が必要ですか？お客様の業務フローに合わせてShopifyアプリを設計・開発します。1つのストア専用のアプリから、Shopify App Storeで公開するアプリまで対応します。',
      items: [
        'お客様のストア専用のカスタムアプリ',
        'Shopify App Storeの審査に対応した公開アプリ',
        '管理画面・チェックアウト・テーマのアプリ拡張機能',
        'ERP、CRM、その他のサービスとの連携',
      ],
    },
    {
      title: 'アプリのカスタマイズ',
      description:
        'アプリにもう少し機能を足したい、動作を変えたいとお考えですか？Gemifyのアプリにも、他の開発者が作ったアプリにも、機能追加や動作の変更を行います。',
      items: [
        'Gemifyアプリへの新機能・新しい設定の追加',
        '他の開発者や制作会社が作ったアプリの改修',
        '独自のルール、レポート、自動化',
        'すでにお使いのツールとの連携',
      ],
    },
    {
      title: 'アップグレードと移行',
      description:
        'Shopifyは四半期ごとに新しいAPIバージョンを公開し、古いバージョンを廃止します。廃止によってアプリが動かなくなる前に、最新の状態に保ちます。',
      items: [
        'Shopify APIバージョンのアップグレード',
        'REST Admin APIからGraphQL Admin APIへの移行',
        'PolarisとApp Bridgeの更新',
        'フレームワークと依存パッケージのアップグレード',
      ],
    },
    {
      title: '不具合修正と保守',
      description:
        'アプリでエラーが出る、動作が遅い、システム間でデータが食い違うといった問題はありませんか？原因を特定して修正し、アプリを安定した状態に保ちます。',
      items: [
        'エラーやクラッシュの調査と修正',
        'Webhook、同期、データ整合性の問題',
        'パフォーマンスと信頼性の改善',
        '継続的な保守と監視',
      ],
    },
  ],

  anyApp: {
    heading: '他社製のアプリでも大丈夫です。',
    body: 'Gemifyのアプリだけでなく、他の開発者や制作会社が作ったShopifyアプリにも対応します。現在の状況をお送りいただければ、コードを確認したうえでお見積もりします。',
  },

  processHeading: '進め方',
  processIntro: 'シンプルな流れで、作業を始める前に明確なお見積もりをお出しします。',
  steps: [
    {
      title: 'ご要望をお聞かせください',
      description: '作りたいアプリ、変更したい点、不具合の内容を、下のフォームまたはメールでお送りください。',
    },
    {
      title: '無料でお見積もり',
      description: 'ご依頼内容を確認し、作業計画、スケジュール、お見積もりをお送りします。お見積もりは無料です。',
    },
    {
      title: '開発とレビュー',
      description: '進捗を随時共有しますので、リリース前に動作を確認してフィードバックをいただけます。',
    },
    {
      title: 'リリースとサポート',
      description:
        '公開までをサポートします。すべてのプロジェクトに、納品した作業の不具合を修正するリリース後のサポート期間が含まれます。',
    },
  ],
};
