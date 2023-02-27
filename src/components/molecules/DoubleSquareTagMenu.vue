<script setup lang="ts">
  interface Props {
    title: string;
    size?: string;
    subTitle: string;
    outline?: string;
    linkUrl?: string;
    frontSquareColor?: string;
    backSquareColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    outline: '',
    linkUrl: '',
    frontSquareColor: 'bg-bancor-black100',
    backSquareColor: 'bg-bancor-blue100',
  });
</script>

<template>
  <div class="flex flex-col space-y-2">
    <MoleculesDoubleSquareTag
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      :text="subTitle"
      textColor="text-bancor-blue100"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle :size="size" :text="title"></AtomsBasicTitle>
    <AtomsBasicOutline
      class="mt-6"
      v-if="outline.length > 0"
      :text="outline"
    ></AtomsBasicOutline>
    <MoleculesDetailButton
      class="mt-8"
      v-if="linkUrl.length > 0"
      :linkUrl="linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
