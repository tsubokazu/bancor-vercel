<script setup lang="ts">
  const Props = defineProps<{
    imgUrl: string;
    title: string;
  }>();
</script>
<template>
  <div class="">
    <img
      :src="imgUrl"
      :alt="title"
      class="block h-40 w-72 rounded object-cover"
    />
  </div>
</template>
