<script setup lang="ts">
  import { TrademarksObject } from '~/types/pages/trademarks';
  const trademarksStore = useTrademarksStore();
  if (Object.keys(trademarksStore.trademarksObject).length == 0) {
    await trademarksStore.fetchTrademarks();
  }
  const { trademarksObject }: { trademarksObject: TrademarksObject } =
    trademarksStore;
  const { trademarks, copyrights } = trademarksObject;
</script>

<template>
  <div class="flex w-full justify-center bg-bancor-gray700">
    <!-- ボディ -->
    <div class="flex w-[95%] flex-col pc:max-w-[1000px]">
      <!-- サブタイトル -->
      <AtomsBasicTitle
        size="text-[14px]"
        :text="trademarksObject.subTitle"
        class="mt-[150px] mb-8"
      />
      <!-- タイトル -->
      <AtomsFuturaBoldText
        size="text-[40px]"
        :text="trademarksObject.title"
        class="mb-16"
      ></AtomsFuturaBoldText>

      <!-- 他社商標や著作権本文 -->
      <div class="mb-[80px] w-full bg-white pt-[48px] pb-[64px]">
        <!-- 他社商標 -->
        <div class="flex flex-col items-center py-12">
          <!-- タイトル -->
          <MoleculesDoubleSquareTitle
            :title="trademarks.title"
            class="mb-[40px]"
          >
          </MoleculesDoubleSquareTitle>
          <!-- 本文 -->
          <div
            class="post prose-lg mb-16 w-[95%] pc:w-[872px]"
            v-html="trademarks.bodyHTML"
          ></div>
        </div>

        <!-- 点線の区切り線 -->
        <div
          class="w-[95%] translate-x-[2.5%] border-b border-dashed border-bancor-gray500"
        ></div>

        <!-- 著作権 -->
        <div class="flex flex-col items-center py-12">
          <!-- タイトル -->
          <MoleculesDoubleSquareTitle
            :title="copyrights.title"
            class="mb-[40px]"
          >
          </MoleculesDoubleSquareTitle>
          <!-- 本文 -->
          <div
            class="post prose-lg mb-16 w-[95%] pc:w-[872px]"
            v-html="copyrights.bodyHTML"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
