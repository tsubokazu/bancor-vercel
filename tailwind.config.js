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
      fontSize: {
        '4.5xl': ['40px', '40px'],
      },
      fontFamily: {
        main: [
          'YuGothic',
          'Yu Gothic',
          'ヒラギノ角ゴ ProN W3',
          'Hiragino Kaku Gothic ProN',
          'メイリオ',
          'Meiryo',
          'Verdana',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif',
        ],
        futuraMediumItalic: ['futura medium italic'],
      },
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
        'bancor-gray1000': '#FAFAFA',
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
        'line-scale-down-center':
          'line-scale-down-center 0.3s ease-in-out both',
        'progress-count1':
          'progress-count1 infinite 25s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'progress-count2':
          'progress-count2 infinite 25s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'progress-count3':
          'progress-count3 infinite 25s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'progress-count4':
          'progress-count4 infinite 25s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'progress-count5':
          'progress-count5 infinite 25s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'progress-bar': 'progress-bar 5s linear  infinite  both',
        'notification1': 'notification1 25s ease-in-out  infinite  both',
        'notification2': 'notification2 25s ease-in-out  infinite  both',
        'notification3': 'notification3 25s ease-in-out  infinite  both',
        'notification4': 'notification4 25s ease-in-out  infinite  both',
        'notification5': 'notification5 25s ease-in-out  infinite  both',
        'hover-arrow-move-x': 'hover-arrow-move-x 0.5s ease-in-out  both',
        'hover-arrow-move-x-return':
          'hover-arrow-move-x-return 0.5s ease-in-out  both',
      },
      keyframes: {
        'hover-arrow-move-x': {
          '0%': {
            transform: 'translateX(0px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(10px)',
            opacity: '1',
          },
        },
        'hover-arrow-move-x-return': {
          '0%': {
            transform: 'translateX(10px)',
            opacity: '1',
          },
          'to': {
            transform: 'translateX(0px)',
            opacity: '0',
          },
        },
        'scale-up-ver-top': {
          '0%': {
            'transform': 'scaleY(1)',
            'transform-origin': '100% 0%',
            'opacity': '1',
          },
          'to': {
            'transform': 'scaleY(0)',
            'transform-origin': '100% 0%',
            'opacity': '0',
          },
        },
        'scale-down-ver-top': {
          '0%': {
            'transform': 'scaleY(0)',
            'transform-origin': '100% 0%',
            'opacity': '0',
          },
          'to': {
            'transform': 'scaleY(1)',
            'transform-origin': '100% 0%',
            'opacity': '1',
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
        'line-scale-down-center': {
          '0%': {
            transform: 'scaleX(1)',
          },
          'to': {
            transform: 'scaleX(0)',
          },
        },
        'progress-count1': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '1%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '19%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '20%': {
            filter: 'blur(12)',
            opacity: '0',
          },
          'to': {
            filter: 'blur(12)',
            opacity: '0',
          },
        },
        'progress-count2': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '20%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '21%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '39%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '40%': {
            filter: 'blur(12)',
            opacity: '0',
          },
          'to': {
            filter: 'blur(12)',
            opacity: '0',
          },
        },
        'progress-count3': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '40%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '41%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '59%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '60%': {
            filter: 'blur(12)',
            opacity: '0',
          },
          'to': {
            filter: 'blur(12)',
            opacity: '0',
          },
        },
        'progress-count4': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '60%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '61%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '79%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '80%': {
            filter: 'blur(12)',
            opacity: '0',
          },
          'to': {
            filter: 'blur(12)',
            opacity: '0',
          },
        },
        'progress-count5': {
          '0%': {
            filter: 'blur(12)',
            opacity: '0',
          },
          '80%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '81%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '99%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '100%': {
            filter: 'blur(12)',
            opacity: '0',
          },
        },
        'progress-bar': {
          '0%': {
            transform: 'translateX(-160px)',
          },
          'to': {
            transform: 'translateX(0px)',
          },
        },
        'notification1': {
          '0%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '1%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '19%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '20%': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
        },
        'notification2': {
          '0%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '20%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '21%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '39%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
        },
        'notification3': {
          '0%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '40%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '41%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '59%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '60%': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
        },
        'notification4': {
          '0%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '61%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '79%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '80%': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
        },
        'notification5': {
          '0%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateY(48px)',
            opacity: '0',
          },
          '81%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '99%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-48px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
