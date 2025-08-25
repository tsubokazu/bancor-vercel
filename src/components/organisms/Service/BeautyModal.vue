<script setup lang="ts">
  import type { Service } from '~/types/pages/service';
  import type { BeautyObject } from '~/types/pages/beauty';
  import { usePagesBeautyStore } from '~/stores/pages/beauty';
  const props = defineProps<{ beautyService: Service }>();

  // 放課後等デイサービスページ情報をPiniaから取得
  const pagesBeautyStore = usePagesBeautyStore();
  if (Object.keys(pagesBeautyStore.slider).length == 0) {
    await pagesBeautyStore.fetchPagesBeauty();
  }
  const { review }: BeautyObject = pagesBeautyStore;
</script>

<template>
  <!-- モーダル本体 -->
  <div
    class="absolute top-[50%] left-0 z-50 flex w-full flex-col gap-[18px] bg-white py-8 px-4 tb:left-[-20%] tb:px-12"
  >
    <div class="flex items-center gap-3">
      <!-- アイコン -->
      <div class="h-8 w-8">
        <img
          :src="beautyService.infoIcon"
          :alt="beautyService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ beautyService.outlineTitle }}
      </div>
    </div>
    <!-- 説明 -->
    <div class="text-[17px] leading-[1.8] text-[#64748b]">
      {{ beautyService.outlineBody }}
    </div>
    <!-- ヘルプタイトル -->
    <div class="flex items-center gap-3">
      <!-- アイコン -->
      <div class="h-8 w-8">
        <img
          :src="beautyService.helpIcon"
          :alt="beautyService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ beautyService.helpTitle }}
      </div>
    </div>
    <!-- レビュー一覧 -->
    <div class="flex w-full flex-col space-y-5">
      <div
        v-for="item in review.reviews.slice(0, 2)"
        class="flex flex-col gap-2"
      >
        <!-- ユーザー情報 -->
        <div class="mb-2 flex items-center">
          <AtomsBasicIcon
            class=""
            size="h-[40px]"
            iconUrl="/images/beauty/index/review/icon.png"
          ></AtomsBasicIcon>
          <AtomsBasicTitle
            class="ml-[12px]"
            size="text-[17px]"
            :text="item.name"
          ></AtomsBasicTitle>
          <div class="ml-[9px] h-[40px] w-[2px] bg-[#cbd5e1]"></div>
          <AtomsBasicTitle
            class="ml-[12px]"
            size="text-[17px]"
            :text="item.age"
            :is-bold="false"
          ></AtomsBasicTitle>
        </div>
        <!-- レビューの点数 -->
        <div
          class="flex w-[90%] flex-wrap items-center rounded-lg border border-[#cbd5e1] bg-[#f1f5f9] px-[16px] py-[20px] pc:max-w-[1100px]"
        >
          <div class="mr-[16px] font-bold">総合評価 {{ item.totalStar }}</div>
          <!-- ☆星 -->
          <div class="mr-[12px] flex items-center">
            <div v-for="i in item.totalStar" :key="i" class="text-[#e09a39]">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div
              v-for="i in 5 - item.totalStar"
              :key="i"
              class="text-[#828282]"
            >
              <font-awesome-icon :icon="['fas', 'star']" />
              <div>A</div>
            </div>
          </div>
          <!-- 区切り線 -->
          <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
          <!-- 雰囲気 -->
          <div class="mr-[14px]">雰囲気 {{ item.atmosphereStar }}</div>
          <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
          <!-- 接客サービス -->
          <div class="mr-[14px]">接客サービス {{ item.hospitalityStar }}</div>
          <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
          <!-- 技術・仕上がり -->
          <div class="mr-[14px]">技術・仕上がり {{ item.techniqueStar }}</div>
          <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
          <!-- メニュー・料金 -->
          <div class="mr-[14px]">メニュー・料金 {{ item.menuPriceStar }}</div>
        </div>
      </div>
    </div>
    <!--　詳しくみるボタン -->
    <div class="flex items-center justify-end gap-4">
      <div class="text-[17px] text-[#64748b]">詳しくみる</div>
      <!-- ボタン -->
      <NuxtLink
        :to="beautyService.linkUrl"
        class="group relative h-12 w-12 rounded-full border border-[#cbd5e1]"
      >
        <img
          class="absolute top-[21px] left-[24px] z-50 h-[14px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[6px]"
          src="/images/board-member/plus-icon.png"
        />
        <img
          class="absolute top-[8px] left-[10px] z-40 h-[28px] transition-transform duration-300 group-hover:translate-x-[8px] group-hover:translate-y-[2px] group-hover:rotate-45 group-hover:scale-[85%]"
          src="/images/board-member/card-icon.png"
        />
        <img
          class="absolute top-[8px] left-[10px] z-30 h-[28px] transition-transform duration-300 group-hover:translate-x-[-4px]"
          src="/images/board-member/card-icon.png"
        />
      </NuxtLink>
    </div>
  </div>
</template>
