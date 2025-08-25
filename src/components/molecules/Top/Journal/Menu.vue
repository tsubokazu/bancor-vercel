<script setup lang="ts">
  import type { TopJournalObject } from '~/types';
  const topJournalObject = inject<TopJournalObject>(
    'topJournalObject'
  ) as TopJournalObject;
</script>

<template>
  <div>
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-bancor-black100"
      backSquareColor="bg-bancor-blue100"
      text="Article"
      textColor="text-bancor-blue100"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle :text="topJournalObject.title"></AtomsBasicTitle>
  </div>
</template>
