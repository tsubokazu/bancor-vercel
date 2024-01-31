<script setup lang="ts">
  interface Props {
    eyeCatchUrl: string;
    title: string;
    abstract: string;
    tags: Array<string>;
    topicsId: string;
  }
  const props = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="`/journal/${topicsId}`">
    <div class="mb-6 flex flex-col items-start space-y-3">
      <AtomsBasicEyecatch
        :imgUrl="eyeCatchUrl"
        imgHeight="h-[120px] tb:h-[148px]"
        imgWidth="tb:w-[220px] pc:w-[300px]"
        radius="rounded-md"
      ></AtomsBasicEyecatch>
      <AtomsBasicTitle
        :text="title"
        size="text-[16px] tb:text-[18px]"
      ></AtomsBasicTitle>
      <div class="w-full">
        <AtomsBasicTags :tags="tags"></AtomsBasicTags>
      </div>
    </div>
  </NuxtLink>
</template>
