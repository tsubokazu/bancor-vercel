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
    '@formkit/nuxt',
    '@nuxt/image-edge',
  ],
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    screens: {
      tb: 768,
      pc: 1280,
    },
  },
  imports: {
    dirs: ['stores', 'stores/pages', 'types', 'types/pages'],
  },
  runtimeConfig: {
    public: {
      kurocoApiUrl: 'https://bancor.g.kuroco.app', // KurocoAPIのURL
      kurocoHeader: '/rcms-api/3/header/3', // ヘッダー
      kurocoFooter: '/rcms-api/7/footer/19', // フッター
      kurocoTopEndpoint: '/rcms-api/4/top/4', // ニュースルーム
      kurocoJournal: '/rcms-api/5/journals', // TOPページ（旧）
      kurocoNews: '/rcms-api/8/news', // Bancor
      kurocoTopFirstview: '/rcms-api/6/top/12', // TOPページ（ファーストビュー）
      kurocoTopNews: '/rcms-api/6/top/13', // TOPページ（ニュースルーム）
      kurocoTopWelfare: '/rcms-api/6/top/14', // TOPページ（介護・福祉）
      kurocoTopService: '/rcms-api/6/top/15', // TOPページ（事業内容）
      kurocoTopJournal: '/rcms-api/6/top/16', // TOPページ（Bancor
      kurocoTopVision: '/rcms-api/6/top/17', // TOPページ（ビジョン）
      kurocoTopRecruit: '/rcms-api/6/top/18', // TOPページ（採用）
      kurocoEditor: '/rcms-api/9/member', // 編集者メンバー
      kurocoPagesService: '/rcms-api/10/pages?topics_group_id=14', // 事業内容ページ
      kurocoPagesCompanyInfo: '/rcms-api/10/pages?topics_group_id=13', // 会社案内ページ
      kurocoPagesMoreAbourBancor: '/rcms-api/10/pages?topics_group_id=15', // Bancor取組内容
      kurocoPagesCompanyProfile: '/rcms-api/10/pages?topics_group_id=16', // 会社概要ページ
      kurocoPagesMessage: '/rcms-api/10/pages?topics_group_id=17', // 会社概要ページ
      kurocoPagesVision: '/rcms-api/10/pages?topics_group_id=18', // 会社概要ページ
      kurocoPagesSystemDev: '/rcms-api/10/pages?topics_group_id=19', // システム開発のページ
      kurocoPagesCareWelfare: '/rcms-api/10/pages?topics_group_id=20', // 福祉向けシステム開発のページ
      kurocoPagesSolutions: '/rcms-api/10/pages?topics_group_id=21', // 介護・福祉ソリューションラインナップ
      kurocoPagesRecruit: '/rcms-api/10/pages?topics_group_id=23', // 採用情報のページ
      kurocoPagesRecruitCategory: '/rcms-api/10/pages?topics_group_id=22', // 採用情報の各募集カテゴリ
      kurocoPagesMaterials: '/rcms-api/10/pages?topics_group_id=24', // 資料一覧
      kurocoPagesMaterialsService: '/rcms-api/10/pages?topics_group_id=25', // サービス概要資料一覧
      kurocoPagesMaterialsUseful: '/rcms-api/10/pages?topics_group_id=26', // お役立ち情報資料一覧
      kurocoPagesMaterialBancor: '/rcms-api/10/pages?topics_group_id=27', // 3分でわかるBancorサービス資料
      kurocoPagesContact: '/rcms-api/10/pages?topics_group_id=28', // お問い合わせページ
      kurocoSubmitDownloadMaterialForm: '/rcms-api/11/form?id=4',
      kurocoSubmitContactForm: '/rcms-api/11/form?id=5',
      googleMapApiKey: 'AIzaSyAkiUf_mc0OqCF_xaln1IAAxNCEu96__8Q', // GoogleMapのAPIキー
    },
  },
});
