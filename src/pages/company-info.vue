<script setup lang="ts">
  import { CompanyInfoObject } from '~/types/pages/company-info';
  import { usePagesCompanyInfoStore } from '~/stores/pages/company-info';

  // 事業内容ページ情報をPiniaから取得
  const pagesCompanyInfoStore = usePagesCompanyInfoStore();
  if (Object.keys(pagesCompanyInfoStore.header).length == 0) {
    await pagesCompanyInfoStore.fetchPagesCompanyInfo();
  }
  const { header, vision, defendJapan }: CompanyInfoObject =
    pagesCompanyInfoStore;
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
        class="absolute -top-32 flex w-full flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsItalicText>
      </div>

      <!-- ミッション -->
      <div class="flex w-full justify-between pc:max-w-[1100px]">
        <!-- メニュー -->
        <MoleculesBasicMenu
          class="w-[372px]"
          :title="vision.title"
          :subTitle="vision.subTitle"
          :linkUrl="vision.linkUrl"
          :outline="vision.outline"
        ></MoleculesBasicMenu>
        <!-- イメージ -->
        <div class="h-[392px]">
          <img :src="vision.imgUrl" class="h-full" />
        </div>
      </div>
      <!-- 会社案内コンテンツ -->
      <div class="flex w-full justify-between pc:max-w-[1100px]">
        <MoleculesCompanyInfoCard
          v-for="(content, index) in vision.contents"
          :imgUrl="content.imgUrl"
          :title="content.title"
          :linkUrl="content.linkUrl"
          :line-color2="
            index == 0 ? 'bg-bancor-blue200' : 'bg-bancor-orange100'
          "
        ></MoleculesCompanyInfoCard>
      </div>

      <!-- 日本について -->
      <div class="flex w-full justify-between pc:max-w-[1100px]">
        <!-- メッセージ -->
        <div class="flex w-[470px] flex-col">
          <AtomsItalicText
            class="mb-16"
            :text="defendJapan.subTitle"
            size="text-[60px]"
          ></AtomsItalicText>
          <AtomsBasicTitle
            class="mb-8"
            :text="defendJapan.title"
            size="text-[22px]"
            spaceY="space-y-2"
          ></AtomsBasicTitle>
          <AtomsBasicOutline
            :text="defendJapan.outline"
            size="text-base"
          ></AtomsBasicOutline>
        </div>
        <!-- イメージ -->
        <AtomsBasicImage
          :img-url="defendJapan.imgUrl"
          imgHeight="h-[450px]"
          imgWidth="w-[340px]"
          radius="rounded-lg"
        ></AtomsBasicImage>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
