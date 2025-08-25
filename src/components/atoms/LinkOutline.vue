<script setup lang="ts">
  interface Props {
    text: string;
    linkUrl: string;
    color?: string;
    size?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[40px]',
    isBold: true,
  });
  const titleTexts = props.text ? props.text.split('\r\n') : [''];
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      :class="[props.size, props.color, isBold ? 'font-bold' : '']"
      class="leading-8"
    >
      {{ props.text }}
      <font-awesome-icon
        icon="fa-solid fa-arrow-up-right-from-square"
        class="text-xs"
      />
    </div>
  </NuxtLink>
</template>
