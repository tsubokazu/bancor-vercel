<script setup lang="ts">
  import type { JournalObject } from '~/types/Journal';
  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { pickupList } = journalStore;
  const newsList: Array<JournalObject> = pickupList;
  const mainJournal = newsList[0];

  const humbergerStore = useHumbergerStore();

  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="`/journal/${mainJournal.topicsId}`">
    <div
      class="mb-5 h-fit w-full space-y-3 tb:w-3/5"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
      @click="humbergerStore.closeHumbergerMenu"
    >
      <AtomsTopJournalMainImage
        :imgUrl="mainJournal.eyeCatchUrl"
        :scaleUpImageAnimation="scaleUpImageAnimation"
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
          v-for="tag in mainJournal.hashTag"
          class="text-[12px] font-bold text-bancor-gray400"
          :key="tag"
        >
          {{ `#${tag}` }}
        </div>
      </div>
    </div></NuxtLink
  >
</template>
