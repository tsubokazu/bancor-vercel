<script setup lang="ts">
  import { useTopSplashStore } from '../stores/top-splash';
  import { useHead } from '@vueuse/head';
  import { useBancorHeadTag } from '~/stores/headTag/bancor';
  import { HeadTag } from '~/types/headTag';
  const topSplashStore = useTopSplashStore();
  const isLoading = ref(false);
  if (topSplashStore.topSplashFlag) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
  }

  const isShowHeader = ref(true);

  const checkScroll = () => {
    isShowHeader.value = window.scrollY > 1080 ? false : true;
  };

  onMounted(() => {
    if (topSplashStore.topSplashFlag) {
      setTimeout(() => {
        isLoading.value = false;
        topSplashStore.setTopSplashFlag(false);
      }, 6000);
    }

    // スクロールイベントリスナーを登録
    window.addEventListener('scroll', checkScroll);

    // 初期値を設定
    checkScroll();
  });

  onUnmounted(() => {
    // コンポーネントがアンマウントされたときにイベントリスナーを解除
    window.removeEventListener('scroll', checkScroll);
  });

  // headタグの情報をPiniaから取得
  const bancorHeadTagStore = useBancorHeadTag();
  console.log(
    `Object.keys(bancorHeadTagStore.headTags): ${Object.keys(
      bancorHeadTagStore.headTags
    )}`
  );

  if (Object.keys(bancorHeadTagStore.headTags).length == 0) {
    await bancorHeadTagStore.fetchHeadTag();
  }
  const { headTags } = bancorHeadTagStore as any | HeadTag[];
  let headTag: HeadTag = headTags[0];
  const route = useRoute();
  for (let i = 0; i < headTags.length; i++) {
    if (headTags[i].linkUrl == route.path) {
      headTag = headTags[i];
    }
  }

  useHead({
    title: headTag.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: headTag.description,
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  });

  watch(route, (newRoute, oldRoute) => {
    for (let i = 0; i < headTags.length; i++) {
      if (headTags[i].linkUrl == route.path) {
        headTag = headTags[i];
      }
    }

    useHead({
      title: headTag.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: headTag.description,
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
      ],
    });
  });

  onMounted(() => {
    // ローディング状態が変わった時に実行されるウォッチャー
    watch(
      () => isLoading.value,
      (newVal) => {
        if (typeof document !== 'undefined') {
          if (newVal) {
            document.body.classList.add('overflow-hidden');
          } else {
            document.body.classList.remove('overflow-hidden');
          }
        }
      },
      { immediate: true }
    );
  });
</script>

<template>
  <div class="relative w-full">
    <!-- スプラッシュ画面（ローディング画面） -->
    <OrganismsLoadingLottie
      class="pointer-events-none"
      v-show="isLoading"
    ></OrganismsLoadingLottie>

    <!-- トップビューの背景 -->
    <AtomsTopFirstviewBackground></AtomsTopFirstviewBackground>

    <!-- ヘッダー -->
    <Transition
      enter-active-class="transition-opacity duration-[1000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="transition-opacity duration-[1000ms]"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <OrganismsHeader
        v-show="!isLoading"
        class="pointer-events-auto fixed top-3 z-50 w-full"
      ></OrganismsHeader>
    </Transition>

    <!-- ページ -->
    <Transition
      enter-active-class="transition-opacity duration-[1000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <div v-show="!isLoading" class="h-full w-full">
        <slot />
      </div>
    </Transition>

    <!-- フッター -->
    <Transition
      enter-active-class="transition-opacity duration-[1000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsFooter v-show="!isLoading" class="w-full"></OrganismsFooter>
    </Transition>

    <!-- Cookieの同意 -->
    <Transition
      enter-active-class="transition-opacity duration-[1000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="transition-opacity duration-[1000ms]"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <OrganismsCookieConsent
        v-show="!isLoading"
        class="fixed bottom-8 left-1/2 -translate-x-1/2"
      ></OrganismsCookieConsent>
    </Transition>
  </div>
</template>
