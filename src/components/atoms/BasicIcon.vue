<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      iconUrl?: string;
      altText?: string;
    }>(),
    {
      iconUrl: '/default-icon.svg',
      altText: 'Icon image.',
    }
  );
</script>

<template>
  <div>
    <img :src="iconUrl" alt="altText" class="h-[70px]" />
  </div>
</template>
