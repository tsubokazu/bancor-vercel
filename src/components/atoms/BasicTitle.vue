<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
    spaceY?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[28px] tb:text-[32px] pc:text-[40px]',
    spaceY: 'space-y-5',
  });
  const titleTexts = ref(props.text.split('\r\n'));
</script>

<template>
  <div class="flex flex-col font-bold" :class="[color, size, spaceY]">
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
