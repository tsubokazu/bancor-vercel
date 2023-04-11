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
  <div class="mb-10 flex h-fit w-3/5 space-x-5">
    <div
      class="flex flex-col flex-wrap justify-between space-y-4 tb:h-[200px] pc:h-full pc:space-y-5"
    >
      <MoleculesSiteMenuListCard
        v-for="journal in journalListOthers"
        :card="journal"
        :key="journal.topicsId"
        class="tb:mb-5 pc:mb-0"
      ></MoleculesSiteMenuListCard>
    </div>
  </div>
</template>
