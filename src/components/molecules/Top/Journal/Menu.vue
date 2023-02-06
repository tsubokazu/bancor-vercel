<script setup lang="ts">
  import { TopJournalObject } from '~/types';
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
      textColor="text-bancor-blue100"
      >Article</MoleculesDoubleSquareTag
    >
    <AtomsBasicTitle :text="topJournalObject.title"></AtomsBasicTitle>
  </div>
</template>
