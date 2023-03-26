<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const props = defineProps<{ card: JournalObject }>();
  const journalLinkUrl = `/journal/${props.card.topicsId}`;
  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="journalLinkUrl">
    <div
      class="flex h-[73px] w-full items-start"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <div class="mr-4 h-full w-[100px] overflow-hidden rounded-md">
        <img
          class="rounded-md object-cover"
          :src="props.card.eyeCatchUrl"
          :class="scaleUpImageAnimation"
        />
      </div>
      <div class="flex h-full w-[216px] flex-col space-y-1">
        <div class="flex items-center justify-start space-x-4">
          <div class="text-[14px] text-bancor-blue100">
            {{ props.card.category }}
          </div>
          <div class="h-[14px] w-px bg-gray-400"></div>
          <div class="text-[13px]">{{ props.card.updateDate }}</div>
        </div>
        <div class="text-base font-bold">{{ props.card.subject }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
