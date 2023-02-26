<script setup lang="ts">
  const route = useRoute();
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center text-4xl">
    <p>お知らせ一覧 - Category notification</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>
