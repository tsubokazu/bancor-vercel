<script setup lang="ts">
  interface Categories {
    linkName: string;
    title: string;
    imgUrl: string;
  }
  const Props = defineProps<{
    categories: Array<Categories>;
  }>();
</script>

<template>
  <div
    class="flex h-72 w-[calc(100%_-_384px)] items-center space-x-6 overflow-auto rounded-r-lg bg-white px-10 font-bold"
  >
    <MoleculesMenuCategoryCard
      v-for="(category, index) in categories"
      :key="category.linkName"
      :category="category"
      class="flex-none"
    ></MoleculesMenuCategoryCard>
  </div>
</template>
