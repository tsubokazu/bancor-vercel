<script setup lang="ts">
  interface Props {
    linkName: string;
    title: string;
    imgUrl: string;
  }
  defineProps<{
    category: Props;
  }>();
</script>

<template>
  <div class="flex flex-col">
    <AtomsMenuCategoryCardImage
      :imgUrl="category.imgUrl"
      :title="category.title"
    ></AtomsMenuCategoryCardImage>
    <AtomsMenuCategoryCardButton :linkName="category.linkName">{{
      category.title
    }}</AtomsMenuCategoryCardButton>
  </div>
</template>
