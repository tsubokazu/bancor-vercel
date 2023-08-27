<script setup lang="ts">
  import { useBeautyStoresStore } from '~/stores/pages/beauty/stores';
  import { BeautyStoresObject } from '~/types/pages/beauty/stores';
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
  import { GoogleMap, Marker } from 'vue3-google-map';
  const center = { lat: 32.7831, lng: 130.76051 };
  const config = useRuntimeConfig();
  const googleMapApiKey = config.public.googleMapApiKey;

  definePageMeta({
    layout: 'default',
  });

  const route = useRoute();
  const storeId = Number(route.params.id);
  console.log(`storeId: ${storeId}`);

  // 放課後等デイサービスページ情報をPiniaから取得
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
  <div class="flex w-full flex-col items-center overflow-hidden">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[293px]">
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
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:-bottom-[60px] pc:max-w-[1200px]"
      >
        <div class="text-[32px] font-bold">{{ header.title }}</div>
      </div>

      <!-- 店舗情報 -->
      <div
        class="flex w-[95%] flex-col rounded-[40px] py-[64px] px-[50px] pc:max-w-[1100px]"
      >
        <!-- 店舗写真＆アクセス等 -->
        <div
          class="mb-[64px] flex flex-col space-y-6 tb:flex-row tb:space-y-0 tb:space-x-14"
        >
          <!-- 店舗写真 -->
          <AtomsBasicIcon
            size="h-[258px]"
            :iconUrl="stores.stores[storeId].imgUrl"
          ></AtomsBasicIcon>
          <!-- アクセス等 -->
          <div class="flex flex-col">
            <!-- 店舗名 -->
            <div class="mb-[34px] text-[24px] font-bold text-[#683f17]">
              {{ stores.stores[storeId].name }}
            </div>
            <!-- 住所 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'location-dot']"
              />
              <div class="text-[#334155]">
                {{ stores.stores[storeId].address }}
              </div>
            </div>
            <!-- 電話番号 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'phone-alt']"
              />
              <div class="text-[20px] font-bold text-[#334155]">
                {{ stores.stores[storeId].tel }}
              </div>
            </div>
            <!-- 営業時間 -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'clock']"
              />
              <div class="text-[#334155]">
                {{ stores.stores[storeId].time }}
              </div>
            </div>
            <!-- 最寄り駅からのアクセス -->
            <div class="mb-4 flex items-center space-x-5">
              <font-awesome-icon
                class="text-[#683f17]"
                :icon="['fas', 'train']"
              />
              <div class="text-[#334155]">
                {{ stores.stores[storeId].access }}
              </div>
            </div>
          </div>
        </div>

        <!-- 予約・口コミ -->
        <div
          class="flex w-[95%] flex-col items-center tb:flex-row tb:justify-between pc:max-w-[1100px]"
        >
          <!-- 予約 -->
          <NuxtLink
            :to="stores.stores[storeId].reserveUrl"
            class="relative flex h-[128px] w-[45%] flex-col items-center justify-center space-y-4 rounded-[10px] border border-[#e2e8f0]"
          >
            <AtomsBasicIcon
              size="h-[42.3px]"
              iconUrl="/images/beauty/stores/hotpepper.png"
            ></AtomsBasicIcon>
            <div class="text-[20px] font-bold text-[#334155]">
              ご予約はこちら
            </div>
            <font-awesome-icon
              class="absolute right-[5%] top-1/2 -translate-y-full text-[24px]"
              :icon="['fas', 'angle-right']"
            />
          </NuxtLink>
          <!-- 口コミ -->
          <NuxtLink
            :to="stores.stores[storeId].reserveUrl"
            class="relative flex h-[128px] w-[45%] flex-col items-center justify-center space-y-4 rounded-[10px] border border-[#e2e8f0]"
          >
            <AtomsBasicIcon
              size="h-[42.3px]"
              iconUrl="/images/beauty/stores/hotpepper.png"
            ></AtomsBasicIcon>
            <div class="text-[20px] font-bold text-[#334155]">
              口コミ評価をみる
            </div>
            <font-awesome-icon
              class="absolute right-[5%] top-1/2 -translate-y-full text-[24px]"
              :icon="['fas', 'angle-right']"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- アクセスマップ -->
      <div
        class="mb-[50px] flex w-[95%] flex-col items-center justify-center space-y-3 pc:max-w-[1000px]"
      >
        <div class="flex w-full justify-between">
          <AtomsBasicTitle
            class="text-[#683f17]"
            text="MAP"
            size="text-[24px]"
          ></AtomsBasicTitle>
        </div>
        <GoogleMap
          :api-key="googleMapApiKey"
          class="h-[400px] w-full"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" class="h-6" />
        </GoogleMap>
      </div>

      <!-- GALLERY -->
      <div
        class="flex w-[95%] flex-col items-center justify-center space-y-3 pc:max-w-[1000px]"
      >
        <div class="flex w-full justify-between">
          <AtomsBasicTitle
            class="text-[#683f17]"
            text="GALLERY"
            size="text-[24px]"
          ></AtomsBasicTitle>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4 tb:grid-cols-4">
            <AtomsBasicIcon
              v-for="(imgUrl, index) in stores.stores[storeId].gallery"
              size="h-[193px]"
              :iconUrl="imgUrl"
            ></AtomsBasicIcon>
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
