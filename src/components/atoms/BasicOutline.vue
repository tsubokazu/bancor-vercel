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

  const titleTexts = computed(() => props.text.split('\r\n'));
</script>

<template>
  <div
    class="text-bancorbla flex flex-col"
    :class="[props.size, props.color, { 'font-bold': isBold }, spaceY]"
  >
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
