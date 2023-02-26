<script setup lang="ts">
  import { ServiceObject } from '~/types/pages/service';
  import { usePagesServiceStore } from '~/stores/pages/service';

  // 事業内容ページ情報をPiniaから取得
  const pagesServiceStore = usePagesServiceStore();
  if (Object.keys(pagesServiceStore.header).length == 0) {
    await pagesServiceStore.fetchPagesService();
  }
  const { header, purpose, service, enhancement }: ServiceObject =
    pagesServiceStore;
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
        class="absolute -top-32 flex w-full flex-col space-y-3 pc:max-w-[1200px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsItalicText>
      </div>

      <!-- パーパス -->
      <div class="flex w-full justify-between pc:max-w-[1200px]">
        <!-- メニュー -->
        <MoleculesBasicMenu
          :title="purpose.title"
          :subTitle="purpose.subTitle"
          :linkUrl="purpose.linkUrl"
          :outline="purpose.outline"
        ></MoleculesBasicMenu>
        <!-- イメージ -->
        <div class="h-[325px]">
          <img :src="purpose.imgUrl" class="h-full" />
        </div>
      </div>

      <!-- 事業内容 -->
      <div class="flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <div class="mb-14 flex w-full flex-col space-y-2 pc:max-w-[1200px]">
          <MoleculesDoubleSquareTag
            frontSquareColor="bg-bancor-black100"
            backSquareColor="bg-bancor-blue100"
            :text="service.subTitle"
            textColor="text-bancor-blue100"
          ></MoleculesDoubleSquareTag>
          <AtomsBasicTitle :text="service.title"></AtomsBasicTitle>
        </div>
        <!-- システム開発事業 -->
        <div
          class="relative mb-24 flex h-[356px] w-full items-center justify-center"
        >
          <div class="w-full pc:max-w-[1200px]">
            <!-- メニュー -->
            <MoleculesBasicMenu
              class="w-[475px]"
              :title="service.eachService[0].title"
              :subTitle="service.eachService[0].subTitle"
              :linkUrl="service.eachService[0].linkUrl"
              :outline="service.eachService[0].outline"
            ></MoleculesBasicMenu>
          </div>
          <!-- イメージ -->
          <div class="absolute right-0 h-full">
            <img :src="service.eachService[0].imgUrl" class="h-full" />
          </div>
        </div>
        <!-- ウェブマーケティング支援事業 -->
        <div class="relative flex h-[356px] w-full items-center justify-center">
          <!-- イメージ -->
          <div class="absolute left-0 h-full">
            <img :src="service.eachService[1].imgUrl" class="h-full" />
          </div>
          <div class="flex w-full flex-row-reverse pc:max-w-[1200px]">
            <!-- メニュー -->
            <MoleculesBasicMenu
              class="w-[475px]"
              :title="service.eachService[1].title"
              :subTitle="service.eachService[1].subTitle"
              :linkUrl="service.eachService[1].linkUrl"
              :outline="service.eachService[1].outline"
            ></MoleculesBasicMenu>
          </div>
        </div>
      </div>

      <!-- 強化事業 -->
      <div class="flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <div class="mb-14 flex w-full flex-col space-y-2 pc:max-w-[1200px]">
          <MoleculesDoubleSquareTag
            frontSquareColor="bg-bancor-black100"
            backSquareColor="bg-bancor-blue100"
            :text="enhancement.subTitle"
            textColor="text-bancor-blue100"
          ></MoleculesDoubleSquareTag>
          <AtomsBasicTitle :text="enhancement.title"></AtomsBasicTitle>
        </div>
        <!-- 事業カード -->
        <div class="flex w-full space-x-24 pc:max-w-[1200px]">
          <MoleculesServiceCard
            v-for="obj in enhancement.eachService"
            :imgUrl="obj.imgUrl"
            :title="obj.title"
            :outline="obj.outline"
          ></MoleculesServiceCard>
        </div>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
