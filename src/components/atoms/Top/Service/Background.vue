<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="absolute h-full w-full">
    <img
      class="absolute -z-20 h-full w-full object-cover"
      :src="Props.imgUrl"
    />
  </div>
</template>
