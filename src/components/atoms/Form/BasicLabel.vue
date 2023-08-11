<script setup lang="ts">
  interface Props {
    text: string;
    size?: string;
    badgePaddingY?: string;
    isRequired?: boolean;
    badgeColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    isRequired: false,
    size: 'text-base',
    badgePaddingY: 'py-[3px]',
    badgeColor: 'bg-bancor-blue300',
  });
</script>

<template>
  <label class="flex w-11/12 flex-col space-x-4 pc:max-w-[860px]">
    <div class="flex items-center space-x-2">
      <div class="font-bold text-bancor-black100" :class="size">{{ text }}</div>
      <div
        v-if="isRequired"
        class="rounded px-2 text-[12px] font-bold text-white"
        :class="[badgePaddingY, badgeColor]"
      >
        必須
      </div>
    </div>
  </label>
</template>
