<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="h-[292] w-[190px]">
    <img class="rounded-sm" :src="Props.imgUrl" />
  </div>
</template>
