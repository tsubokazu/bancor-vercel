<script setup lang="ts">
  interface Props {
    imgUrl: string;
    circleSize?: string;
    iconSize?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    circleSize: 'h-[46px] w-[46px]',
    iconSize: 'h-[23px] w-[23px]',
  });
</script>

<template>
  <div
    class="flex items-center justify-center rounded-full border border-bancor-gray500"
    :class="circleSize"
  >
    <AtomsBasicIcon :iconUrl="imgUrl" :size="iconSize"></AtomsBasicIcon>
  </div>
</template>
