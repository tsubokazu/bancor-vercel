<script setup lang="ts">
  import type { AboutMore } from '~/types/AboutMore';

  // Bancor 取り組みについてをPiniaから取得
  const aboutMoreStore = useAboutMoreStore();
  if (Object.keys(aboutMoreStore.aboutMore).length == 0) {
    await aboutMoreStore.fetchAboutMore();
  }
  const { aboutMore }: { aboutMore: AboutMore } = aboutMoreStore;
</script>

<template>
  <div class="flex w-full justify-center bg-bancor-navy200">
    <div
      class="mt-12 flex w-[95%] flex-col items-center space-y-10 pb-20 pc:max-w-[1200px]"
    >
      <!-- メニュータイトル -->
      <div class="flex w-full flex-col space-y-2">
        <MoleculesDoubleSquareTag
          :text="aboutMore.subTitle"
          front-square-color="bg-white"
          back-square-color="bg-white"
          textColor="text-white"
        ></MoleculesDoubleSquareTag>
        <AtomsBasicTitle
          :text="aboutMore.title"
          color="text-white"
        ></AtomsBasicTitle>
      </div>
      <!-- 取り組みコンテンツのカード -->
      <div
        class="flex w-full flex-col items-center space-y-4 space-x-0 tb:flex-row tb:justify-between tb:space-x-4 tb:space-y-0 pc:justify-center pc:space-x-10"
      >
        <MoleculesContentCard
          v-for="content in aboutMore.contents"
          :imgUrl="content.imgUrl"
          :title="content.title"
          :subTitle="content.subTitle"
          :linkUrl="content.linkUrl"
          :key="content.title"
        ></MoleculesContentCard>
      </div>
    </div>
  </div>
</template>
