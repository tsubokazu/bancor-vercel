<script setup lang="ts">
  defineProps<{
    title: string;
    enTitle: string;
    linkUrl: string;
  }>();
</script>

<template>
  <div
    class="flex h-72 w-96 flex-col items-center justify-center rounded-l-lg bg-bancor-gray1000 font-semibold"
  >
    <AtomsMegamenuSubTitle class="mb-2">
      {{ title }}
    </AtomsMegamenuSubTitle>
    <AtomsMegamenuTitle class="mb-5">
      {{ enTitle }}
    </AtomsMegamenuTitle>
    <AtomsButtonOvalArrow
      bgColor="bg-white"
      borderColor="border-bancor-gray700"
      :hasBorder="true"
      :linkUrl="linkUrl"
    >
      詳しくみる
    </AtomsButtonOvalArrow>
  </div>
</template>
