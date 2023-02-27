<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-base',
    isBold: true,
  });
</script>

<template>
  <div
    class="font-futuraMediumItalic"
    :class="[color, size, { 'font-bold': isBold }]"
  >
    {{ text }}
  </div>
</template>
