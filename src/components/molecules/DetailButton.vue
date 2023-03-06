<script setup lang="ts">
  interface Props {
    text?: string;
    color?: string;
    linkUrl: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    text: '詳しくみる',
    color: 'bg-bancor-blue200',
  });
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div class="flex items-center space-x-4">
      <AtomsButtonCircleArrow :color="color"></AtomsButtonCircleArrow>
      <div class="font-bold">{{ text }}</div>
    </div>
  </NuxtLink>
</template>
