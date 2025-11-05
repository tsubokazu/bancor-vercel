<script setup lang="ts">
  import type { MessageObject } from '~/types/pages/message';
  import { usePagesMessageStore } from '~/stores/pages/message';

  // layoutを指定
  definePageMeta({
    layout: 'company',
  });

  useHead({
    script: [
      {
        async: true,
        src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
      },
    ],
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesMessageStore = usePagesMessageStore();
  if (Object.keys(pagesMessageStore.header).length == 0) {
    await pagesMessageStore.fetchPagesMessage();
  }
  const { header, message }: MessageObject = pagesMessageStore;

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
    <div class="absolute top-0 left-0 -z-50 h-full w-full bg-[#f3f7fa]"></div>
    <!-- ヘッダー -->
    <div class="flex h-[180px] w-[95%] tb:h-[320px] pc:max-w-[1460px]">
      <div class="mt-[100px] flex flex-col gap-1 tb:mt-[160px] tb:gap-3">
        <!-- 小さなタイトル -->
        <div class="text-[14px] font-bold tb:text-[16px]">トップメッセージ</div>
        <!-- 大きなタイトル -->
        <AtomsFuturaBoldText
          text="TOP Message"
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
      <!-- メイン -->
      <div ref="main" class="mb-[128px] flex w-full flex-col gap-14">
        <div
          class="relative flex w-full flex-col items-center rounded-[10px] border border-[#cbd5e1] bg-white pt-10 pc:pt-[100px]"
        >
          <!-- 画像とメインメッセージのコンテナ -->
          <div
            class="mb-16 flex w-[95%] flex-col items-start gap-8 pc:max-w-[1000px] pc:flex-row pc:gap-12"
          >
            <!-- メインメッセージ（PC時は左側、60%） -->
            <div v-fade-in class="flex w-full flex-col gap-6 pc:w-3/5">
              <div
                class="text-[22px] font-bold text-[#2563eb] tb:text-[30px] pc:text-[28px]"
              >
                {{ message.mainMessage }}
              </div>
              <!-- メッセージ本文（最初の部分） -->
              <div class="post prose" v-html="message.message"></div>
            </div>
            <!-- 画像（PC時は右側、40%） -->
            <div
              class="relative flex h-[450px] w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] pc:h-[650px] pc:w-2/5"
            >
              <img
                :src="message.imgUrl"
                alt="トップメッセージ"
                class="h-full w-full object-cover"
              />
              <!-- 注釈 -->
              <div class="absolute bottom-2 right-2 flex flex-col opacity-90">
                <AtomsFuturaBoldText
                  text="Bancor Inc."
                  size="text-[12px] tb:text-[15px]"
                  color="text-white"
                />
                <div class="text-[12px] text-white tb:text-[15px]">
                  代表取締役社長　山口 龍成
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- パンくずリスト -->
        <div
          class="mb-[128px] flex w-full items-center gap-2 rounded-xl border border-[#cbd5e1] py-5 px-6 font-bold text-[#101010]"
        >
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/message" class="text-xs">トップメッセージ</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
