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
    <div class="flex flex-col items-center space-y-3">
      <AtomsBasicEyecatch
        :imgUrl="eyeCatchUrl"
        imgHeight="h-[120px] tb:h-[148px]"
        imgWidth="tb:w-[220px]"
        radius="rounded-md"
      ></AtomsBasicEyecatch>
      <AtomsBasicTitle
        :text="title"
        size="text-[16px] tb:text-[18px]"
      ></AtomsBasicTitle>

      <AtomsBasicOutline
        :text="abstract"
        size="text-[12px] tb:text-[14px]"
      ></AtomsBasicOutline>
      <div class="w-full">
        <AtomsBasicTags :tags="tags"></AtomsBasicTags>
      </div>
    </div>
  </NuxtLink>
</template>
