<script setup lang="ts">
  import { useWelfareJournalStore } from '~/stores/welfareJournal';

  // Welfare Journalページ情報をPiniaから取得
  const welfareJournalStore = useWelfareJournalStore();
  await welfareJournalStore.fetchJournals();
  const { journalList } = welfareJournalStore;
</script>

<template>
  <!-- サービスをもっと深く知る -->
  <div
    class="mb-20 flex w-[95%] flex-col items-center space-y-6 tb:items-start pc:max-w-[1200px]"
  >
    <!-- タイトル -->
    <AtomsBasicTitle
      class="font-futuraBold"
      size="text-[24px] tb:text-[28px] pc:text-[32px]"
      text="サービスをもっと深く知る"
    ></AtomsBasicTitle>
    <!-- 記事リンクカード3つ -->
    <div
      class="flex w-full flex-col items-center space-x-0 space-y-4 tb:flex-row tb:items-start tb:space-x-4 tb:space-y-0 pc:space-x-8"
    >
      <!-- カード -->
      <NuxtLink
        :to="`/journal/${journal.topicsId}`"
        v-for="journal in journalList.slice(0, 3)"
        class="flex w-[300px] flex-col items-center justify-center space-y-2"
      >
        <!-- サムネイル画像 -->
        <div class="mb-4 h-[160px] w-full overflow-hidden rounded-xl">
          <img
            :src="journal.eyeCatchUrl"
            class="w-full object-contain transition-all duration-700 ease-in-out hover:scale-125"
          />
        </div>
        <div class="flex w-full justify-between">
          <!-- ハッシュタグ -->
          <div
            class="flex items-center justify-center rounded-full bg-bancor-green100 px-2 text-[13px] font-bold text-white"
          >
            {{
              journal.hashTag[0] == '' || journal.hashTag[0] == undefined
                ? '放課後デイサービス'
                : journal.hashTag[0]
            }}
          </div>
          <!-- 日付 -->
          <div class="text-[14px]">{{ journal.updateDate }}</div>
        </div>
        <!-- 記事タイトル -->
        <div class="text-[18px] font-bold text-[#1c1c1c]">
          {{ journal.subject }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
