<script setup lang="ts">
  import { VisionObject } from '~/types/pages/vision';
  import { usePagesVisionStore } from '~/stores/pages/vision';

  // layoutを指定
  definePageMeta({
    layout: 'company',
  });

  // ビジョンページ情報をPiniaから取得
  const pagesVisionStore = usePagesVisionStore();
  if (Object.keys(pagesVisionStore.header).length == 0) {
    await pagesVisionStore.fetchPagesVision();
  }
  const { header, purpose, mission, value }: VisionObject = pagesVisionStore;
</script>

<template>
  <div
    class="relative flex w-full flex-col items-center justify-between overflow-hidden"
  >
    <!-- 背景 -->
    <div class="absolute top-0 left-0 -z-50 h-full w-full bg-[#f1f5f9]"></div>
    <!-- ヘッダー -->
    <div class="flex h-[180px] w-[95%] tb:h-[320px] pc:max-w-[1460px]">
      <div class="mt-[100px] flex flex-col gap-1 tb:mt-[160px] tb:gap-3">
        <!-- 小さなタイトル -->
        <div class="text-[14px] font-bold tb:text-[16px]">
          Bancorのパーパス・ミッション・バリュー
        </div>
        <!-- 大きなタイトル -->
        <AtomsFuturaBoldText
          text="The Bancor Way"
          size="text-[28px] tb:text-[40px]"
        />
      </div>
    </div>
    <!-- 背景アニメーション -->
    <div
      class="absolute top-[-130px] right-[-400px] -z-10 h-[731px] w-[960px] overflow-hidden tb:right-[-150px]"
    >
      <video autoplay loop muted playsinline class="h-full w-full object-cover">
        <source src="/movies/sc.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- ボディ -->
    <div
      class="flex w-[95%] flex-col gap-4 tb:flex-row pc:max-w-[1460px] pc:gap-8"
    >
      <!-- サイド -->
      <OrganismsCompanyInfoSideMenu />
      <!-- メイン -->
      <div class="mb-[128px] flex w-full flex-col gap-14">
        <div
          class="relative flex w-full flex-col items-center gap-[128px] rounded-[10px] border border-[#cbd5e1] bg-white pt-10 pb-[128px] tb:pt-[100px]"
        >
          <!-- ビジョントップ -->
          <div class="relative flex w-[95%] flex-col pc:max-w-[1000px]">
            <!-- サブタイトル -->
            <div
              class="mb-4 w-[230px] text-[16px] font-bold text-[#2563eb] tb:mb-8 tb:w-full tb:text-[20px]"
            >
              {{ header.subTitle }}
            </div>
            <!-- タイトル -->
            <AtomsBasicTitle
              :text="header.title"
              size="text-[28px] tb:text-[36px] pc:text-[56px]"
              spaceY="space-y-0"
              class="mb-8 tb:mb-16"
            />
            <!-- 説明 -->
            <AtomsBasicOneline
              :text="header.outline"
              size="text-[16px] text-[#475569]"
              class="mb-16 w-full tb:w-1/2"
              maxChars="300"
              :isBold="false"
            />
            <!-- リンク -->
            <MoleculesDetailButton
              v-if="header.linkUrl.length > 0"
              :linkUrl="header.linkUrl"
              :text="header.linkTitle"
            />
            <!-- 画像 -->
            <div
              class="absolute bottom-[-70px] right-0 h-[130px] w-[160px] tb:top-[200px] tb:h-[358px] tb:w-[430px]"
            >
              <img
                :src="header.imgUrl"
                alt="ビジョン"
                class="h-full w-full object-cover"
              />
            </div>
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

        <!-- パンくずリスト -->
        <div
          class="mb-[128px] flex w-full items-center gap-2 rounded-xl border border-[#cbd5e1] py-5 px-6 font-bold text-[#101010]"
        >
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/company-profile" class="text-xs"
            >Bancorのパーパス・ミッション・バリュー</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
