<script setup lang="ts">
  import { ComputedRef } from 'vue';
  import {
    MaterialObject,
    MaterialsServiceOverviewList,
    MaterialsUsefulMaterialList,
    MaterialsBancor,
  } from '~/types/pages/materials';

  definePageMeta({
    layout: 'entry',
  });

  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });

  // URLからカテゴリを取得
  const router = useRoute();
  const fileId = router.params.id;

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const materialsStore = useMaterialsStore();
  if (Object.keys(materialsStore.header).length == 0) {
    await materialsStore.fetchMaterials();
  }

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

  // サービス概要リストにfileIdがあるか確認
  const selectedCategoryList = computed(() => {
    return categoryList.filter((item) => {
      return item.list.some((item) => item.fileId == fileId);
    })[0];
  });
  const selectedCategory = computed(() => {
    return {
      category: selectedCategoryList.value.category,
      label: selectedCategoryList.value.label,
      list: selectedCategoryList.value.list.filter((item) => {
        return item.fileId == fileId;
      }),
      linkUrl: selectedCategoryList.value.linkUrl,
    };
  });

  // 表示する資料の数
  const displayCount = ref(3);

  // その他の関連資料
  const otherMaterials: ComputedRef<{
    category: string;
    label: string;
    list: MaterialObject[];
    linkUrl: string;
  }> = computed(() => {
    return {
      category: selectedCategory.value.category,
      label: selectedCategory.value.label,
      list: categoryList
        .filter((item) => {
          return item.category == selectedCategory.value.category;
        })[0]
        .list.filter((item) => {
          return item.fileId != fileId;
        })
        .slice(0, displayCount.value),
      linkUrl: selectedCategory.value.linkUrl,
    };
  });
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div
      class="mb-[72px] flex w-full flex-col items-center justify-center rounded-[10px] bg-bancor-gray700 pt-[72px] pb-[128px]"
    >
      <!-- 送信後メッセージ -->
      <div class="mb-[96px] flex flex-col items-center justify-center">
        <!-- イメージ -->
        <AtomsBasicImage
          class="mb-[60px]"
          imgUrl="/mail-sent.png"
          imgHeight="h-[179px]"
          imgWidth="w-[265px]"
        ></AtomsBasicImage>
        <!-- メッセージ -->
        <AtomsBasicTitle
          text="ご送信ありがとうございました"
          class="mb-8"
          size="text-[28px]"
        ></AtomsBasicTitle>
        <!-- サブメッセージ -->
        <AtomsBasicOutline
          class="mb-12 items-center"
          :text="`ダウンロードからBancorサービス資料をダンロードしていただけます。\r\n
          また他に気になる資料があれば、下記より一括でのダウンロードが可能です。`"
          size="text-[15px]"
        ></AtomsBasicOutline>
        <!-- ダウンロード資料のタイトル -->
        <AtomsBasicTitle
          class="mb-3"
          :text="selectedCategory.list[0].title"
          size="text-[14px]"
        ></AtomsBasicTitle>
        <!-- ダウンロードボタン -->
        <AtomsButtonOvalDownload
          :fileUrl="selectedCategory.list[0].fileUrl"
          :fileName="`${selectedCategory.list[0].title}.pdf`"
          bgColor="bg-bancor-black100"
          textColor="text-white"
          size="text-base"
          buttonHeight="h-[48px]"
          buttonWidth="w-[220px]"
          arrow-color="text-white"
          arrow-position="right-8"
        >
          ダウンロード
        </AtomsButtonOvalDownload>
      </div>

      <!-- その他の資料のダウンロード -->
      <div
        class="px:max-w-[1100px] flex w-[95%] flex-col items-center justify-center bg-white pt-[48px]"
      >
        <!-- タイトル -->
        <AtomsBasicTitle
          class="mb-6"
          text="その他の資料のダウンロードはこちらから"
          size="text-[28px]"
        ></AtomsBasicTitle>
        <!-- 真ん中が青い仕切り線 -->
        <div class="relative mb-[56px] h-[2px] w-[604px]">
          <div
            class="absolute top-0 left-0 h-full w-full bg-bancor-gray800"
          ></div>
          <div
            class="absolute top-0 left-1/2 z-10 h-full w-[56px] -translate-x-1/2 bg-bancor-blue100"
          ></div>
        </div>
        <!-- 資料一覧 -->
        <div class="mb-[80px] flex flex-col justify-center space-y-4">
          <!-- 資料ダウンロードメニュー -->
          <div
            v-for="material in otherMaterials.list"
            class="flex h-[90%] items-center justify-center"
            :key="material.title"
          >
            <!-- サムネイル -->
            <AtomsBasicImage
              :imgUrl="material.imgUrl"
              imgHeight="h-full"
              imgWidth="w-[169px]"
              radius="rounded-[5px]"
              class="mr-[24px]"
            ></AtomsBasicImage>
            <!-- タイトルとアウトライン -->
            <div
              class="mr-[66px] flex flex-col justify-center space-y-4 pc:max-w-[540px]"
            >
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="material.title"
                size="text-[20px]"
              ></AtomsBasicTitle>
              <!-- アウトライン -->
              <AtomsBasicOutline
                :text="material.outline"
                size="text-[15px]"
                :isBold="false"
              ></AtomsBasicOutline>
            </div>
            <!-- ダウンロードボタン -->
            <AtomsButtonIconDownload
              :fileUrl="material.fileUrl"
              :fileName="`${material.title}.pdf`"
            ></AtomsButtonIconDownload>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
