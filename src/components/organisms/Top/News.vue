<script setup lang="ts">
  import { NewsObject } from '~/types/News';

  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const newsList: Array<NewsObject> = newsStore.newsList.sort(
    (a: NewsObject, b: NewsObject) => {
      return (
        new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime()
      );
    }
  );
  const newsListLatest: Array<NewsObject> = newsList.slice(0, 6);
  const convertCategoryJP = (category: string) => {
    switch (category) {
      case 'Service News':
        return 'サービスニュース';
      case 'Press release':
        return 'プレスリリース';
      case 'Notification':
        return 'お知らせ';
      default:
        return '最新情報';
    }
  };
  const newsCategoryColor = (category: string) => {
    switch (category) {
      case 'Service News':
        return 'bg-[#ef4444]';
      case 'Press release':
        return 'bg-[#7c3aed]';
      case 'Notification':
        return 'bg-[#16â4a]';
      default:
        return 'bg-[#2563eb]';
    }
  };
</script>

<template>
  <!-- ニュース -->
  <div class="flex w-full justify-center">
    <div class="flex w-11/12 flex-col pc:max-w-[1200px]">
      <!-- ニュースコンテンツタイトルともっとみる -->
      <div class="flex justify-between">
        <div class="text-[30px] font-bold">News</div>
        <NuxtLink
          to="/news"
          class="group flex items-center gap-3 text-[#94a3b8] transition-colors duration-300 hover:text-black"
        >
          <div class="text-[16px] font-bold">もっとみる</div>
          <font-awesome-icon
            class="text-[16px] transition-transform duration-700 group-hover:translate-x-1"
            :icon="['fas', 'right-long']"
          />
        </NuxtLink>
      </div>
      <!-- ニュースリスト -->
      <div
        class="mt-6 h-[492px] w-full rounded-lg bg-white pl-8 pt-2 shadow-lg"
      >
        <NuxtLink
          v-for="(data, index) in newsListLatest"
          :to="`/news/${data.topicsId}`"
          class="group mb-5 flex flex-col gap-1"
        >
          <!-- カテゴリと日付 -->
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center rounded-full px-2 text-[14px] font-bold text-white"
              :class="newsCategoryColor(data.category)"
            >
              {{ convertCategoryJP(data.category) }}
            </div>
            <div class="text-[15px] text-[#334155]">{{ data.updateDate }}</div>
          </div>
          <!-- 記事タイトル -->
          <div
            class="text-[18px] font-bold transition-opacity duration-200 group-hover:opacity-60"
          >
            {{ data.subject }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
