<script setup lang="ts">
  interface Props {
    title: string;
    categoryName: string;
    size?: string;
    linkUrl: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-base',
  });
  const date = computed(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  });
</script>

<template>
  <div class="flex w-full flex-col space-y-4">
    <!-- カテゴリバッジと日付 -->
    <div class="flex items-center space-x-4">
      <!-- カテゴリバッジ -->
      <AtomsCategoryBadge :text="categoryName"></AtomsCategoryBadge>
      <!-- 日付 -->
      <div class="text-sm text-bancor-black100">{{ date }}</div>
    </div>

    <!-- タイトル -->
    <NuxtLink :to="linkUrl" class="h-full w-full">
      <AtomsBasicTitle :text="title" :size="size"></AtomsBasicTitle>
    </NuxtLink>

    <!-- 区切り線 -->
    <div class="h-0.5 w-full bg-bancor-gray600"></div>
  </div>
</template>
