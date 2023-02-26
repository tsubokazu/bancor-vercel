<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const props = defineProps<{ journalObject: JournalObject }>();
  const instagramShareLink = `https://www.instagram.com/`;
  const twitterShareLink = `http://twitter.com/share?url=http://bancor.co.jp/journal/${props.journalObject.topicsId}`;

  // Bancor Journalの開発関連記事をPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { devJournalList }: { devJournalList: Array<JournalObject> } =
    journalStore;
  // 現在表示している記事以外の開発関連記事のみを抽出
  const otherJournalList: Array<JournalObject> = devJournalList.filter(
    (journal) => journal.topicsId != props.journalObject.topicsId
  );
</script>

<template>
  <div>
    <div class="flex h-full w-full flex-col space-y-16">
      <!-- タイトル -->
      <AtomsBasicTitle
        :text="journalObject.subject"
        size="text-[28px]"
      ></AtomsBasicTitle>
      <!-- 本文 -->
      <div class="post prose" v-html="journalObject.bodyHTML"></div>
      <!-- 編集者情報 -->
      <MoleculesJournalEditor
        :editorId="journalObject.editorId"
      ></MoleculesJournalEditor>
      <!-- SNS シェア -->
      <div class="flex h-12 w-10/12 items-center justify-between pl-3">
        <NuxtLink :to="instagramShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/instagram-icon.png" alt="instagram" class="h-5" />
          </div>
        </NuxtLink>
        <NuxtLink :to="twitterShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/twitter-icon.png" alt="twitter" class="h-5" />
          </div>
        </NuxtLink>
        <div class="text-xs font-bold">SHARE</div>
        <div class="h-px w-9/12 bg-bancor-gray600"></div>
      </div>
      <!-- 関連記事 -->
      <div class="flex flex-col space-y-10">
        <div class="text-[40px] font-bold">システム開発に関して</div>
        <div class="flex space-x-3">
          <MoleculesBasicCard
            v-for="journal in otherJournalList.slice(0, 3)"
            :card="journal"
          ></MoleculesBasicCard>
        </div>
      </div>
    </div>
  </div>
</template>
