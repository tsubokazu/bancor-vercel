<script setup lang="ts">
  import { useBeautyQuestionsStore } from '~/stores/pages/beauty/questions';
  import type { BeautyQuestionsObject } from '~/types/pages/beauty/questions';
  import type { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 美容事業Q&A情報をPiniaから取得
  const pagesBeautyQuestionsStore = useBeautyQuestionsStore();
  if (Object.keys(pagesBeautyQuestionsStore.questions).length == 0) {
    await pagesBeautyQuestionsStore.fetchBeautyQuestions();
  }
  const { header, questions }: BeautyQuestionsObject =
    pagesBeautyQuestionsStore;

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
  <div
    class="flex w-full flex-col items-center overflow-hidden after:absolute after:top-0 after:left-0 after:-z-20 after:h-full after:w-full after:bg-[#F1F5F9]"
  >
    <!-- ヘッダー -->
    <div class="h-[160px] w-full tb:h-[240px] pc:h-[293px]">
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
        class="absolute -top-14 flex w-[95%] flex-col space-y-3 tb:-top-32 pc:-bottom-[60px] pc:max-w-[1200px]"
      >
        <div class="text-[26px] font-bold tb:text-[32px]">
          {{ header.title }}
        </div>
      </div>

      <!-- 枠 -->
      <div
        class="bg-color-white flex w-[95%] items-center justify-center rounded-[40px] bg-white px-[50px] py-[36px] pc:max-w-[1200px]"
      >
        <!-- よくあるご質問 -->
        <div class="relative mb-12 flex w-[95%] flex-col pc:max-w-[1100px]">
          <!-- Q&A -->
          <div class="flex w-full flex-col items-center space-y-4">
            <div
              v-for="item in questions.questions"
              class="border-bancogray600 flex w-full flex-col items-center space-y-8 rounded-2xl border-2 py-7"
            >
              <div
                class="flex w-full items-center justify-between px-6 font-bold"
              >
                <div class="flex items-center space-x-2">
                  <AtomsBasicTitle
                    class="text-[#94a3b8]"
                    text="Q"
                    size="text-[20px]"
                  ></AtomsBasicTitle>
                  <div class="pl-4 text-[16px]">{{ item.question }}</div>
                </div>
              </div>
              <div
                class="flex w-full items-center justify-between px-6 font-bold"
              >
                <div class="flex items-center space-x-2">
                  <AtomsBasicTitle
                    class="text-[#e09a39]"
                    text="A"
                    size="text-[20px]"
                  ></AtomsBasicTitle>
                  <div class="pl-4 text-bancor-gray1300">{{ item.answer }}</div>
                </div>
              </div>
            </div>
          </div>
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
              class="absolute left-0 -top-[-20%] z-50"
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
              class="absolute left-1/4 top-[70%] z-50"
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
              class="absolute left-2/4 -top-[-35%] z-50"
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
              class="absolute left-3/4 top-[60%] z-50"
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
~~/src/types/pages/daycare/daycare ~~/src/stores/pages/daycare/daycare
