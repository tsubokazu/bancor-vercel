<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      bgColor: string;
    }>(),
    {
      bgColor: 'bg-bancor-blue100',
    }
  );
</script>

<template>
  <div
    class="flex h-full w-full items-center justify-center text-5xl font-bold"
    :class="bgColor"
  >
    <slot />
  </div>
</template>
