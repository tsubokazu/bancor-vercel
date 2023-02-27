<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <img class="absolute top-0 -z-20 h-full w-full object-cover" :src="imgUrl" />
</template>
