<script setup lang="ts">
  interface Props {
    text: string;
    size?: string;
    badgePaddingY?: string;
    isRequired?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    isRequired: false,
    size: 'text-base',
    badgePaddingY: 'py-[3px]',
  });
</script>

<template>
  <label class="flex w-11/12 flex-col space-x-4 pc:max-w-[860px]">
    <div class="flex items-center space-x-2">
      <div class="font-bold text-bancor-black100" :class="size">{{ text }}</div>
      <div
        v-if="isRequired"
        class="rounded bg-bancor-blue300 px-2 text-[12px] font-bold text-white"
        :class="badgePaddingY"
      >
        必須
      </div>
    </div>
  </label>
</template>
