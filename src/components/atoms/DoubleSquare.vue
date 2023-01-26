<script setup lang="ts">
  const Props = defineProps<{
    frontSquareColor: string;
    backSquareColor: string;
  }>();
</script>

<template>
  <div class="relative h-3 w-3">
    <span
      class="absolute -top-1/4 -right-1/4 z-50 block h-full w-full"
      :class="frontSquareColor"
    ></span>
    <span
      class="absolute top-1/4 -left-1/4 z-40 block h-full w-full"
      :class="backSquareColor"
    ></span>
  </div>
</template>
