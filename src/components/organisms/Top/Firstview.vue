<script setup lang="ts">
  import { TopFirstViewObject } from '~/types/Top';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const endpoint = config.public.kurocoTopFirstview;
  const { data: kuroco } = (await useFetch(`${baseUrl}${endpoint}`)) as any;

  const topFirstViewObject: TopFirstViewObject = {
    imgUrl: kuroco.value.details.ext_4.url,
    catchCopyUrl: kuroco.value.details.ext_8[0].url,
    copy: kuroco.value.details.ext_2,
    subCopy: kuroco.value.details.ext_3,
  };

  provide<TopFirstViewObject>('topFirstViewObject', topFirstViewObject);

  // Top01からデータを取得
  import { useTop01Store } from '~/stores/top01';
  import { Top01 } from '~/types/top01';
  const top01Store = useTop01Store();
  if (Object.keys(top01Store.topTitles).length == 0) {
    await top01Store.fetchTop01();
  }
  const top01Object: Top01 = top01Store;
  console.log(
    `top01Object.topTitles: ${JSON.stringify(top01Object.topTitles)}`
  );

  // TOPメッセージを4秒ごとに切り替えるアニメーション
  const currentTopTitleIndex = ref(0);
  const topTitle = ref(top01Object.topTitles[currentTopTitleIndex.value]);
  const isOpacity0 = ref(false);
  const changeTopTitle = async () => {
    isOpacity0.value = true;
    await new Promise((resolve) => setTimeout(resolve, 300));
    if (currentTopTitleIndex.value + 1 < top01Object.topTitles.length) {
      currentTopTitleIndex.value += 1;
    } else {
      currentTopTitleIndex.value = 0;
    }
    topTitle.value = top01Object.topTitles[currentTopTitleIndex.value];
    await new Promise((resolve) => setTimeout(resolve, 300));
    isOpacity0.value = false;
  };
  setInterval(async () => {
    await changeTopTitle();
  }, 4000);

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(1300);
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  // TOPのスライダー用の記事取得
  import { JournalObject } from '~/types/Journal'; // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { journalList }: { journalList: Array<JournalObject> } = journalStore;
  const journalNums = journalList.length;
  const journalListSlider = computed(() =>
    journalNums < 1
      ? []
      : journalNums >= 5
      ? journalList.slice(0, 5)
      : journalList.slice(0, journalNums)
  );

  // スライダー用ボタンのメソッド
  const currentIndex = ref(0);
  const currentPosition = ref(0);
  const sliderIndexArray = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0]; // スライダーの並び（5つの記事を掲載すること前提）
  const moveValue = computed(() => (isPC.value ? 572 : 356)); // スライダーカードの横幅500 + マージン72(PC) 横幅320 + マージン36(スマホ)
  const totalItemsNum = 5; // スライダーに掲載する記事数
  const sideItemsNum = 2; // センター記事のサイドにいくつ記事が見えるか
  const isTransition = ref(true);
  const move = async (direction: number) => {
    // インデックスが2→3と3→2になるときは事前にcurrentPositionを逆側にセットする
    if (direction > 0) {
      if (currentIndex.value == sideItemsNum) {
        isTransition.value = false;
        currentPosition.value = moveValue.value * (sideItemsNum + 1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        isTransition.value = true;
      }
    } else {
      if (currentIndex.value == totalItemsNum - sideItemsNum) {
        isTransition.value = false;
        currentPosition.value = -moveValue.value * (sideItemsNum + 1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        isTransition.value = true;
      }
    }

    // インデックスは 0 to totalItemsNum
    if (currentIndex.value + direction <= 0) {
      currentIndex.value = totalItemsNum - 1;
    } else if (currentIndex.value + direction >= totalItemsNum) {
      await resetProgressBar();
      currentIndex.value = 0;
    } else {
      currentIndex.value += direction;
    }
    currentPosition.value -= moveValue.value * direction;
    console.log(
      `direction: ${direction}, currentIndex: ${currentIndex.value}, currentPosition: ${currentPosition.value}`
    );
  };

  const resetProgressBar = async () => {
    currentIndex.value = -1;
    await new Promise((resolve) => setTimeout(resolve, 50));
    console.log('resetProgressBar');
  };

  setInterval(() => {
    move(1);
  }, 5000);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    nextTick(() => {
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="relative flex w-full flex-col items-center">
    <AtomsTopFirstviewBackground></AtomsTopFirstviewBackground>
    <!-- TOPスライダー（Bancor Journal） -->
    <div
      class="relative mt-[100px] flex w-full flex-col items-center justify-center overflow-hidden pc:mt-[100px]"
    >
      <!-- 左やじるし -->
      <button
        @click="move(-1)"
        class="absolute left-[5%] top-[50%] z-20 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
      >
        <font-awesome-icon
          class="text-[16px] text-white pc:text-[32px]"
          :icon="['fas', 'angle-left']"
        />
      </button>
      <!-- 右やじるし -->
      <button
        @click="move(1)"
        class="absolute right-[5%] top-[50%] z-20 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
      >
        <font-awesome-icon
          class="text-[16px] text-white pc:text-[32px]"
          :icon="['fas', 'angle-right']"
        />
      </button>
      <!-- TOPスライダー -->
      <div
        id="top-slider"
        class="flex justify-center gap-[36px] pc:gap-[72px]"
        :class="{
          'transition-transform': isTransition,
          'duration-500': isTransition,
          'ease-in-out': isTransition,
        }"
        :style="{ transform: `translateX(${currentPosition}px)` }"
      >
        <NuxtLink
          v-for="(number, index) in sliderIndexArray"
          :to="`/journal/${journalListSlider[number].topicsId}`"
          :key="index"
          class="flex h-[320px] w-[320px] flex-none flex-col overflow-hidden rounded-2xl shadow-md pc:h-[500px] pc:w-[500px]"
        >
          <!-- アイキャッチ画像 -->
          <div class="h-[268.8px] w-full overflow-hidden pc:h-[420px]">
            <img
              :src="top01Object.sliderContents[number].imgUrl"
              :alt="top01Object.sliderContents[number].title"
              class="h-full w-full scale-100 object-cover transition-transform duration-500 hover:scale-125"
            />
          </div>
          <!-- タイトル枠 -->
          <div class="flex h-[80px] w-full items-center gap-2 bg-white pl-3">
            <!-- アイコン -->
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white"
            >
              <img
                :src="`${top01Object.sliderContents[number].iconUrl}`"
                alt="Bancor"
                class="w-8 object-cover"
              />
            </div>
            <!-- タイトル -->
            <div class="w-[85%] text-[14px] font-bold pc:text-[18px]">
              {{ top01Object.sliderContents[number].title }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- TOPスライダーのプログレスバー -->
    <div
      class="mt-10 flex h-[26px] w-[296px] items-center justify-center gap-3 rounded-full bg-white backdrop-blur-xl"
    >
      <div
        v-for="(number, index) in [0, 1, 2, 3, 4]"
        :key="index"
        class="relative h-[6px] overflow-hidden rounded-full bg-[#e2e8f0] duration-500"
        :class="{
          'w-[80px]': index == currentIndex,
          'w-[32px]': index != currentIndex,
        }"
      >
        <div
          class="absolute h-full w-full rounded-full bg-[#334155]"
          :class="{
            'transition-transform': index == currentIndex,
            'translate-x-[0]': index <= currentIndex,
            'translate-x-[-100%]': index > currentIndex,
            'ease-linear': index == currentIndex,
            'duration-5000': index == currentIndex,
          }"
        ></div>
      </div>
    </div>
    <!-- 協賛会社一覧 -->
    <div
      class="mt-8 flex h-[44px] items-center justify-start overflow-hidden tb:h-[88px]"
    >
      <div
        class="flex animate-slide-infinite"
        :style="{ animationDuration: `${6 * 60}s` }"
      >
        <div
          v-for="(item, index) in Array(
            top01Object.achievementLogos.length * 4
          ).fill(null)"
          :key="index"
          class="h-full w-[108px] flex-shrink-0 tb:w-[216px]"
        >
          <img
            :src="`${top01Object.achievementLogos[index % 12].imgUrl}`"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
