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
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[300px] w-full tb:h-[240px] pc:h-[360px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative flex w-full flex-col items-center">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-44 flex w-[95%] flex-col space-y-3 tb:-top-32 pc:-top-48 pc:max-w-[1100px]"
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
        class="absolute -top-16 -z-10 hidden h-16 w-full items-center justify-center bg-gray-900 opacity-50 pc:flex"
      ></div>
      <div
        class="absolute -top-16 z-50 hidden h-16 w-full items-center justify-center space-x-40 pc:flex"
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
          :key="anchor.title"
        ></AtomsLinkMoveArrowTitle>
      </div>

      <!-- こんな課題を解決します -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-[95%] pc:max-w-[1100px]"
          :title="issues.title"
          :subTitle="issues.subTitle"
          textColor="text-bancor-red200"
          front-square-color="bg-bancor-red400"
          back-square-color="bg-bancor-red200"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div
        class="mb-12 flex w-[95%] flex-col items-center justify-between space-y-4 tb:flex-row tb:space-y-0 pc:max-w-[1100px]"
      >
        <div
          v-for="(issue, index) in issues.issues"
          class="relative flex h-[240px] w-[332px] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-6"
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
          <AtomsBasicIcon
            size="h-[121px]"
            :iconUrl="issue.imgUrl"
          ></AtomsBasicIcon>
          <AtomsBasicTitle
            class="text-center"
            spaceY="space-y-2"
            :text="issue.title"
            size="text-[18px] tb:text-[16px] pc:text-[18px]"
          ></AtomsBasicTitle>

          <!-- カードの吹き出し -->
          <div
            v-if="index == (isSmartPhone ? 2 : 1)"
            class="absolute -bottom-[19px] h-9 w-9 rotate-45 border-r border-b border-bancor-gray600 bg-white"
          ></div>
        </div>
      </div>

      <!-- アウトライン -->
      <div class="relative mb-40 flex w-[95%] items-center justify-center">
        <AtomsBasicOutline
          :text="issues.outline"
          color="text-bancor-black100"
          size="text-[26px] tb:text-[26px] pc:text-[32px]"
        ></AtomsBasicOutline>
        <!-- ピンク色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 hidden h-4 bg-bancor-red300 tb:block tb:w-full pc:w-[900px]"
        ></div>
      </div>

      <!-- お客様の声　「使いやすいし、楽になった」 -->
      <div class="mb-24 flex w-full flex-col items-center space-y-6">
        <!-- タイトル -->
        <div class="flex w-[95%] pc:max-w-[1200px]">
          <AtomsBasicTitle
            :text="voice.title"
            size="text-[26px] tb:text-[50px] pc:text-[60px]"
            spaceY="space-y-3"
          ></AtomsBasicTitle>
        </div>
        <!-- アウトラインとイメージ -->
        <div
          class="space-6 flex w-[95%] flex-col items-center justify-between tb:flex-row pc:max-w-[1100px]"
        >
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
              class="mb-12 leading-7 tb:w-[458px]"
            ></AtomsBasicOutline>
            <MoleculesDetailButton
              color="bg-bancor-red200"
              :linkUrl="voice.linkUrl"
            ></MoleculesDetailButton>
          </div>
          <!-- イメージ -->
          <AtomsBasicImage
            :imgUrl="voice.imgUrl"
            imgHeight="h-[300px] tb:h-[392px]"
            imgWidth="w-[300px] tb:w-[392px]"
          ></AtomsBasicImage>
        </div>
      </div>

      <!-- サービスの特徴 -->
      <div
        id="features"
        class="mb-24 flex w-[95%] flex-col items-center space-y-14 pc:max-w-[1100px]"
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
        <div
          class="flex w-full flex-col space-x-0 tb:flex-row tb:space-x-5 pc:space-x-10"
        >
          <!-- カード -->
          <div
            v-for="feature in features.features"
            class="flex h-[408px] w-[340px] flex-col items-center justify-center space-y-4 rounded-lg shadow-lg"
            :key="feature.title"
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
        class="mb-24 flex h-[320px] w-full flex-col items-center justify-between bg-bancor-red500 px-[50px] py-4 tb:h-[248px] tb:flex-row pc:max-w-[1200px]"
      >
        <!-- メニューカード -->
        <div
          v-for="contactMenu in contactMenus.contactMenus"
          class="h-[133px] w-full space-x-4 space-y-5 rounded-lg bg-white shadow-lg hover:translate-y-1 hover:shadow-none hover:transition-all tb:w-[350px] pc:w-[522px]"
          :key="contactMenu.title"
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
        id="solutions"
        :solutions="solutions"
        class="mb-24"
      ></MoleculesWelfareSolutionsLineup>

      <!-- 3分でわかるBancor -->
      <div
        class="mb-24 flex h-[500px] w-[95%] flex-col items-center justify-center bg-white shadow-lg tb:h-[245px] tb:w-[800px] tb:flex-row tb:space-x-36"
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
      <div id="development" class="mb-24 flex w-[95%] pc:max-w-[1100px]">
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
      <div class="mb-24 flex w-[95%] pc:max-w-[1100px]">
        <div class="flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            :title="maintenances.title"
            :subTitle="maintenances.subTitle"
            :outline="maintenances.outline"
            textColor="text-bancor-red200"
            front-square-color="bg-bancor-red400"
            back-square-color="bg-bancor-red200"
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
      <div class="relative h-[834px] w-[95%] pc:max-w-[1100px]">
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
