<script setup lang="ts">
  interface Props {
    title: string;
    clickFlag: boolean;
  }
  const props = defineProps<Props>();
</script>

<template>
  <button
    class="relative flex w-full items-center justify-between overflow-hidden py-3 pr-3"
  >
    <!-- メニュータイトル -->
    <AtomsBasicTitle :text="title" size="text-base"></AtomsBasicTitle>
    <!-- > 矢印 -->
    <font-awesome-icon icon="fa-solid fa-angle-right" />
    <!-- 下のバー -->
    <div class="absolute bottom-0 h-px w-full bg-bancor-gray500"></div>
    <div
      class="absolute bottom-0 z-10 h-px w-full bg-bancor-blue200"
      :class="[
        { 'animate-move-underline': clickFlag },
        { 'animate-move-underline-rv': !clickFlag },
      ]"
    ></div>
  </button>
</template>
