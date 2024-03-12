<script setup lang="ts">
  // Footerから提供された値を受け取る
  const isRounded = inject('isRounded');
  const bgColor = inject('bgColor');

  const mediaList = [
    {
      icon: '/footer-notion.png',
      title: 'BCC',
      outline:
        'Bancor株式会社のプロダクトマネジメントに関する情報を発信しています。',
      linkUrl: 'https://www.notion.so/ja-jp',
    },
    {
      icon: '/footer-wantedly.png',
      title: 'Bancor Members',
      outline: 'Bancor株式会社のDX部門ではたらく仲間たちをご紹介します。',
      linkUrl: 'https://www.wantedly.com/',
    },
    {
      icon: '/footer-instagram.png',
      title: 'TOP Diary',
      outline: 'Bancor株式会社代表取締役社長の個人メディアです。',
      linkUrl: 'https://www.instagram.com/',
    },
    {
      icon: '/footer-note.png',
      title: 'Bancor Note',
      outline:
        'Bancor株式会社の重要なお知らせやプレスリリース情報を発信しています。',
      linkUrl: 'https://note.com/',
    },
  ];
</script>

<template>
  <div
    :class="[
      'flex h-[524px] w-full justify-center pt-6 pc:pt-14',
      isRounded ? 'rounded-[25px] tb:rounded-[50px] pc:rounded-[100px]' : '',
      bgColor,
    ]"
  >
    <div
      class="grid h-[168px] grid-cols-1 items-start justify-items-center gap-y-6 gap-x-0 tb:grid-cols-2 tb:gap-x-5"
    >
      <NuxtLink
        v-for="media in mediaList"
        :to="media.linkUrl"
        class="flex w-[320px] items-center space-x-3 tb:space-x-6 pc:w-[640px]"
      >
        <!-- アイコン -->
        <div class="flex h-[54px] w-[54px] flex-none pc:h-[72px] pc:w-[72px]">
          <img :src="media.icon" alt="" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-col">
          <!-- タイトル -->
          <div class="text-[16px] font-bold text-[#020617] tb:text-[20px]">
            {{ media.title }}
          </div>
          <!-- アウトライン -->
          <div class="text-[12px] text-[#64748b] tb:text-[14px]">
            {{ media.outline }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
