<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import FuturaMediumText from '../components/atoms/FuturaMediumText.vue';

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const {
    header,
    issues,
    dxDev,
    problems,
    team,
    nuvo3mins,
    features,
    structure,
    maintenances,
    valueUpdate,
  }: SystemDevObject = pagesSystemDevStore;
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
    <div class="relative mb-40 flex w-full flex-col items-center">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-48 flex w-full flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- ヘッダーメニュー -->
      <div
        class="absolute -top-16 -z-10 flex h-16 w-full items-center justify-center bg-gray-900 opacity-50"
      ></div>
      <div
        class="absolute -top-16 z-10 flex h-16 w-full items-center justify-center space-x-40"
      >
        <AtomsLinkMoveArrowTitle
          v-for="anchor in header.anchors"
          :text="anchor.title"
          :linkUrl="anchor.linkUrl"
          color="text-white"
          size="text-base"
          :isAngle="false"
          :isRight="false"
          :isRotate="true"
          :isOpacity="true"
        ></AtomsLinkMoveArrowTitle>
      </div>

      <!-- こんな課題を解決します -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-full pc:max-w-[1100px]"
          :title="issues.title"
          :subTitle="issues.subTitle"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div class="mb-12 flex w-full justify-between pc:max-w-[1100px]">
        <div
          v-for="(issue, index) in issues.issues"
          class="relative flex h-[240px] w-[332px] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-6"
        >
          <!-- Case N -->
          <FuturaMediumText
            class="absolute top-4 left-6"
            :text="issue.subTitle"
            size="text-lg"
          ></FuturaMediumText>
          <FuturaMediumText
            class="absolute top-7 left-4"
            :text="issue.outline"
            size="text-[47px]"
          ></FuturaMediumText>

          <!-- カード内イメージとタイトル -->
          <AtomsBasicIcon
            size="h-[121px]"
            :iconUrl="issue.imgUrl"
          ></AtomsBasicIcon>
          <AtomsBasicTitle
            class="text-center"
            spaceY="space-y-2"
            :text="issue.title"
            size="text-[18px]"
          ></AtomsBasicTitle>

          <!-- カードの吹き出し -->
          <div
            v-if="index == 1"
            class="absolute -bottom-[19px] h-9 w-9 rotate-45 border-r border-b border-bancor-gray600 bg-white"
          ></div>
        </div>
      </div>

      <!-- アウトライン -->
      <div class="relative flex w-full items-center justify-center">
        <AtomsBasicOutline
          :text="issues.outline"
          color="text-white"
          size="text-[32px]"
        ></AtomsBasicOutline>
        <!-- 黒背景 -->
        <div
          class="absolute -top-[132px] -z-20 h-[246px] w-full bg-bancor-navy200"
        ></div>
        <!-- 灰色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 h-4 w-[800px] bg-gray-700"
        ></div>
      </div>
    </div>
  </div>
</template>
