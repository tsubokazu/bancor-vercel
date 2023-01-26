<script setup lang="ts">
  import { TopNewsObject } from '../../../../types';
  const topNewsObject = inject<TopNewsObject>('topNewsObject');
</script>

<template>
  <div>
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      textColor="text-bancor-blue100"
      >NEWS ROOM</MoleculesDoubleSquareTag
    >
    <AtomsBasicTitle :text="topNewsObject?.title"></AtomsBasicTitle>
    <MoleculesDetailButton
      class="mt-10 block"
      :linkUrl="topNewsObject?.linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
