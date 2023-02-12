<script setup lang="ts">
  const imgUrl = inject<string>('firstviewCatchCopyUrl');
</script>

<template>
  <img :src="imgUrl" class="h-14 tb:h-28" />
</template>
