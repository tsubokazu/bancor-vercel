<script setup lang="ts">
  interface Props {
    bgColor?: string;
    arrowColor?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    bgColor: 'bg-white',
    arrowColor: 'text-bancor-blue300',
  });
</script>

<template>
  <div
    class="flex h-5 w-5 items-center justify-center rounded-full"
    :class="props.bgColor"
  >
    <div class="text-[8.7px]" :class="props.arrowColor">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </div>
  </div>
</template>
