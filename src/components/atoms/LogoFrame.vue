<script setup lang="ts">
  interface Props {
    logoUrl: string;
    linkUrl: string;
    bgColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    bgColor: 'bg-bancor-navy400',
  });
</script>

<template>
  <NuxtLink :to="props.linkUrl">
    <div :class="bgColor" class="p-4">
      <img :src="props.logoUrl" />
    </div>
  </NuxtLink>
</template>
