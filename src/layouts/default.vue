<script setup lang="ts">
  import { useLoadingStore } from '../stores/loading';
  import { useHead } from '@vueuse/head';
  import { useHeadTag } from '~/stores/headTag';
  import { HeadTag } from '~/types/headTag';
  const loadingStore = useLoadingStore();
  const isLoading = ref(false);
  if (loadingStore.loadingFlag) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
  }

  onMounted(() => {
    if (loadingStore.loadingFlag) {
      setTimeout(() => {
        isLoading.value = false;
        loadingStore.setLoadingFlag(false);
      }, 1000);
    }
  });
  // headタグの情報をPiniaから取得
  const headTagStore = useHeadTag();
  console.log(
    `Object.keys(headTagStore.headTag): ${Object.keys(headTagStore.headTag)}`
  );

  if (Object.keys(headTagStore.headTag).length == 0) {
    await headTagStore.fetchHeadTag();
  }
  const { headTag } = headTagStore;

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
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  });
</script>

<template>
  <div class="relative w-full">
    <!-- ヘッダー -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsHeader
        v-show="!isLoading"
        class="pointer-events-auto absolute top-3 z-50 w-full"
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
