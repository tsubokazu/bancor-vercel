<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-white',
    size: 'text-[58px]',
    isBold: false,
  });
</script>

<template>
  <div
    class="fixed top-[35.5%] -z-20 font-futuraBold"
    :class="[color, size, { 'font-bold': isBold }]"
  >
    {{ text }}
  </div>
</template>
