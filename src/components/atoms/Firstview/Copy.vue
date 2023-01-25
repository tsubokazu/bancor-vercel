<script setup lang="ts">
  const copy = inject<string>('firstviewCopy');
</script>

<template>
  <p class="text-4.5xl text-white">
    {{ copy }}
  </p>
</template>
