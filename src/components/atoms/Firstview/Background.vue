<script setup lang="ts">
  const imgUrl = inject<string>('firstviewImgUrl');
</script>

<template>
  <div
    class="absolute h-full w-full before:absolute before:-z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-gray-500 before:opacity-50 before:content-['']"
  ></div>
  <img class="absolute -z-20 h-full w-full object-cover" :src="imgUrl" />
</template>
