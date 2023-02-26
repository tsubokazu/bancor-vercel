<script setup lang="ts">
  import { AboutMore } from '~/types/AboutMore';

  // Bancor 取り組みについてをPiniaから取得
  const aboutMoreStore = useAboutMoreStore();
  if (Object.keys(aboutMoreStore.aboutMore).length == 0) {
    await aboutMoreStore.fetchAboutMore();
  }
  const { aboutMore }: { aboutMore: AboutMore } = aboutMoreStore;

  console.log(`aboutMore.title: ${aboutMore.title}`);
  console.log(`aboutMore.subTitle: ${aboutMore.subTitle}`);
  console.log(`aboutMore.contents: ${aboutMore.contents}`);
  console.log(`contents[0].title: ${aboutMore.contents[0].title}`);
  console.log(`contents[1].title: ${aboutMore.contents[1].title}`);
  console.log(`contents[2].title: ${aboutMore.contents[2].title}`);
  console.log(`contents[0].subTitle: ${aboutMore.contents[0].subTitle}`);
  console.log(`contents[1].subTitle: ${aboutMore.contents[1].subTitle}`);
  console.log(`contents[2].subTitle: ${aboutMore.contents[2].subTitle}`);
  console.log(`contents[0].imgUrl: ${aboutMore.contents[0].imgUrl}`);
  console.log(`contents[1].imgUrl: ${aboutMore.contents[1].imgUrl}`);
  console.log(`contents[2].imgUrl: ${aboutMore.contents[2].imgUrl}`);
  console.log(`contents[0].linkUrl: ${aboutMore.contents[0].linkUrl}`);
  console.log(`contents[1].linkUrl: ${aboutMore.contents[1].linkUrl}`);
  console.log(`contents[2].linkUrl: ${aboutMore.contents[2].linkUrl}`);
</script>

<template>
  <div class="flex h-[460px] w-full justify-center bg-bancor-navy200">
    <div
      class="mt-12 flex w-full flex-col items-center space-y-10 pc:max-w-[1200px]"
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
      <div class="flex w-full items-center space-x-10">
        <MoleculesContentCard
          v-for="content in aboutMore.contents"
          :imgUrl="content.imgUrl"
          :title="content.title"
          :subTitle="content.subTitle"
          :linkUrl="content.linkUrl"
        ></MoleculesContentCard>
      </div>
    </div>
  </div>
</template>
