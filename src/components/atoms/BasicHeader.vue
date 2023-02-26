<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      imgUrl: string;
      filter?: boolean;
    }>(),
    {
      filter: true,
    }
  );
</script>

<template>
  <div>
    <div class="relative h-full w-full">
      <!-- 黒いフィルター -->
      <div
        v-if="filter"
        class="h-full w-full bg-gradient-to-t from-black to-gray-500 opacity-40"
      ></div>
      <!-- ヘッダー画像 -->
      <img
        class="absolute top-0 -z-20 h-full w-full object-cover"
        :src="imgUrl"
      />
    </div>
  </div>
</template>
