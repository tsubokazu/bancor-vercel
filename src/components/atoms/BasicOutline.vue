<script setup lang="ts">
  interface Props {
    text: string;
    size?: string;
    color?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-base',
    color: 'text-bancor-black100',
  });
</script>

<template>
  <div class="text-bancorbla font-bold" :class="[props.size, props.color]">
    {{ props.text }}
  </div>
</template>
