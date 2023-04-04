<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const humbergerStore = useHumbergerStore();
  const props = defineProps<{ card: JournalObject }>();

  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="`/journal/${card.topicsId}`">
    <div
      class="flex h-full w-full items-start"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
      @click="humbergerStore.closeHumbergerMenu"
    >
      <div class="mr-4 h-full w-[100px]">
        <img
          class="h-full w-full rounded-md object-cover"
          :class="scaleUpImageAnimation"
          :src="card.eyeCatchUrl"
        />
      </div>
      <div class="flex h-full w-[216px] flex-col space-y-1">
        <div class="flex items-center justify-start space-x-4">
          <div class="text-[12px] text-bancor-orange100">
            {{ card.category }}
          </div>
          <div class="h-[12px] w-px bg-bancor-gray100"></div>
          <div class="text-[12px] text-bancor-gray100">
            {{ card.updateDate }}
          </div>
        </div>
        <div class="text-[14px] font-bold text-white">
          {{ card.subject }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
