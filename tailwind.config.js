/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/middleware/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'bancor-light-blue100': '#F2F7FF',
        'bancor-light-blue200': '#F7FAFF',
        'bancor-pink100': '#FFEBEB',
        'bancor-red100': '#E64C19',
        'bancor-red200': '#FD7346',
        'bancor-gray100': '#7C8186',
        'bancor-gray200': '#626262',
        'bancor-gray300': '#505050',
        'bancor-gray400': '#F2F2F2',
        'bancor-gray500': '#BABABA',
        'bancor-gray600': '#E5E5E5',
        'bancor-gray700': '#F0F2F5',
        'bancor-gray800': '#EAEAEA',
        'bancor-gray900': '#272727',
        'bancor-navy100': '#2C3345',
        'bancor-navy100': '#161F2E',
        'bancor-navy100': '#1B2434',
        'bancor-orange100': '#FFB426',
        'bancor-orange100': '#FF9B26',
        'bancor-blue100': '#3663FD',
        'bancor-blue200': '#0B50AE',
        'bancor-blue300': '#0575E6',
        'bancor-blue400': '#021b79',
        'bancor-black100': '#020202',
        'bancor-black200': '#2E2E2E',
      },
      animation: {
        'scale-up-ver-top': 'scale-up-ver-top 0.3s ease-in-out both',
        'scale-down-ver-top': 'scale-down-ver-top 0.3s ease-in-out both',
        'line-scale-up-center': 'line-scale-up-center 0.3s ease-in-out both',
      },
      keyframes: {
        'scale-up-ver-top': {
          '0%': {
            'transform': 'scaleY(1)',
            'transform-origin': '100% 0%',
          },
          'to': {
            'transform': 'scaleY(0)',
            'transform-origin': '100% 0%',
          },
        },
        'scale-down-ver-top': {
          '0%': {
            'transform': 'scaleY(0)',
            'transform-origin': '100% 0%',
          },
          'to': {
            'transform': 'scaleY(1)',
            'transform-origin': '100% 0%',
          },
        },
        'line-scale-up-center': {
          '0%': {
            transform: 'scaleX(0)',
          },
          'to': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
