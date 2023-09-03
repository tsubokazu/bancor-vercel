<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      iconUrl?: string;
      altText?: string;
      size?: string;
    }>(),
    {
      iconUrl: '/default-icon.svg',
      altText: 'Icon image.',
      size: 'h-[70px]',
    }
  );
</script>

<template>
  <div>
    <img :src="iconUrl" alt="altText" class="object-contain" :class="size" />
  </div>
</template>
