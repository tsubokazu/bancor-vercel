<script setup lang="ts">
  interface Props {
    text: string;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex items-center justify-center rounded-md bg-bancor-blue200 px-2.5 py-2 text-xs font-bold text-white"
  >
    {{ text }}
  </div>
</template>
