<script setup lang="ts">
  import { usePagesBeautyStore } from '~/stores/pages/beauty';
  import { BeautyObject } from '~/types/pages/beauty';
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 放課後等デイサービスページ情報をPiniaから取得
  const pagesBeautyStore = usePagesBeautyStore();
  if (Object.keys(pagesBeautyStore.slider).length == 0) {
    await pagesBeautyStore.fetchPagesBeauty();
  }
  const {
    slider,
    topics,
    menu,
    description,
    problem,
    features,
    treatment,
    review,
    stores,
    comparison,
    copy,
    flow,
    question,
  }: BeautyObject = pagesBeautyStore;

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const { valueUpdate }: SystemDevObject = pagesSystemDevStore;

  // 写真をスライドする
  const sliderIndex = ref(0);
  const sliderDateText = ref(`TOPIC | ${slider.items[sliderIndex.value].date}`);
  const sliderMaxChars = ref(
    isSmartPhone.value ? 20 : isTablet.value ? 40 : 70
  );
  const clickSliderLeftButton = () => {
    sliderIndex.value = sliderIndex.value - 1 < 0 ? 0 : sliderIndex.value - 1;
  };
  const clickSliderRightButton = () => {
    sliderIndex.value =
      sliderIndex.value + 1 >= slider.items.length
        ? slider.items.length - 1
        : sliderIndex.value + 1;
  };

  // 星ノ学園ご利用ガイドラインの「ご利用までの流れ」と「1日の過ごし方」の切り替え
  const guidelineIndex = ref(0);
  const clickUsageFlowButton = () => {
    guidelineIndex.value = 0;
  };
  const clickDailyRoutineButton = () => {
    guidelineIndex.value = 1;
  };

  // ご利用料金の項目で「放課後デイサービス」と「児童発達支援」の概要・利用料金を切り替える
  const feeIndex = ref(0);
  const clickAfterschoolServiceOverview = () => {
    feeIndex.value = 0;
  };
  const clickAfterschoolServiceFee = () => {
    feeIndex.value = 1;
  };
  const clickChildDevelopmentOverview = () => {
    feeIndex.value = 2;
  };
  const clickChildDevelopmentFee = () => {
    feeIndex.value = 3;
  };

  // 施設のスゴイところ切り替えフラグ
  const strengthFlag = ref(0);
  const changeStrengthFlag = () => {
    if (strengthFlag.value == 0) {
      strengthFlag.value = 1;
    } else if (strengthFlag.value == 1) {
      strengthFlag.value = 2;
    } else if (strengthFlag.value == 2) {
      strengthFlag.value = 0;
    } else {
      strengthFlag.value = 0;
    }
  };

  const updateMaxChars = () => {
    console.log(`isSmartPhone: ${isSmartPhone.value}`);
    console.log(`isTablet: ${isTablet.value}`);
    console.log(`isPC: ${isPC.value}`);

    if (isSmartPhone.value) {
      sliderMaxChars.value = 20;
    } else if (isTablet.value) {
      sliderMaxChars.value = 40;
    } else if (isPC.value) {
      sliderMaxChars.value = 70;
    }
  };

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
      updateMaxChars();
      console.log(windowWidth.value);
      console.log(sliderMaxChars.value);
    }
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div
    class="flex w-full flex-col items-center overflow-hidden after:-z-20 after:h-full after:w-full after:bg-[#153c66]"
  >
    <!-- 背景 -->
    <div class="absolute top-[400px] left-0 -z-10 flex flex-col justify-center">
      <AtomsBasicIcon
        iconUrl="/images/beauty/index/background01.png"
        size="w-full"
      ></AtomsBasicIcon>
      <AtomsBasicIcon
        class="-translate-y-1"
        iconUrl="/images/beauty/index/background02.png"
        size="w-full"
      ></AtomsBasicIcon>
    </div>

    <!-- ボディ -->
    <div class="relative flex w-full flex-col items-center">
      <!-- タイトル -->
      <div
        class="mt-[150px] flex w-[95%] items-center space-x-2 pt-14 pb-10 pc:max-w-[1200px]"
      >
        <AtomsBasicTitle
          size="text-[24px] tb:text-[28px] pc:text-[32px]"
          text="美容事業"
        ></AtomsBasicTitle>
        <AtomsBasicTitle
          size="text-[16px] tb:text-[18px] pc:text-[20px]"
          text="小顔矯正サロン"
        ></AtomsBasicTitle>
      </div>

      <!-- スライダー -->
      <div
        class="mb-9 flex w-[95%] flex-col items-center space-y-4 pc:max-h-[364px] pc:max-w-[1200px]"
      >
        <!-- スライダー本体 -->
        <div
          class="flex w-full items-center space-x-0 tb:space-x-8 pc:max-h-[320px]"
        >
          <!-- ボタン（左） -->
          <div
            class="cursor-pointer text-[40px] text-bancor-gray100"
            :class="{
              'opacity-0': sliderIndex < 1,
              'cursor-default': sliderIndex < 1,
            }"
            @click="clickSliderLeftButton"
          >
            <font-awesome-icon :icon="['fas', 'angle-left']" />
          </div>
          <!-- 写真 -->
          <div
            class="relative flex h-[320px] w-full max-w-[1100px] overflow-hidden rounded-3xl tb:w-[90%]"
          >
            <div
              class="absolute top-0 left-0 h-full w-full bg-cover bg-center"
              :style="{
                backgroundImage: `url(${slider.items[sliderIndex].imgUrl})`,
              }"
            ></div>
            <div
              class="absolute top-0 left-0 flex h-full w-full items-center justify-center"
            >
              <div class="relative h-full w-full">
                <AtomsBasicTitle
                  class="absolute top-2 right-4 text-white"
                  size="text-[14px]"
                  :isBold="false"
                  :text="sliderDateText"
                ></AtomsBasicTitle>
                <AtomsBasicTitle
                  class="absolute bottom-8 left-8 text-white"
                  size="text-[18px] tb:text-[20px] pc:text-[22px]"
                  :text="slider.items[sliderIndex].title"
                ></AtomsBasicTitle>
                <AtomsBasicOneline
                  class="absolute bottom-4 left-8 text-white"
                  size="text-[14px]"
                  :text="slider.items[sliderIndex].outline"
                  :maxChars="sliderMaxChars"
                  :isBold="false"
                ></AtomsBasicOneline>
              </div>
            </div>
          </div>
          <!-- ボタン（右） -->
          <div
            class="cursor-pointer text-[40px] text-bancor-gray100"
            :class="{
              'opacity-0': sliderIndex > 3,
              'cursor-default': sliderIndex > 3,
            }"
            @click="clickSliderRightButton"
          >
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </div>
        </div>
        <!-- ドットと数字 -->
        <div class="flex items-center space-x-4">
          <div
            v-for="(item, index) in slider.items"
            :key="index"
            class="flex h-[8px] w-[8px] rounded-full bg-white"
            :class="{
              'bg-bancor-orange100': index == sliderIndex,
              'bg-bancor-gray100': index != sliderIndex,
            }"
          ></div>
          <div
            class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#e2e8f0] text-[#94a3b8]"
          >
            {{ sliderIndex + 1 }}
          </div>
        </div>
      </div>

      <!-- お知らせ -->
      <div
        class="mb-20 flex h-14 w-[95%] items-center rounded-2xl border border-[#cbd5e1] bg-white p-6 font-bold pc:max-w-[1100px]"
      >
        {{ topics.title }} : {{ topics.topics[0].title }}
      </div>

      <!-- 予約・口コミメニュー -->
      <div
        class="mb-[102px] flex w-[95%] flex-col items-center space-y-11 pc:max-w-[1200px]"
      >
        <AtomsBasicTitle
          size="text-[24px] tb:text-[28px] pc:text-[32px]"
          :text="menu.title"
        ></AtomsBasicTitle>
        <AtomsBasicOutline
          class="w-[95%] pc:max-w-[760px]"
          size="text-[16px]"
          :text="menu.outline"
        ></AtomsBasicOutline>
        <div
          class="flex flex-col items-center justify-center space-y-4 tb:flex-row tb:space-y-0 tb:space-x-8"
        >
          <NuxtLink
            :to="menu.menus[0].linkUrl"
            class="flex h-[53px] w-[288px] items-center justify-center rounded-full border border-[#e09a39] bg-white font-bold text-[#e09a39]"
          >
            {{ menu.menus[0].title }}
          </NuxtLink>
          <NuxtLink
            :to="menu.menus[1].linkUrl"
            class="flex h-[53px] w-[288px] items-center justify-center rounded-full border border-[#e09a39] bg-white font-bold text-[#e09a39]"
          >
            {{ menu.menus[1].title }}
          </NuxtLink>
        </div>
      </div>

      <!-- 説明(部プラの小顔矯正とは) -->
      <div
        class="mb-[80px] flex w-[95%] flex-col items-center space-y-[76px] pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <AtomsBasicTitle
          size="text-[24px] tb:text-[28px] pc:text-[32px]"
          :text="description.title"
        ></AtomsBasicTitle>
        <!-- 説明 -->
        <div
          class="flex flex-col items-center space-y-6 tb:flex-row tb:justify-between tb:space-y-0"
        >
          <!-- 写真 -->
          <AtomsBasicIcon
            size="h-[393px]"
            iconUrl="/images/beauty/index/description/01.png"
          ></AtomsBasicIcon>
          <!-- 文章 -->
          <div class="flex flex-col space-y-[62px] tb:w-[60%] tb:pl-4">
            <AtomsBasicTitle
              size="text-[20px] tb:text-[24px] pc:text-[28px]"
              :text="description.subTitle"
              space-y="space-y-2"
            ></AtomsBasicTitle>
            <AtomsBasicOutline
              size="text-[16px]"
              :text="description.outline"
              :isBold="false"
            ></AtomsBasicOutline>
          </div>
        </div>
      </div>

      <!-- こんなお悩みを解決できます -->
      <div
        class="mb-[80px] flex w-[95%] items-center justify-center pc:max-w-[1200px]"
      >
        <AtomsBasicIcon
          size="pc:h-[410px]"
          iconUrl="/images/beauty/index/problem/01.png"
        ></AtomsBasicIcon>
      </div>

      <!-- ブプラの3つの特徴 -->
      <div
        class="mb-[80px] flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-[51px] text-[32px] font-bold text-[#e09a39]">
          ブプラの<span class="text-[56px]">3</span>つの特徴
        </div>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[73px]"
          size="text-[16px]"
          :text="features.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- 特徴3つ -->
        <div class="flex w-full flex-col space-y-[40px]">
          <div
            v-for="feature in features.features"
            class="flex w-full flex-col items-center justify-between tb:flex-row"
          >
            <!-- イラスト -->
            <div
              class="mb-3 flex h-[237px] w-[90%] items-center justify-center rounded-xl bg-white tb:mb-0 tb:w-[446px]"
            >
              <AtomsBasicIcon
                size="h-[80%]"
                :iconUrl="feature.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 本文 -->
            <div class="flex w-full flex-col items-center tb:w-[60%]">
              <AtomsBasicTitle
                class="mb-[47px]"
                size="text-[18px] tb:text-[22px] pc:text-[24px]"
                :text="feature.title"
                space-y="space-y-2"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                class="mb-8 tb:border-l-[3px] tb:border-[#e2e8f0] tb:pl-4"
                size="text-[16px]"
                :text="feature.outline"
                :isBold="false"
              ></AtomsBasicOutline>
              <NuxtLink
                :to="feature.linkUrl"
                class="flex h-[53px] w-[288px] items-center justify-center rounded-full bg-[#e09a39] text-[18px] font-bold text-white"
              >
                {{ feature.buttonTitle }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- 施術メニュー -->
      <div
        class="mb-[80px] flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-[51px] text-[32px] font-bold text-[#e09a39]">
          {{ treatment.title }}
        </div>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[73px]"
          size="text-[16px]"
          :text="treatment.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- メニュー -->
        <div class="flex w-full flex-col space-y-8">
          <div
            v-for="item in treatment.treatments"
            class="flex w-full flex-col items-center rounded-3xl shadow-md tb:h-[300px] tb:flex-row"
          >
            <!-- クーポン詳細 -->
            <AtomsBasicIcon
              class="flex h-full items-center justify-center bg-[#e09a39] text-[20px] text-white tb:w-[600px] tb:rounded-l-3xl"
              size="pc:h-full"
              :iconUrl="item.imgUrl"
            ></AtomsBasicIcon>
            <!-- クーポンリンク -->
            <div
              class="flex w-[600px] flex-col items-center justify-center bg-white py-6 tb:py-0"
            >
              <AtomsBasicTitle
                class="mb-[16px] text-[#94a3b8]"
                size="text-[16px]"
                :text="item.subTitle"
              ></AtomsBasicTitle>
              <AtomsBasicTitle
                class="mb-[26px]"
                size="text-[28px]"
                :text="item.title"
              ></AtomsBasicTitle>
              <NuxtLink
                :to="item.couponLinkUrl"
                class="flex h-[53px] w-[288px] items-center justify-center rounded-full bg-[#e09a39] text-[18px] font-bold text-white"
              >
                {{ item.couponTitle }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- お客様の声 -->
      <div
        class="mb-[80px] flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-[51px] text-[32px] font-bold text-[#e09a39]">
          {{ review.title }}
        </div>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[57px]"
          size="text-[16px]"
          :text="review.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- レビュー一覧 -->
        <div class="mb-[40px] flex w-full flex-col space-y-8">
          <div v-for="item in review.reviews">
            <!-- ユーザー情報 -->
            <div class="mb-4 flex items-center">
              <AtomsBasicIcon
                class="ml-[50px]"
                size="h-[40px]"
                iconUrl="/images/beauty/index/review/icon.png"
              ></AtomsBasicIcon>
              <AtomsBasicTitle
                class="ml-[12px]"
                size="text-[17px]"
                :text="item.name"
              ></AtomsBasicTitle>
              <div class="ml-[9px] h-[40px] w-[2px] bg-[#cbd5e1]"></div>
              <AtomsBasicTitle
                class="ml-[12px]"
                size="text-[17px]"
                :text="item.age"
                :is-bold="false"
              ></AtomsBasicTitle>
            </div>
            <!-- レビュー内容 -->
            <div
              class="relative flex w-full flex-col rounded-3xl border border-[#cbd5e1] py-[32px] px-[50px]"
            >
              <!-- ピックアップ -->
              <AtomsBasicIcon
                v-if="item.isPickup"
                class="absolute top-0 left-6"
                icon-url="/images/beauty/index/review/pickup.png"
                size="h-[28px]"
              ></AtomsBasicIcon>
              <!-- レビュー本文 -->
              <AtomsBasicOutline
                class="mb-[31px]"
                size="text-[16px]"
                :text="item.review"
                :isBold="false"
              ></AtomsBasicOutline>
              <!-- レビューの点数 -->
              <div
                class="mb-[30px] flex w-[90%] flex-wrap items-center rounded-lg border border-[#cbd5e1] bg-[#f1f5f9] px-[16px] py-[20px] pc:max-w-[1100px]"
              >
                <div class="mr-[16px] font-bold">
                  総合評価 {{ item.totalStar }}
                </div>
                <!-- ☆星 -->
                <div class="mr-[12px] flex items-center">
                  <div
                    v-for="i in item.totalStar"
                    :key="i"
                    class="text-[#e09a39]"
                  >
                    <font-awesome-icon :icon="['fas', 'star']" />
                  </div>
                  <div
                    v-for="i in 5 - item.totalStar"
                    :key="i"
                    class="text-[#828282]"
                  >
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <div>A</div>
                  </div>
                </div>
                <!-- 区切り線 -->
                <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <!-- 雰囲気 -->
                <div class="mr-[14px]">雰囲気 {{ item.atmosphereStar }}</div>
                <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <!-- 接客サービス -->
                <div class="mr-[14px]">
                  接客サービス {{ item.hospitalityStar }}
                </div>
                <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <!-- 技術・仕上がり -->
                <div class="mr-[14px]">
                  技術・仕上がり {{ item.techniqueStar }}
                </div>
                <div class="mr-[14px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <!-- メニュー・料金 -->
                <div class="mr-[14px]">
                  メニュー・料金 {{ item.menuPriceStar }}
                </div>
              </div>
              <!-- 予約時のクーポン・メニュー -->
              <div class="flex flex-wrap items-center">
                <div class="mr-[16px]">予約時のクーポン・メニュー</div>
                <div class="mr-[16px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <div
                  v-for="(menu, index) in item.usedMenu"
                  class="mr-[16px] flex h-[25px] w-[58px] items-center justify-center rounded-sm py-[7px] px-[8px] text-[14px]"
                  :class="{
                    'bg-[#f87171] text-white': index == 0,
                    'bg-[#c084fc] text-white': index == 1,
                    'bg-[#60a5fa] text-white': index == 2,
                    'bg-[#34d399] text-white': index == 3,
                    'bg-[#fbbf24] text-white': index == 4,
                  }"
                >
                  {{ menu }}
                </div>
                <div class="mr-[16px] h-[25px] w-[1px] bg-[#cbd5e1]"></div>
                <div class="text-[15px]">{{ item.usedCoupon }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- もっと見るボタン -->
        <div class="flex justify-center">
          <NuxtLink
            :to="review.linkUrl"
            class="flex h-[53px] w-[288px] items-center justify-center rounded-full bg-[#e09a39] text-[18px] font-bold text-white"
          >
            口コミをもっとみる
          </NuxtLink>
        </div>
      </div>

      <!-- 店舗情報 -->
      <div
        class="mb-[80px] flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-[51px] text-[32px] font-bold text-[#e09a39]">
          {{ stores.title }}
        </div>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[57px]"
          size="text-[16px]"
          :text="stores.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- 店舗一覧 -->
        <div class="flex w-full space-x-4 overflow-auto">
          <div v-for="item in stores.stores" class="flex flex-col space-y-4">
            <!-- 写真 -->
            <div
              class="relative flex h-[174px] w-[282px] items-center justify-center rounded-3xl shadow-md"
            >
              <div
                class="absolute top-2 right-2 flex h-[20px] w-[76px] items-center justify-center rounded-full bg-[#e09a39] py-4 font-bold text-white"
              >
                {{ item.place }}
              </div>
              <AtomsBasicIcon
                size="h-full"
                iconUrl="/images/beauty/index/stores/01.png"
              ></AtomsBasicIcon>
            </div>
            <!-- 店舗名リンク -->
            <NuxtLink
              :to="item.linkUrl"
              class="flex items-center space-x-4 pb-6 text-[20px]"
            >
              <font-awesome-icon :icon="['fas', 'angle-right']" />
              <div class="font-bold">{{ item.name }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Before & After -->
      <div
        class="relative flex w-[95%] flex-col items-center pc:h-[787px] pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-[51px] text-[32px] font-bold text-[#e09a39]">
          {{ comparison.title }}
        </div>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[480px]"
          size="text-[16px]"
          :text="comparison.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- プラス説明 -->
        <AtomsBasicOutline
          class="mb-[57px] w-[60%]"
          size="text-[16px]"
          :text="comparison.outline2"
        ></AtomsBasicOutline>
        <!-- もっとみる -->
        <div class="flex justify-center">
          <NuxtLink
            to="/"
            class="flex h-[53px] w-[288px] items-center justify-center rounded-full bg-white text-[18px] font-bold text-[#e09a39]"
          >
            もっとみる
          </NuxtLink>
        </div>

        <!-- Before & After -->
        <div class="absolute bottom-0 -z-10 flex h-[554px] w-screen">
          <div class="h-full w-1/2 bg-[#cbd5e1]"></div>
          <div class="h-full w-1/2 bg-[#e09a39]"></div>
        </div>
        <div
          class="absolute bottom-[250px] -translate-x-[500px] -rotate-45 text-[122px] font-bold text-[#e2e8f0]"
        >
          Before
        </div>
        <div
          class="absolute bottom-[250px] translate-x-[500px] -rotate-45 text-[122px] font-bold text-[#e5b140]"
        >
          After
        </div>
        <!-- 写真比較 -->
        <AtomsBasicIcon
          class="absolute bottom-[250px] -translate-x-[200px]"
          size="h-[398px]"
          iconUrl="/images/beauty/index/comparison/01.png"
        >
        </AtomsBasicIcon>
        <div class="absolute bottom-[450px] text-[25px] text-[#94a3b8]">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
        <AtomsBasicIcon
          class="absolute bottom-[250px] translate-x-[200px]"
          size="h-[398px]"
          iconUrl="/images/beauty/index/comparison/02.png"
        >
        </AtomsBasicIcon>
      </div>

      <!-- コピー -->
      <div class="relative mb-[80px] h-[648px] w-full pc:max-w-[1920px]">
        <div class="absolute z-10 h-full w-full bg-[#020620] opacity-40"></div>
        <img
          class="h-full object-cover"
          src="/images/beauty/index/copy/01.png"
        />
        <div
          class="absolute top-[146px] z-20 translate-x-[100px] text-[56px] font-bold text-white"
        >
          {{ copy.copy1 }}
        </div>
        <div
          class="absolute top-[301px] z-20 translate-x-[100px] text-[56px] font-bold text-white"
        >
          {{ copy.copy2 }}
        </div>
        <div
          class="absolute top-[456px] z-20 translate-x-[100px] text-[56px] font-bold text-white"
        >
          {{ copy.copy3 }}
        </div>
        <div
          class="absolute top-[400px] z-20 flex h-[178px] w-[178px] translate-x-[800px] flex-col items-center justify-center rounded-full border border-white text-white"
        >
          <div class="text-[15px]">{{ copy.buttonTitle }}</div>
          <div class="text-[38px]">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>

      <!-- 施術までの流れ -->
      <div class="mb-[141px] flex w-[95%] flex-col pc:max-w-[1200px]">
        <!-- タイトル -->
        <AtomsBasicTitle
          class="mb-[64px] text-[40px] font-bold text-[#683f17]"
          :text="flow.title"
        ></AtomsBasicTitle>
        <!-- 説明 -->
        <AtomsBasicOutline
          class="mb-[81px] w-[50%]"
          size="text-[16px]"
          :text="flow.outline"
          :isBold="false"
        ></AtomsBasicOutline>
        <!-- ステップ -->
        <div class="flex w-full flex-col space-y-12">
          <div
            v-for="(step, index) in flow.steps"
            class="flex flex-col space-y-6 text-[#683f17]"
          >
            <!-- ステップタイトル -->
            <div class="flex space-x-6">
              <!-- 数字 -->
              <div
                class="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#683f17] text-[24px] font-bold"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <!-- タイトル -->
              <AtomsBasicTitle
                class="flex items-center"
                size="text-[28px]"
                :text="step.title"
                color="text-[#683f17]"
              >
              </AtomsBasicTitle>
            </div>
            <!-- 内容 -->
            <div class="flex justify-between">
              <!-- 写真 -->
              <AtomsBasicIcon
                class="rounded-3xl"
                size="h-[231px]"
                :iconUrl="step.imgUrl"
              ></AtomsBasicIcon>
              <!-- 説明 -->
              <div class="flex w-[60%] flex-col space-y-[44px]">
                <!-- タイトル -->
                <AtomsBasicTitle
                  class="text-[#683f17]"
                  size="text-[20px]"
                  :text="step.subTitle"
                ></AtomsBasicTitle>
                <!-- 説明 -->
                <AtomsBasicOutline
                  class="w-[80%]"
                  size="text-[16px]"
                  :text="step.outline"
                  :isBold="false"
                  color="text-[#683f17]"
                ></AtomsBasicOutline>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- よくあるご質問 -->
      <div
        class="relative mb-[204px] flex h-[240px] w-[95%] justify-center overflow-hidden rounded-2xl pc:max-w-[800px]"
      >
        <AtomsBasicIcon
          size="h-full"
          iconUrl="/images/beauty/index/question/01.png"
        ></AtomsBasicIcon>
        <div class="absolute z-10 h-full w-full bg-[#683f17] opacity-50"></div>
        <div
          class="absolute left-0 z-20 border-r-[400px] border-t-[620px] border-[#e09a39] border-r-transparent"
        ></div>
        <NuxtLink
          :to="question.linkUrl"
          class="absolute z-30 flex h-full w-full flex-col justify-center"
        >
          <AtomsBasicTitle
            class="ml-[48px] mb-[20px] text-white"
            size="text-[16px]"
            :text="question.subTitle"
          ></AtomsBasicTitle>
          <AtomsBasicTitle
            class="ml-[48px] mb-[26px] text-white"
            size="text-[32px]"
            :text="question.title"
          ></AtomsBasicTitle>
          <div class="ml-[48px] text-[24px] text-white">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </NuxtLink>
      </div>

      <!-- Value Update -->
      <div class="relative h-[400px] w-[95%] tb:h-[834px] pc:max-w-[1100px]">
        <!-- Value Updateの大きなタイトル -->
        <AtomsBasicTitle
          class="font-futuraBold"
          spaceY="-space-y-12 tb:-space-y-24"
          size="text-[100px] tb:text-[200px]"
          :text="valueUpdate.title"
        ></AtomsBasicTitle>

        <!-- Value Updateの小さなサブタイトル -->
        <AtomsBasicOutline
          class="absolute top-[148px] left-[620px]"
          size="text-[20px]"
          :text="valueUpdate.outline"
        ></AtomsBasicOutline>

        <!-- パララックスイメージ -->
        <div class="absolute top-0 left-4 h-full w-full overflow-hidden">
          <div class="relative flex h-full w-full justify-between px-10">
            <!-- 1枚目 -->
            <ScrollParallax
              class="absolute left-0 -top-[150%] z-50"
              :speed="0.15"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[0].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 2枚目 -->
            <ScrollParallax
              class="absolute left-1/4 top-[260%] z-50"
              :speed="0.13"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[1].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 3枚目 -->
            <ScrollParallax
              class="absolute left-2/4 -top-[140%] z-50"
              :speed="0.12"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[2].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 4枚目 -->
            <ScrollParallax
              class="absolute left-3/4 top-[240%] z-50"
              :speed="0.14"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[3].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>
          </div>
        </div>
      </div>

      <!-- お問い合わせ -->
      <MoleculesFooterContact></MoleculesFooterContact>

      <!-- Bancorの取り組み　フッター -->
      <OrganismsAboutMore></OrganismsAboutMore>
    </div>
  </div>
</template>
~~/src/types/pages/daycare/daycare ~~/src/stores/pages/daycare/daycare
