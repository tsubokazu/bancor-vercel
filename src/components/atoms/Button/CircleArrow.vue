<script setup lang="ts">
  interface Props {
    color?: string;
    arrowColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'bg-bancor-blue200',
    arrowColor: 'text-white',
  });
</script>

<template>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full"
    :class="color"
  >
    <div class="text-[18.8px]" :class="arrowColor">
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </div>
  </div>
</template>
