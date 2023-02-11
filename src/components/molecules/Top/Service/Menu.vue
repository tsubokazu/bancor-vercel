<script setup lang="ts">
  import { TopServiceObject } from '~/types';
  const topServiceObject = inject<TopServiceObject>(
    'topServiceObject'
  ) as TopServiceObject;
</script>

<template>
  <div>
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      textColor="text-bancor-blue100"
      >Service</MoleculesDoubleSquareTag
    >
    <AtomsBasicTitle
      class="mb-5"
      :text="topServiceObject.title"
    ></AtomsBasicTitle>
    <AtomsBasicOutline :text="topServiceObject.outline"></AtomsBasicOutline>
    <MoleculesDetailButton
      class="mt-10 block"
      :linkUrl="topServiceObject.linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
