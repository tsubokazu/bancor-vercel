<script setup lang="ts">
  defineProps<{
    title: string;
    enTitle: string;
    linkName: string;
  }>();
</script>

<template>
  <div
    class="flex h-72 w-96 flex-col items-center justify-center rounded-l-lg bg-bancor-gray1000 font-semibold"
  >
    <AtomsMegaMenuSubTitle class="mb-2">
      {{ title }}
    </AtomsMegaMenuSubTitle>
    <AtomsMegaMenuTitle class="mb-5">
      {{ enTitle }}
    </AtomsMegaMenuTitle>
    <AtomsOvalArrowButton
      bgColor="white"
      :hasBorder="true"
      :linkName="linkName"
    >
      詳しくみる
    </AtomsOvalArrowButton>
  </div>
</template>
