<script setup lang="ts">
  import { JournalList } from '~/types';
  const Props = defineProps<{ card: JournalList }>();
</script>

<template>
  <div class="flex h-[73px] w-full items-start">
    <div class="mr-4 h-full w-[100px]">
      <img class="rounded-md object-cover" :src="Props.card.eyeCatchUrl" />
    </div>
    <div class="flex h-full w-[216px] flex-col space-y-1">
      <div class="flex items-center justify-start space-x-4">
        <div class="text-[14px] text-bancor-blue100">
          {{ Props.card.category }}
        </div>
        <div class="h-[14px] w-px bg-gray-400"></div>
        <div class="text-[13px]">{{ Props.card.updateDate }}</div>
      </div>
      <div class="text-base font-bold">{{ Props.card.subject }}</div>
    </div>
  </div>
</template>
