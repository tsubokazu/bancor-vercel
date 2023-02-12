<script setup lang="ts">
  interface Props {
    frontSquareColor: string;
    backSquareColor: string;
    textColor: string;
    textSize?: string;
    fontBold?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    textSize: 'text-base',
    fontBold: '',
  });
</script>

<template>
  <div class="flex items-center justify-start space-x-4">
    <AtomsDoubleSquare
      :frontSquareColor="props.frontSquareColor"
      :backSquareColor="props.backSquareColor"
    ></AtomsDoubleSquare>
    <div
      class="font-futuraMediumItalic"
      :class="[props.textColor, props.textSize, props.fontBold]"
    >
      <slot />
    </div>
  </div>
</template>
