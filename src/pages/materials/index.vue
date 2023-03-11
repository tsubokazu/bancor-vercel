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

  // 資料一覧をPiniaから取得
  const materialsStore = useMaterialsStore();
  if (materialsStore.serviceOverviewList.length == 0) {
    await materialsStore.fetchMaterials();
  }
  const { header }: { header: MaterialsHeader } = materialsStore;
  const { serviceOverviewList }: MaterialsServiceOverviewList = materialsStore;
  const { usefulMaterialList }: MaterialsUsefulMaterialList = materialsStore;
  const { bancor }: { bancor: MaterialsBancor } = materialsStore;

  // カテゴリ毎にオブジェクトを作成し、配列に格納
  const categoryList = [
    {
      category: 'Service Overview',
      label: 'サービス概要資料',
      list: serviceOverviewList,
      linkUrl: '/news/service-overview',
    },
    {
      category: 'Useful Materials',
      label: 'お役立ち資料集',
      list: usefulMaterialList,
      linkUrl: '/news/useful-materials',
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
        class="absolute -top-32 flex w-full flex-col space-y-3 pc:max-w-[1100px]"
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
          class="mb-14 w-full pc:max-w-[1100px]"
          :title="categoryObject.label"
          :subTitle="categoryObject.category"
          size="text-[32px]"
        ></MoleculesDoubleSquareTagMenu>

        <!-- リスト -->
        <div
          class="flex w-full items-center space-x-10 overflow-hidden pc:max-w-[1100px]"
        >
          <!-- リストカード -->
          <div
            class="flex w-[340px] flex-col space-y-6"
            v-for="item in categoryObject.list.slice(0, displayCount)"
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
              <div class="text-[18px] font-bold text-bancor-black100">
                {{ item.title }}
              </div>
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
            size="text-[32px]"
            color="text-white"
            class="mb-8"
          ></AtomsBasicTitle>
          <!-- アウトライン -->
          <AtomsBasicOutline
            :text="bancor.outline"
            size="text-[18px]"
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
        <div class="relative h-full w-full pc:max-w-[1100px]">
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
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
