// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
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
    },
  },
});
