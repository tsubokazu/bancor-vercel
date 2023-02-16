<script setup lang="ts">
  import { TopNewsObject } from '~/types';
  const topNewsObject = inject<TopNewsObject>('topNewsObject') as TopNewsObject;
</script>

<template>
  <div
    class="h-full w-full border-gray-300 px-4 tb:border-l pc:ml-8 pc:h-[486px] pc:w-[412px] pc:px-8"
  >
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ topNewsObject.serviceNewsListTitle }}</div>
      <MoleculesViewMoreButton
        :linkUrl="topNewsObject.serviceNewsListLinkUrl"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex h-full w-full flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in topNewsObject.serviceNewsListCards"
        :key="card.title"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
