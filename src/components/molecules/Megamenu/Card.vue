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
  <NuxtLink :to="category.linkName">
    <div class="flex flex-col">
      <AtomsMegamenuCardImage
        :imgUrl="category.imgUrl"
        :title="category.title"
      ></AtomsMegamenuCardImage>
      <AtomsMegamenuCardButton>{{ category.title }}</AtomsMegamenuCardButton>
    </div>
  </NuxtLink>
</template>
