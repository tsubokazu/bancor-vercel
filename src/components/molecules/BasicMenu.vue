<script setup lang="ts">
  interface Props {
    title: string;
    outline: string;
    linkUrl?: string;
    subTitle: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    linkUrl: '',
  });
</script>

<template>
  <div class="flex flex-col space-y-10">
    <AtomsBasicTitle :text="title" size="text-[32px]"></AtomsBasicTitle>
    <AtomsBasicOutline :text="outline"></AtomsBasicOutline>
    <MoleculesDetailButton
      v-if="linkUrl.length > 0"
      :linkUrl="linkUrl"
      :text="subTitle"
    ></MoleculesDetailButton>
  </div>
</template>
