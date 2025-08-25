<script setup lang="ts">
  import type { JournalObject } from '~/types/Journal';
  import type { PickupObject } from '~/types/SiteMenu';
  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { pickupList } = journalStore;
  const newsList: Array<JournalObject> = pickupList;
  const pickupObjects: PickupObject = {
    title: '編集部ピックアップ',
    newsList: newsList,
  };
</script>
<template>
  <div class="w-full">
    <MoleculesDoubleSquareTag
      class="mb-6"
      frontSquareColor="bg-white"
      backSquareColor="bg-white"
      :text="pickupObjects.title"
      textColor="text-white"
      textSize="text-2xl"
    ></MoleculesDoubleSquareTag>
    <MoleculesSiteMenuMainJournal></MoleculesSiteMenuMainJournal>
    <MoleculesSiteMenuList></MoleculesSiteMenuList>
  </div>
</template>
