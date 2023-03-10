<script setup lang="ts">
  import { NewsObject } from '~/types/News';
  const props = defineProps<{ card: NewsObject }>();
  const categoryKebab = computed(() => {
    switch (props.card.category) {
      case 'Notification':
        return 'notification';
      case 'Press Release':
        return 'press-release';
      case 'Service News':
        return 'service-news';
      default:
        return 'notification';
    }
  });
  const newsLinkUrl = `/news/${categoryKebab.value}/${props.card.topicsId}`;
</script>

<template>
  <NuxtLink :to="newsLinkUrl">
    <div class="flex h-full w-[220px] flex-col items-start space-y-2">
      <!-- サムネイル -->
      <div class="mr-4 h-[148px] w-full">
        <img
          class="h-[128px] w-full rounded-sm object-cover"
          :src="card.eyeCatchUrl"
        />
      </div>
      <!-- タイトル -->
      <div class="text-base font-bold text-bancor-black100">
        {{ card.subject }}
      </div>
    </div>
  </NuxtLink>
</template>
