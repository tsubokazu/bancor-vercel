<script setup lang="ts">
  import { TopRecruitObject } from '~/types/Top';
  const topRecruitObject = inject<TopRecruitObject>(
    'topRecruitObject'
  ) as TopRecruitObject;
</script>

<template>
  <div
    class="h-full w-full before:absolute before:-z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-gray-500 before:opacity-50 before:content-['']"
  >
    <img
      class="absolute -z-20 h-full w-full object-cover"
      :src="topRecruitObject.imageUrl"
    />
  </div>
</template>
