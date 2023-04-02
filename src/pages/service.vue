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
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1200px]"
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
        class="flex w-[95%] flex-col justify-between space-y-5 tb:flex-row pc:max-w-[1200px] pc:space-x-0"
      >
        <!-- メニュー -->
        <MoleculesBasicMenu
          :title="purpose.title"
          :subTitle="purpose.subTitle"
          :linkUrl="purpose.linkUrl"
          :outline="purpose.outline"
        ></MoleculesBasicMenu>
        <!-- イメージ -->
        <div class="ml-10 h-[240px] tb:ml-0 tb:h-[325px]">
          <img :src="purpose.imgUrl" class="h-full" />
        </div>
      </div>

      <!-- 事業内容 -->
      <div class="flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <div class="mb-14 flex w-[95%] flex-col space-y-2 pc:max-w-[1200px]">
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
          class="relative mb-24 flex h-[450px] w-full justify-center tb:h-[600px] pc:h-[356px] pc:items-center"
        >
          <div class="w-[95%] pc:max-w-[1200px]">
            <!-- メニュー -->
            <MoleculesBasicMenu
              class="pc:w-[475px]"
              :title="service.eachService[0].title"
              :subTitle="service.eachService[0].subTitle"
              :linkUrl="service.eachService[0].linkUrl"
              :outline="service.eachService[0].outline"
            ></MoleculesBasicMenu>
          </div>
          <!-- イメージ -->
          <div
            class="absolute -bottom-[100px] right-0 h-[260px] tb:bottom-[20px] tb:h-[300px] pc:bottom-0 pc:h-full"
          >
            <img :src="service.eachService[0].imgUrl" class="pc:h-full" />
          </div>
        </div>
        <!-- ウェブマーケティング支援事業 -->
        <div
          class="relative flex h-[580px] w-full justify-center tb:h-[700px] pc:h-[356px] pc:items-center"
        >
          <!-- イメージ -->
          <div
            class="absolute -bottom-[350px] left-0 h-full tb:-bottom-[280px] pc:bottom-0"
          >
            <img :src="service.eachService[1].imgUrl" class="pc:h-full" />
          </div>
          <div class="flex w-[95%] pc:max-w-[1200px] pc:flex-row-reverse">
            <!-- メニュー -->
            <MoleculesBasicMenu
              class="pc:w-[475px]"
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
        <div class="mb-14 flex w-[95%] flex-col space-y-2 pc:max-w-[1200px]">
          <MoleculesDoubleSquareTag
            frontSquareColor="bg-bancor-black100"
            backSquareColor="bg-bancor-blue100"
            :text="enhancement.subTitle"
            textColor="text-bancor-blue100"
          ></MoleculesDoubleSquareTag>
          <AtomsBasicTitle :text="enhancement.title"></AtomsBasicTitle>
        </div>
        <!-- 事業カード -->
        <div
          class="flex w-[95%] flex-col items-center space-y-10 pc:max-w-[1200px] pc:flex-row pc:space-x-24 pc:space-y-0"
        >
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
