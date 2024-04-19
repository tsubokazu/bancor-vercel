<script setup lang="ts">
  import { DxSupport } from '~/types/pages/service';
  const props = defineProps<{ dxSupportService: DxSupport }>();
  console.log(`dxSupportService: ${JSON.stringify(props)}`);
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
          :src="dxSupportService.infoIcon"
          :alt="dxSupportService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ dxSupportService.outlineTitle }}
      </div>
    </div>
    <!-- 説明 -->
    <div class="text-[17px] leading-[1.8] text-[#64748b]">
      {{ dxSupportService.outlineBody }}
    </div>
    <!-- ヘルプタイトル -->
    <div class="flex items-center gap-3">
      <!-- アイコン -->
      <div class="h-8 w-8">
        <img
          :src="dxSupportService.helpIcon"
          :alt="dxSupportService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ dxSupportService.helpTitle }}
      </div>
    </div>
    <!-- ダウンロード資料カード -->
    <div class="flex flex-wrap items-center gap-6">
      <div
        v-for="(item, index) in dxSupportService.cardItems"
        class="relative flex w-[293px] flex-col items-center justify-center gap-2"
      >
        <div class="h-[210px]">
          <img :src="item.imgUrl" class="h-full object-cover" />
        </div>
        <NuxtLink
          :to="item.linkUrl"
          class="flex items-center gap-2 text-[16px] font-bold text-[#64748b]"
        >
          <div>資料ダウンロード</div>
          <img src="/download-icon-gray.png" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
    <!--　詳しくみるボタン -->
    <div class="flex items-center justify-end gap-4">
      <div class="text-[17px] text-[#64748b]">詳しくみる</div>
      <!-- ボタン -->
      <NuxtLink
        :to="dxSupportService.linkUrl"
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
