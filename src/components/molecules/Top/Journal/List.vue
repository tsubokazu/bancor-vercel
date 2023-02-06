<script setup lang="ts">
  import { TopJournalObject } from '~/types';
  const { journalList } = inject<TopJournalObject>(
    'topJournalObject'
  ) as TopJournalObject;
  const journalNums = journalList.length;
  const journalListLeft =
    journalNums < 2
      ? []
      : journalNums >= 5
      ? journalList.slice(1, 5)
      : journalList.slice(1, journalNums);
  const journalListRight =
    journalNums < 6
      ? []
      : journalNums >= 9
      ? journalList.slice(6, 9)
      : journalList.slice(6, journalNums);
</script>

<template>
  <div class="flex space-x-5">
    <div class="flex h-full flex-col justify-between">
      <MoleculesTopJournalListCard
        v-for="journal in journalListLeft"
        :card="journal"
      ></MoleculesTopJournalListCard>
    </div>
    <div class="flex h-full flex-col justify-between">
      <MoleculesTopJournalListCard
        v-for="journal in journalListRight"
        :card="journal"
      ></MoleculesTopJournalListCard>
    </div>
  </div>
</template>
