<script setup lang="ts">
  interface Props {
    color?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'bg-bancor-blue200',
  });
</script>

<template>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full"
    :class="color"
  >
    <div class="text-[18.8px] text-white">
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </div>
  </div>
</template>
