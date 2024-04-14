<script setup lang="ts">
  import {
    ServiceListItem,
    Service,
    SystemDevelopment,
    DxSupport,
    DayCareSi,
  } from '~/types/pages/service';
  import { useServiceStore } from '~/stores/pages/service';

  // 事業内容ページ情報をPiniaから取得
  const serviceStore = useServiceStore();
  if (Object.keys(serviceStore.serviceListForSide).length == 0) {
    await serviceStore.fetchServiceList();
  }
  const serviceListForSide: ServiceListItem[] = serviceStore.serviceListForSide;

  if (Object.keys(serviceStore.systemDevelopmentService).length == 0) {
    await serviceStore.fetchServiceDetails();
  }
  const systemDevelopmentService: SystemDevelopment =
    serviceStore.systemDevelopmentService;
  const dxSupportService: DxSupport = serviceStore.dxSupportService;
  const welfareService: Service = serviceStore.welfareService;
  const dayCareSiService: DayCareSi = serviceStore.dayCareSiService;
  const beautyService: Service = serviceStore.beautyService;
  const maService: Service = serviceStore.maService;

  // モーダルを表示するかどうか
  const isModalOpen = ref(false);
  provide('isModalOpen', isModalOpen);

  // モーダルのインデックス
  const currentModalIndex = ref(0);
  provide('currentModalIndex', currentModalIndex);

  const closeModal = () => {
    isModalOpen.value = false;
  };

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
  <div class="relative flex w-full flex-col items-center">
    <!-- 背景 -->
    <div class="fixed top-0 right-0 -z-40 h-screen">
      <img
        src="/service-page-bg.png"
        alt="service-bg"
        class="h-full object-cover"
      />
    </div>
    <div class="absolute -z-50 h-full w-full bg-[#f1f5f9]"></div>
    <!-- ヘッダー -->
    <div
      class="flex min-h-[500px] w-[95%] flex-col justify-between tb:min-h-[700px] pc:min-h-screen pc:max-w-[1460px]"
    >
      <!-- 小タイトル -->
      <div class="mt-[120px] text-[15px] text-[#64748b]">
        事業内容 ／ サービス一覧<span
          class="text-[#1c1c1c]"
          v-if="!isSmartPhone"
          >福岡で最も最先端のデザイン構築が得意な技術集団</span
        >
      </div>
      <!-- タイトル -->
      <div
        class="pulse-gradient-text relative mb-20 w-fit text-[32px] font-bold tb:pl-[70px] tb:text-[60px] pc:text-[72px]"
      >
        高い投資対効果を<br />
        求めるならNUVO DX。<br />
        デザイン資産の構築を<br />
        全方位でご支援します。
      </div>
    </div>
    <!-- ボディ -->
    <div
      class="flex w-[95%] flex-col gap-4 tb:flex-row pc:max-w-[1460px] pc:gap-8"
    >
      <!-- サイド -->
      <OrganismsServiceSideMenu v-fade-in :serviceList="serviceListForSide" />
      <!-- メイン -->
      <div class="mb-[128px] flex w-full flex-col gap-14">
        <!-- システム開発 -->
        <OrganismsServiceDetail
          v-fade-in
          :service="systemDevelopmentService"
          :modalIndex="0"
        >
          <OrganismsServiceSystemDevelopmentModal
            v-if="isModalOpen && currentModalIndex === 0"
            :systemDevelopmentService="systemDevelopmentService"
          />
        </OrganismsServiceDetail>
        <!-- DXサポート -->
        <OrganismsServiceDetail
          v-fade-in
          :service="dxSupportService"
          :modalIndex="1"
        >
          <OrganismsServiceDxSupportModal
            v-if="isModalOpen && currentModalIndex === 1"
            :dxSupportService="dxSupportService"
          />
        </OrganismsServiceDetail>
        <!-- 福祉 -->
        <OrganismsServiceDetail
          v-fade-in
          :service="welfareService"
          :modalIndex="2"
        >
          <OrganismsServiceWelfareModal
            v-if="isModalOpen && currentModalIndex === 2"
            :welfareService="welfareService"
          >
          </OrganismsServiceWelfareModal>
        </OrganismsServiceDetail>
        <!-- 保育 -->
        <OrganismsServiceDetail
          v-fade-in
          :service="dayCareSiService"
          :modalIndex="3"
        >
          <OrganismsServiceDayCareSiModal
            v-if="isModalOpen && currentModalIndex === 3"
            :dayCareSiService="dayCareSiService"
          ></OrganismsServiceDayCareSiModal>
        </OrganismsServiceDetail>
        <!-- 美容 -->
        <OrganismsServiceDetail
          v-fade-in
          :service="beautyService"
          :modalIndex="4"
        >
          <OrganismsServiceBeautyModal
            v-if="isModalOpen && currentModalIndex === 4"
            :beautyService="beautyService"
          ></OrganismsServiceBeautyModal>
        </OrganismsServiceDetail>
        <!-- マーケティング -->
        <OrganismsServiceDetail v-fade-in :service="maService" />
      </div>
    </div>
    <!-- 詳細をみる時のグレーフィルター -->
    <div
      v-if="isModalOpen"
      class="fixed top-0 left-0 z-40 h-screen w-screen bg-[#000000] bg-opacity-50"
      @click="closeModal"
    ></div>
  </div>
</template>

<style scoped>
  @keyframes pulseAnimation {
    0%,
    100% {
      background-size: 80% 80%;
    }
    50% {
      background-size: 200% 200%;
    }
  }

  .pulse-gradient-text {
    background-image: radial-gradient(
      circle at center,
      #ffffff 0%,
      #0072ff 40%,
      #000000 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: pulseAnimation 10s ease-in-out infinite;
  }
</style>
