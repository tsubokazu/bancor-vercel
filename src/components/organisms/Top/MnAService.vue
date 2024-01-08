<script setup lang="ts">
  // Top01からデータを取得
  import { useTop01Store } from '~/stores/top01';
  import { Top01 } from '~/types/top01';
  const top01Store = useTop01Store();
  if (Object.keys(top01Store.topTitles).length == 0) {
    await top01Store.fetchTop01();
  }
  const top01Object: Top01 = top01Store;

  // TOPメッセージを4秒ごとに切り替えるアニメーション
  const currentMnAIllustIndex = ref(0);
  const currentMnAIllust = ref(
    top01Object.MnAIllusts[currentMnAIllustIndex.value]
  );
  const isOpacity0 = ref(false);
  const changeMnAIllust = async () => {
    isOpacity0.value = true;
    await new Promise((resolve) => setTimeout(resolve, 150));
    if (currentMnAIllustIndex.value + 1 < top01Object.MnAIllusts.length) {
      currentMnAIllustIndex.value += 1;
    } else {
      currentMnAIllustIndex.value = 0;
    }
    currentMnAIllust.value =
      top01Object.MnAIllusts[currentMnAIllustIndex.value];
    await new Promise((resolve) => setTimeout(resolve, 150));
    isOpacity0.value = false;
  };
  setInterval(async () => {
    await changeMnAIllust();
  }, 3000);
</script>

<template>
  <div class="flex w-full justify-center">
    <div
      class="relative flex w-11/12 flex-col justify-between rounded-lg py-[36px] pl-4 pr-4 shadow-lg tb:flex-row tb:pl-[40px] pc:max-w-[1200px] pc:py-[78px] pc:pl-[80px] pc:pr-[30px]"
    >
      <!-- M&Aサービス説明メニュー -->
      <div class="flex max-w-[513px] flex-col">
        <!-- タイトル -->
        <div
          class="text-[24px] font-bold leading-[2.4rem] text-[#2563eb] pc:text-[30px] pc:leading-[3.5rem]"
        >
          成果重視のBancorから<br />
          新たなM&Aサービスが誕生
        </div>
        <!-- 説明 -->
        <div class="mt-8 text-[14px] leading-6 tb:text-[16px]">
          ウェブや通信の業界に特化したM&Aサービスをご紹介いたします。顧客企業が既存運用しているWebサイトやアプリ・システムをのUI/UXの再構築を行い、企業価値を引き上げた上で、会社または事業の買収・売却支援を行います。
        </div>
        <!-- サービスメニュー -->
        <div
          class="mt-6 flex w-full flex-col gap-4 rounded-lg bg-[#f8fafc] px-6 py-8"
        >
          <NuxtLink
            v-for="(data, index) in top01Object.MnAContents"
            :key="index"
            :to="data.linkUrl"
            class="group flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <!-- アイコン -->
              <div class="flex h-7 w-7 items-center justify-center">
                <img :src="data.iconUrl" alt="" class="object-cover" />
              </div>
              <!-- タイトル -->
              <div class="text-[14px] font-bold tb:text-[17px]">
                {{ data.title }}
              </div>
            </div>
            <font-awesome-icon
              class="text-[16px] text-[#94a3b8] transition-transform duration-300 group-hover:translate-x-1"
              :icon="['fas', 'angle-right']"
            />
          </NuxtLink>
        </div>
      </div>
      <!-- M&Aサービスイラスト -->
      <div class="flex items-center">
        <img
          :src="currentMnAIllust.imgUrl"
          alt=""
          class="object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': isOpacity0, 'opacity-100': !isOpacity0 }"
        />
      </div>
      <!-- Newアイコン -->
      <div
        class="absolute right-10 top-[-25px] flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-1 text-[18px] text-white pc:px-10 pc:py-2 pc:text-[28px]"
      >
        New
      </div>
      <!-- イラスト切り替えナビゲーション -->
      <div class="absolute bottom-10 right-10 flex gap-2 tb:gap-3">
        <div
          v-for="(data, index) in top01Object.MnAIllusts.length"
          class="h-1.5 w-1.5 tb:h-2.5 tb:w-2.5"
          :class="{
            'bg-[#020617]': currentMnAIllustIndex == index,
            'bg-[#e2e8f0]': currentMnAIllustIndex != index,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
