<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      imgUrl: string;
      imgClass?: string;
      imgHeight?: string;
      imgWidth?: string;
      altText?: string;
      radius?: string;
    }>(),
    {
      imgHeight: 'h-[350px]',
      imgWidth: 'w-[650px]',
      altText: 'Eyecatch image.',
      radius: 'rounded-none',
    }
  );
</script>

<template>
  <div :class="[imgHeight, imgWidth]" class="relative">
    <!-- 黒いフィルター -->
    <div
      :class="[imgHeight, imgWidth, radius]"
      class="absolute z-10 bg-gradient-to-t from-black to-gray-500 opacity-40"
    ></div>
    <img
      :src="imgUrl"
      alt="altText"
      :class="[imgHeight, imgWidth, radius, imgClass]"
      class="top-0 object-cover"
    />
  </div>
</template>
