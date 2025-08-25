<script setup lang="ts">
  import type { EnqueteObject } from '~/types/pages/daycare/enquete';
  import { useEnqueteStore } from '~/stores/pages/daycare/enquete';
  import type { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const enqueteStore = useEnqueteStore();
  if (Object.keys(enqueteStore.header).length == 0) {
    await enqueteStore.fetchEnquete();
  }
  const { header, message, enqueteItems }: EnqueteObject = enqueteStore;

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const { valueUpdate }: SystemDevObject = pagesSystemDevStore;

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
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[240px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div
      class="relative flex w-full flex-col items-center space-y-8 bg-bancor-gray700 pb-[128px]"
    >
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[32px] tb:text-[36px] pc:text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <div
        class="flex w-[95%] flex-col space-y-4 tb:flex-row tb:justify-between tb:space-x-8 tb:space-y-0 pc:mt-[100px] pc:max-w-[1200px]"
      >
        <!-- 協力感謝メッセージ -->
        <div
          class="flex w-full flex-col items-center space-y-6 rounded-3xl border-bancor-gray500 bg-bancor-white100 py-4 tb:flex-row tb:space-y-0 tb:space-x-10 tb:pl-[50px] pc:h-[308px] pc:max-w-[1200px]"
        >
          <!-- 文面 -->
          <div
            class="flex w-[95%] flex-col justify-center space-y-6 tb:w-[60%]"
          >
            <!-- タイトル -->
            <div class="flex flex-col space-x-2">
              <div
                class="border-l-4 border-bancor-green100 pl-2 text-[20px] font-bold tb:text-[24px]"
              >
                {{ message.title }}
              </div>
              <div class="text-[14px] text-[#555555] tb:text-[18px]">
                {{ message.abstract }}
              </div>
            </div>
            <!-- 文章 -->
            <AtomsBasicOutline class="mt-6" :text="message.message">
            </AtomsBasicOutline>
          </div>

          <!-- イラスト -->
          <AtomsBasicIcon :iconUrl="message.imgUrl" size="h-[180px]">
          </AtomsBasicIcon>
        </div>
      </div>

      <!-- 各施設ごとアンケート -->
      <div
        v-for="(enqueteItem, index) in enqueteItems"
        class="flex h-full w-[95%] flex-col items-center space-y-6 rounded-3xl border-bancor-gray500 bg-bancor-white100 pr-0 pb-6 tb:flex-row tb:space-y-0 tb:space-x-10 tb:pr-6 pc:max-h-[413px] pc:max-w-[1200px] pc:justify-between pc:pr-0 pc:pb-0"
      >
        <!-- 左文面 -->
        <div class="mx-8 flex flex-shrink-0 flex-col py-8 tb:w-[50%]">
          <!-- アイコンとタイトル -->
          <div class="mb-4 flex space-x-[12px]">
            <!-- アイコン -->
            <AtomsBasicIcon
              class="mt-1"
              iconUrl="/images/daycare/enquete/03.png"
              size="h-[32px]"
            ></AtomsBasicIcon>
            <!-- タイトル -->
            <div class="flex flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="`${enqueteItem.region} | ${enqueteItem.service}`"
                size="text-[20px] pc:text-[24px]"
              ></AtomsBasicTitle>
              <!-- 学園名 -->
              <div class="text-[28px] font-bold pc:text-[32px]">
                {{ enqueteItem.name }}
              </div>
            </div>
          </div>
          <!-- 自己評価表と保護者アンケート -->
          <div
            class="space-y-6 rounded-2xl border border-[#e8e8e8] px-4 py-4 tb:px-12"
          >
            <!-- 自己評価表 -->
            <div class="flex flex-col space-y-4">
              <div class="text-[18px] font-bold">
                {{ enqueteItem.selfEvaluationForm.title }}
              </div>
              <div
                class="flex flex-col space-y-2 space-x-0 tb:flex-row tb:space-y-0 tb:space-x-4"
              >
                <div
                  v-for="service in enqueteItem.selfEvaluationForm.services"
                  class="flex items-center space-x-2"
                >
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">
                    {{ service.title }}
                  </div>
                </div>
              </div>
            </div>
            <!-- 保護者アンケート -->
            <div class="flex flex-col space-y-4">
              <div class="text-[18px] font-bold">
                {{ enqueteItem.parentEnqueteForm.title }}
              </div>
              <div
                class="flex flex-col space-y-2 space-x-0 tb:flex-row tb:space-x-4"
              >
                <div
                  v-for="service in enqueteItem.parentEnqueteForm.services"
                  class="flex items-center space-x-2"
                >
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">
                    {{ service.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 写真 -->
        <AtomsBasicIcon
          class="h-[300px] w-[90%] overflow-hidden rounded-3xl p-0 pc:h-full pc:rounded-none"
          :iconUrl="enqueteItem.imgUrl"
          size="h-full object-cover"
        ></AtomsBasicIcon>
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
        v-if="!isSmartPhone"
        class="absolute top-[148px] left-[620px]"
        size="text-[20px]"
        :text="valueUpdate.outline"
      ></AtomsBasicOutline>

      <!-- パララックスイメージ -->
      <div class="absolute top-0 left-4 h-full w-full overflow-hidden">
        <div
          v-if="!isSmartPhone"
          class="relative flex h-full w-full justify-between px-10"
        >
          <!-- 1枚目 -->
          <ScrollParallax
            class="absolute left-0 top-[60%] z-50"
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
            class="absolute left-1/4 top-[50%] z-50"
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
            class="absolute left-2/4 top-[75%] z-50"
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
            class="absolute left-3/4 top-[40%] z-50"
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
</template>
~~/src/types/pages/daycare/contact~~/src/stores/pages/daycare/contact
