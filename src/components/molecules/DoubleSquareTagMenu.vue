<script setup lang="ts">
  interface Props {
    title: string;
    size?: string;
    subTitle: string;
    outline?: string;
    linkUrl?: string;
    textColor?: string;
    frontSquareColor?: string;
    backSquareColor?: string;
    isSubBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    outline: '',
    linkUrl: '',
    textColor: 'text-bancor-blue100',
    frontSquareColor: 'bg-bancor-black100',
    backSquareColor: 'bg-bancor-blue100',
    isSubBold: true,
  });
</script>

<template>
  <div class="flex flex-col space-y-2">
    <MoleculesDoubleSquareTag
      :frontSquareColor="frontSquareColor"
      :backSquareColor="backSquareColor"
      :text="subTitle"
      :textColor="textColor"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle :size="size" :text="title"></AtomsBasicTitle>
    <AtomsBasicOutline
      class="mt-6"
      v-if="outline.length > 0"
      :text="outline"
      :is-bold="isSubBold"
    ></AtomsBasicOutline>
    <MoleculesDetailButton
      class="mt-8"
      v-if="linkUrl.length > 0"
      :linkUrl="linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
