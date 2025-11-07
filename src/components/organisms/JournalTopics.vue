<script setup lang="ts">
  // Bancor Journalページ情報をPiniaから取得
  const journalStore = useJournalStore();
  onMounted(async () => {
    await journalStore.fetchJournals();
  });

  const { journalList } = journalStore;
</script>

<template>
  <!-- Topics -->
  <div
    class="mb-16 flex w-full flex-col items-center justify-center space-y-4 pc:max-w-[1200px]"
  >
    <!-- メインTopic -->
    <div
      class="relative flex w-[95%] items-center rounded-lg px-3 py-[22px] shadow-md tb:px-7 pc:max-w-[1200px]"
    >
      <!-- アイコンTopics -->
      <div
        class="text-[16px] text-bancor-green100 tb:text-[18px] pc:text-[20px]"
      >
        <font-awesome-icon :icon="['fas', 'tag']" />
      </div>
      <!-- テキストTopics -->
      <div
        class="ml-2 text-[16px] font-bold text-bancor-green100 tb:text-[18px] pc:text-[20px]"
      >
        Topics
      </div>
      <!-- 最新のTopic -->
      <div
        class="ml-4 w-[60%] text-[16px] font-bold tb:w-[90%] tb:text-[18px] pc:text-[20px]"
      >
        <!-- {{ welfareJournalList[0].subject }} -->
      </div>
      <!-- リンク「>」ボタン -->
      <!-- <div
            class="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-bancor-gray1400 text-2xl text-[20px] font-bold font-bold text-bancor-green100"
          >
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </div> -->
    </div>
    <!-- サブTopics -->
    <div
      v-for="journal in journalList.slice(0, 3)"
      class="relative w-[95%] flex-col items-center pc:max-w-[1200px]"
    >
      <NuxtLink
        :to="`/journal/${journal.topicsId}`"
        class="flex w-full items-center space-x-2 border-b-2 border-bancor-gray1400 py-[16px] tb:space-x-8"
      >
        <!-- タグ＆日付 -->
        <div
          class="flex w-[30%] flex-col items-center justify-center pc:flex-row pc:space-x-4"
        >
          <!-- タグ -->
          <div
            class="text-[10px] font-bold text-bancor-gray1300 tb:text-[14px] pc:text-[16px]"
          >
            {{
              journal.hashTag[0] == '' || journal.hashTag[0] == undefined
                ? '放課後デイサービス'
                : journal.hashTag[0]
            }}
          </div>
          <!-- 日付 -->
          <div
            class="text-[14px] font-bold text-bancor-gray1300 tb:text-[14px] pc:text-[16px]"
          >
            {{ journal.updateDate }}
          </div>
        </div>
        <!-- タイトル -->
        <div
          class="w-[65%] text-[14px] font-bold text-bancor-gray1300 tb:text-[14px] pc:text-[16px]"
        >
          {{ journal.subject }}
        </div>
        <!-- リンク「>」ボタン -->
        <div
          class="absolute right-0 flex items-center justify-center text-[16px] font-bold text-bancor-gray1400"
        >
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
      </NuxtLink>
    </div>
    <!-- もっとみるボタン -->
    <div class="flex w-[95%] items-center justify-center">
      <NuxtLink
        to="/journal"
        class="flex items-center justify-center rounded-full py-4 px-11 text-[18px] font-bold text-bancor-green100 shadow-md"
      >
        もっとみる
      </NuxtLink>
    </div>
  </div>
</template>
