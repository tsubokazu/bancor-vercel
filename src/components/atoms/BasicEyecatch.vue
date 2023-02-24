<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      imgUrl: string;
      imgHeight?: string;
      imgWidth?: string;
      altText?: string;
    }>(),
    {
      imgHeight: 'h-[350px]',
      imgWidth: 'w-[650px]',
      altText: 'Eyecatch image.',
    }
  );
</script>

<template>
  <div :class="[imgHeight, imgWidth]">
    <img
      :src="imgUrl"
      alt="altText"
      :class="[imgHeight, imgWidth]"
      class="object-cover"
    />
  </div>
</template>
