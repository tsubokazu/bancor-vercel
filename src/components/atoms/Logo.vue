<script setup lang="ts">
  const Props = defineProps<{
    logoUrl: string;
  }>();
</script>

<template>
  <NuxtLink to="/">
    <img :src="logoUrl" />
  </NuxtLink>
</template>
