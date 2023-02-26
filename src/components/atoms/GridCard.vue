<script setup lang="ts">
  interface Props {
    eyeCatchUrl: string;
    title: string;
    abstract: string;
    tags: Array<string>;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col space-y-3">
    <AtomsBasicEyecatch
      :imgUrl="eyeCatchUrl"
      imgHeight="h-[148px]"
      imgWidth="w-[220px]"
      radius="rounded-sm"
    ></AtomsBasicEyecatch>
    <AtomsBasicTitle :text="title" size="text-[18px]"></AtomsBasicTitle>
    <AtomsBasicOutline :text="abstract" size="text-[14px]"></AtomsBasicOutline>
    <AtomsBasicTags :tags="tags"></AtomsBasicTags>
  </div>
</template>
