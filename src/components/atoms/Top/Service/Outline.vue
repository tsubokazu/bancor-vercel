<script setup lang="ts">
  const Props = defineProps<{
    text: string;
  }>();
</script>

<template>
  <div class="text-base font-bold text-white">
    {{ Props.text }}
  </div>
</template>
