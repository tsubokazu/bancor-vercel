<script setup lang="ts">
  interface Props {
    text: string;
    size?: string;
    color?: string;
    isBold?: boolean;
    maxChars?: number;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-base',
    color: 'text-bancor-black100',
    isBold: true,
    spaceY: 'space-y-1',
    maxChars: 100,
  });
  console.log(`text: ${props.text}`);

  const titleText = computed(() => props.text.replace(/\r?\n/g, ''));
  console.log(`titleText: ${titleText.value}`);
</script>

<template>
  <div
    class="text-bancorbla flex flex-col"
    :class="[props.size, props.color, { 'font-bold': isBold }, props.spaceY]"
  >
    {{
      titleText.slice(0, maxChars) +
      `${titleText.length > maxChars ? '...' : ''}`
    }}
  </div>
</template>
