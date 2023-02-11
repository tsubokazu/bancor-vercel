import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: ['@/plugins/fontawesome.ts'],
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      kurocoApiUrl: process.env.KUROCO_API_URL,
      kurocoHeader: process.env.KUROCO_HEADER,
      kurocoFooter: process.env.KUROCO_FOOTER,
      kurocoTopEndpoint: process.env.KUROCO_TOP_ENDPOINT,
      kurocoJournalEndpoint: process.env.KUROCO_JOURNAL_ENDPOINT,
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
