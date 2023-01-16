<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <AtomsMegaMenuSubTitle>
    {{ title }}
  </AtomsMegaMenuSubTitle>
  <AtomsMegaMenuTitle>
    <slot name="title" />
  </AtomsMegaMenuTitle>
  <AtomsMegaMenuButton>
    <slot name="button" />
  </AtomsMegaMenuButton>
</template>
