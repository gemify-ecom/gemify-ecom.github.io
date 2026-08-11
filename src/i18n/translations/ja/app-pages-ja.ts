import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in Japanese. */
export const appPagesJa: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      '強力なフィルターと自動キャンセル機能で、テスト注文や古いデータ、不要な注文をまとめて削除し、Shopifyストアを整理できます。',
    problemHeading: '課題',
    problemIntro:
      'Shopifyには注文を一括削除する標準機能がありません。数百件、数千件の注文を1件ずつ手作業で削除するのは、時間がかかり、ミスも起こりやすい作業です。',
    problems: [
      {
        title: 'テスト注文がデータを乱す',
        description:
          '開発やテストで作成した架空の注文が残り、分析データを汚してしまうため、実際の売上状況が見えにくくなります。',
      },
      {
        title: '移行後のデータ整理',
        description:
          '他のプラットフォームから移行した際に取り込んだ注文のうち、不要になったものを整理したいケースがあります。',
      },
      {
        title: '重複した注文',
        description:
          'システムの不具合や連携エラーによって重複した注文が発生し、効率的に整理する必要が生じます。',
      },
      {
        title: 'GDPR・プライバシー対応',
        description:
          'プライバシー関連の法令により、一定期間を過ぎた顧客データ(注文記録を含む)の削除が必要になる場合があります。',
      },
    ],
    howItWorksHeading: '使い方',
    howItWorksIntro:
      '注文の一括削除を、シンプルかつ安全に、履歴も追える形で実現します。条件を細かく指定して絞り込み、ワンクリックで削除できます。',
    features: [
      {
        title: '強力なフィルター',
        description:
          '期間、ステータス、タグ、顧客、支払い状況などで絞り込み。削除したい注文だけを正確に指定できます。',
      },
      {
        title: '自動キャンセルと削除',
        description:
          '削除前に注文を自動でキャンセルするため、手作業は不要です。フルフィルメント済みの注文も適切に処理します。',
      },
      {
        title: 'ジョブ履歴',
        description:
          'すべての削除ジョブを詳細なログとともに記録。コンプライアンスや監査用にレポートを書き出せます。',
      },
      {
        title: 'レポートの書き出し',
        description:
          '削除した注文の詳細なレポートを生成し、記録として保存できます。監査対応の証跡としても活用できます。',
      },
      {
        title: '安全な事前プレビュー',
        description:
          '削除前に対象の注文をプレビュー。何が削除されるかを確認し、納得してから実行できます。',
      },
    ],
    ctaHeading: 'ストアを整理しませんか?',
    ctaBody:
      'Bulk Delete Ordersを導入して、手作業に費やしていた時間を削減しましょう。無料プランからお試しいただけます。',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      '別の配送先へ注文が行われても、Shopifyが顧客のデフォルト住所を上書きしてしまうのを防ぎます。',
    problemHeading: '課題',
    problemIntro:
      '2015年以来、Shopifyでは顧客が別の配送先を指定して注文するたびに、デフォルト住所が自動的に書き換えられます。これがマーチャントにとって大きな悩みの種になっています。',
    problems: [
      {
        title: 'ギフトストア',
        description:
          '友人や家族へギフトを送る顧客のデフォルト住所が、そのたびに贈り先の住所へ変わってしまいます。',
      },
      {
        title: 'BtoBのマーチャント',
        description:
          '取引先へ直送する法人顧客のデフォルト住所が誤った内容になり、次回以降の注文に支障が出ます。',
      },
      {
        title: 'CRM連携しているストア',
        description:
          'マーケティングや出荷業務で正確な顧客データを前提にしているストアでは、データの整合性が崩れます。',
      },
      {
        title: 'サブスクリプション事業',
        description:
          '一度きりのギフト配送が定期配送の住所を上書きし、その後の定期便が誤った住所へ届いてしまいます。',
      },
    ],
    howItWorksHeading: '仕組み',
    howItWorksIntro:
      '住所の変更を賢く監視し、Shopifyがデフォルト住所を上書きしようとした際に、元の住所へ自動的に復元します。',
    features: [
      {
        title: 'スマートな判別',
        description:
          '注文によって発生した変更と、顧客が意図して行った手動の変更を区別します。手動の変更はそのまま維持されます。',
      },
      {
        title: '自動復元',
        description:
          '注文後にShopifyがデフォルト住所を上書きした場合、元の住所を自動的に復元します。',
      },
      {
        title: 'プライバシー第一',
        description:
          '保存するのは住所IDのみで、住所の内容そのものは保持しません。顧客データはShopify内で安全に保たれます。',
      },
    ],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'アプリを使わない場合',
      withApp: 'アプリを使う場合',
      stepLabel: 'ステップ{number}',
      step1: 'デフォルト住所は{a}(自宅)',
      step2: '{b}(友人の住所)へギフトを配送',
      step3Without: 'Shopifyがデフォルト住所を{b}に変更',
      step3With: 'アプリが変更を検知して{a}に復元',
      resultWithoutTitle: 'デフォルト住所が誤った状態に',
      resultWithoutBody: '今後の注文が誤った住所へ配送される可能性があります',
      resultWithTitle: 'デフォルト住所は正しいまま',
      resultWithBody: '自宅の住所がそのまま保護されます',
      summaryHeading: 'アプリが行うこと',
      summaryNegative: '注文の配送先住所は変更しません',
      summaryPositive: 'デフォルト住所を保護します',
    },
    ctaHeading: '顧客の住所を守りませんか?',
    ctaBody:
      'Default Address Lockを導入して、Shopifyによるデフォルト住所の上書きを止めましょう。小規模ストア向けの無料プランもご用意しています。',
  },

  llmsTxt: {
    title: 'LLMs.txt',
    tagline:
      'ShopifyストアをAI対応に。{llmsTxt}と{llmsFullTxt}を生成し、AIアシスタントが商品・コレクション・ページを正しく理解できるようにします。',
    problemHeading: 'ストアにllms.txtが必要な理由',
    problemIntro:
      '{standardLink}は、AIモデルがWebサイトを理解する助けになります。{robotsTxt}が検索エンジンを案内するように、{llmsTxt}はAIアシスタントを案内し、商品の提案や顧客の質問への回答を正確にします。',
    standardLinkLabel: 'llms.txt標準',
    problems: [
      {
        title: '買い物客はまずAIに尋ねる',
        description:
          'ChatGPTやClaude、Geminiで商品を調べる顧客が増えています。カタログの整った要約がなければ、AIは取得できた情報だけを頼りに回答します。',
      },
      {
        title: 'ストアフロントのHTMLは情報が埋もれる',
        description:
          'テーマのマークアップやスクリプト、ナビゲーションによって重要な情報が埋もれてしまいます。モデルは描画されたページよりもマークダウンの方が確実に読み取れます。',
      },
      {
        title: '手作業では追いつかない',
        description:
          '数百点の商品やコレクション、ブログ記事を手書きのファイルで管理するのは手間がかかり、カタログを更新した時点で内容が古くなります。',
      },
      {
        title: 'ホスティングが障壁になる',
        description:
          '標準ではルートドメインにファイルを置くことが求められます。外部ホストやアプリプロキシ経由での配信には、追加のインフラとリダイレクトが必要です。',
      },
    ],
    featuresHeading: 'できること',
    featuresIntro:
      '掲載する内容を選び、2つのファイルを生成すれば、あとはShopifyが自社ドメインから配信します。追加のホスティングも手作業の編集も不要です。',
    features: [
      {
        title: 'ワンクリックで生成',
        description:
          'ダッシュボードからllms.txtとllms-full.txtの両方を生成。掲載する商品・コレクション・ページ・記事を細かく選べます。',
      },
      {
        title: '出力のカスタマイズ',
        description:
          'セクションの並び替えや書式の調整ができ、ストアの紹介内容を思いどおりの形に整えられます。',
      },
      {
        title: 'Shopifyが直接配信',
        description:
          'ファイルはテーマに公開され、Shopifyが/llms.txtと/llms-full.txtで配信します。追加のホスティングは不要です。',
      },
      {
        title: '掲載内容は自由に選択',
        description:
          '商品、コレクション、ページ、ブログ記事、ポリシーを掲載できます。AIアシスタントに要約させたくないものは除外できます。',
      },
      {
        title: '整ったマークダウン出力',
        description:
          'ストアのデータをShopify GraphQL APIから取得し、モデルが推測せずに解析できる整ったマークダウンへ変換します。',
      },
    ],
    howItWorksHeading: '使い方',
    howItWorksIntro: 'インストールからAI対応のストアフロントまで、3ステップで完了します。',
    steps: [
      {
        title: 'インストールと設定',
        description:
          '掲載する内容(商品、コレクション、ページ、ブログ記事、ポリシー)を選択します。',
      },
      {
        title: 'ファイルを生成',
        description:
          '生成を実行すると、GraphQL経由でストアのデータを取得し、整ったマークダウンへ変換します。',
      },
      {
        title: 'AI対応の完了',
        description:
          'llms.txtが公開され、ChatGPTやClaude、GeminiなどのAIアシスタントがストアの内容を読み取って理解できるようになります。',
      },
    ],
    ctaHeading: 'AI対応をはじめませんか?',
    ctaBody:
      'LLMs.txtを導入して、AIアシスタントにストアの正確な姿を伝えましょう。インストールは無料です。',
  },
};
