<script setup lang="ts">
  import { CompanyProfileObject } from '~/types/pages/company-profile';
  import { usePagesCompanyProfileStore } from '~/stores/pages/company-profile';
  import { GoogleMap, Marker } from 'vue3-google-map';
  const center = { lat: 33.5894734, lng: 130.3923709 };
  const config = useRuntimeConfig();
  const googleMapApiKey = config.public.googleMapApiKey;

  // layoutを指定
  definePageMeta({
    layout: 'company',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesCompanyProfileStore = usePagesCompanyProfileStore();
  if (Object.keys(pagesCompanyProfileStore.header).length == 0) {
    await pagesCompanyProfileStore.fetchPagesCompanyProfile();
    await pagesCompanyProfileStore.fetchPagesCompanyPhotos();
  }
  const { companyProfile, companyPhotos }: CompanyProfileObject =
    pagesCompanyProfileStore;

  console.log(`companyPhotos: ${JSON.stringify(companyPhotos)}`);

  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  // スライダー設定
  const slideNum = computed(() => companyPhotos.length);
  const currentSlideIndex = ref(Math.floor(slideNum.value / 2));
  const sliderImgWidth = ref(0);
  const updateSliderImgWidth = () => {
    if (isSmartPhone.value) {
      sliderImgWidth.value = 320;
    } else if (isTablet.value) {
      sliderImgWidth.value = 480;
    } else {
      sliderImgWidth.value = 768;
    }
  };
  const moveValue = computed(() => sliderImgWidth.value + 24);
  const currentPosition = computed(
    () => currentSlideIndex.value * -moveValue.value
  );

  const move = (direction: number) => {
    if (direction === -1) {
      currentSlideIndex.value = currentSlideIndex.value - 1;
    } else {
      currentSlideIndex.value = currentSlideIndex.value + 1;
    }
    if (currentSlideIndex.value < 0) {
      currentSlideIndex.value = slideNum.value - 1;
    } else if (currentSlideIndex.value >= slideNum.value) {
      currentSlideIndex.value = 0;
    }
  };

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
      sliderImgWidth.value = sliderImgWidth.value;
    }
  };

  // サイドバーの固定まわり
  const sidebar = ref(null);
  const main = ref(null);

  const handleScroll = () => {
    if (isSmartPhone.value) return;
    // sidebarがHTMLElementであることをTypeScriptに伝える
    const sidebarElement = sidebar.value as HTMLElement | null;
    const mainElement = main.value as HTMLElement | null;
    if (!sidebarElement) return;
    if (!mainElement) return;

    const sidebarTop = sidebarElement.getBoundingClientRect().top;

    // mainの高さを取得
    const mainHeight = mainElement.offsetHeight;

    if (
      sidebarTop <= 144 &&
      window.scrollY > 170 &&
      window.scrollY <= mainHeight - 500
    ) {
      sidebarElement.style.position = 'fixed';
      sidebarElement.style.top = '144px';
    } else if (window.scrollY > mainHeight - 500) {
      sidebarElement.style.position = 'fixed';
      sidebarElement.style.top = `${
        144 - (window.scrollY - (mainHeight - 500))
      }px`;
    } else {
      sidebarElement.style.position = 'relative';
      sidebarElement.style.top = 'auto';
    }
  };

  onMounted(() => {
    nextTick(() => {
      updateWidth();
      updateSliderImgWidth();
    });
    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div
    class="relative flex w-full flex-col items-center justify-between overflow-hidden"
  >
    <!-- 背景 -->
    <div class="absolute top-0 left-0 -z-50 h-full w-full bg-[#f1f5f9]"></div>
    <!-- ヘッダー -->
    <div class="flex h-[180px] w-[95%] tb:h-[320px] pc:max-w-[1460px]">
      <div class="mt-[100px] flex flex-col gap-1 tb:mt-[160px] tb:gap-3">
        <!-- 小さなタイトル -->
        <div class="text-[14px] font-bold tb:text-[16px]">
          会社概要・アクセス
        </div>
        <!-- 大きなタイトル -->
        <AtomsFuturaBoldText
          text="Company Overview"
          size="text-[28px] tb:text-[40px]"
        />
      </div>
    </div>
    <!-- 背景アニメーション -->
    <div
      class="fixed top-[-130px] right-[-400px] -z-10 h-[731px] w-[960px] overflow-hidden tb:right-[-150px]"
    >
      <video autoplay loop muted playsinline class="h-full w-full object-cover">
        <source src="/movies/sc.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- ボディ -->
    <div
      class="flex w-[95%] flex-col gap-4 tb:flex-row pc:max-w-[1460px] pc:gap-8"
    >
      <!-- サイド -->
      <div class="relative w-[238px] flex-none">
        <div ref="sidebar">
          <OrganismsCompanyInfoSideMenu />
        </div>
      </div>
      <div ref="main" class="flex w-full flex-col gap-8">
        <!-- 詳細情報 -->
        <div class="text-[28px] font-bold">詳細情報</div>
        <!-- メイン -->
        <div
          class="mb-[64px] flex w-full flex-col gap-14 rounded-[10px] border border-[#cbd5e1] bg-white px-5 pt-10 tb:px-12"
        >
          <div class="flex w-full flex-col items-center">
            <!-- ボディ -->
            <div
              class="relative mb-40 flex w-full flex-col items-center space-y-24"
            >
              <!-- ロゴ -->
              <div class="w-full">
                <div
                  class="relative flex h-[180px] w-full items-center justify-center bg-[#f8fafc] tb:h-[222px] pc:max-w-[538px]"
                >
                  <div
                    class="absolute top-2 right-2 rounded-[10px] bg-[#e2e8f0] px-[10px] py-1 text-[13px] text-[#1e293b] tb:text-[16px]"
                  >
                    Bancor株式会社　企業ロゴ
                  </div>
                  <img :src="companyProfile.logoUrl" class="tb:h-[118px]" />
                </div>
              </div>

              <!-- 会社概要 -->
              <div class="flex w-full flex-col space-y-8">
                <MoleculesCompanyOverviewRow
                  item="会社商号"
                  :name="companyProfile.name"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="所在地"
                  :name="companyProfile.address"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="代表者"
                  :name="companyProfile.ceo"
                  :linkTitle="companyProfile.messageTitle"
                  :linkUrl="companyProfile.messageLinkUrl"
                  :linkDirRow="isSmartPhone ? false : true"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="設立"
                  :name="companyProfile.establish"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="資本金"
                  :name="companyProfile.capital"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="事業内容"
                  :name="companyProfile.service"
                  :linkTitle="companyProfile.serviceTitle"
                  :linkUrl="companyProfile.serviceLinkUrl"
                  :linkDirRow="false"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="従業員数"
                  :name="companyProfile.employee"
                ></MoleculesCompanyOverviewRow>
                <MoleculesCompanyOverviewRow
                  item="取引銀行"
                  :name="companyProfile.bank"
                ></MoleculesCompanyOverviewRow>
              </div>
            </div>
          </div>
        </div>

        <!-- 写真スライダー -->
        <div v-fade-in class="mb-[40px] flex w-full flex-col gap-8">
          <!-- タイトル -->
          <div class="relative flex w-full items-center">
            <!-- タイトル -->
            <div class="mr-3 text-[20px] font-bold tb:mr-10 tb:text-[28px]">
              オフィス情報
            </div>
            <!-- ボーダー -->
            <div class="mr-3 h-[22px] w-[1px] bg-[#334155]"></div>
            <!-- 写真サブタイトル -->
            <div class="text-[14px] text-[#334155] tb:text-[16px]">
              {{ companyPhotos[currentSlideIndex].imgSubTitle }}
            </div>
          </div>
          <!-- 写真 -->
          <div
            ref="slider"
            class="relative h-[240px] w-full items-center overflow-hidden tb:h-[320px] pc:h-[480px]"
          >
            <!-- 右端のぼかし -->
            <div
              class="via-[#f1f5f9 absolute top-0 right-0 z-20 h-full w-[40px] bg-gradient-to-l from-[#f1f5f9] to-transparent"
            ></div>
            <!-- 左端のぼかし -->
            <div
              class="absolute top-0 left-0 z-20 h-full w-[40px] bg-gradient-to-r from-[#f1f5f9] via-[#f1f5f9] to-transparent"
            ></div>
            <!-- 写真連続 -->
            <div
              class="absolute top-0 flex h-full items-center gap-6 transition-transform duration-300 ease-in-out"
              :style="{
                transform: `translateX(${currentPosition}px)`,
                left: `calc((100% - ${sliderImgWidth}px) / 2)`,
              }"
            >
              <div
                v-for="(photo, index) in companyPhotos"
                class="h-full w-[320px] flex-none overflow-hidden rounded-[10px] bg-[#f1f5f9] tb:w-[480px] pc:w-[768px]"
              >
                <img :src="photo.imgUrl" class="h-full w-full object-cover" />
              </div>
            </div>
            <!-- 左やじるし -->
            <button
              v-if="currentSlideIndex > 0"
              @click="move(-1)"
              class="absolute left-[10%] top-[50%] z-20 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
            >
              <font-awesome-icon
                class="text-[16px] text-white pc:text-[32px]"
                :icon="['fas', 'angle-left']"
              />
            </button>
            <!-- 右やじるし -->
            <button
              v-if="currentSlideIndex < slideNum - 1"
              @click="move(1)"
              class="absolute right-[10%] top-[50%] z-20 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full bg-black pc:h-16 pc:w-16"
            >
              <font-awesome-icon
                class="text-[16px] text-white pc:text-[32px]"
                :icon="['fas', 'angle-right']"
              />
            </button>
          </div>
          <!-- スライダーナビゲーション -->
          <div class="flex w-full items-center justify-center gap-4">
            <div
              v-for="(photo, index) in companyPhotos"
              class="h-2 w-2 rounded-full"
              :class="
                currentSlideIndex === index ? 'bg-[#334155]' : 'bg-[#cbd5e1]'
              "
            ></div>
          </div>
        </div>

        <!-- アクセスマップ -->
        <div
          v-fade-in
          class="mb-20 flex w-full flex-col items-center justify-center space-y-3"
        >
          <div class="flex w-full items-center justify-between">
            <AtomsBasicTitle
              text="アクセス"
              size="text-[28px]"
            ></AtomsBasicTitle>
            <AtomsLinkMoveArrowTitle
              text="グーグルマップを開く"
              :linkUrl="companyProfile.mapUrl"
              size="text-[15px]"
            ></AtomsLinkMoveArrowTitle>
          </div>
          <div
            class="flex h-[400px] w-full items-center justify-center bg-white"
          >
            <GoogleMap
              :api-key="googleMapApiKey"
              class="h-[390px] w-[99%]"
              :center="center"
              :zoom="15"
            >
              <Marker
                :options="{
                  position: center,
                  icon: companyProfile.mapIconUrl,
                }"
                class="h-6"
              />
            </GoogleMap>
          </div>
          <div class="flex w-full">
            <p class="text-[16px] text-[#334155]">
              〒810-0041<br />
              福岡県福岡市中央区大名2-6-50 福岡大名ガーデンシティ8F
            </p>
          </div>
        </div>

        <!-- パンくずリスト -->
        <div
          class="mb-[128px] flex w-full items-center gap-2 rounded-xl border border-[#cbd5e1] py-5 px-6 font-bold text-[#101010]"
        >
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/company-profile" class="text-xs"
            >会社概要・アクセス</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
