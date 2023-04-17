<script setup lang="ts">
  import {
    RecruitObject,
    RecruitPositionCategory,
  } from '~/types/pages/recruit';
  import { usePagesRecruitStore } from '~/stores/pages/recruit';

  // URLからカテゴリを取得
  const router = useRoute();
  const position = router.params.position as string;

  // 採用情報ページ情報をPiniaから取得
  const pagesRecruitStore = usePagesRecruitStore();
  if (Object.keys(pagesRecruitStore.header).length == 0) {
    await pagesRecruitStore.fetchPagesRecruit();
  }
  const { header, vision, contents, entries }: RecruitObject =
    pagesRecruitStore;

  // 採用情報の募集種別詳細情報をPiniaから取得
  const pagesRecruitCategoryStore = usePagesRecruitStore();
  if (Object.keys(pagesRecruitCategoryStore.positionCategories).length == 0) {
    await pagesRecruitCategoryStore.fetchPagesRecruitCategory();
  }
  const {
    positionCategories,
  }: {
    positionCategories: Array<RecruitPositionCategory>;
  } = pagesRecruitCategoryStore;

  // 募集職種のタブメニュー
  const tabMenuCategories = computed(() => {
    const categories: any = {};
    for (const category of positionCategories) {
      categories[category.position.key] = category.position.value;
    }
    return categories;
  });

  // 選択中のポジションカテゴリキー
  const selectedTabMenuKey = ref(position);

  //const selectedTabMenuKey = ref(Object.keys(tabMenuCategories.value)[0]);

  // ポジションカテゴリ別の募集職種カテゴリリスト
  const positionCategoriesObject = computed(() => {
    const categories: any = {};
    for (const key in tabMenuCategories.value) {
      const list = [];
      for (const category of positionCategories) {
        if (category.position.key == key) {
          list.push(category);
        }
      }
      categories[key] = list;
    }
    return categories;
  });

  // 選択中のポジションカテゴリーのオブジェクト
  const selectedCategories = computed<Array<RecruitPositionCategory>>(
    () => positionCategoriesObject.value[selectedTabMenuKey.value]
  );

  // 選択中のカテゴリーのインデックス
  const selectedCategoryIndex = ref(0);

  // 選択中のカテゴリーのオブジェクト
  const selectedCategoryObject = computed<RecruitPositionCategory>(
    () => selectedCategories.value[selectedCategoryIndex.value]
  );

  // メニューを押したら選択されているカテゴリキーを変更
  const clickTabMenu = (key: string) => {
    selectedTabMenuKey.value = key;
    selectedCategoryIndex.value = 0;
  };

  // カテゴリを押したら選択されているカテゴリインデックスを変更
  const clickCategoryMenu = (index: number) => {
    selectedCategoryIndex.value = index;
    entries.position = selectedCategoryObject.value.category;
  };
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[360px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- ミッション -->
      <div
        class="flex w-[95%] flex-col justify-between tb:flex-row pc:max-w-[1100px]"
      >
        <!-- メニュー -->
        <MoleculesBasicMenu
          class="w-[372px]"
          :title="vision.title"
          :subTitle="vision.subTitle"
          :linkUrl="vision.linkUrl"
          :outline="vision.outline"
        ></MoleculesBasicMenu>
        <!-- イメージ -->
        <div class="h-[200px] tb:h-[300px] pc:h-[392px]">
          <img :src="vision.imgUrl" class="h-full" />
        </div>
      </div>
      <!-- 会社案内コンテンツ -->
      <div
        class="flex w-full flex-col justify-center bg-bancor-light-blue200 tb:h-[256px] tb:flex-row"
      >
        <!-- タイトル -->
        <div class="flex h-full w-[95%] justify-end pl-4 tb:w-1/2 pc:pl-0">
          <div class="flex h-full w-full items-center pc:max-w-[550px]">
            <AtomsBasicTitle
              :text="contents.title"
              size="text-[48px] pc:text-[60px]"
              class="font-futuraBold"
            ></AtomsBasicTitle>
          </div>
        </div>
        <!-- メニュー -->
        <div class="flex h-[256px] w-full flex-col tb:w-1/2">
          <!-- 代表メッセージ -->
          <NuxtLink
            :to="contents.contents[0].linkUrl"
            class="group relative flex h-1/2 w-full overflow-hidden"
          >
            <!-- 背景 -->
            <div
              class="absolute h-full w-full bg-bancor-blue200 pl-[72px] before:absolute before:left-full before:h-full before:w-full before:bg-white before:transition-all before:group-hover:left-0"
            ></div>
            <!-- アンダーライン -->
            <div
              class="absolute bottom-0 right-full h-[4px] w-full bg-bancor-blue200 transition-all group-hover:right-0"
            ></div>
            <!-- メニュー -->
            <div
              class="z-10 flex h-full w-full items-center space-x-6 pl-[64px]"
            >
              <AtomsButtonCircleArrowSmall
                arrowColor="text-bancor-black100"
                arrowSize="text-[10.4px]"
                size="w-[33px] h-[33px]"
              ></AtomsButtonCircleArrowSmall>
              <AtomsBasicTitle
                size="text-[22px]"
                color="text-white group-hover:text-bancor-black100"
                :text="contents.contents[0].title"
              ></AtomsBasicTitle>
            </div>
          </NuxtLink>
          <!-- 会社案内 -->
          <NuxtLink
            :to="contents.contents[1].linkUrl"
            class="group relative flex h-1/2 w-full overflow-hidden"
          >
            <!-- 背景 -->
            <div
              class="absolute h-full w-full bg-bancor-blue400 pl-[72px] before:absolute before:left-full before:h-full before:w-full before:bg-white before:transition-all before:group-hover:left-0"
            ></div>
            <!-- アンダーライン -->
            <div
              class="absolute bottom-0 right-full h-[4px] w-full bg-bancor-blue400 transition-all group-hover:right-0"
            ></div>
            <!-- メニュー -->
            <div
              class="z-10 flex h-full w-full items-center space-x-6 pl-[64px]"
            >
              <AtomsButtonCircleArrowSmall
                arrowColor="text-bancor-black100"
                arrowSize="text-[10.4px]"
                size="w-[33px] h-[33px]"
              ></AtomsButtonCircleArrowSmall>
              <AtomsBasicTitle
                size="text-[22px]"
                color="text-white group-hover:text-bancor-black100"
                :text="contents.contents[1].title"
              ></AtomsBasicTitle>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 募集職種 -->
      <div
        class="flex w-full flex-col items-center bg-bancor-gray700 py-24"
        id="open-position"
      >
        <!-- タイトル -->
        <div class="w-[95%] pc:max-w-[1100px]">
          <MoleculesDoubleSquareTagMenu
            title="募集職種"
            subTitle="Open Position"
          ></MoleculesDoubleSquareTagMenu>
        </div>

        <!-- コンテンツ -->
        <div
          class="flex w-[95%] flex-col space-y-6 pc:max-w-[1100px] pc:flex-row pc:space-x-[29px] pc:space-y-0"
        >
          <!-- タブメニュー -->
          <div class="flex w-[228px] flex-col">
            <!-- メニュー -->
            <button
              v-for="(category, menuKey) in tabMenuCategories"
              @click="clickTabMenu(`${menuKey}`)"
              class="relative flex h-[68px] w-full items-center overflow-hidden"
              :key="category"
            >
              <AtomsBasicTitle
                :text="category"
                size="text-base"
              ></AtomsBasicTitle>
              <!-- ライン -->
              <div
                class="absolute bottom-0 h-0.5 w-full bg-bancor-gray600"
              ></div>
              <div
                class="absolute bottom-0 h-0.5 w-full -translate-x-full bg-bancor-black100"
                :class="{
                  'animate-slide-in-right-quick':
                    `${menuKey}` == selectedTabMenuKey,
                  'animate-slide-in-right-quick-rv':
                    `${menuKey}` != selectedTabMenuKey,
                }"
              ></div>
            </button>
          </div>
          <!-- 詳細 -->
          <div
            class="justify-center bg-white p-4 tb:p-12 pc:w-[calc(100%_-_257px)]"
          >
            <!-- 募集カテゴリ -->
            <div class="flex w-full flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="selectedCategories[0].position.title"
                color="text-bancor-blue200"
                size="text-[22px]"
              ></AtomsBasicTitle>
              <!-- カテゴリ一覧グリッド -->
              <div class="w-full pc:min-h-[370px]">
                <div
                  class="mb-6 grid grid-cols-1 gap-x-10 gap-y-0 tb:grid-cols-2"
                >
                  <!-- 各カテゴリメニューボタン -->
                  <button
                    v-for="(category, index) in selectedCategories"
                    @click="clickCategoryMenu(index)"
                    class="relative flex h-[72px] w-full items-center overflow-hidden"
                    :key="category.position.key"
                  >
                    <div
                      class="flex h-full w-full items-center justify-between"
                    >
                      <!-- タイトル -->
                      <AtomsBasicTitle
                        :text="category.category"
                        size="text-base"
                      ></AtomsBasicTitle>
                      <!-- 矢印 ">" -->
                      <div
                        v-if="selectedCategories.length >= 2"
                        class="px-3 text-base"
                      >
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                      </div>
                    </div>
                    <!-- ライン -->
                    <div
                      v-if="selectedCategories.length >= 2"
                      class="absolute bottom-0 h-0.5 w-full bg-bancor-gray600"
                    ></div>
                    <div
                      v-if="selectedCategories.length >= 2"
                      class="absolute bottom-0 h-0.5 w-full -translate-x-full bg-bancor-black100 opacity-0"
                      :class="{
                        'animate-slide-in-right-quick':
                          index == selectedCategoryIndex,
                      }"
                    ></div>
                  </button>
                </div>
              </div>
            </div>

            <!-- 求める人材 -->
            <div class="mb-6 flex w-full flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="selectedCategories[0].desires.title"
                color="text-bancor-blue200"
                size="text-[22px]"
                class="mb-6"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <MoleculesBasicMenu
                v-for="desire in selectedCategoryObject.desires.details"
                :title="desire.subTitle"
                :outline="desire.outline"
                size="text-[18px]"
                outlineSize="text-[14px]"
                :isOutlineBold="false"
                spaceY="space-y-4"
                class="mb-6 border-b-2 border-bancor-gray600 pb-6"
                :key="desire.outline"
              ></MoleculesBasicMenu>
            </div>

            <!-- 入社のメリット -->
            <div class="mb-6 flex w-full flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="selectedCategories[0].benefits.title"
                color="text-bancor-blue200"
                size="text-[22px]"
                class="mb-6"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <MoleculesBasicMenu
                v-for="desire in selectedCategoryObject.benefits.details"
                :title="desire.subTitle"
                :outline="desire.outline"
                size="text-[18px]"
                outlineSize="text-[14px]"
                :isOutlineBold="false"
                spaceY="space-y-4"
                class="mb-6 border-b-2 border-bancor-gray600 pb-6"
                :key="desire.outline"
              ></MoleculesBasicMenu>
            </div>

            <!-- 募集要項 -->
            <div class="mb-6 flex w-full flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="selectedCategories[0].informations.title"
                color="text-bancor-blue200"
                size="text-[22px]"
                class="mb-6"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <div
                v-for="info in selectedCategoryObject.informations.details"
                class="flex flex-col tb:flex-row tb:space-x-9"
                :key="info.subTitle"
              >
                <!-- 項目タイトル -->
                <div
                  class="tb:border-bancorgra600 py-3 tb:w-[160px] tb:border-b-2 tb:py-6"
                >
                  <AtomsBasicTitle
                    :text="info.subTitle"
                    size="text-base"
                    :isBold="true"
                  ></AtomsBasicTitle>
                </div>
                <!-- 項目詳細 -->
                <div
                  class="border-bancorgra600 border-b-2 py-3 tb:w-[calc(100%_-_178px)] tb:py-6"
                >
                  <AtomsBasicOutline
                    size="text-[14px]"
                    :text="info.outline"
                    :isBold="false"
                  ></AtomsBasicOutline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- エントリー -->
      <div class="flex w-full flex-col items-center space-y-16">
        <!-- タイトル -->
        <div class="flex items-center space-x-4">
          <AtomsDoubleSquare
            frontSquareColor="bg-bancor-black100"
            backSquareColor="bg-bancor-blue100"
            size="h-[18px] w-[18px]"
          ></AtomsDoubleSquare>
          <AtomsBasicTitle :text="entries.title"></AtomsBasicTitle>
        </div>
        <!-- フォームボタン -->
        <div
          class="flex flex-col items-center space-y-6 tb:flex-row tb:space-y-0 tb:space-x-8"
        >
          <!-- この職種に応募する -->
          <AtomsButtonOvalArrow
            v-for="entry in entries.entries"
            :linkUrl="entry.linkUrl"
            bgColor="bg-bancor-black100"
            textColor="text-white"
            buttonHeight="h-[56px]"
            buttonWidth="w-[272px]"
            :key="entry.title"
          >
            {{ entry.title }}
          </AtomsButtonOvalArrow>
        </div>
      </div>
    </div>
  </div>
</template>
