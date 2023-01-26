<script setup lang="ts">
  const Props = defineProps<{
    frontSquareColor: string;
    backSquareColor: string;
    textColor: string;
  }>();
</script>

<template>
  <div class="flex items-center justify-start space-x-4">
    <AtomsDoubleSquare
      :frontSquareColor="Props.frontSquareColor"
      :backSquareColor="Props.backSquareColor"
    ></AtomsDoubleSquare>
    <div class="font-futuraMediumItalic" :class="Props.textColor">
      <slot />
    </div>
  </div>
</template>
