<script setup lang="ts">
  import {
    TopTopicNotificationList,
    TopPressReleaseList,
    TopServiceNewsList,
  } from '~/types';
  import { NewsObject } from '~/types/News';

  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });

  // URLからカテゴリを取得
  const router = useRoute();
  const category = router.params.category;

  // カテゴリに応じてタイトルを変更
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

  useHead({
    script: [
      {
        async: true,
        src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
      },
    ],
  });

  // 記事のIDを取得
  const route = useRoute();
  const topicsId = route.params.id;

  const [selectedNews]: Array<NewsObject> = newsList.value.filter(
    (item: NewsObject) => item.topicsId == topicsId
  );

  // カテゴリ毎にオブジェクトを作成し、配列に格納
  const categoryList = [
    {
      category: 'notification',
      label: 'お知らせ',
      list: notificationList,
      linkUrl: '/news/notification',
    },
    {
      category: 'press-release',
      label: 'プレスリリース',
      list: pressReleaseList,
      linkUrl: '/news/press-release',
    },
    {
      category: 'service-news',
      label: 'サービスニュース',
      list: serviceNewsList,
      linkUrl: '/news/service-news',
    },
  ];

  // ホバーしたときに文字の透明度を変更
  const hoverIndex = ref(-1);
  const mouseOverAction = (index: number) => {
    hoverIndex.value = index;
  };
  const mouseLeaveAction = (index: number) => {
    hoverIndex.value = -1;
  };
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-bancor-gray700"
  >
    <!-- ページタイトル -->
    <div class="mb-4 flex h-[196px] w-[95%] items-end pc:max-w-[1100px]">
      <MoleculesDoubleSquareTagMenu
        title="ニュースルーム"
        sub-title="News Room"
        size="text-[32px]"
      />
    </div>
    <!-- ニュースタイトル -->
    <div class="mb-4 flex w-[95%] flex-col items-end pc:max-w-[1100px]">
      <!-- カテゴリと日付 -->
      <div class="flex w-full items-center space-x-4">
        <!-- カテゴリ -->
        <div class="text-[13px] font-bold text-bancor-blue200">
          {{ categoryLabel }}
        </div>
        <!-- 区切り線 -->
        <div class="h-[13px] w-px bg-bancor-gray500"></div>
        <!-- 日付 -->
        <div class="text-[13px] text-bancor-gray300">
          {{ selectedNews.updateDate }}
        </div>
      </div>
    </div>
    <!-- 記事 -->
    <div class="flex w-[95%] flex-row space-x-10 pc:w-[1100px]">
      <MoleculesBasicNews
        class="mb-32 w-full pc:max-w-[820px]"
        :newsObject="selectedNews"
      ></MoleculesBasicNews>
      <!-- ニュース一覧 カテゴリ別 -->
      <div class="hidden w-[240px] flex-col pc:flex">
        <!-- タイトル -->
        <div class="mb-[10px] flex w-full items-center space-x-3">
          <img src="/book-icon.png" class="h-[16px] w-[16px]" />
          <div class="text-xl font-bold text-bancor-black100">ニュース一覧</div>
        </div>
        <!-- 区切り線 -->
        <div class="relative mb-4 flex h-px w-full">
          <div class="absolute h-px w-full bg-bancor-gray500"></div>
          <div class="absolute h-px w-1/2 bg-bancor-blue200"></div>
        </div>
        <!-- メニュー -->
        <div class="flex flex-col space-y-4">
          <AtomsNewsCategoryButton
            v-for="(item, index) in categoryList"
            @mouseover="mouseOverAction(index)"
            @mouseleave="mouseLeaveAction(index)"
            :hover-index="hoverIndex"
            :link-url="item.linkUrl"
            :menu-index="index"
            :text="item.label"
            :key="item.category"
          >
          </AtomsNewsCategoryButton>
        </div>
      </div>
    </div>
  </div>
</template>
