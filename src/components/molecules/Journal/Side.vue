<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { pickupList } = journalStore;
  const journalList: Array<JournalObject> = pickupList;
  const journalNums = journalList.length;
  const journalListOthers =
    journalNums < 2
      ? []
      : journalNums >= 5
      ? journalList.slice(1, 5)
      : journalList.slice(1, journalNums);
</script>

<template>
  <div class="hidden h-fit space-x-5 pc:flex">
    <div class="flex h-full flex-col justify-between space-y-5">
      <div class="flex items-center space-x-3">
        <img src="/book-icon.png" class="h-[16px] w-[16px]" />
        <div class="text-xl font-bold text-bancor-black100">オススメ記事</div>
      </div>
      <div class="relative h-px w-full">
        <div class="absolute left-0 z-20 h-full w-1/2 bg-bancor-blue200"></div>
        <div class="absolute z-10 h-full w-full bg-bancor-gray500"></div>
      </div>
      <MoleculesJournalSideCard
        v-for="journal in journalListOthers"
        :card="journal"
      ></MoleculesJournalSideCard>
    </div>
  </div>
</template>
