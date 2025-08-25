# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要
Nuxt 3 + TypeScript + TailwindCSSを使用したBancor HPのWebサイト。CMSとしてKurocoを使用し、Vercel経由でGitHubからの自動デプロイを実装。

## 共通コマンド
```bash
# 開発サーバー起動（ポート3000）
npm run dev

# プロダクション用ビルド（Vercel向け静的サイト生成）
npm run generate

# プロダクション用プレビュー
npm run preview

# TypeScript・Vue・CSSのリント
npm run lint

# コード自動フォーマット
npm run format
```

## アーキテクチャ構成

### ディレクトリ構造（`src/`内）
- `components/` - Atomic Design構造（atoms/molecules/organisms）
- `layouts/` - レイアウトテンプレート（default, top, company, entry）
- `pages/` - ページルーティング（Nuxt file-based routing）
- `stores/` - Pinia状態管理（ページ別、機能別に分割）
- `types/` - TypeScript型定義（pages別に細分化）
- `assets/` - 静的ファイル（CSS、フォント、Lottieアニメーション）
- `plugins/` - プラグイン設定（FontAwesome、アナリティクス等）
- `middleware/` - ルートミドルウェア

### 外部システム連携
- **Kuroco CMS**: コンテンツ管理（API経由でデータ取得）
- **FormKit**: フォーム管理・バリデーション
- **FontAwesome**: アイコンライブラリ
- **Lottie**: アニメーション
- **Google Maps**: 地図表示
- **Analytics**: アクセス解析

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
- Piniaストアは機能別に分割（`stores/pages/`でページ別管理）
- 各ストアはdefineStore()とacceptHMRUpdate()を使用

### API連携
- KurocoのAPIエンドポイントはnuxt.config.tsのruntimeConfigで定義
- APIレスポンスの型定義は`types/kuroco.ts`で管理

### CSS・アニメーション
- TailwindのカスタムCSSクラス・アニメーションを多用
- 新規アニメーションはtailwind.config.jsのkeyframesに追加
- Bancor独自カラーパレット使用（`bancor-*`プレフィックス）

### デプロイメント
- GitHubへのコミットでVercelに自動デプロイ
- 静的サイト生成（SSG）でルート設定はnuxt.config.tsのrouteRulesで管理