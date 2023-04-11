<script setup lang="ts">
  import { TopJournalObject } from '~/types';
  const { journalList } = inject<TopJournalObject>(
    'topJournalObject'
  ) as TopJournalObject;

  const mainJournal = journalList[0];
  const mainJournalLinkUrl = `/journal/${mainJournal.topicsId}`;
  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="mainJournalLinkUrl">
    <div
      class="h-full w-full space-y-3"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <AtomsTopJournalMainImage
        :scaleUpImageAnimation="scaleUpImageAnimation"
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
      <div class="text-[22px] font-bold pc:text-[28px]">
        {{ mainJournal.subject }}
      </div>
      <div class="flex items-center space-x-3">
        <div
          v-for="tag in mainJournal.hashTag"
          class="text-[14px] font-bold text-gray-600"
          :key="tag"
        >
          {{ `#${tag}` }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
