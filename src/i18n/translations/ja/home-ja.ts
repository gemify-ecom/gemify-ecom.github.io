import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in Japanese. */
export const homeJa: HomeDictionary = {
  hero: {
    socialProof: '500以上のShopifyマーチャントにご利用いただいています',
    headline: {
      text: '{emphasis}を、しっかりこなす小さなアプリ。',
      emphasis: 'ひとつの仕事',
    },
    subheadline:
      'どのアプリもストアの課題をひとつだけ解決します。無料プランから始められ、開発した本人がサポートします。',
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
    /** Accessible label for the star rating badge on each app card. */
    ratingLabel: 'Shopify App Storeでの評価: 5点中{rating}点',
    /** App groups: store tools use the blue icon plate, AI tools the black one. */
    groups: {
      storeOperations: {
        heading: 'ストア運営',
        description: '注文、住所、配送、店舗の場所',
      },
      aiShoppers: {
        heading: 'AIショッピングに備える',
        description: 'AIアシスタントがストアを読み取り、チェックアウトまで進めるようにします',
      },
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'テスト注文や不要なデータを数秒で整理',
      features: [
        '注文・下書き注文・顧客をまとめて削除',
        '削除前に自動でキャンセル処理。手作業は不要',
        'ジョブ履歴ですべてのジョブを追跡し、CSVレポートを書き出し',
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
      title: 'LLMs-full.txt',
      tagline: 'ChatGPT・Claude・Geminiがストアを理解できるように',
      features: [
        'agents.md・llms.txt・llms-full.txtをワンクリックで生成',
        '掲載する商品・コレクション・ページ・記事を自由に選択',
        'Shopifyが/llms.txtで直接配信。追加のホスティングは不要',
      ],
    },
    japanMultiship: {
      title: 'Japan Multiship',
      tagline: '1回の注文で複数のお届け先へ。ギフトの送り分けに',
      features: [
        'カートページで商品ごとに複数のお届け先を指定',
        '支払い済みの注文をお届け先ごとのフルフィルメントに分割',
        'ヤマトB2クラウド用CSVの出力と送り状番号の取り込みに対応',
      ],
    },
    checkoutProbe: {
      title: 'Checkout Probe',
      tagline: 'チェックアウトをWebMCPのショッピングエージェントに対応',
      features: [
        'AIショッピングエージェントとしてワンクリックでチェックアウトをテスト',
        'エージェントを止める問題を、修正方法とあわせて表示',
        '注文は作成せず、テスト用のチェックアウトは必ずキャンセル',
      ],
    },
    bestStoreLocator: {
      title: 'Best Store Locator',
      tagline: '店舗や販売店を地図で表示、APIキーの設定は不要',
      features: [
        'Google APIキー不要の地図と住所確認を標準搭載',
        'CSVインポートは保存前にすべての変更をプレビュー',
        'お客様は市区町村や郵便番号で検索し、営業中の店舗を確認',
      ],
    },
  },

  testimonials: {
    badge: 'Shopify App Storeで5.0',
    heading: 'マーチャントに選ばれています',
    subheading: 'アプリをご利用中のストアオーナーの声をご覧ください',
    verified: '確認済み',
    merchantRole: 'Shopifyマーチャント',
    translatedNote: '英語から翻訳',
    /** Quotation marks around review text in this language. */
    quoteMarks: { open: '「', close: '」' },
    reviews: {
      barbellStandard: {
        quote: 'Shopifyでボタンをクリックし続ける約8時間の作業が、このアプリのおかげで5分で終わる作業になりました。',
        highlight: '8時間 → 5分',
      },
      yubiBar: {
        quote: '素晴らしいアプリです。Amazonから取り込んだ注文が分析データを乱していたので、削除する必要がありました。Shopifyサポートに問い合わせたところ、発送済みの注文は削除できないと言われました。そこでこのアプリを使ったら、魔法のようにうまくいきました。GEMIFYチームの皆さんに感謝します。',
        highlight: '魔法のようにうまくいった',
      },
      strikeSports: {
        quote: '素晴らしいアプリで、カスタマーサポートはさらに素晴らしいです！アプリはスムーズに動き、説明どおりの働きをしてくれます。サポートチームは対応がとても早く、プロフェッショナルで親切です。強くおすすめします！',
        highlight: 'サポートはさらに素晴らしい',
      },
      mooMenn: {
        quote: 'Seanさんは本当に素晴らしく、期待以上の対応で、バックグラウンドの注文をすべてすぐに削除してくれました。強くおすすめします。最高のサポートです！',
        highlight: '期待以上の対応',
      },
      amyDepot: {
        quote: '説明どおりのことを、驚くほどうまく、しかも驚くほど手頃な価格でやってくれます。期待をはるかに超えました。Gemifyの皆さん、ありがとう。まさに求めていたものです！',
        highlight: '期待をはるかに超えた',
      },
    },
  },

  /** Core values. Each proof line must stay true of the shipped apps. */
  values: {
    eyebrow: 'Gemifyの価値観',
    heading: 'すべてのアプリに込めた4つの約束',
    subheading: 'どれも、いまのアプリがすでに実現していることです。',
    proofLabel: '実例',
    items: [
      {
        title: 'ひとつの仕事を、しっかりと',
        description: '各アプリはマーチャントの課題をひとつだけ解決し、1分で使い方がわかる大きさに保っています。',
        proof: '6つのアプリに6つの仕事：注文の削除、住所の保護、llms.txtの公開、ギフト注文の分割、店舗の案内、エージェントによるチェックアウトのテスト。',
      },
      {
        title: '速さより、安全を先に',
        description: '何が変わるかを先にお見せし、変わった内容は記録に残します。',
        proof: 'Bulk Delete Ordersのジョブ履歴とCSVレポート、Best Store LocatorのCSV取り込み前の全件プレビュー、そしてCheckout Probeは注文を確定しません。',
      },
      {
        title: 'わかりやすい言葉、正直な価格',
        description: 'マーチャントが普段使う言葉で書きます。価格はShopify App Storeの掲載内容がすべてです。',
        proof: 'すべてのアプリに無料プランがあり、プライバシーポリシーもわかりやすい言葉で書いています。',
      },
      {
        title: '人が答えます',
        description: 'サポートへのメッセージは、ボットではなく担当者が読んで返信します。',
        proof: 'App Storeのレビューでは、マーチャントがサポート担当者の名前を挙げてくれています。',
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

  /** Teaser for the services page; the cards reuse the services namespace. */
  services: {
    badge: 'サービス',
    heading: 'カスタマイズが必要ですか？',
    subheading:
      '自社アプリの提供に加えて、Shopifyアプリの開発、カスタマイズ、アップグレード、不具合修正も承ります。他社製のアプリにも対応します。',
    cta: 'すべてのサービスを見る',
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
    /** Shown under the error; `{email}` becomes a mailto link. */
    errorEmailFallback: '{email} まで直接メールでご連絡いただくこともできます。',
    securityNote: 'ご入力いただいた情報は安全に管理し、第三者に共有することはありません',
  },
};
