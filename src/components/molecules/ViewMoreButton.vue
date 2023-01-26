<script setup lang="ts">
  const Props = defineProps<{
    linkUrl: string;
  }>();
</script>

<template>
  <NuxtLink :to="Props.linkUrl">
    <div class="flex items-center space-x-2">
      <div class="font-bold">View more</div>
      <AtomsButtonDiagonalArrow></AtomsButtonDiagonalArrow>
    </div>
  </NuxtLink>
</template>
