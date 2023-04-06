<script setup lang="ts">
  import {
    TopTopicNotificationList,
    TopPressReleaseList,
    TopServiceNewsList,
  } from '~/types';
  import { NewsObject } from '~/types/News';
  const props = defineProps<{ newsObject: NewsObject }>();
  const instagramShareLink = `https://www.instagram.com/`;
  const twitterShareLink = `http://twitter.com/share?url=http://bancor.co.jp/news/${props.newsObject.topicsId}`;

  // カテゴリを取得
  const category = props.newsObject.category;

  // カテゴリに応じてカテゴリ名を変更
  const categoryLabel = computed(() => {
    switch (category) {
      case 'notification':
        return 'お知らせ';
      case 'press-release':
        return 'プレスリリース';
      case 'service-news':
        return 'サービスニュース';
      default:
        return 'お知らせ';
    }
  });

  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { notificationList }: TopTopicNotificationList = newsStore;
  const { pressReleaseList }: TopPressReleaseList = newsStore;
  const { serviceNewsList }: TopServiceNewsList = newsStore;

  // カテゴリに応じて記事リストを変更
  const newsList = computed(() => {
    switch (category) {
      case 'notification':
        return notificationList;
      case 'press-release':
        return pressReleaseList;
      case 'service-news':
        return serviceNewsList;
      default:
        return notificationList;
    }
  });
  // 現在表示している記事以外の開発関連記事のみを抽出
  const otherNewsList = computed(() =>
    newsList.value.filter(
      (item: NewsObject) => item.topicsId != props.newsObject.topicsId
    )
  );
</script>

<template>
  <div class="flex h-full w-full flex-col space-y-16">
    <!-- タイトル -->
    <AtomsBasicTitle
      w-full
      :text="newsObject.subject"
      size="text-[28px] tb:text-[32px]"
    ></AtomsBasicTitle>
    <!-- 本文 -->
    <div
      class="flex w-[95%] flex-col items-center rounded-lg bg-white pt-[40px] pb-[72px] pc:w-[820px]"
    >
      <!-- アイキャッチ画像 -->
      <AtomsBasicImage
        :imgUrl="newsObject.eyeCatchUrl"
        img-width="w-[95%] pc:w-[720px]"
        img-height="h-[auto] pc:h-[380px]"
        class="mb-4 pc:mb-16"
      ></AtomsBasicImage>
      <div
        class="post prose-lg mb-16 w-[95%] pc:w-[720px]"
        v-html="newsObject.bodyHTML"
      ></div>
      <!-- SNS シェア -->
      <div class="mb-16 flex h-12 w-10/12 items-center justify-between pl-3">
        <NuxtLink :to="instagramShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/instagram-icon.png" alt="instagram" class="h-5" />
          </div>
        </NuxtLink>
        <NuxtLink :to="twitterShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/twitter-icon.png" alt="twitter" class="h-5" />
          </div>
        </NuxtLink>
        <div class="text-xs font-bold">SHARE</div>
        <div class="h-px w-9/12 bg-bancor-gray600"></div>
      </div>
      <!-- 関連記事 -->
      <div
        class="flex w-[95%] flex-col space-y-10 overflow-x-scroll tb:items-center pc:overflow-x-hidden"
      >
        <!-- タイトル -->
        <div class="w-[95%] pc:w-[720px]">
          <div class="text-[40px] font-bold">関連記事一覧</div>
        </div>
        <!-- カード -->
        <div class="flex space-x-3">
          <MoleculesNewsCard
            v-for="news in otherNewsList.slice(0, 3)"
            :card="news"
          ></MoleculesNewsCard>
        </div>
      </div>
    </div>
  </div>
</template>
