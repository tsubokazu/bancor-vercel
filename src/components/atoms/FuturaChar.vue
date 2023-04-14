<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-white',
    size: 'text-[36px] tb:text-[58px]',
    isBold: false,
  });
</script>

<template>
  <div
    class="absolute font-futuraBold"
    :class="[color, size, { 'font-bold': isBold }]"
  >
    {{ text }}
  </div>
</template>
