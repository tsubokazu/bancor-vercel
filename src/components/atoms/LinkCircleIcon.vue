<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      linkUrl: string;
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
  <NuxtLink :to="linkUrl">
    <div
      class="flex h-11 w-11 items-center justify-center rounded-full bg-white"
    >
      <img :src="iconUrl" alt="altText" class="w-[21.4px]" />
    </div>
  </NuxtLink>
</template>
