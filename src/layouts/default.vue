<script setup lang="ts">
  import { useLoadingStore } from '../stores/loading';
  import { useHead } from '@vueuse/head';
  import { useBancorHeadTag } from '~/stores/headTag/bancor';
  import type { HeadTag } from '~/types/headTag';
  const loadingStore = useLoadingStore();
  const isLoading = ref(false);
  if (loadingStore.loadingFlag) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
  }

  const isShowHeader = ref(true);

  const checkScroll = () => {
    isShowHeader.value = window.scrollY <= 1080;
  };

  onMounted(() => {
    if (loadingStore.loadingFlag) {
      setTimeout(() => {
        isLoading.value = false;
        loadingStore.setLoadingFlag(false);
      }, 1000);
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
    <!-- ヘッダー -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="transition-opacity duration-[2000ms]"
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
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <div class="h-full w-full" v-show="!isLoading">
        <slot />
      </div>
    </Transition>

    <!-- フッター -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsFooter class="w-full" v-show="!isLoading"></OrganismsFooter>
    </Transition>
  </div>
</template>
