<script setup lang="ts">
  interface Props {
    frontSquareColor: string;
    backSquareColor: string;
    text: string;
    textColor?: string;
    textSize?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    textColor: 'text-bancor-black100',
    textSize: 'text-base',
    isBold: true,
  });
</script>

<template>
  <div class="flex items-center justify-start space-x-4">
    <AtomsDoubleSquare
      :frontSquareColor="props.frontSquareColor"
      :backSquareColor="props.backSquareColor"
    ></AtomsDoubleSquare>
    <AtomsItalicText
      :text="text"
      :color="textColor"
      :size="textSize"
      :isBold="isBold"
    ></AtomsItalicText>
  </div>
</template>
