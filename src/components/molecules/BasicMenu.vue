<script setup lang="ts">
  interface Props {
    title: string;
    outline: string;
    linkUrl: string;
    subTitle: string;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col space-y-10">
    <AtomsBasicTitle :text="title" size="text-[32px]"></AtomsBasicTitle>
    <AtomsBasicOutline :text="outline"></AtomsBasicOutline>
    <MoleculesDetailButton
      :linkUrl="linkUrl"
      :text="subTitle"
    ></MoleculesDetailButton>
  </div>
</template>
