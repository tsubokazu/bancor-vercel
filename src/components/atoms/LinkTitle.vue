<script setup lang="ts">
  interface Props {
    text: string;
    linkUrl: string;
    color?: string;
    size?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[40px]',
  });
  const titleTexts = props.text.split('\r\n');
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      class="flex flex-col space-y-5 text-[40px] font-bold"
      :class="[props.color, props.size]"
    >
      <div v-for="titleText in titleTexts" :key="titleText">
        ー {{ titleText }}
      </div>
    </div>
  </NuxtLink>
</template>
