<script setup lang="ts">
  import type { JournalObject } from '~/types/Journal';

  useHead({
    script: [
      {
        async: true,
        src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
      },
    ],
  });
  const route = useRoute();
  const topicsId = route.params.id;
  // Welfare JournalをPiniaから取得
  const welfareJournalStore = useWelfareJournalStore();
  if (welfareJournalStore.journalList.length == 0) {
    await welfareJournalStore.fetchJournals();
  }
  const { journalList }: { journalList: Array<JournalObject> } = welfareJournalStore;
  const [selectedJournal]: Array<JournalObject> = journalList.filter(
    (journal: JournalObject) => journal.topicsId == topicsId
  );
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <!-- ヘッダー画像 -->
    <AtomsBasicHeader
      :imgUrl="selectedJournal.eyeCatchUrl"
      class="mb-16 h-[240px] w-full pc:h-[360px]"
    ></AtomsBasicHeader>
    <!-- 記事 -->
    <div class="flex w-full flex-row justify-center space-x-5">
      <MoleculesBasicArticle
        class="mb-32 w-[95%] pc:max-w-[720px]"
        :journalObject="selectedJournal"
      ></MoleculesBasicArticle>
      <MoleculesJournalSide
        class="max-w-[240px]"
        :category="selectedJournal?.category"
      ></MoleculesJournalSide>
    </div>
  </div>
</template>
