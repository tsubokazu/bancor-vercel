<script setup lang="ts">
  interface Props {
    linkName: string;
    isBold?: boolean;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
    isBold: false,
  });
</script>

<template>
  <div :class="{ 'font-semibold': Props.isBold }">
    <NuxtLink :to="linkName">
      <slot />
    </NuxtLink>
  </div>
</template>
