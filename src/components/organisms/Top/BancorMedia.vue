<script setup lang="ts">
  // Top02からデータを取得
  import { useTop02Store } from '~/stores/top02';
  import { Top02 } from '~/types/top02';
  const top02Store = useTop02Store();
  if (Object.keys(top02Store.bancorNotionList).length == 0) {
    await top02Store.fetchTop02();
  }
  const top02Object: Top02 = top02Store;

  // Bancorメディア3種（Notion, Note, YouTube）
  const bancorMediaNames: ('Notion' | 'Note' | 'YouTube')[] = [
    // 'Notion',
    'Note',
    // 'YouTube',
  ];
  const bancorMediaSmallNames: ('notion' | 'note' | 'youtube')[] = [
    // 'notion',
    'note',
    // 'youtube',
  ];
  const selectedMediaIndex = ref(0);
  const selectMedia = (index: number) => {
    selectedMediaIndex.value = index;
    console.log(
      `bancorMediaContents: ${JSON.stringify(bancorMediaContents.value)}`
    );
  };
  const bancorMediaContents = computed(() => {
    switch (selectedMediaIndex.value) {
      case 0:
        return top02Object.bancorNotionList;
      case 1:
        return top02Object.bancorNoteList;
      case 2:
        return top02Object.bancorYouTubeList;
      default:
        return top02Object.bancorNotionList;
    }
  });

  // 選択コンテンツの切り替え
  const selectedContentIndex = ref(0);
  const selectContent = (index: number) => {
    selectedContentIndex.value = index;
  };

  const resetBar = ref(false);
  const dissolve = ref(false);
  const changeContent = async (i: number) => {
    resetBar.value = true;
    await new Promise((resolve) => setTimeout(resolve, 50));
    selectedContentIndex.value =
      selectedContentIndex.value + i >= bancorMediaContents.value.length
        ? 0
        : selectedContentIndex.value + i < 0
        ? bancorMediaContents.value.length - 1
        : selectedContentIndex.value + i;
    resetBar.value = false;
  };

  const dissolveTransition = async () => {
    dissolve.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dissolve.value = false;
  };

  let timer: number | null = null;

  const isPaused = ref(false);
  const startTimer = () => {
    isPaused.value = false;
    timer = setInterval(async () => {
      await dissolveTransition();
      await changeContent(1);
    }, 6000);
  };

  const pauseTimer = () => {
    if (timer !== null) {
      clearInterval(timer);
      isPaused.value = true;
      timer = null;
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(
      bancorMediaContents.value[selectedContentIndex.value].linkUrl
    );
  };

  const shareContent = async () => {
    if (typeof window.navigator.share === 'function') {
      await window.navigator.share({
        title: bancorMediaContents.value[selectedContentIndex.value].title,
        text: 'Check out this content!',
        url: bancorMediaContents.value[selectedContentIndex.value].linkUrl,
      });
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log(`Web Share API 未対応ブラウザ`);
      const url = bancorMediaContents.value[selectedContentIndex.value].linkUrl;
      const text = 'Check out this content!';
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(1300);
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    nextTick(() => {
      startTimer();
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="relative flex w-11/12 flex-col pc:max-w-[1200px]">
      <!-- Bancorメディアのタイトルと各種メディア切り替えボタン -->
      <div
        class="mb-6 flex flex-col items-center justify-between gap-6 tb:flex-row tb:gap-0"
      >
        <div class="text-[20px] font-bold tb:text-[30px]">Bancorを深く知る</div>
        <div class="flex h-[30px] items-center tb:h-[60px]">
          <button
            v-for="(data, index) in bancorMediaNames"
            @click="selectMedia(index)"
            class="h-full rounded-full px-4 text-[14px] font-bold transition-colors duration-300 tb:px-8 tb:py-5 tb:text-[16px]"
            :class="{
              'bg-[#e2e8f0] text-[#18181b]': index == selectedMediaIndex,
              'bg-white text-[#94a3b8]': index != selectedMediaIndex,
            }"
          >
            {{ data }}
          </button>
        </div>
      </div>
      <!-- コンテンツ -->
      <div class="mt-3 flex w-full gap-6 bg-white tb:mt-6">
        <!-- 記事リスト -->
        <div v-if="!isSmartPhone" class="flex flex-col gap-4 tb:w-[416px]">
          <button
            v-for="(data, index) in bancorMediaContents"
            @click="selectContent(index)"
            class="flex h-[112px] w-full items-center rounded-3xl border border-[#e2e8f0] bg-white"
          >
            <div
              class="h-full w-[164px] flex-none overflow-hidden rounded-l-3xl"
            >
              <img
                :src="data.imgUrl"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div
              class="w-[252px] pl-[22px] pr-3 text-left text-[17px]"
              :class="{
                'text-black': selectedContentIndex == index,
                'text-[#94a3b8]': selectedContentIndex != index,
              }"
            >
              {{ data.title }}
            </div>
          </button>
        </div>
        <!-- 選択中記事（メイン） -->
        <div class="flex flex-col items-center pc:max-w-[860px]">
          <!-- メイン -->
          <div
            class="flex w-full flex-col overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white transition-opacity duration-1000 pc:h-[620px]"
            :class="{ 'opacity-0': dissolve, 'opacity-100': !dissolve }"
          >
            <!-- サムネイル -->
            <div class="h-[320px] w-full">
              <img
                :src="bancorMediaContents[selectedContentIndex].imgUrl"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div class="mt-3 flex flex-col px-3 pc:mt-8 pc:px-6">
              <!-- タイトル -->
              <NuxtLink
                :to="bancorMediaContents[selectedContentIndex].linkUrl"
                class="text-[18px] font-bold pc:h-[80px] pc:text-[28px]"
              >
                {{ bancorMediaContents[selectedContentIndex].title }}
              </NuxtLink>
              <!-- タグ -->
              <div class="mt-2 flex gap-2 pc:mt-4">
                <div
                  v-for="(data, index) in bancorMediaContents[
                    selectedContentIndex
                  ].tags"
                  class="flex h-8 items-center justify-center rounded-sm border px-2 text-[14px] font-bold pc:text-[16px]"
                >
                  {{ `#${data}` }}
                </div>
              </div>
              <!-- 更新日時・Copy Link・Share -->
              <div
                class="mt-6 mb-6 flex h-[56px] items-center justify-center rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-6 pc:mb-0 pc:max-w-[812px] pc:justify-between"
              >
                <!-- 更新日時 -->
                <div v-if="isPC" class="flex items-center gap-2 text-[#18181b]">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  <div class="text-[15px]">
                    {{ `最終更新日時：2023.12.10` }}
                  </div>
                </div>
                <!-- Copy Link, Share -->
                <div class="flex gap-6 text-[#94a3b8]">
                  <button
                    class="flex items-center gap-2 text-[16px] font-bold"
                    @click="copyLink"
                  >
                    <div>Copy Link</div>
                    <font-awesome-icon :icon="['fas', 'link']" />
                  </button>
                  <button
                    class="flex items-center gap-2 text-[16px] font-bold"
                    @click="shareContent"
                  >
                    <div>Share</div>
                    <font-awesome-icon :icon="['fas', 'share-nodes']" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- プログレスバー -->
          <div
            class="relative my-3 h-2.5 w-full overflow-hidden rounded-full bg-[#e2e8f0]"
          >
            <div
              class="absolute z-10 h-full w-full rounded-full bg-[#334155]"
              :class="{
                'translate-x-[-100%]': resetBar || isPaused,
                'translate-x-0': !resetBar && !isPaused,
                'transition-transform': !resetBar && !isPaused,
                'duration-6000': !resetBar && !isPaused,
                'ease-linear': !resetBar && !isPaused,
              }"
            ></div>
          </div>
          <!-- Back/Next -->
          <div
            class="flex h-[102px] w-full items-center justify-center gap-6 rounded-3xl border border-[#e2e8f0] bg-white text-[#94a3b8] pc:gap-12"
          >
            <!-- Back -->
            <button
              @click="changeContent(1)"
              class="group flex items-center gap-2"
            >
              <font-awesome-icon
                :icon="['fas', 'left-long']"
                class="text-[18px] transition-transform duration-300 group-hover:-translate-x-1"
              />
              <div class="text-[24px] font-bold pc:text-[28px]">Back</div>
            </button>
            <!-- Pause -->
            <button
              v-if="!isPaused"
              @click="pauseTimer"
              class="flex h-14 w-14 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#f8fafc]"
            >
              <div class="flex gap-2">
                <div
                  v-for="i in 2"
                  class="h-6 w-[3px] rounded-full bg-[#94a3b8]"
                ></div>
              </div>
            </button>
            <!-- Resume -->
            <button
              v-else
              @click="startTimer"
              class="flex h-14 w-14 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#f8fafc]"
            >
              <font-awesome-icon :icon="['fas', 'play']" class="text-[20px]" />
            </button>
            <!-- Next -->
            <button
              @click="changeContent(1)"
              class="group flex items-center gap-2"
            >
              <div class="text-[24px] font-bold pc:text-[28px]">Next</div>
              <font-awesome-icon
                :icon="['fas', 'right-long']"
                class="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
          <!-- 記事一覧 -->
          <div class="mt-3 flex w-full justify-end">
            <NuxtLink
              :to="
                top02Object.bancorMediaLink[
                  `${bancorMediaSmallNames[selectedMediaIndex]}Url`
                ]
              "
              class="font-bold text-[#2563eb]"
              >記事一覧はこちら</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
