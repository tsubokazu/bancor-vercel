<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import {
    CareWelfareObject,
    CareWelfareSolutionsObject,
  } from '~/types/pages/care-welfare';
  import { usePagesCareWelfareStore } from '~/stores/pages/care-welfare';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  // 介護・福祉ページ情報をPiniaから取得
  // システム開発Store
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const { bancor3min, structure, maintenances, valueUpdate }: SystemDevObject =
    pagesSystemDevStore;
  // 介護・福祉Store
  const pagesCareWelfareStore = usePagesCareWelfareStore();
  if (Object.keys(pagesCareWelfareStore.header).length == 0) {
    await pagesCareWelfareStore.fetchPagesCareWelfare();
  }
  const pagesSolutionsStore = usePagesCareWelfareStore();
  if (Object.keys(pagesSolutionsStore.solutions).length == 0) {
    await pagesSolutionsStore.fetchPagesSolutions();
  }

  const { header, issues, voice, features, contactMenus }: CareWelfareObject =
    pagesCareWelfareStore;
  const { solutions }: CareWelfareSolutionsObject = pagesSolutionsStore;

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
    <div class="relative flex w-full flex-col items-center">
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
          textColor="text-bancor-red200"
          front-square-color="bg-bancor-red400"
          back-square-color="bg-bancor-red200"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div class="mb-12 flex w-full justify-between pc:max-w-[1100px]">
        <div
          v-for="(issue, index) in issues.issues"
          class="relative flex h-[240px] w-[332px] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-6"
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
          color="text-bancor-black100"
          size="text-[32px]"
        ></AtomsBasicOutline>
        <!-- ピンク色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 h-4 w-[900px] bg-bancor-red300"
        ></div>
      </div>

      <!-- お客様の声　「使いやすいし、楽になった」 -->
      <div class="mb-24 flex w-full flex-col items-center space-y-6">
        <!-- タイトル -->
        <div class="flex w-full pc:max-w-[1200px]">
          <AtomsBasicTitle
            :text="voice.title"
            size="text-[60px]"
            spaceY="space-y-3"
          ></AtomsBasicTitle>
        </div>
        <!-- アウトラインとイメージ -->
        <div class="space-6 flex w-full justify-between pc:max-w-[1100px]">
          <!-- アウトライン -->
          <div class="flex flex-col">
            <AtomsBasicOutline
              :text="voice.subTitle"
              :isBold="true"
              class="mb-6"
            ></AtomsBasicOutline>
            <AtomsBasicOutline
              :text="voice.outline"
              :isBold="false"
              class="mb-12 w-[458px] leading-7"
            ></AtomsBasicOutline>
            <MoleculesDetailButton
              color="bg-bancor-red200"
              :linkUrl="voice.linkUrl"
            ></MoleculesDetailButton>
          </div>
          <!-- イメージ -->
          <AtomsBasicImage
            :imgUrl="voice.imgUrl"
            imgHeight="h-[392px]"
            imgWidth="w-[392px]"
          ></AtomsBasicImage>
        </div>
      </div>

      <!-- サービスの特徴 -->
      <div
        class="mb-24 flex w-full flex-col items-center space-y-14 pc:max-w-[1100px]"
      >
        <!-- タイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-full pc:max-w-[1100px]"
          :title="features.title"
          :subTitle="features.subTitle"
          textColor="text-bancor-red200"
          front-square-color="bg-bancor-red400"
          back-square-color="bg-bancor-red200"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード群 -->
        <div class="flex w-full space-x-10">
          <!-- カード -->
          <div
            v-for="feature in features.features"
            class="flex h-[408px] w-[340px] flex-col items-center justify-center space-y-4 rounded-lg shadow-lg"
          >
            <AtomsBasicIcon
              :iconUrl="feature.imgUrl"
              size="h-[154px]"
            ></AtomsBasicIcon>
            <AtomsBasicTitle
              :text="feature.title"
              size="text-[20px]"
              space-y="space-y-0"
              class="items-center"
            ></AtomsBasicTitle>
            <AtomsBasicOutline
              :text="feature.outline"
              :isBold="false"
              size="text-base"
              class="w-[80%]"
            ></AtomsBasicOutline>
          </div>
        </div>
      </div>

      <!-- お問い合わせメニュー -->
      <div
        class="mb-24 flex h-[248px] w-full items-center justify-between bg-bancor-red500 px-[50px] pc:max-w-[1200px]"
      >
        <!-- メニューカード -->
        <div
          v-for="contactMenu in contactMenus.contactMenus"
          class="h-[133px] w-[522px] space-x-4 rounded-lg bg-white shadow-lg hover:translate-y-1 hover:shadow-none hover:transition-all"
        >
          <NuxtLink
            :to="contactMenu.linkUrl"
            class="flex h-full w-full items-center justify-center space-x-4"
          >
            <AtomsBasicTitle
              :text="contactMenu.title"
              size="text-[20px]"
            ></AtomsBasicTitle>
            <AtomsBasicIcon
              :iconUrl="contactMenu.imgUrl"
              size="h-[20px]"
            ></AtomsBasicIcon>
          </NuxtLink>
          <div></div>
        </div>
      </div>

      <!-- ソリューションラインナップ -->
      <MoleculesWelfareSolutionsLineup
        :solutions="solutions"
        class="mb-24"
      ></MoleculesWelfareSolutionsLineup>

      <!-- 3分でわかるBancor -->
      <div
        class="mb-24 flex h-[245px] w-[800px] items-center justify-center space-x-36 bg-white shadow-lg"
      >
        <!-- メニュー -->
        <div class="flex flex-col space-y-2">
          <AtomsFuturaBoldText
            size="text-[13px]"
            :text="bancor3min.subTitle"
            color="text-bancor-red200"
          ></AtomsFuturaBoldText>
          <AtomsBasicTitle
            size="text-[22px]"
            spaceY="space-y-2"
            :text="bancor3min.title"
          ></AtomsBasicTitle>
          <MoleculesDetailButton
            class="pt-8"
            :linkUrl="bancor3min.linkUrl"
          ></MoleculesDetailButton>
        </div>

        <!-- 3分でわかるBancor -->
        <div class="h-[146px] w-[286px] shadow-lg">
          <img :src="bancor3min.imgUrl" class="h-full w-full object-cover" />
        </div>
      </div>

      <!-- 開発体制 -->
      <div id="development" class="mb-24 flex w-full pc:max-w-[1100px]">
        <div class="jus mb-18tify-center flex flex-col space-y-10">
          <MoleculesDoubleSquareTagMenu
            class="mb-18"
            :title="structure.title"
            :subTitle="structure.subTitle"
            :outline="structure.outline"
            textColor="text-bancor-red200"
            front-square-color="bg-bancor-red400"
            back-square-color="bg-bancor-red200"
          ></MoleculesDoubleSquareTagMenu>
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
            textColor="text-bancor-red200"
            front-square-color="bg-bancor-red400"
            back-square-color="bg-bancor-red200"
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
        <!-- Value Updateの大きなタイトル -->
        <AtomsBasicTitle
          class="font-futuraBold"
          spaceY="-space-y-24"
          size="text-[200px]"
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
                imgHeight="h-[280px]"
                imgWidth="w-[200px]"
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
                imgHeight="h-[280px]"
                imgWidth="w-[200px]"
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
                imgHeight="h-[280px]"
                imgWidth="w-[200px]"
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
                imgHeight="h-[280px]"
                imgWidth="w-[200px]"
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
