<script setup lang="ts">
  interface Props {
    linkName: string;
    title: string;
    imgUrl: string;
  }
  defineProps<{
    content: Props;
  }>();
</script>

<template>
  <NuxtLink :to="content.linkName">
    <div class="flex flex-col">
      <AtomsMegamenuCardImage
        v-show="content.imgUrl != ''"
        :imgUrl="content.imgUrl"
        :title="content.title"
      ></AtomsMegamenuCardImage>
      <AtomsMegamenuCardButton>{{ content.title }}</AtomsMegamenuCardButton>
    </div>
  </NuxtLink>
</template>
