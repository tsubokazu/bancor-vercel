<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="relative h-full w-full">
    <div
      class="h-full w-full bg-gradient-to-t from-black to-gray-500 opacity-40"
    ></div>
    <img
      class="absolute top-0 -z-20 h-full w-full object-cover"
      :src="imgUrl"
    />
  </div>
</template>
