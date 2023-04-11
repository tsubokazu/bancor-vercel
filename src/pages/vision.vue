<script setup lang="ts">
  import { VisionObject } from '~/types/pages/vision';
  import { usePagesVisionStore } from '~/stores/pages/vision';

  // ビジョンページ情報をPiniaから取得
  const pagesVisionStore = usePagesVisionStore();
  if (Object.keys(pagesVisionStore.header).length == 0) {
    await pagesVisionStore.fetchPagesVision();
  }
  const { header, purpose, mission, value }: VisionObject = pagesVisionStore;
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

      <!-- パーパス -->
      <div
        class="flex w-[95%] flex-col space-y-6 tb:space-y-12 pc:max-w-[1000px]"
      >
        <!-- タイトルとイメージ -->
        <MoleculesVisionTitleImage
          :title="purpose.title"
          :smallTitle="purpose.smallTitle"
          :imgUrl="purpose.imgUrl"
        ></MoleculesVisionTitleImage>
        <!-- サブタイトルとアウトライン -->
        <MoleculesVisionSubTitleOutline
          v-for="(sub, index) in purpose.subTitleList"
          :subTitle="sub.subTitle"
          :outline="sub.outline"
          :underLine="index + 1 < purpose.subTitleList.length"
          :key="sub.subTitle"
        ></MoleculesVisionSubTitleOutline>
      </div>

      <!-- ミッション -->
      <div class="flex w-[95%] flex-col space-y-12 pc:max-w-[1000px]">
        <!-- タイトルとイメージ -->
        <MoleculesVisionTitleImage
          :title="mission.title"
          :smallTitle="mission.smallTitle"
          :imgUrl="mission.imgUrl"
        ></MoleculesVisionTitleImage>
        <!-- サブタイトルとアウトライン -->
        <MoleculesVisionSubTitleOutline
          v-for="(sub, index) in mission.subTitleList"
          :subTitle="sub.subTitle"
          :outline="sub.outline"
          :underLine="index + 1 < mission.subTitleList.length"
          :key="sub.subTitle"
        ></MoleculesVisionSubTitleOutline>
      </div>

      <!-- バリュー -->
      <div class="flex w-[95%] flex-col space-y-12 pc:max-w-[1000px]">
        <!-- タイトルとイメージ -->
        <MoleculesVisionTitleImage
          :title="value.title"
          :smallTitle="value.smallTitle"
          :imgUrl="value.imgUrl"
        ></MoleculesVisionTitleImage>
        <!-- サブタイトルとアウトライン -->
        <MoleculesVisionSubTitleOutline
          v-for="(sub, index) in value.subTitleList"
          :subTitle="sub.subTitle"
          :outline="sub.outline"
          :underLine="value.subTitleList.length >= 2"
          :key="sub.subTitle"
        ></MoleculesVisionSubTitleOutline>
      </div>
    </div>
  </div>
</template>
