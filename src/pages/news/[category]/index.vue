<script setup lang="ts">
  import {
    TopTopicNotificationList,
    TopPressReleaseList,
    TopServiceNewsList,
  } from '~/types';

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

  // 記事数
  const newsCount = computed(() => {
    return newsList.value.length;
  });

  // 表示する記事の数
  const displayCount = ref(9);

  // もっと表示するボタンを押したときの処理
  const onClickMore = () => {
    displayCount.value += 9;
  };
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[248px] w-full bg-bancor-gray700"></div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base font-bold text-bancor-blue100">Category</div>
        <AtomsFuturaItalicText
          text="カテゴリ別"
          color="text-bancor-black100"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- カテゴリ別ニュース -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="mb-14 w-[95%] pc:max-w-[1100px]"
          :title="categoryLabel"
          subTitle="Notification"
          size="text-[40px]"
        ></MoleculesDoubleSquareTagMenu>

        <!-- リスト -->
        <div
          class="flex w-[95%] flex-col items-center space-y-4 overflow-hidden pc:max-w-[1100px]"
        >
          <!-- リスト中の１つのコンテンツ -->
          <MoleculesNewsListMenu
            v-for="item in newsList.slice(0, displayCount)"
            :title="item.subject"
            :linkUrl="`/news/${category}/${item.topicsId}`"
            :categoryName="item.label"
            :date="item.updateDate"
          ></MoleculesNewsListMenu>
        </div>

        <!-- もっと表示 -->
        <div class="mt-12" v-if="newsCount > displayCount">
          <AtomsButtonOvalArrow
            @click="onClickMore"
            bgColor="bg-bancor-black100"
            textColor="text-white"
            size="text-base"
            buttonHeight="h-[48px]"
            buttonWidth="w-[220px]"
            arrow-color="text-white"
            arrow-position="right-12"
          >
            もっと表示
          </AtomsButtonOvalArrow>
        </div>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
