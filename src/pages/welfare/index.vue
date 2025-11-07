<script setup lang="ts">
  import { usePagesDaycareStore } from '~/stores/pages/daycare/index';
  import type { DaycareObject } from '~/types/pages/daycare';
  import type { SystemDevObject } from '~/types/pages/system-development';
  import { useFacilitiesStore } from '~/stores/pages/daycare/facilities';
  import type { FacilitiesObject } from '~/types/pages/daycare/facilities';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import { useWelfareJournalStore } from '~/stores/welfareJournal';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 放課後等デイサービスページ情報をPiniaから取得
  const pagesDaycareStore = usePagesDaycareStore();
  if (Object.keys(pagesDaycareStore.header).length == 0) {
    await pagesDaycareStore.fetchPagesDaycare();
  }

  // Welfare Journal記事を取得
  const welfareJournalStore = useWelfareJournalStore();
  await welfareJournalStore.fetchJournals();
  const {
    header,
    topics,
    features,
    strength,
    policy,
    environment,
    guideline,
    contact,
    information,
    questions,
    fee,
    menu,
  }: DaycareObject = pagesDaycareStore;

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const { valueUpdate }: SystemDevObject = pagesSystemDevStore;

  // 施設情報一覧ページ情報をPiniaから取得
  const facilitiesStore = useFacilitiesStore();

  if (Object.keys(facilitiesStore.header).length == 0) {
    await facilitiesStore.fetchFacilities();
  }
  const { informations: facilitiesInformations }: FacilitiesObject =
    facilitiesStore;

  // 教育方針⇔スタッフ一覧のクリックフラグ
  const clickPolicyFlag = ref(false);
  const clickPolicyButtonTitle = ref('施設スタッフ配置状況を見てみる');
  const clickPolicyButton = () => {
    clickPolicyFlag.value = !clickPolicyFlag.value;
    clickPolicyButtonTitle.value = clickPolicyFlag.value
      ? '戻る'
      : '施設スタッフ配置状況を見てみる';
  };

  // 園内環境ページへのクリックフラグ
  const environmentIndex = ref(1);
  const clickEnvironmentButton = () => {
    environmentIndex.value =
      environmentIndex.value + 1 < environment.environments.length
        ? environmentIndex.value + 1
        : 0;
  };

  // 園内環境の写真をスライドする
  const clickEnvironmentLeftButton = () => {
    environmentIndex.value =
      environmentIndex.value - 1 < 0
        ? environment.environments.length - 1
        : environmentIndex.value - 1;
  };
  const clickEnvironmentRightButton = () => {
    environmentIndex.value =
      environmentIndex.value + 1 >= environment.environments.length
        ? 0
        : environmentIndex.value + 1;
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

  // 3秒ごとにstrengthFlagを切り替える（onMountedで実行）

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
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
    window.addEventListener('resize', updateWidth);
    setInterval(() => {
      changeStrengthFlag();
    }, 3000);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center overflow-hidden">
    <!-- ヘッダー -->
    <div class="h-[300px] w-full tb:h-[240px] pc:h-[360px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
        :filter="false"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative flex w-full flex-col items-center">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-48 flex w-[95%] flex-col space-y-3 tb:-top-36 pc:-top-48 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[24px] tb:text-[32px] pc:text-[40px]"
        ></AtomsFuturaItalicText>
      </div>
      <OrganismsJournalTopics></OrganismsJournalTopics>
      <!-- お子様だけでなく・・・ -->
      <div
        class="relative mb-16 w-[95%] flex-col items-center justify-center tb:space-y-4 pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex w-full flex-col items-center space-y-12 tb:mb-16">
          <AtomsPointColorText
            class="items-center text-center pc:max-w-[760px]"
            :text="features.title"
            size="text-[18px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
            pointText="温かい未来"
          ></AtomsPointColorText>

          <!-- カード -->
          <div
            class="mb-12 flex w-[95%] flex-col items-center justify-between space-y-4 tb:flex-row tb:space-x-10 tb:space-y-0 pc:max-w-[1200px]"
          >
            <div
              v-for="(feature, index) in (features.features || [])"
              class="relative flex flex-col items-center justify-between bg-white py-2 tb:py-6 pc:max-h-[420px]"
              :key="feature.title"
            >
              <!-- カード内イメージとタイトル -->
              <AtomsBasicIcon
                size="h-[200px] pc:max-h-[272px]"
                :iconUrl="feature.imgUrl"
              ></AtomsBasicIcon>
              <AtomsBasicTitle
                class="mb-2 text-center"
                spaceY="space-y-1"
                :text="feature.title"
                size="text-[16px] tb:text-[18px] pc:text-[20px]"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                class="text-center"
                :text="feature.outline"
                size="text-[16px] tb:text-[16px] pc:text-[16px]"
                color="text-bancor-gray1300"
                :isBold="false"
              ></AtomsBasicOutline>
            </div>
          </div>
        </div>
        <!-- 背景 -->
        <div class="absolute bottom-5 -z-50">
          <AtomsBasicIcon
            size="pc:h-[881px]"
            iconUrl="/images/daycare/index/background-01.png"
          >
          </AtomsBasicIcon>
        </div>
      </div>

      <!-- 施設のスゴイところ -->
      <div
        class="relative mb-16 flex h-[770px] w-[95%] flex-col space-y-4 pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex w-full flex-col items-center space-y-5 tb:mb-16">
          <AtomsPointColorText
            class="items-center text-center"
            :text="strength.title"
            size="text-[18px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center"
            :text="strength.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>

          <!-- 強み -->
          <div
            class=":space-x-10 relative mb-12 flex w-[95%] flex-col items-center justify-between space-y-4 tb:flex-row tb:space-y-0 pc:max-w-[1200px]"
          >
            <!-- スゴイところ3点を切り替える -->
            <div
              class="flex w-full flex-col items-center space-x-8 pc:flex-row pc:space-x-0"
            >
              <div
                class="flex h-[650px] flex-col items-center space-x-8 pc:flex-row"
              >
                <!-- イラスト -->
                <AtomsBasicIcon
                  size="h-[330px] pc:h-[550px]"
                  :iconUrl="strength.strengths[strengthFlag].imgUrl"
                ></AtomsBasicIcon>
                <!-- 内容 -->
                <div class="flex-col pc:max-w-[450px]">
                  <!-- タイトル -->
                  <AtomsBasicTitle
                    class="mb-8"
                    spaceY="space-y-4"
                    :text="strength.strengths[strengthFlag].title"
                    size="text-[20px] tb:text-[24px] pc:text-[28px]"
                  ></AtomsBasicTitle>
                  <!-- アウトライン -->
                  <AtomsBasicOutline
                    :text="strength.strengths[strengthFlag].outline"
                    size="text-[14px] tb:text-[16px] pc:text-[18px]"
                    color="text-bancor-gray1300"
                    :isBold="false"
                    class="mb-8"
                  ></AtomsBasicOutline>
                </div>
              </div>
              <!-- お問い合わせボタン -->
              <NuxtLink
                :to="strength.strengths[strengthFlag].linkUrl"
                class="absolute bottom-0 left-0 mx-0 flex w-[200px] items-center justify-center rounded-full py-4 px-11 text-[18px] font-bold text-bancor-green100 shadow-md"
              >
                お問い合わせ
              </NuxtLink>
              <!-- ボタン3つの◯のボタンでindexの番号で色付けを変える -->
              <button
                class="absolute bottom-[20px] right-0 flex w-[66px] items-center justify-between tb:bottom-[30px] tb:right-[50px] pc:right-[100px]"
                @click="changeStrengthFlag"
              >
                <div
                  class="h-[6px] w-[6px] rounded-full"
                  :class="
                    strengthFlag == 0
                      ? 'bg-bancor-green100'
                      : 'bg-bancor-gray1400'
                  "
                ></div>
                <div
                  class="h-[6px] w-[6px] rounded-full"
                  :class="
                    strengthFlag == 1
                      ? 'bg-bancor-green100'
                      : 'bg-bancor-gray1400'
                  "
                ></div>
                <div
                  class="h-[6px] w-[6px] rounded-full"
                  :class="
                    strengthFlag == 2
                      ? 'bg-bancor-green100'
                      : 'bg-bancor-gray1400'
                  "
                ></div>
              </button>
            </div>
          </div>
        </div>
        <!-- 背景 -->
        <div class="absolute bottom-5 -z-50">
          <AtomsBasicIcon
            size="pc:h-[814px]"
            iconUrl="/images/daycare/index/background-02.png"
          >
          </AtomsBasicIcon>
        </div>
      </div>

      <!-- 教育方針 -->
      <div
        class="relative mb-20 flex w-[95%] flex-col justify-between space-y-4 tb:space-x-10 tb:space-y-0 pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex w-full flex-col items-center space-y-5 tb:mb-16">
          <AtomsPointColorText
            class="items-center text-center"
            :text="policy.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="policy.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>
        <!-- 教育方針とスタッフ一覧をボタンで切り替える -->
        <div class="flex h-[1000px] justify-center pc:h-[600px]">
          <!-- 教育方針カード -->
          <div
            v-if="!clickPolicyFlag"
            class="mb-28 flex w-[95%] flex-col items-center justify-between space-y-4 pc:h-[484px] pc:max-w-[1200px] pc:flex-row pc:space-x-10 pc:space-y-0"
          >
            <div
              v-for="(policyItem, index) in (policy.policies || [])"
              class="relative flex w-full max-w-[350px] flex-col items-center justify-center space-y-2 rounded-2xl bg-white py-6 px-6 shadow-lg tb:h-[484px] tb:w-[384px] tb:max-w-[400px] tb:space-y-6"
              :key="policyItem.title"
            >
              <!-- カード内イメージとタイトル -->
              <AtomsBasicIcon
                size="h-[100px] pc:h-[157px]"
                :iconUrl="policyItem.imgUrl"
              ></AtomsBasicIcon>
              <AtomsBasicTitle
                class="text-center"
                :class="
                  index == 0
                    ? 'text-bancor-green100'
                    : index == 1
                    ? 'text-bancor-red100'
                    : 'text-bancor-blue200'
                "
                spaceY="space-y-1"
                :text="policyItem.title"
                size="text-[24px] tb:text-[24px] pc:text-[32px]"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                class="text-center"
                :text="policyItem.outline"
                size="text-[14px] tb:text-[14px] pc:text-[16px]"
                color="text-bancor-gray1300"
                :isBold="false"
              ></AtomsBasicOutline>
            </div>
          </div>
          <!-- スタッフ一覧 -->
          <div
            v-if="clickPolicyFlag"
            class="mb-28 flex h-[800px] w-[95%] flex-col items-center space-y-8 rounded-2xl shadow-lg pc:h-[484px] pc:max-w-[1200px] pc:flex-row pc:space-x-10 pc:space-y-0"
          >
            <!-- タイトル -->
            <div
              class="flex items-start px-10 pt-4 pc:h-[80%]"
              :class="[isPC ? 'border-r-2 border-bancor-gray1400' : '']"
            >
              <div class="flex items-center justify-center space-x-2">
                <!-- 緑丸 -->
                <div
                  class="h-[10px] w-[10px] rounded-full bg-bancor-green100"
                ></div>
                <!-- タイトル -->
                <div class="text-[26px] font-bold pc:text-[32px]">
                  スタッフ一覧
                </div>
              </div>
            </div>
            <!-- スタッフ一覧 -->
            <div
              class="flex flex-col items-start justify-center space-y-4 pc:h-[80%]"
            >
              <div v-for="staffItem in (policy.staffs || [])" class="">
                <div
                  class="flex items-center justify-center space-x-1 tb:space-x-4"
                >
                  <!-- アイコン -->
                  <AtomsBasicIcon
                    size="h-[24px] tb:h-[32px]"
                    :iconUrl="staffItem.imgUrl"
                  ></AtomsBasicIcon>
                  <!-- テキスト -->
                  <AtomsBasicTitle
                    class="text-center"
                    :text="`${staffItem.name} : ${staffItem.number}`"
                    size="text-[16px] tb:text-[18px] pc:text-[22px]"
                  ></AtomsBasicTitle>
                </div>
              </div>
            </div>
            <!-- イラスト -->
            <AtomsBasicIcon
              class="absolute bottom-[200px] right-[100px] tb:bottom-[200px] tb:right-[150px]"
              size="h-[80%]"
              :iconUrl="policy.imgUrl"
            ></AtomsBasicIcon>
          </div>
        </div>
        <!-- policyFlagを切り替えるためのボタン -->
        <button
          class="group absolute bottom-0 right-0 flex items-center justify-center space-x-6"
          @click="clickPolicyButton"
        >
          <!-- テキスト -->
          <div
            class="text-[14px] font-bold text-bancor-green100 tb:text-[18px]"
          >
            {{ clickPolicyButtonTitle }}
          </div>
          <!-- 記号 -->
          <div class="relative h-[66px] w-[92px]">
            <!-- 矢印 -->
            <div
              class="absolute top-[50%] -left-[5px] z-10 -translate-x-1/2 -translate-y-1/2 transform text-[32px] text-bancor-gray1500 transition duration-1000 ease-in-out group-hover:translate-x-[calc(-50%+40px)] group-hover:text-bancor-green100"
            >
              <font-awesome-icon :icon="['fas', 'right-long']" />
            </div>
            <!-- 大丸 -->
            <div
              class="absolute top-0 left-0 h-[66px] w-[66px] rounded-full bg-bancor-gray1400 transition duration-1000 ease-in-out group-hover:bg-bancor-green100"
            ></div>
            <!-- 小丸 -->
            <div
              class="absolute top-[50%] left-[33px] h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-bancor-gray1500 transition duration-1000 ease-in-out group-hover:scale-150 group-hover:bg-bancor-green300"
            ></div>
          </div>
        </button>
      </div>

      <!-- 園内環境を知る -->
      <div
        class="relative mb-20 flex h-[500px] w-[95%] flex-col space-y-4 tb:h-[750px] tb:space-y-0 pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex w-full flex-col items-center space-y-5 tb:mb-16">
          <AtomsPointColorText
            class="items-center"
            :text="environment.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="environment.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>
        <!-- 園内環境 -->
        <!-- 環境タイトル -->
        <div
          class="flex h-[40px] w-full flex-col items-center space-y-3 space-x-0 tb:flex-row tb:space-y-0 tb:space-x-5"
        >
          <AtomsBasicTitle
            class="items-center"
            :text="environment.environmentTitle"
            size="text-[20px] tb:text-[24px] pc:text-[28px]"
            spaceY="space-y-2"
          ></AtomsBasicTitle>
          <!-- 区切り線 -->
          <div
            v-if="!isSmartPhone"
            class="h-full w-[2px] bg-bancor-gray1400"
          ></div>
          <AtomsBasicOutline
            class="text-center tb:max-w-[480px] pc:max-w-[900px]"
            :text="environment.environmentOutline"
            size="text-[12px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>
        <!-- 写真を切り替える左右ボタン -->
        <div
          class="absolute top-52 right-2 z-10 flex items-center justify-center space-x-4 tb:top-32 tb:right-4 pc:right-7 pc:top-5"
        >
          <!-- 左ボタン -->
          <button
            class="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[24px] text-bancor-green100 shadow-md tb:h-[64px] tb:w-[64px] tb:text-[36px] pc:h-[80px] pc:w-[80px]"
            @click="clickEnvironmentLeftButton"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <!-- 右ボタン -->
          <button
            class="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[24px] text-bancor-green100 shadow-md tb:h-[64px] tb:w-[64px] tb:text-[36px] pc:h-[80px] pc:w-[80px]"
            @click="clickEnvironmentRightButton"
          >
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>
        <!-- 環境写真 -->
        <div
          class="relative h-full w-full overflow-hidden rounded-3xl tb:overflow-visible"
        >
          <div
            v-for="(environmentItem, index) in (environment.environments || [])"
            class="absolute top-0 bottom-0 left-0 right-0 m-auto transform overflow-hidden bg-blue-400 transition-all duration-1000 ease-in-out clip-xywh"
            :class="[
              environmentIndex == index
                ? 'h-[140px] tb:h-[400px] tb:w-[1100px]'
                : 'h-[120px] tb:h-[320px] tb:w-[900px]',
            ]"
            :style="{
              transform:
                index - environmentIndex >= 0
                  ? `translateX(calc(${index - environmentIndex} * 115%))`
                  : `translateX(calc(-${environmentIndex - index} * 115%))`,
            }"
          >
            <img
              :src="environmentItem.imgUrl"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <!-- environmentIndexを切り替えるためのボタン -->
        <button
          class="group absolute bottom-0 right-0 flex items-center justify-center space-x-6"
          @click="clickEnvironmentButton"
        >
          <!-- テキスト -->
          <div class="text-[18px] font-bold text-bancor-green100">
            {{ environment.linkTitle }}
          </div>
          <!-- 記号 -->
          <div class="relative h-[66px] w-[92px]">
            <!-- 矢印 -->
            <div
              class="absolute top-[50%] -left-[5px] z-10 -translate-x-1/2 -translate-y-1/2 transform text-[32px] text-bancor-gray1500 transition duration-1000 ease-in-out group-hover:translate-x-[calc(-50%+40px)] group-hover:text-bancor-green100"
            >
              <font-awesome-icon :icon="['fas', 'right-long']" />
            </div>
            <!-- 大丸 -->
            <div
              class="absolute top-0 left-0 h-[66px] w-[66px] rounded-full bg-bancor-gray1400 transition duration-1000 ease-in-out group-hover:bg-bancor-green100"
            ></div>
            <!-- 小丸 -->
            <div
              class="absolute top-[50%] left-[33px] h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-bancor-gray1500 transition duration-1000 ease-in-out group-hover:scale-150 group-hover:bg-bancor-green300"
            ></div>
          </div>
        </button>
      </div>

      <!-- 星ノ学園ご利用ガイドライン -->
      <div class="relative mb-12 flex w-[95%] flex-col pc:max-w-[1200px]">
        <!-- タイトル -->
        <div
          class="mb-4 flex w-full flex-col items-center justify-center space-y-5 tb:mb-16"
        >
          <AtomsPointColorText
            class="items-center"
            :text="guideline.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="guideline.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>

        <!-- 「ご利用までの流れ」と「1日の過ごし方」の切り替えボタン2つ -->
        <div class="mb-24 flex items-center justify-center space-x-4">
          <!-- 「ご利用までの流れ」のボタン -->
          <button
            class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold"
            :class="{
              'bg-bancor-green100 text-bancor-white100': guidelineIndex === 0,
              'bg-bancor-gray1500 text-bancor-gray1300': guidelineIndex !== 0,
            }"
            @click="clickUsageFlowButton"
          >
            ご利用までの流れ
          </button>

          <!-- 「1日の過ごし方」のボタン -->
          <button
            class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold"
            :class="{
              'bg-bancor-green100 text-bancor-white100': guidelineIndex === 1,
              'bg-bancor-gray1500 text-bancor-gray1300': guidelineIndex !== 1,
            }"
            @click="clickDailyRoutineButton"
          >
            1日の過ごし方
          </button>
        </div>

        <!-- 施設ご利用までの流れタイトル -->
        <div
          v-if="guidelineIndex === 0"
          class="relative flex w-full flex-col items-center space-y-5 tb:mb-16"
        >
          <AtomsPointColorText
            class="items-center"
            :text="guideline.guideline.title"
            size="text-[20px] tb:text-[22px] pc:text-[24px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[660px]"
            :text="guideline.guideline.outline"
            size="text-[12px] tb:text-[14px] pc:text-[16px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
          <AtomsBasicIcon
            v-if="isPC"
            class="absolute -top-[100px] left-0"
            size="h-[200px]"
            :iconUrl="guideline.imgUrl"
          ></AtomsBasicIcon>
        </div>

        <!-- 施設ご利用までの流れ -->
        <div
          v-if="guidelineIndex === 0"
          class="relative flex w-full flex-col space-y-20 rounded-2xl px-[50px] py-[60px]"
        >
          <!-- STEP1 ご見学・ご面談 -->
          <div class="relative flex flex-col pc:flex-row pc:space-x-12">
            <!-- 数字 -->
            <div
              class="absolute top-0 -left-[25%] translate-x-[50%] -translate-y-[50%] tb:top-0 tb:-left-[15%] pc:top-0 pc:left-0"
            >
              <AtomsBasicIcon
                size="h-[80px]"
                :iconUrl="guideline.guideline.step01.numberImgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 写真 -->
            <div class="w-[324px]">
              <AtomsBasicIcon
                size="h-[180px]"
                :iconUrl="guideline.guideline.step01.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 内容 -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="guideline.guideline.step01.title"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <AtomsBasicOutline
                class="pc:max-w-[650px]"
                size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                :text="guideline.guideline.step01.outline"
              ></AtomsBasicOutline>
              <!-- 電話番号 -->
              <div class="flex items-center space-x-4">
                <div
                  class="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-bancor-gray1400 text-[12px]"
                >
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </div>
                <div class="text-[24px] font-bold">
                  {{ guideline.guideline.step01.tel }}
                </div>
              </div>
            </div>
          </div>
          <!-- STEP2 受給者証の申請 -->
          <div class="relative flex flex-col pc:flex-row pc:space-x-12">
            <!-- 数字 -->
            <div
              class="absolute top-0 -left-[25%] translate-x-[50%] -translate-y-[50%] tb:top-0 tb:-left-[15%] pc:top-0 pc:left-0"
            >
              <AtomsBasicIcon
                size="h-[80px]"
                :iconUrl="guideline.guideline.step02.numberImgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 写真 -->
            <div class="w-[324px]">
              <AtomsBasicIcon
                size="h-[180px]"
                :iconUrl="guideline.guideline.step02.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 内容 -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="guideline.guideline.step02.title"
              ></AtomsBasicTitle>
              <!-- サブタイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[14px] tb:text-[16px] pc:text-[18px]"
                :text="guideline.guideline.step02.subTitle"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <AtomsBasicOutline
                class="pc:max-w-[650px]"
                size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                :text="guideline.guideline.step02.outline"
              ></AtomsBasicOutline>
            </div>
          </div>
          <!-- STEP3 個別支援計画の作成 -->
          <div class="relative flex flex-col pc:flex-row pc:space-x-12">
            <!-- 数字 -->
            <div
              class="absolute top-0 -left-[25%] translate-x-[50%] -translate-y-[50%] tb:top-0 tb:-left-[15%] pc:top-0 pc:left-0"
            >
              <AtomsBasicIcon
                size="h-[80px]"
                :iconUrl="guideline.guideline.step03.numberImgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 写真 -->
            <div class="w-[324px]">
              <AtomsBasicIcon
                size="h-[180px]"
                :iconUrl="guideline.guideline.step03.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 内容 -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="guideline.guideline.step03.title"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <AtomsBasicOutline
                class="pc:max-w-[650px]"
                size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                :text="guideline.guideline.step03.outline"
              ></AtomsBasicOutline>
              <!-- 個別支援計画の作成ステップ -->
              <div
                v-for="subStep in (guideline.guideline?.step03?.subSteps || [])"
                class="flex flex-col space-y-1"
              >
                <!-- タイトル -->
                <AtomsBasicTitle
                  class="font-futuraBold"
                  size="text-[12px] tb:text-[14px] pc:text-[16px]"
                  :text="subStep.title"
                ></AtomsBasicTitle>
                <!-- 説明 -->
                <AtomsBasicOutline
                  class="pc:max-w-[650px]"
                  size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                  :text="subStep.outline"
                ></AtomsBasicOutline>
              </div>
            </div>
          </div>
          <!-- STEP4 ご契約 -->
          <div class="relative flex flex-col pc:flex-row pc:space-x-12">
            <!-- 数字 -->
            <div
              class="absolute top-0 -left-[25%] translate-x-[50%] -translate-y-[50%] tb:top-0 tb:-left-[15%] pc:top-0 pc:left-0"
            >
              <AtomsBasicIcon
                size="h-[80px]"
                :iconUrl="guideline.guideline.step04.numberImgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 写真 -->
            <div class="w-[324px]">
              <AtomsBasicIcon
                size="h-[180px]"
                :iconUrl="guideline.guideline.step04.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 内容 -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="guideline.guideline.step04.title"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <AtomsBasicOutline
                class="pc:max-w-[650px]"
                size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                :text="guideline.guideline.step04.outline"
              ></AtomsBasicOutline>
            </div>
          </div>
          <!-- STEP5 サービスの開始 -->
          <div class="relative flex flex-col pc:flex-row pc:space-x-12">
            <!-- 数字 -->
            <div
              class="absolute top-0 -left-[25%] translate-x-[50%] -translate-y-[50%] tb:top-0 tb:-left-[15%] pc:top-0 pc:left-0"
            >
              <AtomsBasicIcon
                size="h-[80px]"
                :iconUrl="guideline.guideline.step05.numberImgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 写真 -->
            <div class="w-[324px]">
              <AtomsBasicIcon
                size="h-[180px]"
                :iconUrl="guideline.guideline.step05.imgUrl"
              ></AtomsBasicIcon>
            </div>
            <!-- 内容 -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="guideline.guideline.step05.title"
              ></AtomsBasicTitle>
              <!-- 計画書を作成 -->
              <div class="flex flex-col space-y-1">
                <!-- タイトル -->
                <AtomsBasicTitle
                  class="font-futuraBold"
                  size="text-[12px] tb:text-[14px] pc:text-[16px]"
                  :text="guideline.guideline?.step05?.subSteps?.[0]?.title || ''"
                ></AtomsBasicTitle>
                <!-- 説明 -->
                <AtomsBasicOutline
                  class="pc:max-w-[650px]"
                  size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                  :text="guideline.guideline?.step05?.subSteps?.[0]?.outline || ''"
                ></AtomsBasicOutline>
              </div>
              <!-- シートのご記入 -->
              <div class="flex flex-col space-y-1">
                <!-- タイトル -->
                <AtomsBasicTitle
                  class="font-futuraBold"
                  size="text-[12px] tb:text-[14px] pc:text-[16px]"
                  :text="guideline.guideline?.step05?.subSteps?.[1]?.title || ''"
                ></AtomsBasicTitle>
                <!-- 説明 -->
                <AtomsBasicOutline
                  class="pc:max-w-[650px]"
                  size="text-[12px] tb:text-[14px] pc:text-[16px]"
                  :text="guideline.guideline?.step05?.subSteps?.[1]?.outline || ''"
                  color="text-bancor-red700"
                ></AtomsBasicOutline>
              </div>
              <!-- 備考 -->
              <div class="flex flex-col space-y-1">
                <!-- 説明 -->
                <AtomsBasicOutline
                  class="pc:max-w-[650px]"
                  size="text-[12px] tb:text-[14px] pc:text-[16px] text-bancor-gray1300"
                  :text="guideline.guideline?.step05?.subSteps?.[2]?.outline || ''"
                ></AtomsBasicOutline>
              </div>
            </div>
          </div>
          <!-- ステップをつなぐ破線 -->
          <div
            v-if="isPC"
            class="absolute top-[100px] left-[252px] -z-10 h-[1200px] w-[2px] border-r-2 border-dashed border-bancor-green100"
          ></div>
        </div>

        <!-- 施設ご利用までの流れタイトル -->
        <div
          v-if="guidelineIndex === 1"
          class="flex w-full flex-col items-center space-y-5 tb:mb-16"
        >
          <AtomsPointColorText
            class="items-center"
            text="お子さまの1日の過ごし方"
            size="text-[20px] tb:text-[22px] pc:text-[24px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
        </div>

        <!-- お子さまの1日の過ごし方 -->
        <div
          v-if="guidelineIndex === 1"
          class="relative flex w-full flex-col space-y-20 rounded-2xl py-[60px] pc:flex-row pc:justify-between pc:space-y-0 pc:px-[50px]"
        >
          <!-- PCでは左ブロック -->
          <div
            class="ml-4 flex flex-col space-y-20 tb:ml-[20%] pc:ml-0 pc:w-[50%]"
          >
            <!-- 児童発達支援 -->
            <div
              v-for="timeSchedule in (guideline.timeSchedules || []).slice(0, 1)"
              class="flex flex-col space-y-6"
            >
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="timeSchedule.title"
                color="text-bancor-green100"
              ></AtomsBasicTitle>
              <!-- スケジュール -->
              <div
                v-for="event in (timeSchedule.events || [])"
                class="flex items-center"
              >
                <!-- アイコン -->
                <AtomsBasicIcon
                  size="h-[40px]"
                  class="mr-5"
                  iconUrl="/images/daycare/index/guideline/clock-green.png"
                ></AtomsBasicIcon>
                <!-- 時間 -->
                <div
                  class="mr-4 w-[50px] text-[16px] font-bold text-bancor-green100 tb:mr-6 tb:text-[18px] pc:text-[20px]"
                >
                  {{ event.time }}
                </div>
                <!-- 仕切り線 -->
                <div
                  class="mr-4 h-[40px] w-[2px] border-b-2 bg-bancor-gray1500"
                ></div>
                <!-- 内容 -->
                <div class="flex flex-col">
                  <!-- タイトル -->
                  <AtomsBasicTitle
                    class="font-futuraBold"
                    size="text-[16px] tb:text-[18px] pc:text-[20px]"
                    :text="event.title"
                  ></AtomsBasicTitle>
                  <!-- 補足 -->
                  <AtomsBasicOutline
                    class="pc:max-w-[650px]"
                    size="text-[10px] tb:text-[12px] pc:text-[14px]"
                    :text="event.outline"
                    color="text-bancor-gray1300"
                  ></AtomsBasicOutline>
                </div>
              </div>
            </div>
          </div>
          <!-- PCでは右ブロック -->
          <div
            class="relative ml-4 flex flex-col space-y-20 tb:ml-[20%] pc:ml-0 pc:w-[50%]"
          >
            <!-- 放課後等デイサービス・土曜休み長期休暇 -->
            <div
              v-for="timeSchedule in (guideline.timeSchedules || []).slice(1, 3)"
              class="flex flex-col space-y-6"
            >
              <!-- タイトル -->
              <AtomsBasicTitle
                class="font-futuraBold"
                size="text-[24px] tb:text-[28px] pc:text-[32px]"
                :text="timeSchedule.title"
                color="text-bancor-green100"
              ></AtomsBasicTitle>
              <!-- スケジュール -->
              <div
                v-for="event in (timeSchedule.events || [])"
                class="flex items-center"
              >
                <!-- アイコン -->
                <AtomsBasicIcon
                  size="h-[40px]"
                  class="mr-5"
                  iconUrl="/images/daycare/index/guideline/clock-green.png"
                ></AtomsBasicIcon>
                <!-- 時間 -->
                <div
                  class="mr-4 w-[50px] text-[16px] font-bold text-bancor-green100 tb:mr-6 tb:text-[18px] pc:text-[20px]"
                >
                  {{ event.time }}
                </div>
                <!-- 仕切り線 -->
                <div
                  class="mr-4 h-[40px] w-[2px] border-b-2 bg-bancor-gray1500"
                ></div>
                <!-- 内容 -->
                <div class="flex w-[60%] flex-col">
                  <!-- タイトル -->
                  <AtomsBasicTitle
                    class="font-futuraBold"
                    size="text-[16px] tb:text-[18px] pc:text-[20px]"
                    :text="event.title"
                  ></AtomsBasicTitle>
                  <!-- 補足 -->
                  <AtomsBasicOutline
                    class="pc:max-w-[650px]"
                    size="text-[10px] tb:text-[12px] pc:text-[14px]"
                    :text="event.outline"
                    color="text-bancor-gray1300"
                  ></AtomsBasicOutline>
                </div>
              </div>
            </div>
            <div
              class="absolute -bottom-14 right-0 text-[14px] text-bancor-gray100 pc:-bottom-[28px] pc:left-[28px]"
            >
              {{ guideline.notice }}
            </div>
          </div>
        </div>
      </div>

      <!-- お問い合わせ -->
      <div
        class="mb-20 flex w-[95%] flex-col items-center justify-between space-y-6 rounded-lg bg-bancor-green100 px-3 py-[24px] tb:flex-row tb:space-y-0 tb:pl-[48px] tb:pr-[24px] pc:max-w-[1100px]"
      >
        <!-- 左ブロック -->
        <div class="flex flex-col space-y-6">
          <!-- ３点 -->
          <div class="flex items-center space-x-4">
            <div class="h-[9px] w-[9px] rounded-full bg-bancor-blue200"></div>
            <div class="h-[9px] w-[9px] rounded-full bg-bancor-red700"></div>
            <div class="h-[9px] w-[9px] rounded-full bg-bancor-yellow100"></div>
          </div>
          <!-- タイトル -->
          <AtomsBasicTitle
            class="font-futuraBold"
            size="text-[24px] tb:text-[24px] pc:text-[32px]"
            :text="contact.title"
            color="text-bancor-white100"
            spaceY="space-y-0"
          ></AtomsBasicTitle>
        </div>
        <!-- 右ブロック -->
        <div
          class="flex h-[274px] flex-col items-center justify-center space-y-6 rounded-lg bg-bancor-green200 px-6 pc:w-[608px] pc:px-0"
        >
          <!-- 説明 -->
          <AtomsBasicOutline
            class="pc:max-w-[650px]"
            size="text-[16px] tb:text-[18px] pc:text-[20px]"
            :text="contact.outline"
            color="text-bancor-white100"
          ></AtomsBasicOutline>
          <!-- ボタン -->
          <div class="flex items-center space-x-12">
            <a
              :href="`tel:${contact.tel}`"
              class="flex items-center space-x-12"
            >
              <AtomsBasicIcon
                size="h-[px]"
                class="mt-2"
                :iconUrl="contact.telOffImgUrl"
              ></AtomsBasicIcon>
            </a>
            <button class="flex items-center space-x-12">
              <NuxtLink :to="contact.mailLinkUrl">
                <AtomsBasicIcon
                  size="h-[px]"
                  class="mt-2"
                  :iconUrl="contact.mailOffImgUrl"
                ></AtomsBasicIcon>
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>

      <!-- 施設情報 -->
      <div
        class="relative mb-20 flex w-[95%] flex-col justify-between space-y-4 tb:space-x-10 tb:space-y-0 pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex w-full flex-col items-center space-y-5 tb:mb-16">
          <AtomsPointColorText
            class="items-center"
            :text="information.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="information.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>
        <div class="flex justify-center pc:h-[600px]">
          <!-- 施設カード -->
          <div
            class="mb-28 flex w-[95%] flex-col items-center pc:max-w-[1200px] pc:flex-row pc:justify-between pc:space-y-0"
          >
            <!-- カード -->
            <NuxtLink
              v-for="fInfo in (facilitiesInformations || []).slice(0, 2)"
              :to="fInfo.linkUrl"
              class="flex w-full flex-col overflow-hidden rounded-xl pc:w-[48%]"
            >
              <img :src="fInfo.imgUrl" />
              <div
                class="flex w-full -translate-y-4 flex-col space-y-2 rounded-b-xl bg-bancor-green100 py-6 px-6"
              >
                <AtomsBasicTitle
                  class="text-bancor-white100"
                  :text="fInfo.name"
                  size="text-[18px] tb:text-[20px] pc:text-[24px]"
                ></AtomsBasicTitle>
                <AtomsBasicOneline
                  class="text-bancor-white100"
                  :text="`${fInfo.region} | ${fInfo.service}`"
                  :is-bold="false"
                  size="text-[12px] tb:text-[14px] pc:text-[14px]"
                ></AtomsBasicOneline>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- 施設一覧ページ遷移ボタン -->
        <NuxtLink
          to="/facilities"
          class="group absolute bottom-0 right-0 flex items-center justify-center space-x-6"
        >
          <!-- テキスト -->
          <div class="text-[18px] font-bold text-bancor-green100">
            施設一覧を見てみる
          </div>
          <!-- 記号 -->
          <div class="relative h-[66px] w-[92px]">
            <!-- 矢印 -->
            <div
              class="absolute top-[50%] -left-[5px] z-10 -translate-x-1/2 -translate-y-1/2 transform text-[32px] text-bancor-gray1500 transition duration-1000 ease-in-out group-hover:translate-x-[calc(-50%+40px)] group-hover:text-bancor-green100"
            >
              <font-awesome-icon :icon="['fas', 'right-long']" />
            </div>
            <!-- 大丸 -->
            <div
              class="absolute top-0 left-0 h-[66px] w-[66px] rounded-full bg-bancor-gray1400 transition duration-1000 ease-in-out group-hover:bg-bancor-green100"
            ></div>
            <!-- 小丸 -->
            <div
              class="absolute top-[50%] left-[33px] h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-bancor-gray1500 transition duration-1000 ease-in-out group-hover:scale-150 group-hover:bg-bancor-green300"
            ></div>
          </div>
        </NuxtLink>
      </div>

      <!-- よくあるご質問 -->
      <div class="relative mb-12 flex w-[95%] flex-col pc:max-w-[1200px]">
        <!-- タイトル -->
        <div
          class="mb-4 flex w-full flex-col items-center justify-center space-y-5 tb:mb-16"
        >
          <AtomsPointColorText
            class="items-center"
            :text="questions.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="questions.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>
        <!-- Q&A -->
        <div class="flex w-full flex-col items-center space-y-4">
          <div
            v-for="item in (questions.items || [])"
            class="border-bancogray600 flex w-full flex-col items-center space-y-4 rounded-2xl border-2"
          >
            <div
              class="flex w-full items-center justify-between py-4 px-6 font-bold"
            >
              <div class="flex items-center space-x-2">
                <AtomsBasicTitle
                  class="text-bancor-green400"
                  text="Q"
                  size="text-[30px] tb:text-[36px] pc:text-[42px]"
                ></AtomsBasicTitle>
                <div class="pl-4 text-[18px]">{{ item.question }}</div>
              </div>
            </div>
            <div
              class="border-bancorgray1500 h-[1px] w-[95%] border-b-2 border-dashed"
            ></div>
            <div
              class="flex w-full items-center justify-between py-4 px-6 font-bold"
            >
              <div class="flex items-center space-x-2">
                <AtomsBasicTitle
                  class="text-bancor-gray1500"
                  text="A"
                  size="text-[30px] tb:text-[36px] pc:text-[42px]"
                ></AtomsBasicTitle>
                <div class="pl-4 text-bancor-gray1300">{{ item.answer }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ご利用料金について -->
      <div class="relative mb-12 flex w-[95%] flex-col pc:max-w-[1200px]">
        <!-- タイトル -->
        <div
          class="mb-4 flex w-full flex-col items-center justify-center space-y-5 tb:mb-16"
        >
          <AtomsPointColorText
            class="items-center"
            :text="fee.title"
            size="text-[22px] tb:text-[28px] pc:text-[32px]"
            spaceY="space-y-2"
          ></AtomsPointColorText>
          <AtomsBasicOutline
            class="text-center pc:max-w-[900px]"
            :text="fee.outline"
            size="text-[14px] tb:text-[16px] pc:text-[18px]"
            color="text-bancor-gray1300"
          ></AtomsBasicOutline>
        </div>

        <!-- 「放課後デイサービス」と「児童発達支援」の概要・利用料金を切り替えるボタンを各2つずつ用意 -->
        <div class="mb-24 flex flex-col items-center justify-center space-y-4">
          <div
            class="mb-16 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
          >
            <!-- 「放課後デイサービス」のボタン -->
            <div
              class="flex flex-col items-center space-y-5 tb:flex-row tb:space-y-0"
            >
              <div class="font-bold text-bancor-gray1300 tb:mr-4">
                放課後デイサービス
              </div>
              <button
                class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold tb:mr-2"
                :class="{
                  'bg-bancor-green100 text-bancor-white100': feeIndex === 0,
                  'bg-bancor-gray1500 text-bancor-gray1300': feeIndex !== 0,
                }"
                @click="clickAfterschoolServiceOverview"
              >
                概要
              </button>
              <button
                class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold"
                :class="{
                  'bg-bancor-green100 text-bancor-white100': feeIndex === 1,
                  'bg-bancor-gray1500 text-bancor-gray1300': feeIndex !== 1,
                }"
                @click="clickAfterschoolServiceFee"
              >
                利用料金
              </button>
            </div>

            <!-- 「児童発達支援」のボタン -->
            <div
              class="flex flex-col items-center space-y-5 tb:ml-12 tb:flex-row tb:space-y-0"
            >
              <div class="font-bold text-bancor-gray1300 tb:mr-4">
                児童発達支援
              </div>
              <button
                class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold tb:mr-2"
                :class="{
                  'bg-bancor-green100 text-bancor-white100': feeIndex === 2,
                  'bg-bancor-gray1500 text-bancor-gray1300': feeIndex !== 2,
                }"
                @click="clickChildDevelopmentOverview"
              >
                概要
              </button>
              <button
                class="flex h-[44px] w-[200px] items-center justify-center rounded-full text-[18px] font-bold"
                :class="{
                  'bg-bancor-green100 text-bancor-white100': feeIndex === 3,
                  'bg-bancor-gray1500 text-bancor-gray1300': feeIndex !== 3,
                }"
                @click="clickChildDevelopmentFee"
              >
                利用料金
              </button>
            </div>
          </div>

          <!-- 放課後デイサービス:概要 -->
          <div v-if="feeIndex === 0" class="flex w-full flex-col">
            <!-- タイトル -->
            <div class="flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">
                {{ fee.dayservice.overview.title }}
              </div>
            </div>
            <!-- 説明 -->
            <AtomsBasicOutline
              class="my-4 pc:max-w-[1100px]"
              :text="fee.dayservice.overview.outline"
              size="text-[12px] tb:text-[14px] pc:text-[16px]"
              color="text-bancor-gray1300"
            ></AtomsBasicOutline>
            <!-- 説明画像 -->
            <div class="mb-4 flex w-full justify-center">
              <AtomsBasicIcon
                class="mt-4"
                :iconUrl="fee.dayservice.overview.imgUrl"
                size="pc:h-[588px]"
              ></AtomsBasicIcon>
            </div>
            <!-- 目的 -->
            <div class="flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">
                {{ fee.dayservice.overview.purpose }}
              </div>
            </div>
            <!-- 説明 -->
            <AtomsBasicOutline
              class="my-4 pc:max-w-[1100px]"
              :text="fee.dayservice.overview.purposeOutline"
              size="text-[12px] tb:text-[14px] pc:text-[16px]"
              color="text-bancor-gray1300"
            ></AtomsBasicOutline>
          </div>

          <!-- 放課後デイサービス:ご利用料金について -->
          <div
            v-if="feeIndex === 1"
            class="flex w-full flex-col pc:max-w-[1100px]"
          >
            <!-- タイトル -->
            <div class="mb-8 flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">ご利用料金について</div>
            </div>
            <!-- ご利用料金カード -->
            <div
              class="mb-8 flex w-full flex-col items-center space-y-4 rounded-2xl bg-green-50 py-10 pc:items-start pc:space-y-8 pc:px-20"
            >
              <div class="text-[24px] font-bold">
                {{ fee.dayservice.fee.title }}
              </div>
              <!-- 非課税対象のご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  非課税対象のご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.dayservice.fee.fee1 }}
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-green400"
              ></div>
              <!-- 世帯所得約890万までのご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  世帯所得約890万までのご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.dayservice.fee.fee2 }}
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-green400"
              ></div>
              <!-- 世帯所得約890万以上のご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  世帯所得約890万以上のご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.dayservice.fee.fee3 }}
                </div>
              </div>
            </div>

            <!-- その他備考カード -->
            <div
              class="flex w-full flex-col items-center space-y-8 rounded-2xl bg-gray-50 py-10 pc:items-start pc:px-20"
            >
              <div class="text-[24px] font-bold">
                {{ fee.dayservice.remarks.title }}
              </div>
              <!-- ご利用時間 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  ご利用時間
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex items-center">
                    <div class="text-[16px] font-bold">時間：</div>
                    <div class="text-[16px]">
                      {{ fee.dayservice.remarks.hours }}
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-bold">休園日：</div>
                    <div class="text-[16px]">
                      {{ fee.dayservice.remarks.holiday }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- 定員数 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  定員数
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex flex-col">
                    <div class="text-[16px] font-bold">
                      {{ fee.dayservice.remarks.capacity }}
                    </div>
                    <div class="text-[16px]">
                      {{ fee.dayservice.remarks.capacityNote }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- レクリエーション代 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  レクリエーション代
                </div>
                <div class="flex w-[80%] flex-col space-y-1 pc:w-full">
                  <div class="flex flex-col">
                    <div class="text-[16px]">
                      {{ fee.dayservice.remarks.recreationCost }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- ご用意いただくもの -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  ご用意いただくもの
                </div>
                <div class="flex w-[80%] flex-col space-y-1 pc:w-full">
                  <div class="flex flex-col">
                    <div class="text-[16px]">
                      {{ fee.dayservice.remarks.requiredItems }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 児童発達支援:概要 -->
          <div v-if="feeIndex === 2" class="flex w-full flex-col">
            <!-- タイトル -->
            <div class="flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">
                {{ fee.support.overview.title }}
              </div>
            </div>
            <!-- 説明 -->
            <AtomsBasicOutline
              class="my-4 pc:max-w-[1100px]"
              :text="fee.support.overview.outline"
              size="text-[12px] tb:text-[14px] pc:text-[16px]"
              color="text-bancor-gray1300"
            ></AtomsBasicOutline>
            <!-- 説明画像 -->
            <div class="mb-4 flex w-full justify-center">
              <AtomsBasicIcon
                class="mt-4"
                :iconUrl="fee.support.overview.imgUrl"
                size="pc:h-[371px]"
              ></AtomsBasicIcon>
            </div>
            <!-- センターとは -->
            <div class="flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">
                {{ fee.support.overview.center }}
              </div>
            </div>
            <!-- 説明 -->
            <AtomsBasicOutline
              class="my-4 pc:max-w-[1100px]"
              :text="fee.support.overview.centerOutline"
              size="text-[12px] tb:text-[14px] pc:text-[16px]"
              color="text-bancor-gray1300"
            ></AtomsBasicOutline>
            <!-- 事業所とは -->
            <div class="flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">
                {{ fee.support.overview.facility }}
              </div>
            </div>
            <!-- 説明 -->
            <AtomsBasicOutline
              class="my-4 pc:max-w-[1100px]"
              :text="fee.support.overview.facilityOutline"
              size="text-[12px] tb:text-[14px] pc:text-[16px]"
              color="text-bancor-gray1300"
            ></AtomsBasicOutline>
          </div>

          <!-- 児童発達支援:ご利用料金について -->
          <div
            v-if="feeIndex === 3"
            class="flex w-full flex-col pc:max-w-[1100px]"
          >
            <!-- タイトル -->
            <div class="mb-8 flex items-center space-x-4 pc:max-w-[1100px]">
              <div class="h-[26px] w-[4px] bg-bancor-green100"></div>
              <div class="text-[26px] font-bold">ご利用料金について</div>
            </div>
            <!-- ご利用料金カード -->
            <div
              class="mb-8 flex w-full flex-col items-center space-y-4 rounded-2xl bg-green-50 py-10 pc:items-start pc:space-y-8 pc:px-20"
            >
              <div class="text-[24px] font-bold">
                {{ fee.support.fee.title }}
              </div>
              <!-- 非課税対象のご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  非課税対象のご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.support.fee.fee1 }}
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-green400"
              ></div>
              <!-- 世帯所得約890万までのご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  世帯所得約890万までのご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.support.fee.fee2 }}
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-green400"
              ></div>
              <!-- 世帯所得約890万以上のご家庭 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  世帯所得約890万以上のご家庭
                </div>
                <div class="text-[18px] font-bold pc:text-[20px]">
                  {{ fee.support.fee.fee3 }}
                </div>
              </div>
            </div>

            <!-- その他備考カード -->
            <div
              class="flex w-full flex-col items-center space-y-8 rounded-2xl bg-gray-50 py-10 pc:items-start pc:px-20"
            >
              <div class="text-[24px] font-bold">
                {{ fee.support.remarks.title }}
              </div>
              <!-- ご利用時間 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  ご利用時間
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex items-center">
                    <div class="text-[16px] font-bold">時間：</div>
                    <div class="text-[16px]">
                      {{ fee.support.remarks.hours }}
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-bold">休園日：</div>
                    <div class="text-[16px]">
                      {{ fee.support.remarks.holiday }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- 定員数 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  定員数
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex flex-col">
                    <div class="text-[16px] font-bold">
                      {{ fee.support.remarks.capacity }}
                    </div>
                    <div class="text-[16px]">
                      {{ fee.support.remarks.capacityNote }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- レクリエーション代 -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  レクリエーション代
                </div>
                <div class="flex w-[80%] flex-col space-y-1 pc:w-full">
                  <div class="flex flex-col">
                    <div class="text-[16px]">
                      {{ fee.support.remarks.recreationCost }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-[1px] w-[95%] border-b-2 border-dashed border-bancor-gray400"
              ></div>
              <!-- ご用意いただくもの -->
              <div
                class="mb-8 flex flex-col items-center space-y-4 pc:flex-row pc:space-y-0"
              >
                <div class="text-[18px] font-bold pc:w-[60%] pc:text-[20px]">
                  ご用意いただくもの
                </div>
                <div class="flex w-[80%] flex-col space-y-1 pc:w-full">
                  <div class="flex flex-col">
                    <div class="text-[16px]">
                      {{ fee.support.remarks.requiredItems }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrganismsMoreServices></OrganismsMoreServices>

      <!-- 利用者向けメニュー -->
      <div
        class="mb-20 flex w-[95%] flex-col items-center justify-between space-y-6 rounded-lg bg-bancor-green100 py-[32px] pl-[24px] pr-[24px] pc:h-[280px] pc:max-w-[1200px] pc:flex-row pc:pl-[48px]"
      >
        <!-- 左ブロック -->
        <div class="flex flex-col space-y-2 pc:space-y-6">
          <!-- タイトル -->
          <AtomsBasicTitle
            class="font-futuraBold"
            size="text-[22px] tb:text-[24px] pc:text-[26px]"
            :text="menu.title"
            color="text-bancor-white100"
            spaceY="space-y-0"
          ></AtomsBasicTitle>
          <!-- 説明 -->
          <AtomsBasicOutline
            class="pc:max-w-[650px]"
            size="text-[16px]"
            :text="menu.outline"
            color="text-bancor-white100"
          >
          </AtomsBasicOutline>
        </div>
        <!-- 右ブロック -->
        <div
          class="flex w-full flex-col items-center space-y-3 tb:flex-row tb:space-x-5 pc:space-y-0"
        >
          <NuxtLink
            :to="menuItem.linkUrl"
            v-for="menuItem in (menu.items || [])"
            class="flex h-[170px] w-full items-center justify-center rounded-lg bg-bancor-green200 tb:h-[206px] tb:w-[30%] tb:space-x-6"
          >
            <!-- ボタン -->
            <button class="flex h-full flex-col items-center pc:max-w-[232px]">
              <div
                class="flex h-1/2 items-center justify-center text-[22px] font-bold text-bancor-white100"
              >
                <AtomsBasicTitle
                  :text="menuItem.title"
                  color="text-bancor-white100"
                  size="text-[22px]"
                  space-y="space-y-0"
                ></AtomsBasicTitle>
              </div>
              <!-- 矢印丸アイコン -->
              <div class="flex h-1/2 items-center justify-center">
                <div
                  class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-bancor-white100 text-[30px] text-bancor-green100"
                >
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </div>
              </div>
            </button>
          </NuxtLink>
        </div>
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
                :imgUrl="valueUpdate.imgUrls?.[0]?.imgUrl || ''"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 2枚目 -->
            <ScrollParallax
              class="absolute left-1/4 top-[220%] z-50"
              :speed="0.13"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls?.[1]?.imgUrl || ''"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 3枚目 -->
            <ScrollParallax
              class="absolute left-2/4 -top-[100%] z-50"
              :speed="0.12"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls?.[2]?.imgUrl || ''"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 4枚目 -->
            <ScrollParallax
              class="absolute left-3/4 top-[220%] z-50"
              :speed="0.14"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls?.[3]?.imgUrl || ''"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
~~/src/types/pages/daycare/daycare ~~/src/stores/pages/daycare/daycare
