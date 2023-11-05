<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
    spaceY?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[28px] tb:text-[32px] pc:text-[40px]',
    spaceY: 'space-y-5',
    isBold: true,
  });
  const titleTexts = computed(() => props.text.split('\r\n'));
</script>

<template>
  <h1
    class="flex flex-col"
    :class="[color, size, spaceY, { 'font-bold': isBold }]"
  >
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </h1>
</template>
