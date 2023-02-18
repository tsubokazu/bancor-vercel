<script setup lang="ts">
  const route = useRoute();
  console.log('#########');
  console.log(route.params);

  console.log(route.params.id);
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center text-4xl">
    <p>Bancor Journal - Journal</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>
