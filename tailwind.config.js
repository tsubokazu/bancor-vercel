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
    './formkit.config.{js,ts}',
  ],
  theme: {
    screens: {
      tb: '768px',
      pc: '1280px',
    },
    extend: {
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms',
        6000: '6000ms',
        7000: '7000ms',
        8000: '8000ms',
        9000: '9000ms',
        10000: '10000ms',
      },
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
        futuraBold: ['futura bold'],
        futuraMedium: ['futura medium'],
        gothamBoldItalic: ['gotham bold italic'],
      },
      colors: {
        'bancor-light-blue100': '#F2F7FF',
        'bancor-light-blue200': '#F7FAFF',
        'bancor-pink100': '#FFEBEB',
        'bancor-red100': '#E64C19',
        'bancor-red200': '#FD7346',
        'bancor-red300': '#FFC1C1',
        'bancor-red400': '#FFB198',
        'bancor-red500': '#FFF7F7',
        'bancor-red600': '#FFB198',
        'bancor-red700': '#B02B16',
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
        'bancor-gray1100': '#F7F7F7',
        'bancor-gray1200': '#F0F2F4',
        'bancor-gray1300': '#555555',
        'bancor-gray1400': '#E8E8E8',
        'bancor-gray1500': '#C4C4C4',
        'bancor-navy100': '#2C3345',
        'bancor-navy200': '#161F2E',
        'bancor-navy300': '#1B2434',
        'bancor-navy400': '#15171d',
        'bancor-navy500': '#293953',
        'bancor-orange100': '#FFB426',
        'bancor-orange200': '#FF9B26',
        'bancor-orange300': '#FF7444',
        'bancor-blue100': '#3663FD',
        'bancor-blue200': '#0B50AE',
        'bancor-blue300': '#0575E6',
        'bancor-blue400': '#021b79',
        'bancor-black100': '#020202',
        'bancor-black200': '#2E2E2E',
        'bancor-black300': '#070c12',
        'bancor-black400': '#464646',
        'bancor-white100': '#FFFFFF',
        'bancor-green100': '#345d2b',
        'bancor-green200': '#45723b',
        'bancor-green300': '#5a8c4e',
        'bancor-green400': '#caebbe',
        'bancor-yellow100': '#a37f03',
      },
      backgroundImage: {
        'gradient-to-tr':
          'linear-gradient(to top right, rgba(2, 6, 27, 0.8) 0%, rgba(2, 6, 27, 0.1) 50%, rgba(2, 6, 27, 0) 100%)',
        'text-gradient-bancor-blue':
          'linear-gradient(110deg, #1488cc, #2b32b2)',
      },
      animation: {
        'slide-infinite': 'slide 30s linear infinite',
        'slide-out-up': 'slide-out-up 2.5s ease-in-out both',
        'slide-out-down': 'slide-out-down 2.5s ease-in-out both',
        'slide-in-right': 'slide-in-right 2.5s ease-in-out both',
        'slide-in-right-rv': 'slide-in-right-rv 2.5s ease-in-out both',
        'slide-in-right-quick': 'slide-in-right 0.3s ease-in-out both',
        'slide-in-right-quick-rv': 'slide-in-right-rv 0.3s ease-in-out both',
        'slide-in-char-up': 'slide-in-char-up 2.5s ease-in-out both',
        'slide-in-char-down': 'slide-in-char-down 2.5s ease-in-out both',
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
        'hover-arrow-move-x-rv': 'hover-arrow-move-x-rv 0.5s ease-in-out  both',
        'rotate-center':
          'rotate-center 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)  infinite both',
        'arrow-move-x': 'arrow-move-x 0.5s ease-in-out  both',
        'arrow-move-x-rv': 'arrow-move-x-rv 0.5s ease-in-out  both',
        'dissolve-appear': 'dissolve-appear 0.5s ease-in-out  both',
        'dissolve-disappear': 'dissolve-disappear 0.5s ease-in-out  both',
        'rouded-and-scale': 'rouded-and-scale 0.3s ease-out  both',
        'rouded-and-scale-rv': 'rouded-and-scale-rv 0.3s ease-out  both',
        'move-right': 'move-right 0.3s ease-out both',
        'move-right-rv': 'move-right-rv 0.3s ease-out both',
        'move-up': 'move-up 0.3s ease-out both',
        'move-up-rv': 'move-up-rv 0.3s ease-out both',
        'move-right-rotate45': 'move-right-rotate45 0.3s ease-out both',
        'move-right-rotate45-rv': 'move-right-rotate45-rv 0.3s ease-out both',
        'move-up-rotate45': 'move-up-rotate45 0.3s ease-out both',
        'move-up-rotate45-rv': 'move-up-rotate45-rv 0.3s ease-out both',
        'hover-opacity': 'hover-opacity 0.3s ease-out both',
        'hover-opacity-rv': 'hover-opacity-rv 0.3s ease-out both',
        'move-underline': 'move-underline 0.3s ease-out both',
        'move-underline-rv': 'move-underline-rv 0.3s ease-out both',
        'eyecatch-slide-in': 'eyecatch-slide-in 3s ease-in-out both',
        'eyecatch-slide-out': 'eyecatch-slide-out 3s ease-in-out both',
        'eyecatch-slide-in-rv': 'eyecatch-slide-in-rv 3s ease-in-out both',
        'eyecatch-slide-out-rv': 'eyecatch-slide-out-rv 3s ease-in-out both',
        'title-slide-in': 'title-slide-in 3s ease-in-out both',
        'title-slide-out': 'title-slide-out 3s ease-in-out both',
        'title-slide-in-rv': 'title-slide-in-rv 3s ease-in-out both',
        'title-slide-out-rv': 'title-slide-out-rv 3s ease-in-out both',
        'journal-progress': 'journal-progress 8s linear  infinite  both',
        'contact-plane': 'contact-plane 0.5s ease-out both',
        'contact-plane-rv': 'contact-plane-rv 0.5s ease-out both',
        'contact-title': 'contact-title 0.5s ease-out both',
        'contact-title-rv': 'contact-title-rv 0.5s ease-out both',
        'contact-frame': 'contact-frame 0.5s ease-out both',
        'contact-frame-rv': 'contact-frame-rv 0.5s ease-out both',
        'scale-up-image': 'scale-up-image 0.5s ease-out both',
        'scale-up-image-rv': 'scale-up-image-rv 0.5s ease-out both',
        'scale-in-site-menu': 'scale-in-site-menu 0.5s ease-out both',
        'scale-in-site-menu-rv': 'scale-in-site-menu-rv 0.5s ease-out both',
        'slide-up-background': 'slideUpBackground 3s ease-out both',
        'opaicity-0-to-1': 'opacity0To1 4s ease-out both',
        'scale-500-to-100': 'scale500To100 3s ease-in-out both',
        'after5s-vanish': 'after5sVanish 3s ease-in-out both',
      },
      keyframes: {
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-out-up': {
          '0%': {
            transform: 'translateY(0)',
          },
          'to': {
            transform: 'translateY(-100%)',
          },
        },
        'slide-out-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          'to': {
            transform: 'translateY(100%)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '1%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right-rv': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
          '99%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          'to': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
        },
        'slide-in-char-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '20%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-in-char-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '20%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'hover-arrow-move-x': {
          '0%': {
            transform: 'translateX(0px)',
          },
          'to': {
            transform: 'translateX(5px)',
          },
        },
        'hover-arrow-move-x-rv': {
          '0%': {
            transform: 'translateX(5px)',
          },
          'to': {
            transform: 'translateX(0px)',
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
            opacity: '0',
            transform: 'scaleX(0)',
          },
          '1%': {
            opacity: '1',
            transform: 'scaleX(0)',
          },
          'to': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
        'line-scale-down-center': {
          '0%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
          '99%': {
            opacity: '1',
            transform: 'scaleX(0)',
          },
          'to': {
            opacity: '0',
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
        'rotate-center': {
          '0%': {
            transform: 'rotate(0)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'arrow-move-x': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
          '50%': {
            opacity: 1,
          },
          'to': {
            opacity: '0',
            transform: 'translateX(5px)',
          },
        },
        'arrow-move-x-rv': {
          '0%': {
            opacity: '0',
            transform: 'translateX(5px)',
          },
          '50%': {
            opacity: 1,
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        'dissolve-appear': {
          '0%': {
            opacity: 0,
            transform: 'scaleX(0)',
          },
          '25%': {
            opacity: 0,
          },
          'to': {
            opacity: 1,
            transform: 'scaleX(1)',
          },
        },
        'dissolve-disappear': {
          '0%': {
            opacity: 1,
            transform: 'scaleX(1)',
          },
          '25%': {
            opacity: 0,
          },
          'to': {
            opacity: 0,
            transform: 'scaleX(0)',
          },
        },
        'rouded-and-scale': {
          '0%': {
            'border-radius': '0px',
            'transform': 'scale(1)',
          },
          'to': {
            'border-radius': '16px',
            'transform': 'scale(0.9)',
          },
        },
        'rouded-and-scale-rv': {
          '0%': {
            'border-radius': '16px',
            'transform': 'scale(0.9)',
          },
          'to': {
            'border-radius': '0px',
            'transform': 'scale(1)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(0px)',
          },
          'to': {
            transform: 'translateX(5px)',
          },
        },
        'move-right-rv': {
          '0%': {
            transform: 'translateX(5px)',
          },
          'to': {
            transform: 'translateX(0px)',
          },
        },
        'move-up': {
          '0%': {
            transform: 'translateY(0px)',
          },
          'to': {
            transform: 'translateY(-5px)',
          },
        },
        'move-up-rv': {
          '0%': {
            transform: 'translateY(-5px)',
          },
          'to': {
            transform: 'translateY(0px)',
          },
        },
        'move-right-rotate45': {
          '0%': {
            transform: 'translateX(0px) rotate(-45deg)',
          },
          'to': {
            transform: 'translateX(5px) rotate(-45deg)',
          },
        },
        'move-right-rotate45-rv': {
          '0%': {
            transform: 'translateX(5px) rotate(-45deg)',
          },
          'to': {
            transform: 'translateX(0px) rotate(-45deg)',
          },
        },
        'move-up-rotate45': {
          '0%': {
            transform: 'translateY(0px) rotate(-45deg)',
          },
          'to': {
            transform: 'translateY(-5px) rotate(-45deg)',
          },
        },
        'move-up-rotate45-rv': {
          '0%': {
            transform: 'translateY(-5px) rotate(-45deg)',
          },
          'to': {
            transform: 'translateY(0px) rotate(-45deg)',
          },
        },
        'hover-opacity': {
          '0%': {
            opacity: 1,
          },
          'to': {
            opacity: 0.7,
          },
        },
        'hover-opacity-rv': {
          '0%': {
            opacity: 0.7,
          },
          'to': {
            opacity: 1,
          },
        },
        'move-underline': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          'to': {
            transform: 'translateX(0px)',
          },
        },
        'move-underline-rv': {
          '0%': {
            transform: 'translateX(0px)',
          },
          'to': {
            transform: 'translateX(-100%)',
          },
        },
        'eyecatch-slide-in': {
          '0%': {
            'opacity': '1',
            'transform': 'translateX(100%) scale(0.8)',
            'border-radius': '10%',
          },
          '30%': {
            'opacity': '1',
            'transform': 'translateX(100%) scale(0.8)',
            'border-radius': '10%',
          },
          '60%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(0.8)',
            'border-radius': '0',
          },
          '90%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
        },
        'eyecatch-slide-out': {
          '0%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
          '30%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(0.8)',
            'border-radius': '10%',
          },
          '60%': {
            'opacity': '1',
            'transform': 'translateX(-100%) scale(0.8)',
            'border-radius': '10%',
          },
          '90%': {
            'opacity': '1',
            'transform': 'translateX(-100%) scale(0.8)',
            'border-radius': '10%',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(-100%) scale(0.8)',
            'border-radius': '10%',
          },
        },
        'eyecatch-slide-in-rv': {
          '0%': {
            'opacity': '1',
            'transform': 'translateX(-100%) scale(0.8)',
            'border-radius': '10%',
          },
          '30%': {
            'opacity': '1',
            'transform': 'translateX(-100%) scale(0.8)',
            'border-radius': '10%',
          },
          '60%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(0.8)',
            'border-radius': '0',
          },
          '90%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
        },
        'eyecatch-slide-out-rv': {
          '0%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(1)',
            'border-radius': '0',
          },
          '30%': {
            'opacity': '1',
            'transform': 'translateX(0) scale(0.8)',
            'border-radius': '10%',
          },
          '60%': {
            'opacity': '1',
            'transform': 'translateX(100%) scale(0.8)',
            'border-radius': '10%',
          },
          '90%': {
            'opacity': '1',
            'transform': 'translateX(100%) scale(0.8)',
            'border-radius': '10%',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(100%) scale(0.8)',
            'border-radius': '10%',
          },
        },
        'title-slide-in': {
          '0%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
          '30%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'title-slide-out': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '30%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
        },
        'title-slide-in-rv': {
          '0%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          '30%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'title-slide-out-rv': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '30%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
        },
        'journal-progress': {
          '0%': {
            opacity: '1',
            transform: 'translateX(-100%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'contact-plane': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          'to': {
            transform: 'translate(250px, -250px)',
          },
        },
        'contact-plane-rv': {
          '0%': {
            transform: 'translate(250px, -250px)',
          },
          'to': {
            transform: 'translate(0, 0)',
          },
        },
        'contact-title': {
          '0%': {
            transform: 'translateY(0)',
          },
          'to': {
            transform: 'translateY(-20px)',
          },
        },
        'contact-title-rv': {
          '0%': {
            transform: 'translateY(-20px)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        'contact-frame': {
          '0%': {
            opacity: '1',
            transform: 'scaleX(0)',
          },
          'to': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
        'contact-frame-rv': {
          '0%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
          'to': {
            opacity: '1',
            transform: 'scaleX(0)',
          },
        },
        'scale-up-image': {
          '0%': {
            transform: 'scale(1)',
          },
          'to': {
            transform: 'scale(1.1)',
          },
        },
        'scale-up-image-rv': {
          '0%': {
            transform: 'scale(1.1)',
          },
          'to': {
            transform: 'scale(1)',
          },
        },
        'scale-in-site-menu': {
          '0%': {
            'pointer-events': 'none',
            'transform-origin': 'center',
            'opacity': '0',
            'transform': 'scale(0.5)',
          },
          'to': {
            'pointer-events': 'auto',
            'opacity': '1',
            'transform': 'scale(1)',
          },
        },
        'scale-in-site-menu-rv': {
          '0%': {
            'pointer-events': 'auto',
            'opacity': '1',
            'transform': 'scale(1)',
          },
          'to': {
            'pointer-events': 'none',
            'transform-origin': 'center',
            'opacity': '0',
            'transform': 'scale(0.5)',
          },
        },
        'slideUpBackground': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '16.7%': {
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'opacity0To1': {
          '0%': {
            opacity: '0',
          },
          '25%': {
            opacity: '1',
          },
          '75%': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
          },
        },
        'scale500To100': {
          '0%': {
            transform: 'scale(4)',
            opacity: '0',
            transformOrigin: 'center',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
            transformOrigin: 'center',
          },
          'to': {
            transform: 'scale(1)',
            opacity: '0',
            transformOrigin: 'center',
          },
        },
        'after5sVanish': {
          '0%': {
            opacity: '1',
          },
          '83.4%': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@formkit/themes/tailwindcss'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-xywh': {
          clipPath: 'xywh(0 0 100% 100% round 0 200px / 0 200px)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
