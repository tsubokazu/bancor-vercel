# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要
Nuxt 3 + TypeScript + TailwindCSSを使用したBancor HPのWebサイト。CMSとしてKurocoを使用し、Vercel経由でGitHubからの自動デプロイを実装。

**重要**: ソースコードは`src/`ディレクトリに配置（nuxt.config.tsで`srcDir: 'src'`を指定）

## 共通コマンド
```bash
# 依存関係インストール
npm install

# 開発サーバー起動（ポート3000）
npm run dev

# プロダクション用ビルド（Vercel向け静的サイト生成）
npm run generate

# プロダクション用プレビュー
npm run preview

# TypeScript・Vue・CSSのリント
npm run lint

# コード自動フォーマット（src/**/*.{ts,json,vue}）
npm run format
```

## コーディング規約

### Prettier設定（.prettierrc）
- シングルクォート使用
- セミコロン必須
- タブ幅: 2スペース
- Vue: script/styleブロックのインデントあり

### ESLint設定
- TypeScript推奨ルール適用
- Vue 3推奨ルール適用
- Tailwind CSS推奨ルール適用
- Prettierと統合済み

## アーキテクチャ構成

### ディレクトリ構造（`src/`内）
- `components/` - Atomic Design構造（atoms/molecules/organisms）
  - atoms: 最小単位（Button, Icon, Titleなど）
  - molecules: 組み合わせコンポーネント（Card, Menuなど）
  - organisms: 複雑なコンポーネント（Header, Footer, Sectionなど）
- `layouts/` - レイアウトテンプレート
  - default.vue: デフォルトレイアウト
  - top.vue: トップページ専用
  - company.vue: 会社情報系ページ
  - entry.vue: エントリーページ専用
- `pages/` - ページルーティング（Nuxt file-based routing）
- `stores/` - Pinia状態管理（ページ別、機能別に分割）
- `types/` - TypeScript型定義（pages別に細分化）
- `assets/` - 静的ファイル（CSS、フォント、Lottieアニメーション）
- `plugins/` - プラグイン設定（FontAwesome、アナリティクス等）
- `middleware/` - ルートミドルウェア

### 外部システム連携
- **Kuroco CMS**: コンテンツ管理（API経由でデータ取得）
- **FormKit**: フォーム管理・バリデーション（@formkit/nuxt）
- **FontAwesome**: アイコンライブラリ（plugins/fontawesome.ts経由）
- **Lottie**: アニメーション（lottie-web）
- **Google Maps**: 地図表示（vue3-google-map）
- **Analytics**: アクセス解析（vue-gtag）
- **その他**：
  - Axios: HTTP通信
  - Cheerio: HTMLパース
  - @nuxtjs/sitemap: サイトマップ生成

### スタイリング
- **TailwindCSS**: メインCSS（カスタムテーマ設定済み）
- **カスタムフォント**: Futura、Gotham、游ゴシック
- **アニメーション**: カスタムキーフレーム多数定義
- **レスポンシブ**: `tb`（768px）、`pc`（1280px）ブレークポイント

## 開発時の注意事項

### ファイル構造の規約
- Atomic Designパターンを厳密に適用
- 新規コンポーネントは適切な階層（atoms/molecules/organisms）に配置
- 型定義は`types/`で対応するページ・機能別に管理

### 状態管理
- **Piniaストアの構造**：
  - `stores/pages/` - ページ別ストア（各ページのデータ・状態管理）
    - サブディレクトリ化: beauty/, daycare/など複数ページをグループ化
  - `stores/` - 共通機能ストア（News, Journal, loading, cookieConsentなど）
  - `stores/headTag/` - ページ別headタグ管理
- **必須パターン**：
  - 全ストアで`defineStore()`と`acceptHMRUpdate()`を使用
  - nuxt.config.tsのimports.dirsで`stores`と`stores/pages`を自動インポート
  - 型定義は`types/pages/`で対応するストアと同構造で管理

### API連携
- **Kuroco CMS API**：
  - 全エンドポイントはnuxt.config.tsのruntimeConfig.publicで定義
  - ベースURL: `kurocoApiUrl` (https://bancor.g.kuroco.app)
  - 主要API種類：
    - コンテンツ取得: `/rcms-api/{id}/{endpoint}`形式
    - フォーム送信: `kurocoSubmitEntryForm`, `kurocoSubmitContactForm`など
    - ファイルアップロード: `kurocoUploadFile`
  - APIレスポンスの型定義は`types/kuroco.ts`で集中管理
  - ページ別データ取得: `kurocoPagesXxx`パターン（topics_group_idで分類）
  - 使用例：
    ```typescript
    const config = useRuntimeConfig();
    const { data } = await useFetch(`${config.public.kurocoApiUrl}${config.public.kurocoNews}`);
    ```

### CSS・アニメーション
- TailwindのカスタムCSSクラス・アニメーションを多用
- 新規アニメーションはtailwind.config.jsのkeyframesに追加
- Bancor独自カラーパレット使用（`bancor-*`プレフィックス）

### デプロイメント
- **Vercel自動デプロイ**：GitHubへのコミットでVercelに自動デプロイ
- **静的サイト生成（SSG）**：
  - ビルドコマンド: `npm run generate`
  - 全ルートはnuxt.config.tsのrouteRulesで`{ static: true }`として定義必須
  - 新規ページ追加時は必ずrouteRulesに追加すること
  - サブディレクトリ配下は`/path/**`パターンで指定
  - サイトマップURL: https://www.bancor.co.jp（nuxt.config.tsで設定）
- **環境変数**：
  - `GOOGLE_MAP_API_KEY`：Google Maps API用（runtimeConfig.public.googleMapApiKeyで参照）

## ビルド設定の補足

### 重要な設定
- **Nitro WASM**: 実験的WASM機能を有効化（`nitro.experimental.wasm: true`）
- **Vue バージョン**: Vue 3.5.19を強制使用（package.jsonでオーバーライド設定）
- **FontAwesome**: ビルド時にトランスパイル必須（`build.transpile`で指定済み）

## トラブルシューティング

### ビルドエラー時の確認事項
1. 新規ページを追加した場合、nuxt.config.tsの`routeRules`に追加されているか確認
2. 新規Piniaストアを追加した場合、`defineStore()`と`acceptHMRUpdate()`を使用しているか確認
3. 型エラーが発生した場合、`types/`ディレクトリに適切な型定義ファイルが存在するか確認

### 開発サーバーが起動しない場合
- `node_modules`を削除して`npm install`を再実行
- `.nuxt`ディレクトリを削除して`npm run dev`を再実行