<script setup lang="ts">
  interface Props {
    linkUrl: string;
    isBold?: boolean;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkUrl: '/',
    isBold: false,
  });
</script>

<template>
  <div :class="{ 'font-semibold': Props.isBold }">
    <NuxtLink :to="linkUrl">
      <slot />
    </NuxtLink>
  </div>
</template>
