<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="absolute h-full w-full">
    <img
      class="absolute -z-20 h-[800px] w-full object-cover tb:h-[400px]"
      :src="Props.imgUrl"
    />
  </div>
</template>
