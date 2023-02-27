<script setup lang="ts">
  interface Props {
    text?: string;
    linkUrl: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    text: '詳しくみる',
  });
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div class="flex items-center space-x-4">
      <AtomsButtonCircleArrow></AtomsButtonCircleArrow>
      <div class="font-bold">{{ text }}</div>
    </div>
  </NuxtLink>
</template>
