<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      frontSquareColor: string;
      backSquareColor: string;
      size?: string;
    }>(),
    {
      size: 'h-3 w-3',
    }
  );
</script>

<template>
  <div class="relative" :class="size">
    <span
      class="absolute -top-1/4 -right-1/4 z-30 block h-full w-full"
      :class="frontSquareColor"
    ></span>
    <span
      class="absolute top-1/4 -left-1/4 z-20 block h-full w-full"
      :class="backSquareColor"
    ></span>
  </div>
</template>
