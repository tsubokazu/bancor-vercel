<script setup lang="ts">
  import { TopWelfareObject } from '~/types';
  const topWelfareObject = inject<TopWelfareObject>(
    'topWelfareObject'
  ) as TopWelfareObject;
</script>

<template>
  <div class="h-full w-full">
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      text="Welfare"
      textColor="text-bancor-blue100"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle
      class="mb-5"
      :text="topWelfareObject.title"
    ></AtomsBasicTitle>
    <AtomsBasicOutline :text="topWelfareObject.outline"></AtomsBasicOutline>
    <MoleculesDetailButton
      class="mt-10 block"
      :linkUrl="topWelfareObject.linkUrl"
    ></MoleculesDetailButton>
  </div>
</template>
