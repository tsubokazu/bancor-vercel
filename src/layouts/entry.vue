<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { useBancorHeadTag } from '~/stores/headTag/bancor';
  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });

  // headタグの情報をPiniaから取得
  const bancorHeadTagStore = useBancorHeadTag();
  await bancorHeadTagStore.ensureHeadTags();
  const route = useRoute();
  const currentHeadTag = computed(() =>
    bancorHeadTagStore.getHeadTagByPath(route.path)
  );

  useHead(() => ({
    title: currentHeadTag.value.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: currentHeadTag.value.description,
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  }));
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
