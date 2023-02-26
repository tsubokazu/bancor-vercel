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
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[360px] w-full">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-full flex-col space-y-3 pc:max-w-[1000px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsItalicText>
      </div>

      <!-- メインメッセージ -->
      <div class="flex w-full items-center justify-between pc:max-w-[1000px]">
        <AtomsBasicTitle :text="message.mainMessage"></AtomsBasicTitle>
        <AtomsBasicImage
          :imgUrl="message.imgUrl"
          imgHeight="h-[364px]
        w-[640px]"
        ></AtomsBasicImage>
      </div>

      <!-- メッセージ本文 -->
      <div class="flex w-full pc:max-w-[1000px]">
        <div class="post prose" v-html="message.message"></div>
      </div>
    </div>
  </div>
</template>
