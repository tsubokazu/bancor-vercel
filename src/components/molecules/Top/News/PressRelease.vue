<script setup lang="ts">
  import { TopPressReleaseList } from '~/types';
  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { pressReleaseList }: TopPressReleaseList = newsStore;
  // プレスリリースの4記事分をpressReleaseListから取得
  const pressReleaseListLatest4 = computed(() => pressReleaseList.slice(0, 4));
</script>

<template>
  <div
    class="h-full w-full border-gray-300 px-4 pc:ml-8 pc:h-[486px] pc:w-[412px] pc:border-l pc:px-8"
  >
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ pressReleaseListLatest4[0].category }}</div>
      <MoleculesViewMoreButton
        linkUrl="/news/press-release"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in pressReleaseListLatest4"
        :key="card.subject"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
