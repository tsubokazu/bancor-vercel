<script setup lang="ts">
  interface Props {
    text: string;
    isRequired?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    isRequired: false,
  });
</script>

<template>
  <label class="flex w-11/12 flex-col space-x-4 pc:max-w-[860px]">
    <div class="flex items-center space-x-2">
      <div class="text-base font-bold text-bancor-black100">{{ text }}</div>
      <div
        v-if="isRequired"
        class="rounded bg-bancor-blue300 px-2 py-[3px] text-[12px] font-bold text-white"
      >
        必須
      </div>
    </div>
  </label>
</template>
