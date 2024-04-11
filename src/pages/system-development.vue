<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const {
    headerBg,
    header,
    issues,
    dxDev,
    problems,
    team,
    bancor3min,
    devCase,
    features,
    structure,
    maintenances,
    valueUpdate,
  }: SystemDevObject = pagesSystemDevStore;

  // デジタル課題のクリックフラグ
  const clickFlag = ref(false);
  const clickProblemButton = () => (clickFlag.value = !clickFlag.value);

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
  });

  onBeforeUnmount(() => {
    document.documentElement.style.scrollBehavior = '';
    document.body.style.scrollBehavior = '';
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div
    class="relative flex w-full flex-col items-center overflow-hidden scroll-smooth"
  >
    <!-- ヘッダー背景画像 -->
    <!-- ヘッダー -->
    <div
      class="relative flex h-[340px] w-full max-w-[1200px] flex-col items-center tb:h-[400px] tb:items-start pc:h-[450px]"
    >
      <div
        class="absolute top-0 right-0 -z-10 h-[200px] w-[346px] tb:h-[300px] tb:w-[520px] pc:h-[450px] pc:w-[780px]"
      >
        <img :src="headerBg.imgUrl" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- タイトル画像 -->
      <div class="mt-[174px] mb-6 w-[95%] tb:h-[117px] tb:w-[534px]">
        <img
          :src="header.imgUrl"
          alt="タイトル画像"
          class="h-full w-full object-cover"
        />
      </div>
      <!-- サブタイトル -->
      <div
        class="w-[95%] rounded-md bg-[#020617] px-4 py-1 text-[16px] font-bold text-white pc:w-fit"
      >
        {{ header.subTitle }}
      </div>
    </div>
    <!-- ボディ -->
    <div class="relative flex w-full flex-col items-center">
      <!-- こんな課題を解決します -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-[95%] pc:max-w-[1200px]"
          :title="issues.title"
          :subTitle="issues.subTitle"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div
        class="mb-12 flex w-[95%] flex-col items-center justify-between space-y-4 tb:flex-row tb:space-y-0 pc:max-w-[1200px]"
      >
        <div
          v-for="(issue, index) in issues.issues"
          class="pc-[378px] relative flex h-[320px] w-[95%] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-5 px-8 tb:h-[320px] tb:w-[32%] tb:px-3 pc:h-[300px] pc:px-8"
          :key="issue.title"
        >
          <!-- Case N -->
          <AtomsFuturaMediumText
            class="absolute top-4 left-6"
            :text="issue.subTitle"
            size="text-lg"
          ></AtomsFuturaMediumText>
          <AtomsFuturaMediumText
            class="absolute top-7 left-4"
            :text="issue.outline"
            size="text-[47px]"
          ></AtomsFuturaMediumText>

          <!-- カード内イメージとタイトル -->
          <div class="mb-3 h-[148px] w-[148px] flex-none">
            <img
              :src="issue.imgUrl"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
          <AtomsParticleColorTitle
            spaceY="space-y-2"
            :text="issue.title"
            size="text-[18px] tb:text-[16px] pc:text-[18px]"
          ></AtomsParticleColorTitle>

          <!-- カードの吹き出し -->
          <div
            v-if="index == (isSmartPhone ? 2 : 1)"
            class="absolute -bottom-[19px] h-9 w-9 rotate-45 border-r border-b border-bancor-gray600 bg-white"
          ></div>
        </div>
      </div>

      <!-- アウトライン -->
      <div class="relative mb-40 flex w-full items-center justify-center px-1">
        <AtomsBasicOutline
          class="text-center"
          :text="issues.outline"
          color="text-white"
          size="text-[26px] tb:text-[32px]"
        ></AtomsBasicOutline>
        <!-- 黒背景 -->
        <div
          class="absolute -top-[132px] -z-20 h-[246px] w-full bg-bancor-navy200"
        ></div>
        <!-- 灰色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 hidden h-4 w-[800px] bg-gray-700 tb:block"
        ></div>
      </div>

      <!-- デジタル化の課題 -->
      <div
        id="resource"
        class="mb-24 flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex flex-col items-center space-y-12 tb:mb-16">
          <AtomsAsteriskSmallText
            class="items-center"
            :text="problems.title"
          ></AtomsAsteriskSmallText>
          <AtomsBasicOutline
            class="items-center"
            :text="problems.outline"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>

        <!-- 課題のグラフ -->
        <div
          class="flex w-[95%] flex-col justify-between space-y-10 pc:max-w-[1200px] pc:flex-row pc:space-y-0"
        >
          <!-- 課題の項目ボタン -->
          <div class="flex w-[238px] flex-col space-y-3">
            <AtomsButtonUnderLine
              v-for="(problem, index) in problems.problems"
              @click="clickProblemButton"
              :title="problem.title"
              :clickFlag="index ? clickFlag : !clickFlag"
              :key="problem.title"
            ></AtomsButtonUnderLine>
          </div>

          <!-- グラフ -->
          <div class="h-[200px] tb:h-[424px]">
            <AtomsBasicImage
              v-show="!clickFlag"
              :imgUrl="problems.problems[0].imgUrl"
              img-height="h-auto"
              imgWidth="w-[95%] tb:w-[700px] "
            ></AtomsBasicImage>
            <AtomsBasicImage
              v-show="clickFlag"
              :imgUrl="problems.problems[1].imgUrl"
              img-height="h-auto"
              imgWidth="w-[95%] tb:w-[700px]"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- DX推進時代の開発手法 -->
      <div
        class="mb-24 flex w-[95%] flex-col items-center justify-between space-y-8 tb:flex-row pc:max-w-[1200px] pc:space-y-0"
      >
        <!-- メニュー -->
        <div class="flex flex-col space-y-10 tb:w-[458px]">
          <AtomsBasicTitle
            :text="dxDev.title"
            size="text-[32px]"
          ></AtomsBasicTitle>
          <AtomsBasicOutline :text="dxDev.subTitle"></AtomsBasicOutline>
          <AtomsBasicOutline
            :text="dxDev.outline"
            :isBold="false"
          ></AtomsBasicOutline>
          <MoleculesDetailButton
            :linkUrl="dxDev.linkUrl"
          ></MoleculesDetailButton>
        </div>

        <!-- イメージ -->
        <AtomsBasicIcon
          :iconUrl="dxDev.imgUrl"
          size="h-[300px] pc:h-[435px]"
        ></AtomsBasicIcon>
      </div>

      <!-- パートナーとしてではなくチームの一員 -->
      <!-- デジタル化の課題 -->
      <div class="mb-24 flex w-[95%] flex-col items-center pc:max-w-[1200px]">
        <!-- タイトル -->
        <div class="mb-16 flex flex-col items-center space-y-12">
          <AtomsAsteriskSmallText
            class="items-center"
            :text="team.title"
            size="text-[20px] tb:text-[30px]"
          ></AtomsAsteriskSmallText>
          <AtomsBasicOutline
            class="items-center"
            :text="team.outline"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>

        <!-- イメージ -->
        <AtomsBasicImage
          imgHeight="w-[95%] tb:w-[654px]"
          :imgUrl="team.imgUrl"
        ></AtomsBasicImage>
      </div>

      <!-- 開発支援事例 -->
      <div class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-14"
          :title="devCase.title"
          subTitle="Case Study"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード -->
        <div class="flex w-full flex-col space-y-14">
          <div
            class="flex w-full flex-col items-center justify-between gap-3 space-y-6 py-5 shadow-lg tb:flex-row pc:h-[586px] pc:space-y-0 pc:px-20"
          >
            <AtomsBasicImage
              img-height="h-auto"
              imgWidth="mb-4 pc:mb-0 w-[95%] tb:w-[500px]"
              :imgUrl="devCase.imgUrl"
            ></AtomsBasicImage>
            <div
              class="flex w-[95%] flex-col space-y-5 tb:w-[520px] pc:flex-none"
            >
              <div class="text-[14px] font-bold text-[#475569]">
                MEMBERS株式会社
              </div>
              <AtomsBasicTitle
                :text="devCase.mainMessage"
                size="text-[19px] tb:text-[22px] pc:text-[28px]"
                :isBold="true"
                spaceY="space-y-2"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                size="text-[14px] pc:text-[16px]"
                :text="devCase.outline.slice(0, 165)"
                color="text-[#475569]"
                :isBold="false"
              ></AtomsBasicOutline>
              <div class="flex w-full flex-wrap gap-3">
                <div
                  class="rounded-full border border-[#93c5fd] bg-[#dbeafe] py-2 px-4 text-[15px] text-[#1e40af]"
                  v-for="tag in devCase.tags"
                >
                  {{ tag }}
                </div>
              </div>
              <MoleculesDetailButton
                v-if="devCase.linkUrl.length > 0"
                :linkUrl="devCase.linkUrl"
                text="詳しくみる"
              ></MoleculesDetailButton>
            </div>
          </div>
        </div>
      </div>

      <!-- 開発体制の特徴 -->
      <div id="feature" class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-14"
          :title="features.title"
          :subTitle="features.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード -->
        <div class="flex w-full flex-col space-y-14">
          <div
            v-for="(feature, index) in features.features"
            class="flex w-full flex-col items-center justify-between space-y-6 shadow-lg tb:h-[311px] tb:px-20 pc:space-y-0"
            :class="[index % 2 == 0 ? 'tb:flex-row-reverse' : 'tb:flex-row']"
            :key="feature.title"
          >
            <MoleculesBasicMenu
              class="w-[95%] tb:w-[511px]"
              size="text-[20px] tb:text-[22px] pc:text-[28px]"
              outline-size="text-[14px] pc:text-[16px]"
              spaceY="space-y-5"
              titleSpaceY="space-y-2"
              :isBold="true"
              :title="feature.title"
              :subTitle="feature.subTitle"
              :outline="feature.outline"
              :linkUrl="feature.linkUrl"
              :isOutlineBold="false"
            ></MoleculesBasicMenu>
            <AtomsBasicImage
              img-height="h-auto"
              imgWidth="mb-4 pc:mb-0 w-[60%] tb:w-[300px]"
              :imgUrl="feature.imgUrl"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- 開発体制 -->
      <div id="development" class="mb-24 flex w-[95%] pc:max-w-[1200px]">
        <div class="mb-6 flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            class="mb-18"
            :title="structure.title"
            :subTitle="structure.subTitle"
            :outline="structure.outline"
          ></MoleculesDoubleSquareTagMenu>
          <LazyAtomsBasicImage
            :imgUrl="structure.imgUrl"
            img-height="h-auto"
            imgWidth="w-[95%]"
          ></LazyAtomsBasicImage>
        </div>
      </div>

      <!-- 保守・運用 -->
      <div class="mb-24 flex w-[95%] pc:max-w-[1200px]">
        <div class="flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            :title="maintenances.title"
            :subTitle="maintenances.subTitle"
            :outline="maintenances.outline"
          ></MoleculesDoubleSquareTagMenu>
          <div
            class="grid w-full grid-cols-1 gap-y-4 tb:grid-cols-2 tb:gap-x-8"
          >
            <div
              v-for="maintenance in maintenances.maintenances"
              class="flex flex-col justify-center space-y-2 rounded-md border border-bancor-gray600 px-6 py-4 pc:h-[204px] pc:w-[520px] pc:py-0"
              :key="maintenance.title"
            >
              <AtomsBasicIcon
                size="h-[35px]"
                :iconUrl="maintenance.imgUrl"
              ></AtomsBasicIcon>
              <AtomsBasicTitle
                :text="maintenance.title"
                size="text-[22px]"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                size="text-[14px]"
                :text="maintenance.outline"
                :isBold="false"
              ></AtomsBasicOutline>
            </div>
          </div>
        </div>
      </div>

      <!-- Value Update -->
      <div class="relative h-[400px] w-[95%] tb:h-[834px] pc:max-w-[1200px]">
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
              class="absolute left-0 -top-[50%] z-50"
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
              class="absolute left-1/4 top-[160%] z-50"
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
              class="absolute left-2/4 -top-[40%] z-50"
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
              class="absolute left-3/4 top-[140%] z-50"
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
    </div>
  </div>
</template>
