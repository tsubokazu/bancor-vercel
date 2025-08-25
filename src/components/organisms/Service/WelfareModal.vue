<script setup lang="ts">
  import type { Service } from '~/types/pages/service';
  const props = defineProps<{ welfareService: Service }>();

  import type { JournalObject } from '~/types/Journal';
  // Bancor Journalページ情報をPiniaから取得
  const journalStore = useWelfareJournalStore();
  if (Object.keys(journalStore.journals).length == 0) {
    await journalStore.fetchJournals();
  }

  const {
    journalList,
  }: {
    journalList: Array<JournalObject>;
  } = journalStore;
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
          :src="welfareService.infoIcon"
          :alt="welfareService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ welfareService.outlineTitle }}
      </div>
    </div>
    <!-- 説明 -->
    <div class="text-[17px] leading-[1.8] text-[#64748b]">
      {{ welfareService.outlineBody }}
    </div>
    <!-- ヘルプタイトル -->
    <div class="flex items-center gap-3">
      <!-- アイコン -->
      <div class="h-8 w-8">
        <img
          :src="welfareService.helpIcon"
          :alt="welfareService.name"
          class="h-full object-cover"
        />
      </div>
      <div class="text-[22px] font-bold">
        {{ welfareService.helpTitle }}
      </div>
    </div>
    <!-- カード説明 -->
    <div class="flex flex-wrap gap-6">
      <NuxtLink
        :to="`/welfare/journal/${journal.topicsId}`"
        v-for="journal in journalList.slice(0, 3)"
        class="relative flex w-[262px] flex-col gap-4 rounded-[10px] border border-[#cbd5e1] bg-white py-3 px-3"
      >
        <div class="h-[108px] w-full overflow-hidden rounded-[10px]">
          <img :src="journal.eyeCatchUrl" class="h-full w-full object-cover" />
        </div>
        <div
          class="w-fit rounded-full bg-[#15803d] px-3 text-[13px] font-bold text-white"
        >
          放課後デイサービス
        </div>
        <div class="text-[15px] font-bold">
          {{ journal.subject }}
        </div>
        <div class="text-[13px] text-[#64748b]">
          {{ journal.updateDate }}
        </div>
      </NuxtLink>
    </div>
    <!--　詳しくみるボタン -->
    <div class="flex items-center justify-end gap-4">
      <div class="text-[17px] text-[#64748b]">詳しくみる</div>
      <!-- ボタン -->
      <NuxtLink
        :to="welfareService.linkUrl"
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
