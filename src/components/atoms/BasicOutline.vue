<script setup lang="ts">
  interface Props {
    text: string;
    size?: string;
    color?: string;
    isBold?: boolean;
    spaceY?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-base',
    color: 'text-bancor-black100',
    isBold: true,
    spaceY: 'space-y-1',
  });

  const titleTexts = computed(() => props.text ? props.text.split('\r\n') : ['']);
</script>

<template>
  <div
    class="flex flex-col"
    :class="[
      props.size,
      props.color,
      props.isBold ? 'font-bold' : '',
      props.spaceY,
    ]"
  >
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
