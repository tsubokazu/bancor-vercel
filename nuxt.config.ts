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
    dirs: ['stores', 'types'],
  },
  runtimeConfig: {
    public: {
      kurocoApiUrl: process.env.KUROCO_API_URL,
      kurocoHeader: process.env.KUROCO_HEADER,
      kurocoFooter: process.env.KUROCO_FOOTER,
      kurocoTopEndpoint: process.env.KUROCO_TOP_ENDPOINT,
      kurocoJournal: process.env.KUROCO_JOURNAL,
      kurocoNews: process.env.KUROCO_NEWS,
      kurocoTopFirstview: process.env.KUROCO_TOP_FIRSTVIEW,
      kurocoTopNews: process.env.KUROCO_TOP_NEWS,
      kurocoTopWelfare: process.env.KUROCO_TOP_WELFARE,
      kurocoTopService: process.env.KUROCO_TOP_SERVICE,
      kurocoTopJournal: process.env.KUROCO_TOP_JOURNAL,
      kurocoTopVision: process.env.KUROCO_TOP_VISION,
      kurocoTopRecruit: process.env.KUROCO_TOP_RECRUIT,
    },
  },
});
