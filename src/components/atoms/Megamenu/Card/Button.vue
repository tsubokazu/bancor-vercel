<script setup lang="ts">
  interface Props {
    linkName: string;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
  });
</script>

<template>
  <div class="relative flex h-12 w-72 items-center">
    <div
      class="block w-10/12 before:absolute before:bottom-0 before:h-px before:w-full before:bg-bancor-gray700 before:content-[''] after:absolute after:right-5 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-t-2 after:border-r-2 after:border-black after:content-['']"
    >
      <slot />
    </div>
  </div>
</template>
