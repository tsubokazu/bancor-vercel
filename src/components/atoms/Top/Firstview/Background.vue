<script setup lang="ts">
  import { TopFirstViewObject } from '~/types/Top';
  const { imgUrl } = inject<TopFirstViewObject>(
    'topFirstViewObject'
  ) as TopFirstViewObject;
  const matrixBgImgUrl = '/matrix-bg.svg';
</script>

<template>
  <div
    class="absolute -z-50 h-full w-full"
    :style="{
      backgroundImage: `url(${matrixBgImgUrl})`,
      backgroundSize: '200px 200px',
    }"
  ></div>
</template>
