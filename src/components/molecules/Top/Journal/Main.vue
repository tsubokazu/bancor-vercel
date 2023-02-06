<script setup lang="ts">
  import { TopJournalObject } from '~/types';
  const { journalList } = inject<TopJournalObject>(
    'topJournalObject'
  ) as TopJournalObject;
  const mainJournal = journalList[0];
</script>

<template>
  <div class="h-full w-full space-y-3">
    <AtomsTopJournalMainImage
      :imgUrl="mainJournal.eyeCatchUrl"
    ></AtomsTopJournalMainImage>
    <div class="flex items-center space-x-3">
      <div class="text-[17px] font-bold text-bancor-blue100">
        {{ mainJournal.category }}
      </div>
      <div class="h-[17px] w-px bg-bancor-gray500"></div>
      <div class="text-base text-bancor-black100">
        {{ mainJournal.updateDate }}
      </div>
    </div>
    <div class="text-[28px] font-bold">
      {{ mainJournal.subject }}
    </div>
    <div class="flex items-center space-x-3">
      <div
        class="text-[14px] font-bold text-gray-600"
        v-for="tag in mainJournal.hashTag"
      >
        {{ `#${tag}` }}
      </div>
    </div>
  </div>
</template>
