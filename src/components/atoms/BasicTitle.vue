<script setup lang="ts">
  const Props = defineProps<{
    text: string;
  }>();
  const titleTexts = Props.text.split('\\r\\n');
</script>

<template>
  <div class="space-y-5 text-[40px] font-bold">
    <div v-for="titleText in titleTexts" :key="titleText">
      {{ titleText }}
    </div>
  </div>
</template>
