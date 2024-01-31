<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  await journalStore.fetchJournals();

  const {
    journalList,
    pickupList,
    featureList,
    devJournalList,
    tagList,
  }: {
    journalList: Array<JournalObject>;
    pickupList: Array<JournalObject>;
    featureList: Array<JournalObject>;
    devJournalList: Array<JournalObject>;
    tagList: Array<string>;
  } = journalStore;

  // URLのクエリにtagがある場合は、そのタグの記事を表示する
  const route = useRoute();
  const tag = route.query.tag as string;
  console.log(`tag: ${tag}`);

  // 記事一覧に表示するカテゴリ(new: 新着記事、pickup: ピックアップ記事、feature: 注目記事、tag: ハッシュタグ記事)
  const category = tag === undefined ? ref('New Article') : ref(tag);
  const clickCategoryNew = () => (category.value = 'New Article');
  const clickCategoryPickup = () => (category.value = 'Pickup');
  const clickCategoryFeature = () => (category.value = 'Feature');
  const clickTagButton = (e: Event) => {
    const target = e.target as HTMLElement;
    category.value = target.textContent as string;
  };
  const displayJournalList = computed<Array<JournalObject>>(() => {
    if (category.value == 'New Article') {
      return journalList;
    } else if (category.value == 'Pickup') {
      return pickupList;
    } else if (category.value == 'Feature') {
      return featureList;
    } else {
      return journalList.filter((journal: JournalObject) => {
        return journal.hashTag.includes(category.value.replace(' #', ''));
      });
    }
  });

  // 表示する記事数
  const displayJournalNum = ref(6);

  // 記事数分の記事リスト
  const journalListLatest = computed<Array<JournalObject>>(() => {
    return displayJournalList.value.slice(0, displayJournalNum.value);
  });

  // ヘッダーのアイキャッチ画像やタイトルを動かすための処理
  const top5JournalList: Array<JournalObject> = journalList.slice(0, 5);
  const sliderIndex = ref(0);
  const prevIndex = ref(4);
  const slideDir = ref(true);
  const clickRightButton = () => {
    slideDir.value = true;
    timerCount.value = 0;
    prevIndex.value = sliderIndex.value;
    sliderIndex.value = sliderIndex.value >= 4 ? 0 : sliderIndex.value + 1;
  };
  const clickLeftButton = () => {
    slideDir.value = false;
    timerCount.value = 0;
    prevIndex.value = sliderIndex.value;
    sliderIndex.value = sliderIndex.value <= 0 ? 4 : sliderIndex.value - 1;
  };

  // 再生ボタンの処理
  const isPause = ref(false);
  const clickFaPlay = () => (isPause.value = !isPause.value);

  // 8秒間隔でスライド処理
  const timerCount = ref(0);
  onMounted(() => {
    setInterval(() => {
      if (!isPause.value) {
        timerCount.value++;
      }
      if (timerCount.value >= 80) {
        clickRightButton();
        timerCount.value = 0;
      }
    }, 100);
  });

  // HTMLタグを削除する関数
  const removeHTMLTags = (html: string): string => {
    if (typeof document === 'undefined') {
      return '';
    }
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // 表示する本文の一部を切り出す
  const trimBodyHTML = (bodyHTML: string, num: number): string => {
    let str = removeHTMLTags(bodyHTML);
    str = str.slice(0, num);
    return str;
  };
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center overflow-hidden"
  >
    <!-- ヘッダーアニメーション -->
    <div class="relative h-[280px] w-full tb:h-[360px] pc:h-[640px]">
      <!-- ヘッダー画像 -->
      <AtomsBasicHeader
        v-for="(journal, index) in top5JournalList"
        :filter="false"
        :key="journal.topicsId"
        :imgUrl="journal.eyeCatchUrl"
        class="absolute top-0 -z-30 h-full w-full opacity-0"
        :class="{
          'animate-eyecatch-slide-in': sliderIndex == index && slideDir == true,
          'animate-eyecatch-slide-out': prevIndex == index && slideDir == true,
          'animate-eyecatch-slide-in-rv':
            sliderIndex == index && slideDir == false,
          'animate-eyecatch-slide-out-rv':
            prevIndex == index && slideDir == false,
          'pause': isPause,
        }"
      >
      </AtomsBasicHeader>
      <!-- タイトルとプログレスバー -->
      <div
        class="absolute bottom-0 flex h-32 w-full flex-col items-center justify-center space-y-6"
      >
        <!-- タイトル -->
        <div class="absolute -z-10 h-full w-full bg-gray-900 opacity-70"></div>
        <div class="flex items-center justify-center space-x-3">
          <div class="font-futuraMediumItalic font-bold text-white">Topics</div>
          <div class="h-6 w-px bg-white"></div>
          <div
            class="relative h-[18px] w-[260px] overflow-hidden tb:w-[600px] pc:w-[948px]"
          >
            <div
              v-for="(journal, index) in top5JournalList"
              :key="journal.topicsId"
              class="absolute -top-1 w-full translate-x-full text-lg font-bold text-white opacity-0"
              :class="{
                'animate-title-slide-in':
                  sliderIndex == index && slideDir == true,
                'animate-title-slide-out':
                  prevIndex == index && slideDir == true,
                'animate-title-slide-in-rv':
                  sliderIndex == index && slideDir == false,
                'animate-title-slide-out-rv':
                  prevIndex == index && slideDir == false,
                'pause': isPause,
              }"
            >
              <NuxtLink :to="`/journal/${journal.topicsId}`">
                {{ journal.subject }}
              </NuxtLink>
            </div>
          </div>
          <div class="text-lg text-white">
            <font-awesome-icon icon="fa-solid fa-angle-right" />
          </div>
        </div>
        <!-- プログレスバー -->
        <div class="flex items-center justify-center space-x-2">
          <!-- 再生/停止 -->
          <button class="w-4 text-base text-white" @click="clickFaPlay">
            <font-awesome-icon icon="fa-solid fa-pause" v-show="!isPause" />
            <font-awesome-icon icon="fa-solid fa-play" v-show="isPause" />
          </button>
          <!-- プログレスバー -->
          <div
            v-for="i in 5"
            class="relative h-1 w-[35px] overflow-hidden tb:w-[105px] pc:w-44"
            :key="i"
          >
            <div
              class="absolute z-10 h-full w-full rounded-sm bg-bancor-blue200"
              :class="{
                'opacity-0': i - 1 > sliderIndex,
                'animate-journal-progress': i - 1 == sliderIndex,
                'pause': isPause,
              }"
            ></div>
            <div
              class="absolute z-0 h-full w-full rounded-sm bg-bancor-gray500"
            ></div>
          </div>
          <!-- 矢印ボタン -->
          <div class="flex space-x-2">
            <!-- 左矢印 -->
            <button
              @click="clickLeftButton"
              class="flex h-7 w-12 items-center justify-center rounded-sm bg-gray-800 text-xs text-white"
            >
              <font-awesome-icon icon="fa-solid fa-arrow-left" />
            </button>
            <!-- 右矢印 -->
            <button
              @click="clickRightButton"
              class="flex h-7 w-12 items-center justify-center rounded-sm bg-gray-800 text-xs text-white"
            >
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 記事選択 -->
    <div
      class="mb-16 hidden h-16 w-full items-center justify-center space-x-40 bg-bancor-gray700 pc:flex"
    >
      <!-- 新着記事 -->
      <button class="flex space-x-2" @click="clickCategoryNew">
        <div class="text-base font-bold">新着記事</div>
        <div class="-rotate-45">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </button>
      <button class="flex space-x-2" @click="clickCategoryPickup">
        <div class="text-base font-bold">編集部ピックアップ</div>
        <div class="-rotate-45">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </button>
      <button class="flex space-x-2" @click="clickCategoryFeature">
        <div class="text-base font-bold">注目記事</div>
        <div class="-rotate-45">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </button>
    </div>
    <!-- ボディ -->
    <div class="mt-8 flex w-[95%] space-x-8 tb:mt-2 pc:mt-0 pc:max-w-[1272px]">
      <!-- 記事一覧 -->
      <div class="spacey-3 flex w-full flex-col pc:max-w-[1000px]">
        <!-- メイン記事 -->
        <div class="flex flex-col items-center gap-0 tb:flex-row tb:gap-8">
          <div
            v-for="(journal, index) in displayJournalList.slice(0, 2)"
            class="relative mb-16 flex w-full flex-col space-y-3 tb:w-[48%]"
            :key="journal.topicsId"
          >
            <!-- カテゴリタグ -->
            <div
              v-show="index == 0"
              class="absolute bg-[#020617] font-futuraMediumItalic text-[40px] font-bold text-white tb:top-6 tb:left-4 pc:top-56 pc:-left-12"
            >
              {{ category }}
            </div>
            <!-- メイン記事 -->
            <NuxtLink :to="`/journal/${journal.topicsId}`">
              <div class="flex w-full flex-col gap-5">
                <AtomsBasicEyecatch
                  :imgUrl="journal.eyeCatchUrl"
                  imgHeight="pc:h-[296px]"
                  imgWidth="w-full"
                  radius="rounded-md"
                ></AtomsBasicEyecatch>
                <AtomsBasicTitle
                  :text="journal.subject"
                  size="text-[20px] tb:text-[28px]"
                ></AtomsBasicTitle>
                <div class="text-[12px] font-bold text-[#7c8186]">
                  最終更新日：{{ journal.updateDate }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- サブ記事（グリッド表示） -->
        <div class="mb-16 grid grid-cols-2 gap-4 tb:grid-cols-3">
          <AtomsGridCard
            v-for="journal in displayJournalList.slice(2, 8)"
            :eyeCatchUrl="journal.eyeCatchUrl"
            :tags="journal.hashTag"
            :abstract="trimBodyHTML(journal.bodyHTML, 40)"
            :title="journal.subject"
            :topics-id="journal.topicsId"
            :key="journal.topicsId"
          ></AtomsGridCard>
        </div>
        <!-- オススメ記事 -->
        <div class="mb-16 flex flex-col space-y-6">
          <AtomsBasicTitle text="オススメ記事"></AtomsBasicTitle>
          <div class="mb-16 grid grid-cols-2 gap-4 tb:grid-cols-3">
            <AtomsGridCard
              v-for="journal in pickupList.slice(0, 6)"
              :eyeCatchUrl="journal.eyeCatchUrl"
              :tags="journal.hashTag"
              :abstract="trimBodyHTML(journal.bodyHTML, 40)"
              :title="journal.subject"
              :topics-id="journal.topicsId"
              :key="journal.topicsId"
            ></AtomsGridCard>
          </div>
        </div>
        <!-- キーワードから記事をさがす -->
        <div class="relative mb-40 flex flex-col space-y-6">
          <div class="absolute top-10 -z-10 h-full w-full bg-gray-50"></div>
          <div class="flex items-center space-x-4 pl-6">
            <AtomsBasicIcon
              iconUrl="/metro-tags.png"
              size="h-[19px]"
            ></AtomsBasicIcon>
            <AtomsBasicTitle
              text="キーワードから記事をさがす"
              size="text-2xl"
            ></AtomsBasicTitle>
          </div>
          <div
            class="grid grid-cols-2 gap-3 pl-6 tb:grid-cols-5 pc:grid-cols-7"
          >
            <button
              v-for="tag in tagList"
              @click="clickTagButton"
              class="flex h-6 w-28 items-center justify-center rounded-xl border border-gray-300 bg-white text-xs font-bold"
              :key="tag"
            >
              #{{ tag }}
            </button>
          </div>
        </div>

        <!-- パンくずリスト -->
        <div class="ml-6 mb-6 flex items-center gap-2 font-bold text-[#101010]">
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/journal" class="text-xs">Bancor Journal</NuxtLink>
        </div>
      </div>
      <!-- サイド記事 -->
      <MoleculesJournalSide
        class="hidden max-w-[240px] pc:block"
      ></MoleculesJournalSide>
    </div>
  </div>
</template>
