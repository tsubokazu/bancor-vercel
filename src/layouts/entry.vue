<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { useBancorHeadTag } from '~/stores/headTag/bancor';
  import { HeadTag } from '~/types/headTag';
  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
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
          href: '/favicon.ico',
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
    >
      <OrganismsMiniHeader
        v-show="!isLoading"
        class="w-full"
      ></OrganismsMiniHeader>
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
      <OrganismsMiniFooter
        v-show="!isLoading"
        class="w-full"
      ></OrganismsMiniFooter>
    </Transition>
  </div>
</template>
