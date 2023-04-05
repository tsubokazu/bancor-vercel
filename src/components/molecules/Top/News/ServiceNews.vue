<script setup lang="ts">
  import { TopServiceNewsList } from '~/types';
  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { serviceNewsList }: TopServiceNewsList = newsStore;
  // サービスニュースの4記事分をserviceNewsListから取得
  const serviceNewsListLatest4 = computed(() => serviceNewsList.slice(0, 4));
</script>

<template>
  <div
    class="h-full w-full border-gray-300 px-4 tb:border-l pc:ml-8 pc:h-[486px] pc:w-[412px] pc:px-8"
  >
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ serviceNewsListLatest4[0].category }}</div>
      <MoleculesViewMoreButton
        linkUrl="/news/service-news"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex h-full w-full flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in serviceNewsListLatest4"
        :key="card.subject"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
