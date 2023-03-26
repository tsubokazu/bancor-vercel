<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
    scaleUpImageAnimation: string;
  }>();
</script>

<template>
  <div class="h-[228px] w-full overflow-hidden rounded-md">
    <img
      class="h-full w-full rounded-md object-cover"
      :class="scaleUpImageAnimation"
      :src="Props.imgUrl"
    />
  </div>
</template>
