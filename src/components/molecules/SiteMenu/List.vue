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
  <div class="flex h-fit w-3/5 space-x-5">
    <div class="flex h-full flex-col justify-between space-y-5">
      <MoleculesSiteMenuListCard
        v-for="journal in journalListOthers"
        :card="journal"
      ></MoleculesSiteMenuListCard>
    </div>
  </div>
</template>
