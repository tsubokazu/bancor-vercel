<script setup lang="ts">
  const props = defineProps<{
    logoUrl: string;
    linkUrl: string;
  }>();
</script>

<template>
  <NuxtLink :to="props.linkUrl">
    <img :src="props.logoUrl" />
  </NuxtLink>
</template>
