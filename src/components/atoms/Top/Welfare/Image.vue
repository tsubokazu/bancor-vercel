<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="w-[48%] rounded-sm tb:h-[292px] tb:w-[190px]">
    <img class="object-cover" :src="Props.imgUrl" />
  </div>
</template>
