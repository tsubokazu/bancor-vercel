<script setup lang="ts">
  const Props = withDefaults(
    defineProps<{
      imgUrl: string;
      objectPosition?: string;
    }>(),
    {
      objectPosition: 'translate-x-0',
    }
  );
</script>

<template>
  <div class="absolute h-full w-full">
    <img
      class="absolute -z-20 h-[800px] w-full object-cover tb:h-[400px]"
      :class="Props.objectPosition"
      :src="Props.imgUrl"
    />
  </div>
</template>
