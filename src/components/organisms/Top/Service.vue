<script setup lang="ts">
  // Top01からデータを取得
  import { useTop01Store } from '~/stores/top01';
  import { Top01 } from '~/types/top01';
  const top01Store = useTop01Store();
  if (Object.keys(top01Store.topTitles).length == 0) {
    await top01Store.fetchTop01();
  }
  const top01Object: Top01 = top01Store;

  const tagColor = (tag: string) => {
    switch (tag) {
      case '強化分野':
        return 'text-white bg-[#020617]';
      case '主力事業':
        return 'text-[#334155] bg-[#e2e8f0]';
      default:
        return 'text-white bg-[#020617]';
    }
  };

  // スクロールを移動するメソッド
  const move = (direction: number) => {
    const container = document.querySelector('#bancorServices');
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + direction * 100, // 100はスクロール量を調整するための値です
        behavior: 'smooth', // スクロールをなめらかにする
      });
    }
  };
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="relative flex w-11/12 flex-col pc:max-w-[1200px]">
      <!-- Bancorのサービスタイトルとサービス一覧へ -->
      <div class="flex justify-between">
        <div class="text-[20px] font-bold tb:text-[30px]">Bancorのサービス</div>
        <NuxtLink
          to="/service"
          class="group flex items-center gap-3 text-[#94a3b8] transition-colors duration-300 hover:text-black"
        >
          <div class="text-[14px] font-bold tb:text-[16px]">サービス一覧へ</div>
          <font-awesome-icon
            class="text-[16px] transition-transform duration-700 group-hover:translate-x-1"
            :icon="['fas', 'right-long']"
          />
        </NuxtLink>
      </div>
      <!-- コンテンツカード -->
      <div
        id="bancorServices"
        class="mt-3 flex h-[412px] w-full items-center gap-6 overflow-x-auto tb:mt-6 tb:h-[574px]"
      >
        <div
          v-for="(data, index) in top01Object.bancorServices"
          class="flex h-full w-[320px] flex-none flex-col overflow-hidden rounded-lg tb:w-[445px]"
        >
          <!-- アイキャッチ -->
          <img :src="data.imgUrl" alt="" class="h-1/2 w-full object-cover" />
          <!-- タイトル等 -->
          <div
            class="flex h-1/2 w-full flex-col rounded-b-lg border border-[#e2e8f0] px-3 py-2 tb:px-6 tb:py-4"
          >
            <!-- タグ -->
            <div
              class="flex w-[72px] items-center justify-center py-1 px-2 text-[14px] pc:w-[84px] pc:py-2 pc:px-3 pc:text-[15px]"
              :class="tagColor(data.tag)"
            >
              {{ data.tag }}
            </div>
            <!-- サービスタイトル -->
            <div class="mt-2 text-[18px] font-bold tb:mt-3 pc:text-[28px]">
              {{ data.title }}
            </div>
            <!-- サービス説明 -->
            <div class="mt-2 text-[14px] tb:mt-3 pc:text-[16px]">
              {{ data.outline }}
            </div>
            <!-- もっとみる -->
            <div class="mt-1 flex justify-end tb:mt-6">
              <NuxtLink
                :to="data.linkUrl"
                class="group flex items-center gap-3 text-[#94a3b8] transition-colors duration-300 hover:text-black"
              >
                <div class="text-[14px] font-bold tb:text-[16px]">
                  もっとみる
                </div>
                <font-awesome-icon
                  class="text-[16px] transition-transform duration-700 group-hover:translate-x-1"
                  :icon="['fas', 'right-long']"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- 左やじるし -->
      <button
        @click="move(-1)"
        class="absolute left-0 top-[50%] z-20 flex h-12 w-12 translate-x-[-50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
      >
        <font-awesome-icon
          class="text-[24px] text-white pc:text-[32px]"
          :icon="['fas', 'angle-left']"
        />
      </button>
      <!-- 右やじるし -->
      <button
        @click="move(1)"
        class="absolute right-0 top-[50%] z-20 flex h-12 w-12 translate-x-[50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
      >
        <font-awesome-icon
          class="text-[24px] text-white pc:text-[32px]"
          :icon="['fas', 'angle-right']"
        />
      </button>
    </div>
  </div>
</template>
