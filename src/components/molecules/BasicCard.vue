<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const props = defineProps<{ card: JournalObject }>();
  const journalLinkUrl = `/journal/${props.card.topicsId}`;
</script>

<template>
  <NuxtLink :to="journalLinkUrl">
    <div class="flex h-full w-[220px] flex-col items-start space-y-2">
      <!-- サムネイル -->
      <div class="mr-4 h-[148px] w-full">
        <img
          class="h-[128px] w-full rounded-sm object-cover"
          :src="props.card.eyeCatchUrl"
        />
      </div>
      <!-- タイトル -->
      <div class="text-base font-bold text-bancor-black100">
        {{ props.card.subject }}
      </div>
      <!-- ハッシュタグ -->
      <div class="flex flex-wrap space-x-3">
        <div
          v-for="tag in props.card.hashTag"
          class="text-xs font-bold text-bancor-blue200"
          :key="tag"
        >
          {{ `#${tag}` }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
