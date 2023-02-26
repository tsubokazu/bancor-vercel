<script setup lang="ts">
  import { TopVisionObject } from '~/types';
  const topVisionObject = inject<TopVisionObject>(
    'topVisionObject'
  ) as TopVisionObject;
</script>

<template>
  <div>
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      text="Vision"
      textColor="text-bancor-blue100"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle
      class="mb-5"
      :text="topVisionObject.title"
    ></AtomsBasicTitle>
    <AtomsBasicOutline :text="topVisionObject.outline"></AtomsBasicOutline>
    <MoleculesDetailButton
      class="mt-10 block"
      :linkUrl="topVisionObject.linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
