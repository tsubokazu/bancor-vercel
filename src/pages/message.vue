<script setup lang="ts">
  import { MessageObject } from '~/types/pages/message';
  import { usePagesMessageStore } from '~/stores/pages/message';

  useHead({
    script: [
      {
        async: true,
        src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
      },
    ],
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesMessageStore = usePagesMessageStore();
  if (Object.keys(pagesMessageStore.header).length == 0) {
    await pagesMessageStore.fetchPagesMessage();
  }
  const { header, message }: MessageObject = pagesMessageStore;
</script>

<template>
  <div class="relative flex w-full flex-col items-center bg-[#f1f5f9]">
    <!-- ヘッダー -->
    <div
      class="h-[240px] w-[95%] pc:h-[320px] pc:w-full pc:max-w-[1460px]"
    ></div>
    <!-- 背景アニメーション -->
    <div
      class="h-[240px] w-[95%] pc:h-[360px] pc:w-full pc:max-w-[1460px]"
    ></div>
    <!-- ボディ -->
    <div class="flex w-[95%] pc:w-full pc:max-w-[1460px]">
      <!-- サイド -->
      <OrganismsCompanyInfoSideMenu />
      <!-- メイン -->
      <div
        class="relative mb-40 flex w-full flex-col items-center space-y-24"
      ></div>
    </div>
  </div>
</template>
