<script setup lang="ts">
  import {
    TopTopicNotificationList,
    TopPressReleaseList,
    TopServiceNewsList,
  } from '~/types';

  // ニュースルームの記事をPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { notificationList }: TopTopicNotificationList = newsStore;
  const { pressReleaseList }: TopPressReleaseList = newsStore;
  const { serviceNewsList }: TopServiceNewsList = newsStore;

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

  // 表示する記事の数
  const displayCount = ref(4);
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[360px] w-full">
      <AtomsBasicHeader
        imgUrl="/newsRoomHeader.png"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-full flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">ニュースルーム</div>
        <AtomsFuturaItalicText
          text="News Room"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- 各カテゴリごとの記事リスト -->
      <div
        id="test"
        class="mt-16 mb-14 flex w-full flex-col items-center"
        v-for="categoryObject in categoryList"
      >
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="mb-14 w-full pc:max-w-[1100px]"
          :title="categoryObject.label"
          :subTitle="categoryObject.category"
          size="text-[40px]"
        ></MoleculesDoubleSquareTagMenu>

        <!-- リスト -->
        <div
          class="flex w-full flex-col items-center space-y-4 overflow-hidden pc:max-w-[1100px]"
        >
          <!-- リスト中の１つのコンテンツ -->
          <MoleculesNewsListMenu
            v-for="item in categoryObject.list.slice(0, displayCount)"
            :title="item.subject"
            :categoryName="item.label"
            :linkUrl="categoryObject.linkUrl + '/' + item.topicsId"
            :date="item.updateDate"
          ></MoleculesNewsListMenu>
        </div>

        <!-- 一覧をみるボタン -->
        <div class="flex w-full pc:max-w-[1100px]">
          <div class="mt-12">
            <AtomsButtonOvalArrow
              bgColor="bg-bancor-black100"
              textColor="text-white"
              size="text-base"
              buttonHeight="h-[48px]"
              buttonWidth="w-[220px]"
              arrow-color="text-white"
              arrow-position="right-12"
              :linkUrl="categoryObject.linkUrl"
            >
              一覧をみる
            </AtomsButtonOvalArrow>
          </div>
        </div>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
