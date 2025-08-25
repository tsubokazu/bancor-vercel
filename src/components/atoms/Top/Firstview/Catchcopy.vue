<script setup lang="ts">
  import type { TopFirstViewObject } from '~/types/Top';
  const { catchCopyUrl } = inject<TopFirstViewObject>(
    'topFirstViewObject'
  ) as TopFirstViewObject;
</script>

<template>
  <img :src="catchCopyUrl" class="h-14 tb:h-28" />
</template>
