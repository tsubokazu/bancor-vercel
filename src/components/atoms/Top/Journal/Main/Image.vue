<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="h-[228px] w-full">
    <img class="h-full w-full rounded-md object-cover" :src="Props.imgUrl" />
  </div>
</template>
