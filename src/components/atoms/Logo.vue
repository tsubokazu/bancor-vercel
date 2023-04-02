<script setup lang="ts">
  const props = defineProps<{
    logoUrl: string;
    linkUrl: string;
    width: string;
    height: string;
  }>();
</script>

<template>
  <NuxtLink :to="props.linkUrl">
    <nuxt-img :src="props.logoUrl" :width="width" :height="height" />
  </NuxtLink>
</template>
