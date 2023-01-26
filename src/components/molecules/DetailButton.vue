<script setup lang="ts">
  const Props = defineProps<{
    linkUrl: string;
  }>();
</script>

<template>
  <NuxtLink :to="Props.linkUrl">
    <div class="flex items-center space-x-4">
      <AtomsButtonCircleArrow></AtomsButtonCircleArrow>
      <div class="font-bold">詳しくみる</div>
    </div>
  </NuxtLink>
</template>
