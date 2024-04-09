<script setup lang="ts">
  import { withDefaults, defineProps, computed } from 'vue';

  interface Props {
    text: string;
    color?: string;
    size?: string;
    spaceY?: string;
    isBold?: boolean;
    particleColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[28px] tb:text-[32px] pc:text-[40px]',
    spaceY: 'space-y-5',
    isBold: true,
    particleColor: 'text-[#0a50ae]',
  });

  const titleTexts = computed(() => props.text.split('\r\n'));

  // <>で囲まれたテキストを<span>で囲み、particleColorを適用する
  const formattedTitleTexts = computed(() => {
    return titleTexts.value.map((text) =>
      text.replace(
        /<([^>]+)>/g,
        `<span class="${props.particleColor}">$1</span>`
      )
    );
  });
</script>

<template>
  <div
    class="flex flex-col"
    :class="[
      props.color,
      props.size,
      props.spaceY,
      { 'font-bold': props.isBold },
    ]"
  >
    <div
      v-for="(titleText, index) in formattedTitleTexts"
      :key="index"
      v-html="titleText"
    ></div>
  </div>
</template>
