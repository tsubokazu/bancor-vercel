<script setup lang="ts">
  import { usePagesEntryStore } from '@/stores/pages/entry';

  definePageMeta({
    layout: 'entry',
  });

  // entry storeから取得
  const entryFormObject = usePagesEntryStore();
</script>

<template>
  <div>
    <OrganismsEntryForm
      v-if="entryFormObject.entryStep == 0"
    ></OrganismsEntryForm>
    <OrganismsEntryConfirm
      v-else-if="entryFormObject.entryStep == 1"
    ></OrganismsEntryConfirm>
  </div>
</template>
