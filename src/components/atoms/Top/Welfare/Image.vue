<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
  }>();
</script>

<template>
  <div class="h-[234px] w-[152px] rounded-sm tb:h-[292px] tb:w-[190px]">
    <img class="object-cover" :src="Props.imgUrl" />
  </div>
</template>
