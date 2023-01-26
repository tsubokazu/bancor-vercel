<script setup lang="ts">
  import { ServiceNewsListCard } from '../../types';
  const Props = defineProps<{ card: ServiceNewsListCard }>();
</script>

<template>
  <div class="flex h-24 w-full items-center border-b border-gray-200">
    <div class="mr-4 h-[80px] w-[134px]">
      <img class="rounded-xl object-cover" :src="Props.card.thumbnail" />
    </div>
    <div class="flex h-20 w-[260px] flex-col space-y-3">
      <div class="flex items-center justify-start space-x-4">
        <div class="text-xs text-bancor-blue100">{{ Props.card.tag }}</div>
        <div class="h-2 w-px bg-gray-400"></div>
        <div class="text-xs">{{ Props.card.updateAt }}</div>
      </div>
      <div class="text-xs">{{ Props.card.title }}</div>
    </div>
  </div>
</template>
