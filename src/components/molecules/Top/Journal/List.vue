<script setup lang="ts">
  import { JournalObject } from '~/types/Journal'; // Bancor JournalをPiniaから取得
  import type { Ref } from 'vue';
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { journalList }: { journalList: Array<JournalObject> } = journalStore;
  const journalNums = journalList.length;
  const journalListLeft = computed(() =>
    journalNums < 2
      ? []
      : journalNums >= 5
      ? journalList.slice(1, 5)
      : journalList.slice(1, journalNums)
  );
  const journalListRight = computed(() =>
    journalNums < 6
      ? []
      : journalNums >= 9
      ? journalList.slice(6, 9)
      : journalList.slice(6, journalNums)
  );
</script>

<template>
  <div class="flex overflow-hidden pc:space-x-5">
    <div class="flex h-full flex-col space-y-4">
      <MoleculesTopJournalListCard
        v-for="journal in journalListLeft"
        :card="journal"
        :key="
          journalListLeft.length > 0 ? journalListLeft[0].topicsId : 'empty'
        "
      ></MoleculesTopJournalListCard>
    </div>
    <div class="invisible flex h-full flex-col space-y-4 pc:visible">
      <MoleculesTopJournalListCard
        v-for="journal in journalListRight"
        :card="journal"
        :key="
          journalListRight.length > 0 ? journalListRight[0].topicsId : 'empty'
        "
      ></MoleculesTopJournalListCard>
    </div>
  </div>
</template>
