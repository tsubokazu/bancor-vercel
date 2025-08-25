<script setup lang="ts">
  // Top01からデータを取得
  import { useTop01Store } from '~/stores/top01';
  import type { Top01 } from '~/types/top01';
  const top01Store = useTop01Store();
  if (Object.keys(top01Store.topTitles).length == 0) {
    await top01Store.fetchTop01();
  }
  const top01Object: Top01 = top01Store;

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(1300);
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    nextTick(() => {
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-4 tb:flex-row"
  >
    <NuxtLink
      v-for="(data, index) in top01Object.adSpaces"
      :to="data.linkUrl"
      class="h-[70px] w-[320px] rounded-lg pc:h-[140px] pc:w-[640px]"
    >
      <img :src="data.imgUrl" alt="" class="h-full w-full object-cover" />
    </NuxtLink>
  </div>
</template>
