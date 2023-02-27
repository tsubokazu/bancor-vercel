<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import FuturaMediumText from '../components/atoms/FuturaMediumText.vue';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const {
    header,
    issues,
    dxDev,
    problems,
    team,
    nuvo3mins,
    features,
    structure,
    maintenances,
    valueUpdate,
  }: SystemDevObject = pagesSystemDevStore;

  // デジタル課題のクリックフラグ
  const clickFlag = ref(false);
  const clickProblemButton = () => (clickFlag.value = !clickFlag.value);
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[360px] w-full">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-48 flex w-full flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- ヘッダーメニュー -->
      <div
        class="absolute -top-16 -z-10 flex h-16 w-full items-center justify-center bg-gray-900 opacity-50"
      ></div>
      <div
        class="absolute -top-16 z-10 flex h-16 w-full items-center justify-center space-x-40"
      >
        <AtomsLinkMoveArrowTitle
          v-for="anchor in header.anchors"
          :text="anchor.title"
          :linkUrl="anchor.linkUrl"
          color="text-white"
          size="text-base"
          :isAngle="false"
          :isRight="false"
          :isRotate="true"
          :isOpacity="true"
        ></AtomsLinkMoveArrowTitle>
      </div>

      <!-- こんな課題を解決します -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-full pc:max-w-[1100px]"
          :title="issues.title"
          :subTitle="issues.subTitle"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div class="mb-12 flex w-full justify-between pc:max-w-[1100px]">
        <div
          v-for="(issue, index) in issues.issues"
          class="relative flex h-[240px] w-[332px] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-6"
        >
          <!-- Case N -->
          <FuturaMediumText
            class="absolute top-4 left-6"
            :text="issue.subTitle"
            size="text-lg"
          ></FuturaMediumText>
          <FuturaMediumText
            class="absolute top-7 left-4"
            :text="issue.outline"
            size="text-[47px]"
          ></FuturaMediumText>

          <!-- カード内イメージとタイトル -->
          <AtomsBasicIcon
            size="h-[121px]"
            :iconUrl="issue.imgUrl"
          ></AtomsBasicIcon>
          <AtomsBasicTitle
            class="text-center"
            spaceY="space-y-2"
            :text="issue.title"
            size="text-[18px]"
          ></AtomsBasicTitle>

          <!-- カードの吹き出し -->
          <div
            v-if="index == 1"
            class="absolute -bottom-[19px] h-9 w-9 rotate-45 border-r border-b border-bancor-gray600 bg-white"
          ></div>
        </div>
      </div>

      <!-- アウトライン -->
      <div class="relative mb-40 flex w-full items-center justify-center">
        <AtomsBasicOutline
          :text="issues.outline"
          color="text-white"
          size="text-[32px]"
        ></AtomsBasicOutline>
        <!-- 黒背景 -->
        <div
          class="absolute -top-[132px] -z-20 h-[246px] w-full bg-bancor-navy200"
        ></div>
        <!-- 灰色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 h-4 w-[800px] bg-gray-700"
        ></div>
      </div>

      <!-- DX推進時代の開発手法 -->
      <div
        class="mb-24 flex w-full items-center justify-between pc:max-w-[1100px]"
      >
        <!-- メニュー -->
        <div class="flex w-[458px] flex-col space-y-10">
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
          size="h-[435px]"
        ></AtomsBasicIcon>
      </div>

      <!-- デジタル化の課題 -->
      <div class="mb-24 flex w-full flex-col items-center pc:max-w-[1100px]">
        <!-- タイトル -->
        <div class="mb-16 flex flex-col items-center space-y-12">
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
        <div class="flex w-full justify-between pc:max-w-[1100px]">
          <!-- 課題の項目ボタン -->
          <div class="flex w-[238px] flex-col space-y-3">
            <AtomsButtonUnderLine
              v-for="(problem, index) in problems.problems"
              @click="clickProblemButton"
              :title="problem.title"
              :clickFlag="index ? clickFlag : !clickFlag"
            ></AtomsButtonUnderLine>
          </div>

          <!-- グラフ -->
          <div class="h-[424px]">
            <AtomsBasicImage
              v-show="!clickFlag"
              :imgUrl="problems.problems[0].imgUrl"
              imgHeight="h-fit"
              imgWidth="w-[700px]"
            ></AtomsBasicImage>
            <AtomsBasicImage
              v-show="clickFlag"
              :imgUrl="problems.problems[1].imgUrl"
              imgHeight="h-fit"
              imgWidth="w-[700px]"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- パートナーとしてではなくチームの一員 -->
      <!-- デジタル化の課題 -->
      <div class="mb-24 flex w-full flex-col items-center pc:max-w-[1100px]">
        <!-- タイトル -->
        <div class="mb-16 flex flex-col items-center space-y-12">
          <AtomsAsteriskSmallText
            class="items-center"
            :text="team.title"
          ></AtomsAsteriskSmallText>
          <AtomsBasicOutline
            class="items-center"
            :text="team.outline"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>

        <!-- イメージ -->
        <AtomsBasicImage
          imgHeight="h-fit"
          :imgUrl="team.imgUrl"
        ></AtomsBasicImage>
      </div>

      <!-- 3分でわかるNUVO -->
      <div
        class="mb-24 flex h-[245px] w-[800px] items-center justify-center space-x-36 bg-white shadow-lg"
      >
        <!-- メニュー -->
        <div class="flex flex-col space-y-2">
          <AtomsFuturaBoldText
            size="text-[13px]"
            :text="nuvo3mins.subTitle"
            color="text-bancor-blue100"
          ></AtomsFuturaBoldText>
          <AtomsBasicTitle
            size="text-[22px]"
            spaceY="space-y-2"
            :text="nuvo3mins.title"
          ></AtomsBasicTitle>
          <MoleculesDetailButton
            class="pt-8"
            :linkUrl="nuvo3mins.linkUrl"
          ></MoleculesDetailButton>
        </div>

        <!-- 3分でわかるNUVO -->
        <div class="h-[146px] w-[286px] shadow-lg">
          <img :src="nuvo3mins.imgUrl" class="h-full w-full object-cover" />
        </div>
      </div>

      <!-- 開発体制の特徴 -->
      <div class="mb-14 flex w-full flex-col pc:max-w-[1100px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-14"
          :title="features.title"
          :subTitle="features.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード -->
        <div class="flex w-full flex-col space-y-14">
          <div
            v-for="(feature, index) in features.features"
            class="flex h-[311px] w-full items-center justify-between px-20 shadow-lg"
            :class="[{ 'flex-row-reverse': index % 2 == 0 }]"
          >
            <MoleculesBasicMenu
              class="w-[511px]"
              size="text-[28px]"
              spaceY="space-y-5"
              titleSpaceY="space-y-2"
              :isBold="false"
              :title="feature.title"
              :subTitle="feature.subTitle"
              :outline="feature.outline"
              :linkUrl="feature.linkUrl"
            ></MoleculesBasicMenu>
            <AtomsBasicImage
              imgHeight="h-fit"
              imgWidth="w-[300px]"
              :imgUrl="feature.imgUrl"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- 開発体制 -->
      <div class="mb-24 flex w-full pc:max-w-[1100px]">
        <div class="jus mb-18tify-center flex flex-col space-y-10">
          <MoleculesDoubleSquareTa
            mb-18gMenu
            :title="structure.title"
            :subTitle="structure.subTitle"
            :outline="structure.outline"
          ></MoleculesDoubleSquareTa>
          <LazyAtomsBasicImage
            :imgUrl="structure.imgUrl"
            imgWidth="w-full"
            imgHeight="h-fit"
          ></LazyAtomsBasicImage>
        </div>
      </div>

      <!-- 保守・運用 -->
      <div class="mb-24 flex w-full pc:max-w-[1100px]">
        <div class="flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            :title="maintenances.title"
            :subTitle="maintenances.subTitle"
            :outline="maintenances.outline"
          ></MoleculesDoubleSquareTagMenu>
          <div class="grid w-full grid-cols-2 gap-x-8 gap-y-4">
            <div
              v-for="maintenance in maintenances.maintenances"
              class="flex h-[204px] w-[520px] flex-col justify-center space-y-2 rounded-md border border-bancor-gray600 px-6"
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
      <div class="relative h-[834px] w-full pc:max-w-[1100px]">
        <AtomsBasicTitle
          class="font-futuraBold"
          spaceY="-space-y-24"
          size="text-[200px]"
          :text="valueUpdate.title"
        ></AtomsBasicTitle>
        <AtomsBasicOutline
          class="absolute top-[148px] left-[620px]"
          size="text-[20px]"
          :text="valueUpdate.outline"
        ></AtomsBasicOutline>
        <div class="flex justify-between px-10">
          <ScrollParallax :speed="0.05" direction="y">
            <AtomsBasicImage
              class="-translate-y-[380px]"
              :imgUrl="valueUpdate.imgUrls[0].imgUrl"
              imgHeight="h-[280px]"
              imgWidth="w-fit"
            ></AtomsBasicImage>
          </ScrollParallax>
          <ScrollParallax :speed="0.6" direction="y">
            <AtomsBasicImage
              class="-translate-y-[450px]"
              :imgUrl="valueUpdate.imgUrls[1].imgUrl"
              imgHeight="h-[280px]"
              imgWidth="w-fit"
            ></AtomsBasicImage>
          </ScrollParallax>
          <ScrollParallax :speed="0.1" direction="y">
            <AtomsBasicImage
              class="-translate-y-[350px]"
              :imgUrl="valueUpdate.imgUrls[2].imgUrl"
              imgHeight="h-[280px]"
              imgWidth="w-fit"
            ></AtomsBasicImage>
          </ScrollParallax>
          <ScrollParallax :speed="0.3" direction="y">
            <AtomsBasicImage
              class="-translate-y-[600px]"
              :imgUrl="valueUpdate.imgUrls[3].imgUrl"
              imgHeight="h-[280px]"
              imgWidth="w-fit"
            ></AtomsBasicImage>
          </ScrollParallax>
        </div>
      </div>
    </div>
  </div>
</template>
