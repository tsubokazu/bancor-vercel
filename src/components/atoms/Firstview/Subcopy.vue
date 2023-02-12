<script setup lang="ts">
  const subcopy = inject<string>('firstviewSubcopy');
</script>

<template>
  <p class="text-sm text-white tb:text-base">
    {{ subcopy }}
  </p>
</template>
