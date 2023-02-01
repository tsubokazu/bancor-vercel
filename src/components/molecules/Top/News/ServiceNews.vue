<script setup lang="ts">
  import { TopNewsObject } from '~/types';
  const topNewsObject = inject<TopNewsObject>('topNewsObject');
</script>

<template>
  <div class="ml-8 h-[486px] w-[412px] border-l border-gray-300 px-8">
    <div class="mb-3 flex justify-between">
      <div class="font-bold">{{ topNewsObject?.serviceNewsListTitle }}</div>
      <MoleculesViewMoreButton
        :linkUrl="topNewsObject?.serviceNewsListLinkUrl"
      ></MoleculesViewMoreButton>
    </div>
    <div class="flex h-full w-full flex-col space-y-4">
      <MoleculesArticleCard
        v-for="card in topNewsObject?.serviceNewsListCards"
        :key="card.title"
        :card="card"
      ></MoleculesArticleCard>
    </div>
  </div>
</template>
