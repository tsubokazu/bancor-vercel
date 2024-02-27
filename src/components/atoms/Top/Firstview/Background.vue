<script setup lang="ts">
  const matrixBgImgUrl = '/matrix-bg.svg';
</script>

<template>
  <div
    class="fixed -z-40 h-full w-full"
    :style="{
      backgroundImage: `url(${matrixBgImgUrl})`,
      backgroundSize: '200px 200px',
    }"
  ></div>
</template>
