<script setup lang="ts">
  interface Props {
    text: string;
    color?: string;
    size?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[28px] tb:text-[32px] pc:text-[40px]',
  });
  const titleTexts = props.text.split('\r\n');
</script>

<template>
  <div
    class="flex flex-col space-y-5 font-bold"
    :class="[props.color, props.size]"
  >
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
