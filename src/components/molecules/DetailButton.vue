<script setup lang="ts">
  interface Props {
    text?: string;
    color?: string;
    arrowColor?: string;
    linkUrl: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    text: '詳しくみる',
    color: 'bg-bancor-blue200',
    arrowColor: 'text-white',
    isBold: true,
  });
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div class="flex items-center space-x-4">
      <AtomsButtonCircleArrow
        :color="color"
        :arrowColor="arrowColor"
      ></AtomsButtonCircleArrow>
      <div :class="isBold ? 'font-bold' : ''">{{ text }}</div>
    </div>
  </NuxtLink>
</template>
