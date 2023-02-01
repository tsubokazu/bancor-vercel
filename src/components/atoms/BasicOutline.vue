<script setup lang="ts">
  const Props = defineProps<{
    text: string;
  }>();
</script>

<template>
  <div class="text-base font-bold">
    {{ Props.text }}
  </div>
</template>
