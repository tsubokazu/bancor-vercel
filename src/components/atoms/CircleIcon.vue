<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      iconUrl?: string;
      altText?: string;
      height?: string;
      width?: string;
      border?: string;
      borderColor?: string;
    }>(),
    {
      iconUrl: '/default-icon.svg',
      altText: 'Icon image.',
      height: 'h-[88px]',
      width: 'w-[88px]',
      border: 'border',
      borderColor: 'border-bancor-gray400',
    }
  );
</script>

<template>
  <div class="">
    <img
      :src="iconUrl"
      alt="altText"
      class="block rounded-full bg-white"
      :class="[height, width, border, borderColor]"
    />
  </div>
</template>
