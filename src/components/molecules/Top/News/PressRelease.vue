<script setup lang="ts">
  import { TopNewsObject } from '~/types';
  const topNewsObject = inject<TopNewsObject>('topNewsObject') as TopNewsObject;
</script>

<template>
  <div class="ml-8 h-[486px] w-[412px] border-l border-gray-300 px-8">
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ topNewsObject.pressReleaseListTitle }}</div>
      <MoleculesViewMoreButton
        :linkUrl="topNewsObject.pressReleaseListLinkUrl"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex h-full w-full flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in topNewsObject.pressReleaseListCards"
        :key="card.title"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
