<script setup lang="ts">
  import { TopFirstViewObject } from '~/types/Top';
  const { copy } = inject<TopFirstViewObject>(
    'topFirstViewObject'
  ) as TopFirstViewObject;
</script>

<template>
  <p class="text-xl text-white tb:text-4.5xl">
    {{ copy }}
  </p>
</template>
