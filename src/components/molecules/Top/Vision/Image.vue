<script setup lang="ts">
  import { TopVisionObject } from '~/types';
  const topVisionObject = inject<TopVisionObject>(
    'topVisionObject'
  ) as TopVisionObject;
</script>

<template>
  <div>
    <img class="object-cover" :src="topVisionObject.imageUrl" />
  </div>
</template>
