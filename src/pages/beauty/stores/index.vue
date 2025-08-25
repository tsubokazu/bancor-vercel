<script setup lang="ts">
  import { useBeautyStoresStore } from '~/stores/pages/beauty/stores';
  import type { BeautyObject } from '~/types/pages/beauty';
  import { usePagesBeautyStore } from '~/stores/pages/beauty';
  import type { BeautyStoresObject } from '~/types/stores';
  import type { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
  import axios from 'axios';

  definePageMeta({
    layout: 'default',
  });

  // 美容事業ページ情報をPiniaから取得
  const beautyStoresStore = useBeautyStoresStore();
  if (Object.keys(beautyStoresStore.header).length == 0) {
    await beautyStoresStore.fetchBeautyStores();
  }
  const { header, stores }: BeautyStoresObject = beautyStoresStore;

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
        class="absolute -top-14 flex h-fit w-[95%] flex-col space-y-3 tb:-top-32 pc:-bottom-[60px] pc:max-w-[1200px]"
      >
        <div class="text-[26px] font-bold tb:text-[32px]">
          {{ header.title }}
        </div>
      </div>

      <!-- 店舗情報 -->
      <div class="flex w-[95%] flex-col justify-center gap-8 pc:max-w-[1200px]">
        <!-- 店舗一覧 -->
        <div
          v-for="(item, index) in stores"
          class="flex flex-col items-center rounded-3xl bg-white tb:flex-row tb:items-start tb:gap-6 tb:py-6 tb:px-6 pc:items-center pc:gap-12 pc:px-12"
        >
          <!-- 写真 -->
          <div
            class="my-8 flex h-[240px] w-[95%] flex-none overflow-hidden rounded-3xl bg-pink-400 tb:w-[280px]"
          >
            <img
              :src="item.imgUrl"
              alt="店舗画像"
              class="h-full w-full object-cover"
            />
          </div>
          <!-- アクセス等 -->
          <div class="flex w-[90%] flex-col tb:pl-6">
            <!-- 店舗名 -->
            <NuxtLink
              :to="`/stores/${item.topicsId}`"
              class="mb-[20px] text-[20px] font-bold text-[#683f17] tb:mb-[34px] tb:text-[24px]"
            >
              {{ item.name }}
            </NuxtLink>
            <!-- 住所 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'location-dot']"
              />
              <div class="text-[#334155]">
                {{ item.address }}
              </div>
            </div>
            <!-- 電話番号 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'phone-alt']"
              />
              <div class="text-[20px] font-bold text-[#334155]">
                {{ item.tel }}
              </div>
            </div>
            <!-- 営業時間 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'clock']"
              />
              <div class="text-[#334155]">
                {{ item.time }}
              </div>
            </div>
            <!-- 最寄り駅からのアクセス -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'train']"
              />
              <div class="text-[#334155]">
                {{ item.access }}
              </div>
            </div>
            <!-- 予約等のボタン -->
            <div class="mb-6 mt-6 flex flex-col items-center gap-4 pc:flex-row">
              <!-- 予約 -->
              <NuxtLink
                :to="item.reserveUrl"
                class="space-4 relative flex w-[95%] items-center justify-center rounded-[10px] border border-[#e2e8f0] px-6 py-5 pc:w-auto"
              >
                <AtomsBasicIcon
                  size="h-[25px]"
                  iconUrl="/images/beauty/stores/hotpepper.png"
                  class="mr-3"
                ></AtomsBasicIcon>
                <div class="text-[16px] font-bold text-[#334155]">
                  ご予約はこちら
                </div>
                <font-awesome-icon
                  class="absolute top-1/2 right-2 translate-y-[-50%] text-[16px]"
                  :icon="['fas', 'angle-right']"
                />
              </NuxtLink>
              <!-- 口コミ -->
              <NuxtLink
                :to="`${item.reserveUrl}review`"
                class="space-4 relative flex w-[95%] items-center justify-center rounded-[10px] border border-[#e2e8f0] px-6 py-5 pc:w-auto"
              >
                <AtomsBasicIcon
                  size="h-[25px]"
                  iconUrl="/images/beauty/stores/hotpepper.png"
                  class="mr-3"
                ></AtomsBasicIcon>
                <div class="text-[16px] font-bold text-[#334155]">
                  口コミはこちら
                </div>
                <font-awesome-icon
                  class="absolute top-1/2 right-2 translate-y-[-50%] text-[16px]"
                  :icon="['fas', 'angle-right']"
                />
              </NuxtLink>
              <!-- クーポン -->
              <NuxtLink
                :to="`${item.reserveUrl}coupon`"
                class="space-4 relative flex w-[95%] items-center justify-center rounded-[10px] border border-[#e2e8f0] px-6 py-5 pc:w-auto"
              >
                <AtomsBasicIcon
                  size="h-[25px]"
                  iconUrl="/images/beauty/stores/hotpepper.png"
                  class="mr-3"
                ></AtomsBasicIcon>
                <div class="text-[16px] font-bold text-[#334155]">
                  クーポンはこちら
                </div>
                <font-awesome-icon
                  class="absolute top-1/2 right-2 translate-y-[-50%] text-[16px]"
                  :icon="['fas', 'angle-right']"
                />
              </NuxtLink>
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
              class="absolute left-0 -top-[10%] z-50"
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
              class="absolute left-1/4 top-[100%] z-50"
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
              class="absolute left-2/4 -top-[15%] z-50"
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
              class="absolute left-3/4 top-[80%] z-50"
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
