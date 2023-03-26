<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
    title: string;
    scaleUpImageAnimation: string;
  }>();
</script>
<template>
  <div class="overflow-hidden rounded">
    <img
      :class="scaleUpImageAnimation"
      :src="imgUrl"
      :alt="title"
      class="block h-40 w-72 rounded object-cover"
    />
  </div>
</template>
