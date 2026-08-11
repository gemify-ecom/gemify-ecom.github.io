import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in Japanese. */
export const homeJa: HomeDictionary = {
  skipToContent: 'メインコンテンツへスキップ',

  hero: {
    socialProof: '500以上のShopifyマーチャントにご利用いただいています',
    headline: 'Shopifyストアの運営を本当に楽にするアプリ',
    subheadline:
      'マーチャントの現場を理解する開発者がつくった、シンプルで強力なツール。余計な機能はなく、成果だけをお届けします。',
    primaryCta: 'アプリを見る',
    secondaryCta: 'お問い合わせ →',
    ratingBadge: 'Shopify App Storeで5つ星の評価',
  },

  apps: {
    badge: 'インストール無料',
    heading: 'Gemifyのアプリ',
    subheading: 'マーチャントの実際の課題を解決する、シンプルで強力なツール',
    comingSoon: '近日公開',
    installs: '{count}件のインストール',
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'テスト注文や不要なデータを数秒で整理',
      features: [
        'フィルターで削除したい注文だけを正確に指定',
        '削除前に自動でキャンセル処理。手作業は不要',
        'ジョブ履歴で進行状況を確認し、レポートを書き出し',
      ],
    },
    defaultAddressLock: {
      title: 'Default Address Lock',
      tagline: '注文後も顧客のデフォルト住所をそのまま維持',
      features: [
        'Shopifyによるデフォルト住所の上書きを防止',
        '注文による変更と手動での変更をスマートに判別',
        'ギフトストアやBtoBのマーチャントに最適',
      ],
    },
    llmsTxt: {
      title: 'LLMs.txt',
      tagline: 'ChatGPT・Claude・Geminiがストアを理解できるように',
      features: [
        'llms.txtとllms-full.txtをワンクリックで生成',
        '掲載する商品・コレクション・ページ・記事を自由に選択',
        'Shopifyが/llms.txtで直接配信。追加のホスティングは不要',
      ],
    },
  },

  testimonials: {
    badge: 'Shopify App Storeで5.0',
    heading: 'マーチャントに選ばれています',
    subheading: 'アプリをご利用中のストアオーナーの声をご覧ください',
    verified: '確認済み',
    merchantRole: 'Shopifyマーチャント',
  },

  whyChoose: {
    heading: 'マーチャントがGemifyを選ぶ理由',
    subheading: 'お客様の成功を第一に考えたツール',
    benefits: [
      {
        title: 'Shopifyの専門知識',
        description:
          '日々の業務課題を理解している認定Shopifyエキスパートが開発しています。',
      },
      {
        title: 'エンタープライズ級のセキュリティ',
        description: '銀行水準のセキュリティで、ストアのデータを24時間365日保護します。',
      },
      {
        title: '迅速なサポート',
        description:
          'ボットではなく、担当者が直接対応します。困ったときにすぐ相談できます。',
      },
    ],
  },

  about: {
    heading: 'Gemifyについて',
    intro:
      'マーチャントが直面する課題を熟知した、経験豊富なShopify開発者が立ち上げました。',
    mission: {
      text: '私たちの使命はシンプルです。{emphasis}を届けること。機能を詰め込んだり、分かりにくい画面にしたりはしません。ビジネスの成長に役立つ、すっきりとした解決策だけをお届けします。',
      emphasis: '直感的で信頼できるアプリ',
    },
    closing: {
      text: 'すべてのアプリを、自分たちのストアに導入するのと同じ基準でつくっています。Gemifyを選ぶことは、{emphasis}を選ぶことです。',
      emphasis: 'お客様の成功に全力で取り組むパートナー',
    },
  },

  contact: {
    heading: 'お問い合わせ',
    responseTime: '通常24時間以内に返信いたします',
    successTitle: 'ありがとうございます',
    successBody: 'メッセージを送信しました。折り返しご連絡いたします。',
    successCta: '返信をお待ちの間にアプリをご覧ください →',
    nameLabel: 'お名前',
    namePlaceholder: '山田 太郎',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'you@example.com',
    subjectLabel: '件名',
    subjectPlaceholder: 'ご用件をご記入ください',
    messageLabel: 'メッセージ',
    messagePlaceholder: 'ご質問やご意見の内容をご記入ください...',
    submit: 'メッセージを送信',
    submitting: '送信中...',
    submitted: '送信しました',
    errorAlert: '送信中に問題が発生しました。お手数ですが、もう一度お試しください。',
    securityNote: 'ご入力いただいた情報は安全に管理し、第三者に共有することはありません',
  },
};
