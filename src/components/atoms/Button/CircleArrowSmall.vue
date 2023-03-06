<script setup lang="ts">
  interface Props {
    bgColor?: string;
    arrowColor?: string;
    size?: string;
    arrowSize?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    bgColor: 'bg-white',
    arrowColor: 'text-bancor-blue300',
    size: 'h-5 w-5',
    arrowSize: 'text-[8.7px]',
  });
</script>

<template>
  <div
    class="flex items-center justify-center rounded-full"
    :class="[bgColor, size]"
  >
    <div :class="[arrowColor, arrowSize]">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </div>
  </div>
</template>
