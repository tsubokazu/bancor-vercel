<script setup lang="ts">
  const copy = inject<string>('firstviewCopy');
</script>

<template>
  <p class="text-xl text-white tb:text-4.5xl">
    {{ copy }}
  </p>
</template>
