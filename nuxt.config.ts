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
      kurocoHeaderMenuEndpoint: process.env.KUROCO_HEADER_MENU_ENDPOINT,
      kurocoTopEndpoint: process.env.KUROCO_TOP_ENDPOINT,
    },
  },
});
