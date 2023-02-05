<script setup lang="ts">
  const Props = defineProps<{
    text: string;
  }>();
  const titleTexts = Props.text.split('\r\n');
</script>

<template>
  <div class="flex flex-col space-y-1 text-[32px] font-bold text-white">
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
