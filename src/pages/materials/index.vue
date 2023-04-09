<script setup lang="ts">
  import {
    MaterialsHeader,
    MaterialsServiceOverviewList,
    MaterialsUsefulMaterialList,
    MaterialsBancor,
  } from '~/types/pages/materials';
  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const materialsStore = useMaterialsStore();
  if (Object.keys(materialsStore.header).length == 0) {
    await materialsStore.fetchMaterials();
  }
  const { header }: { header: MaterialsHeader } = materialsStore;
  const { bancor }: { bancor: MaterialsBancor } = materialsStore;

  // サービス概要を取得
  if (materialsStore.serviceOverviewList.length == 0) {
    await materialsStore.fetchServiceOverviewList();
  }
  const { serviceOverviewList }: MaterialsServiceOverviewList = materialsStore;

  // お役立ち資料を取得
  if (materialsStore.usefulMaterialList.length == 0) {
    await materialsStore.fetchUsefulMaterialList();
  }
  const { usefulMaterialList }: MaterialsUsefulMaterialList = materialsStore;

  // カテゴリ毎にオブジェクトを作成し、配列に格納
  const categoryList = [
    {
      category: 'Service Overview',
      label: 'サービス概要資料',
      list: serviceOverviewList,
      linkUrl: '/materials',
    },
    {
      category: 'Useful Materials',
      label: 'お役立ち資料集',
      list: usefulMaterialList,
      linkUrl: '/materials',
    },
  ];

  // 表示する資料の数
  const displayCount = ref(3);
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
    <div class="relative flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- 各カテゴリごとの記事リスト -->
      <div
        class="mt-16 mb-14 flex w-full flex-col items-center"
        v-for="categoryObject in categoryList"
      >
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="mb-14 w-[95%] pc:max-w-[1100px]"
          :title="categoryObject.label"
          :subTitle="categoryObject.category"
          size="text-[32px]"
        ></MoleculesDoubleSquareTagMenu>

        <!-- リスト -->
        <div
          class="grid w-[95%] grid-cols-1 items-center justify-center gap-x-10 gap-y-12 overflow-hidden tb:grid-cols-2 pc:max-w-[1100px] pc:grid-cols-3"
        >
          <!-- リストカード -->
          <div
            class="flex w-[340px] flex-col space-y-6"
            v-for="item in categoryObject.list"
          >
            <!-- イメージ -->
            <AtomsBasicImage
              :imgUrl="item.imgUrl"
              img-height="h-[172px]"
              img-width="w-full"
              radius="rounded-[5px]"
              class="shadow-lg"
            ></AtomsBasicImage>
            <!-- 日付とタイトル -->
            <div class="flex flex-col">
              <!-- 日付 -->
              <div class="text-[13px] text-bancor-black100">
                {{ item.updateAt }}
              </div>
              <!-- タイトル -->
              <div class="mb-4 text-[18px] font-bold text-bancor-black100">
                {{ item.title }}
              </div>
              <AtomsBasicOutline
                :text="item.outline"
                :is-bold="false"
                size="text-[14px]"
              ></AtomsBasicOutline>
            </div>
            <!-- ダウンロードボタン -->
            <div class="flex w-full">
              <AtomsButtonOvalArrow
                bgColor="bg-bancor-black100"
                textColor="text-white"
                size="text-base"
                buttonHeight="h-[44px]"
                buttonWidth="w-[212px]"
                arrow-color="text-white"
                arrow-position="right-8"
                :linkUrl="`${categoryObject.linkUrl}/${item.fileId}`"
              >
                ダウンロード
              </AtomsButtonOvalArrow>
            </div>
          </div>
        </div>
      </div>

      <!-- Bancorを初めて知る方へ -->
      <MoleculesMaterialsBancorInfo
        :bancor="bancor"
      ></MoleculesMaterialsBancorInfo>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
