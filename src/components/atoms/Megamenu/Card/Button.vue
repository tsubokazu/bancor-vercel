<script setup lang="ts">
  interface Props {
    linkUrl: string;
    hoverAnimation: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    linkUrl: '/',
  });
</script>

<template>
  <div class="relative flex h-12 w-72 items-center overflow-hidden">
    <div
      class="block w-10/12 after:absolute after:right-5 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-t-2 after:border-r-2 after:border-black"
    >
      <slot />
    </div>
    <!-- アンダーライン -->
    <div class="absolute bottom-0 h-px w-full bg-bancor-gray700"></div>
    <div
      class="absolute bottom-0 h-px w-full -translate-x-full bg-bancor-navy300"
      :class="hoverAnimation"
    ></div>
  </div>
</template>
