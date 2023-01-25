<script setup lang="ts">
  const subcopy = inject<string>('firstviewSubcopy');
</script>

<template>
  <p class="text-base text-white">
    {{ subcopy }}
  </p>
</template>
