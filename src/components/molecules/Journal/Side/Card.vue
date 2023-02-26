<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const props = defineProps<{ card: JournalObject }>();
  const journalLinkUrl = `/journal/${props.card.topicsId}`;
</script>

<template>
  <NuxtLink :to="journalLinkUrl">
    <div class="flex h-full w-[240px] flex-col items-start space-y-2">
      <!-- サムネイル -->
      <div class="mr-4 h-[128px] w-full">
        <img
          class="h-[128px] w-full object-cover"
          :src="props.card.eyeCatchUrl"
        />
      </div>
      <!-- タイトル -->
      <div class="text-base font-bold text-bancor-black100">
        {{ props.card.subject }}
      </div>
      <!-- ハッシュタグ -->
      <AtomsBasicTags :tags="card.hashTag"></AtomsBasicTags>
    </div>
  </NuxtLink>
</template>
