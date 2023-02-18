<script setup lang="ts">
  import { NewsObject } from '~/types/News';
  const props = defineProps<{ card: NewsObject }>();
</script>

<template>
  <div class="flex h-24 w-full items-center border-b border-gray-200">
    <div class="mr-4 h-[60px] w-[96px] pc:h-[80px] pc:w-[136px]">
      <img
        class="h-full w-full rounded-xl object-cover"
        :src="props.card.eyeCatchUrl"
      />
    </div>
    <div class="flex h-20 w-[200px] flex-col space-y-3 pc:w-[260px]">
      <div class="flex items-center justify-start space-x-4">
        <div class="text-xs text-bancor-blue100">{{ props.card.label }}</div>
        <div class="h-2 w-px bg-gray-400"></div>
        <div class="text-xs">{{ props.card.updateDate }}</div>
      </div>
      <div class="text-xs">{{ props.card.subject }}</div>
    </div>
  </div>
</template>
