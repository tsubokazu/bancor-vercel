<script setup lang="ts">
  import { NewsObject } from '~/types/News';
  const props = defineProps<{ card: NewsObject }>();
  const category = computed(() => {
    switch (props.card.category) {
      case 'Service News':
        return 'service-news';
      case 'Press release':
        return 'press-release';
      default:
        return 'service-news';
    }
  });
</script>

<template>
  <NuxtLink :to="`/news/${category}/${card.topicsId}`">
    <div class="flex h-24 w-full items-center border-b border-gray-200">
      <div class="mr-4 h-[60px] w-[96px] pc:h-[80px] pc:w-[136px]">
        <img
          class="h-full w-full rounded-xl object-cover"
          :src="card.eyeCatchUrl"
        />
      </div>
      <div class="flex h-20 w-[200px] flex-col space-y-3 pc:w-[260px]">
        <div class="flex items-center justify-start space-x-4">
          <div class="text-xs text-bancor-blue100">{{ card.label }}</div>
          <div class="h-2 w-px bg-gray-400"></div>
          <div class="text-xs">{{ card.updateDate }}</div>
        </div>
        <div class="text-xs">{{ card.subject }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
