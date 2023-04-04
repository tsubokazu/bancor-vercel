<script setup lang="ts">
  interface Props {
    title: string;
    size?: string;
    isBold?: boolean;
    outline?: string;
    textColor?: string;
    frontSquareColor?: string;
    backSquareColor?: string;
    squareSize?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-[28px]',
    textColor: 'text-bancor-black100',
    frontSquareColor: 'bg-bancor-black100',
    backSquareColor: 'bg-bancor-blue100',
    squareSize: 'h-[17px] w-[17px]',
    isBold: true,
  });
</script>

<template>
  <div class="flex items-center justify-start space-x-4">
    <AtomsDoubleSquare
      :size="squareSize"
      :frontSquareColor="frontSquareColor"
      :backSquareColor="backSquareColor"
    ></AtomsDoubleSquare>
    <AtomsBasicTitle
      :text="title"
      :color="textColor"
      :size="size"
      :isBold="isBold"
    ></AtomsBasicTitle>
  </div>
</template>
