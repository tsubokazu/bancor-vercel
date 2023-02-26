<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      imgUrl: string;
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
  <div :class="[imgHeight, imgWidth]">
    <img
      :src="imgUrl"
      alt="altText"
      :class="[imgHeight, imgWidth, radius]"
      class="object-cover"
    />
  </div>
</template>
