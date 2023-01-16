<script setup lang="ts">
  interface Props {
    linkName: string;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
  });
</script>

<template>
  <div>
    <NuxtLink :to="linkName">
      <slot />
    </NuxtLink>
  </div>
</template>
