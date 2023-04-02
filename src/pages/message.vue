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
    <div class="h-[240px] w-full pc:h-[360px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1000px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- メインメッセージ -->
      <div
        class="flex w-[95%] flex-col items-center justify-between space-y-10 tb:flex-row tb:space-y-0 pc:max-w-[1000px]"
      >
        <AtomsBasicTitle :text="message.mainMessage"></AtomsBasicTitle>
        <AtomsBasicImage
          :imgUrl="message.imgUrl"
          imgHeight="h-[200px] w-[320px] tb:w-[480px] tb:h-[250px] pc:w-[640px] pc:h-[324px]"
        ></AtomsBasicImage>
      </div>

      <!-- メッセージ本文 -->
      <div class="flex w-[95%] pc:max-w-[1000px]">
        <div class="post prose" v-html="message.message"></div>
      </div>
    </div>
  </div>
</template>
