import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: ['@/plugins/fontawesome.ts'],
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ['stores', 'stores/pages', 'types', 'types/pages'],
  },
  runtimeConfig: {
    public: {
      kurocoApiUrl: process.env.KUROCO_API_URL, // KurocoAPIのURL
      kurocoHeader: process.env.KUROCO_HEADER, // ヘッダー
      kurocoFooter: process.env.KUROCO_FOOTER, // フッター
      kurocoTopEndpoint: process.env.KUROCO_TOP_ENDPOINT, // ニュースルーム
      kurocoJournal: process.env.KUROCO_JOURNAL, // TOPページ（旧）
      kurocoNews: process.env.KUROCO_NEWS, // Bancor
      kurocoTopFirstview: process.env.KUROCO_TOP_FIRSTVIEW, // TOPページ（ファーストビュー）
      kurocoTopNews: process.env.KUROCO_TOP_NEWS, // TOPページ（ニュースルーム）
      kurocoTopWelfare: process.env.KUROCO_TOP_WELFARE, // TOPページ（介護・福祉）
      kurocoTopService: process.env.KUROCO_TOP_SERVICE, // TOPページ（事業内容）
      kurocoTopJournal: process.env.KUROCO_TOP_JOURNAL, // TOPページ（Bancor
      kurocoTopVision: process.env.KUROCO_TOP_VISION, // TOPページ（ビジョン）
      kurocoTopRecruit: process.env.KUROCO_TOP_RECRUIT, // TOPページ（採用）
      kurocoEditor: process.env.KUROCO_EDITOR, // 編集者メンバー
      kurocoPagesService: process.env.KUROCO_PAGES_SERVEICE, // 会社案内ページ
      kurocoPagesCompanyInfo: process.env.KUROCO_PAGES_COMPANY_INFO, // 事業内容ページ
      kurocoPagesMoreAbourBancor: process.env.KUROCO_PAGES_MORE_ABOUT_BANCOR, // Bancor取組内容
    },
  },
});
