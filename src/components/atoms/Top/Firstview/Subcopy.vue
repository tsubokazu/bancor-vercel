<script setup lang="ts">
  import { TopFirstViewObject } from '~/types/Top';
  const { subCopy } = inject<TopFirstViewObject>(
    'topFirstViewObject'
  ) as TopFirstViewObject;
</script>

<template>
  <p class="text-sm text-white tb:text-base">
    {{ subCopy }}
  </p>
</template>
