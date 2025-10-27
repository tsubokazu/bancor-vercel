# Repository Guidelines

## プロジェクト構成とモジュール配置
- Nuxt 3 は `nuxt.config.ts` で `src/` をルートに設定しているため、全てのアプリコードは `src` 直下に集約する。`src/pages/` がルーティング、`src/layouts/` が共通フレーム、`src/components/{atoms,molecules,organisms}` が Atomic Design 準拠の UI レイヤーだ。  
- `src/stores/` は Pinia オートインポート対象で、API ごとに分割されたストア（例: `src/stores/News.ts`）を保持する。新規ストアも PascalCase で命名し、`stores/pages` 下にページ固有の状態を置く。  
- アセットは `src/assets/css/main.css`（Tailwind エントリ）、`src/assets/lottie/`（Lottie JSON）、`public/`（ビルド時にそのまま配信）に振り分ける。FontAwesome とフェード用ディレクティブは `src/plugins/fontawesome.ts` と `src/plugins/fadeInDirective.ts` で登録済みなので、追加プラグインはここに準拠する。

## ビルド・テスト・開発コマンド
- `npm install` で依存を解決後、`npm run dev` がホットリロード付き開発サーバー。  
- `npm run build` は SSR/静的共通の本番ビルド、`npm run generate` は routeRules に従った完全静的書き出し。  
- `npm run preview` で Nitro サーバーを起動し、本番挙動を localhost で確認する。  
- 品質チェックには `npm run lint`（ESLint + TypeScript + vue + tailwind プラグイン）と `npm run format`（Prettier + prettier-plugin-tailwindcss）がある。

## コーディングスタイルと命名
- TypeScript + `<script setup>` を基本とし、2 スペースインデントとシングルクォートを eslint に従って守る。  
- コンポーネント名・ファイル名は PascalCase、Composable やユーティリティは `useXxx` / `xxx.util.ts` とする。Tailwind クラスは論理グループ（レイアウト→タイポ→カラー）順に並べ、Prettier による自動整列を壊さない。  
- 画像・SVG は `~/public` 参照を優先し、`nuxt/img` が必要な場合のみ `@nuxt/image-edge` を用いる。

## テスト指針
- 公式スクリプト `npm test` は未定義のため、現状は機能単位の手動検証を必須とし、PR 説明に再現手順と確認ブラウザを明記する。  
- UI またはストアを改修する場合は、少なくとも `npm run dev` と `npm run preview` の双方で SSR/静的ルートを確認し、検証結果を「Test Plan」セクションに箇条書きで残す。  
- 自動テストを追加する場合は `@nuxt/test-utils` + `vitest` の導入を推奨し、測定対象ファイルに対し 70% 以上のステートメントカバレッジを目安とする。

## コミットと Pull Request
- Git 履歴は `type: 短い説明`（例: `feat: welfare/beautyページのサブディレクトリ移行とAPI設定の追加`）で揃っている。`feat|fix|chore|refactor|docs` などの prefix を維持し、1 コミット 1 トピックを徹底する。  
- PR では概要、関連 issue、UI 変更なら Before/After スクリーンショット、データ取得変更なら対象 API エンドポイント（例: `runtimeConfig.public.kurocoTopNews`）を記載し、`npm run lint` 結果を貼る。レビューコメントで追加修正を行った際は fixup ではなく意味のある追記コミットを残す。

## セキュリティと設定ヒント
- 外部 API は `runtimeConfig.public` にハードコードされているため、新しい Kuroco エンドポイントやキーを追加する際はコメントを含めて `nuxt.config.ts` を更新し、参照側では `useRuntimeConfig()` を通じてアクセスする。  
- 機微情報は `.env`（例: `GOOGLE_MAP_API_KEY`）に置き、`.nvmrc` と `.npmrc` のバージョン指定に従って 18.x 系 Node + npm を使用する。ローカルでの環境変数漏えいを避けるため、`git status --short` で `.env*` がトラッキングされていないことを常に確認する。
