<script setup lang="ts">
  import { TopPressReleaseList } from '~/types';
  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { pressReleaseList }: TopPressReleaseList = newsStore;
</script>

<template>
  <div
    class="h-full w-fit border-gray-300 px-4 pc:ml-8 pc:h-[486px] pc:w-[412px] pc:border-l pc:px-8"
  >
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ pressReleaseList[0].category }}</div>
      <MoleculesViewMoreButton
        linkUrl="/press-release"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex h-fit w-fit flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in pressReleaseList"
        :key="card.subject"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
