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

  const isFixed = ref(false);

  const checkScroll = () => {
    isFixed.value = window.scrollY <= 1080;
    console.log(`scrollY: ${window.scrollY}`);
  };

  onMounted(() => {
    if (topSplashStore.topSplashFlag) {
      setTimeout(() => {
        isLoading.value = false;
        topSplashStore.setTopSplashFlag(false);
      }, 2500);
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
</script>

<template>
  <div class="relative w-full">
    <!-- スプラッシュ画面（ローディング画面） -->
    <Transition
      leave-active-class="transition-opacity duration-[2000ms]"
      leave-to-class="opacity-0"
    >
      <OrganismsLoadingScreen
        class="pointer-events-none"
        v-show="isLoading"
      ></OrganismsLoadingScreen>
    </Transition>

    <!-- ヘッダー -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsHeader
        v-show="!isLoading"
        class="pointer-events-auto z-50 w-full"
        :class="`${isFixed ? 'fixed top-3' : 'absolute top-[1092px]'}`"
      ></OrganismsHeader>
    </Transition>

    <!-- ページ -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <div v-show="!isLoading" class="h-full w-full">
        <slot />
      </div>
    </Transition>

    <!-- フッター -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsFooter v-show="!isLoading" class="w-full"></OrganismsFooter>
    </Transition>
  </div>
</template>
