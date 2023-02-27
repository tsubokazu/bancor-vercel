<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { pickupList } = journalStore;
  const newsList: Array<JournalObject> = pickupList;
  const mainJournal = newsList[0];
</script>

<template>
  <NuxtLink :to="`/journal/${mainJournal.topicsId}`">
    <div class="h-fit w-3/5 space-y-3">
      <AtomsTopJournalMainImage
        :imgUrl="mainJournal.eyeCatchUrl"
      ></AtomsTopJournalMainImage>
      <div class="flex items-center space-x-3">
        <div class="text-[12px] font-bold text-bancor-orange100">
          {{ mainJournal.category }}
        </div>
        <div class="h-[12px] w-px bg-bancor-gray100"></div>
        <div class="text-[12px] text-bancor-gray100">
          {{ mainJournal.updateDate }}
        </div>
      </div>
      <div class="text-[14px] font-bold text-white">
        {{ mainJournal.subject }}
      </div>
      <div class="flex items-center space-x-3">
        <div
          class="text-[10px] font-bold text-bancor-gray100"
          v-for="tag in mainJournal.hashTag"
        >
          {{ `#${tag}` }}
        </div>
      </div>
    </div></NuxtLink
  >
</template>
