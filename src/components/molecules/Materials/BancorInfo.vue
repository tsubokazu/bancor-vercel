<script setup lang="ts">
  import { MaterialsBancor } from '~/types/pages/materials';

  const props = defineProps<{
    bancor: MaterialsBancor;
  }>();
</script>

<template>
  <div class="relative flex h-[396px] w-full items-center justify-center">
    <!-- 青色フィルタ -->
    <div
      class="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-bancor-blue300 to-bancor-blue400 opacity-90"
    ></div>
    <!-- 背景 -->
    <div class="absolute top-0 left-0 -z-10 h-full w-full">
      <AtomsBasicImage
        :imgUrl="bancor.bgImgUrl"
        img-height="h-full"
        img-width="w-full"
        radius="rounded-0"
      ></AtomsBasicImage>
    </div>
    <!-- メニュー -->
    <div
      class="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center"
    >
      <!-- メニュータイトル -->
      <AtomsBasicTitle
        :text="bancor.title"
        size="text-[24px] tb:text-[32px]"
        color="text-white"
        class="mb-8"
      ></AtomsBasicTitle>
      <!-- アウトライン -->
      <AtomsBasicOutline
        :text="bancor.outline"
        size="text-[16px] tb:text-[18px]"
        color="text-white"
        outlineWidth="w-[246px]"
        outlineHeight="h-[48px]"
        class="mb-12 items-center"
      ></AtomsBasicOutline>
      <!-- ボタン -->
      <AtomsButtonOvalArrow
        bgColor="bg-bancor-black100"
        textColor="text-white"
        size="text-base"
        buttonHeight="h-[48px]"
        buttonWidth="w-[246px]"
        arrow-color="text-white"
        arrow-position="right-6"
        :linkUrl="bancor.linkUrl"
      >
        ダウンロードはこちら
      </AtomsButtonOvalArrow>
    </div>
    <!-- ロボットイラスト -->
    <div class="relative hidden h-full w-full pc:block pc:max-w-[1100px]">
      <!-- ロボットイラスト1 -->
      <AtomsBasicImage
        :imgUrl="bancor.img01Url"
        img-height="h-[274px]"
        img-width="w-[313px]"
        radius="rounded-0"
        class="absolute top-[16px] left-0"
      ></AtomsBasicImage>
      <!-- ロボットイラスト2 -->
      <AtomsBasicImage
        :imgUrl="bancor.img02Url"
        img-height="h-[274px]"
        img-width="w-[313px]"
        radius="rounded-0"
        class="absolute bottom-[16px] right-0"
      ></AtomsBasicImage>
    </div>
  </div>
</template>
