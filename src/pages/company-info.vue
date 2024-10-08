<script setup lang="ts">
  import { CompanyInfoObject } from '~/types/pages/company-info';
  import { usePagesCompanyInfoStore } from '~/stores/pages/company-info';

  // layoutを指定
  definePageMeta({
    layout: 'company',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesCompanyInfoStore = usePagesCompanyInfoStore();
  if (Object.keys(pagesCompanyInfoStore.vision).length == 0) {
    await pagesCompanyInfoStore.fetchPagesCompanyInfo();
  }
  const {
    vision,
    infographics,
    boardMember,
    technology,
    technologyStacks,
    pageLinks,
  }: CompanyInfoObject = pagesCompanyInfoStore;

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

  // インフォグラフィクスの数値カウントアップアニメーション
  const countUp = (
    start: number,
    end: number,
    duration: number,
    callback: (current: number) => void
  ) => {
    let current = start * 10; // 小数点を1桁右にずらす
    const endInt = end * 10; // 終了値も同様に小数点を1桁右にずらす
    const range = endInt - current;
    const isInteger = Number.isInteger(end);
    const increment = isInteger ? 10 : 3; // 整数の場合は10を加算、小数の場合は1を加算
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      callback(current / 10); // コールバックに渡す値を元のスケールに戻す
      if (current >= endInt) {
        current = endInt;
        callback(current / 10);
        clearInterval(timer);
      }
    }, stepTime);
  };

  type ObservedElement = {
    el: Element;
    value: number;
    animated: boolean;
  };

  const observedElements = ref<ObservedElement[]>([]);
  let observer: IntersectionObserver;

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = observedElements.value.find(
              (element) => element.el === entry.target
            );
            if (targetElement && !targetElement.animated) {
              countUp(
                0,
                Number((targetElement.el as HTMLElement).innerText),
                2000,
                (val) => {
                  (targetElement.el as HTMLElement).innerText = val.toString();
                }
              );
              targetElement.animated = true;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.count-up').forEach((el) => {
      observer.observe(el);
      observedElements.value.push({
        el,
        value: parseInt(el.getAttribute('data-value') ?? '0', 10),
        animated: false,
      });
    });
  });

  onUnmounted(() => {
    observedElements.value.forEach((element) => {
      observer.unobserve(element.el);
    });
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
        <div class="text-[14px] font-bold tb:text-[16px]">会社案内</div>
        <!-- 大きなタイトル -->
        <AtomsFuturaBoldText
          text="Company Info"
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
          class="relative flex w-full flex-col items-center rounded-[10px] border border-[#cbd5e1] bg-white pt-[100px]"
        >
          <!-- 全世界80億人の為のインフラを。 -->
          <div v-fade-in class="mb-[156px] flex flex-col items-center">
            <!-- サブタイトル -->
            <div class="mb-[40px] text-[24px] font-bold">
              {{ vision.subTitle }}
            </div>
            <!-- メインメッセージ -->
            <AtomsBasicTitle
              size="text-[36px] pc:text-[48px]"
              spaceY="space-y-[40px]"
              color="text-gradient-bancor-blue"
              :text="vision.title"
              class="mb-[48px] w-[290px] text-center pc:w-[390px]"
            ></AtomsBasicTitle>
            <!-- 説明 -->
            <AtomsBasicOutline
              size="text-[24px] text-[16px]"
              color="text-[#64748b]"
              :text="vision.outline"
              :isbold="false"
              class="mb-[48px] w-[95%] text-center pc:w-[554px]"
            ></AtomsBasicOutline>
            <!-- ビジョン・パーパスへのボタン -->
            <MoleculesDetailButton
              v-if="vision.linkUrl.length > 0"
              :linkUrl="vision.linkUrl"
              :text="vision.linkTitle"
            ></MoleculesDetailButton>
          </div>

          <!-- インフォグラフィックス -->
          <div class="mb-[120px] flex flex-wrap justify-center gap-20">
            <!-- カード -->
            <div
              v-for="(infographic, index) in infographics"
              :key="infographic.title"
              v-fade-in
              class="flex h-[364px] w-[320px] flex-col items-center gap-4 tb:h-[364px] tb:w-[395px]"
            >
              <!-- イラスト -->
              <div class="flex h-[176px] w-[176px] items-center justify-center">
                <img
                  :src="infographic.imgUrl"
                  :alt="infographic.title"
                  class="h-full w-full object-cover"
                />
              </div>
              <!-- タイトル -->
              <div class="text-[20px] font-bold tb:text-[24px]">
                {{ infographic.title }}
              </div>
              <!-- 数字情報 -->
              <div class="flex items-end gap-2">
                <div
                  class="count-up text-[72px] font-bold leading-[72px] text-[#2563eb]"
                >
                  {{ infographic.value }}
                </div>
                <div class="text-[24px] font-bold">{{ infographic.unit }}</div>
              </div>
              <!-- 説明 -->
              <AtomsBasicOutline
                size="text-[15px]"
                :text="infographic.description"
                color="text-[#475569]"
                :isBold="false"
                class="flex w-full"
              ></AtomsBasicOutline>
            </div>
          </div>

          <!-- 役員・責任者紹介 -->
          <div v-fade-in class="relative mb-[96px] h-[646px] w-full">
            <!-- 背景 -->
            <img
              src="/company-info-board-member-bg.png"
              alt="board-member"
              class="h-full w-full object-cover"
            />
            <!-- 画像 -->
            <div
              class="absolute top-[7%] left-1/2 h-[214px] w-[320px] -translate-x-1/2 overflow-hidden pc:left-[3%] pc:h-[428px] pc:w-[672px] pc:translate-x-0 pc:clip-xywh"
            >
              <img
                :src="boardMember.logoUrl"
                alt="board-member"
                class="absolute top-1/2 left-1/2 z-10 h-[100px] -translate-x-1/2 -translate-y-1/2"
              />
              <img
                :src="boardMember.imgUrl"
                alt="board-member"
                class="h-full w-full object-cover"
                style="filter: brightness(80%)"
              />
            </div>
            <!-- タイトル・説明・リンク -->
            <div
              class="absolute bottom-[10%] left-1/2 flex w-[95%] -translate-x-1/2 flex-col text-white pc:bottom-[10%] pc:right-[3%] pc:w-[538px] pc:translate-x-0"
            >
              <!-- タイトル -->
              <AtomsBasicTitle
                size="text-[28px] tb:text-[32px] pc:text-[48px]"
                :text="boardMember.title"
                color="text-white"
                class="mb-[12px]"
              ></AtomsBasicTitle>
              <!-- 説明 -->
              <div class="mb-8 text-[16px] font-bold pc:text-[22px]">
                {{ boardMember.outline }}
              </div>
              <!-- リンク -->
              <MoleculesDetailButton
                v-if="boardMember.linkUrl.length > 0"
                :linkUrl="boardMember.linkUrl"
                :text="boardMember.linkTitle"
                color="bg-white"
                arrowColor="text-[#0b50ae]"
                :isBold="false"
              ></MoleculesDetailButton>
            </div>
          </div>

          <!-- 技術力 -->
          <div v-fade-in class="mb-[96px] flex flex-col items-center">
            <AtomsBasicTitle
              size="text-[28px] tb:text-[36px] pc:text-[56px]"
              :text="technology.title"
              class="mb-[48px] text-center"
              spaceY="space-y-0"
            ></AtomsBasicTitle>
            <AtomsBasicOutline
              size="text-[16px] tb:text-[20px] pc:text-[24px]"
              color="text-[#64748b]"
              :text="technology.outline"
              :isBold="false"
              class="mb-[48px] px-2 text-center"
            ></AtomsBasicOutline>
            <!-- 技術スタック -->
            <div class="mb-8 flex flex-col items-center gap-2 tb:gap-6">
              <div class="flex items-center gap-2 tb:gap-6">
                <div
                  v-for="(technologyStack, index) in technologyStacks.slice(
                    0,
                    6
                  )"
                  :key="index"
                  class="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#cbd5e1] bg-[#f3f7fa] tb:h-[65px] tb:w-[65px] pc:h-[90px] pc:w-[90px]"
                >
                  <img
                    :src="technologyStack.imgUrl"
                    :alt="technologyStack.imgAlt"
                    class="object-fit w-[23px] tb:w-[38px] pc:w-[55px]"
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 tb:gap-6">
                <div
                  v-for="(technologyStack, index) in technologyStacks.slice(
                    6,
                    11
                  )"
                  :key="index"
                  class="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#cbd5e1] bg-[#f3f7fa] tb:h-[65px] tb:w-[65px] pc:h-[90px] pc:w-[90px]"
                >
                  <img
                    :src="technologyStack.imgUrl"
                    :alt="technologyStack.imgAlt"
                    class="object-fit w-[23px] tb:w-[38px] pc:w-[55px]"
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 tb:gap-6">
                <div
                  v-for="(technologyStack, index) in technologyStacks.slice(
                    11,
                    17
                  )"
                  :key="index"
                  class="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#cbd5e1] bg-[#f3f7fa] tb:h-[65px] tb:w-[65px] pc:h-[90px] pc:w-[90px]"
                >
                  <img
                    :src="technologyStack.imgUrl"
                    :alt="technologyStack.imgAlt"
                    class="object-fit w-[23px] tb:w-[38px] pc:w-[55px]"
                  />
                </div>
              </div>
            </div>
            <!-- 対応可能な言語 -->
            <div class="text-[15px] text-[#64748b]">対応可能な言語の一部</div>
          </div>

          <!-- ページリンク -->
          <div
            v-fade-in
            class="mb-[112px] flex flex-wrap items-center justify-center gap-y-5 pc:gap-x-5"
          >
            <NuxtLink
              :to="pageLink.linkUrl"
              v-for="(pageLink, index) in pageLinks"
              class="flex w-[95%] flex-wrap items-center justify-between rounded-[10px] border border-[#cbd5e1] bg-[#f8fafc] px-10 py-11 pc:w-[46%]"
            >
              <!-- リンクタイトル -->
              <div class="text-[22px] font-bold">{{ pageLink.title }}</div>
              <!-- 矢印 -->
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="text-[18px]"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- パンくずリスト -->
        <div
          class="mb-[128px] flex w-full items-center gap-2 rounded-xl border border-[#cbd5e1] py-5 px-6 font-bold text-[#101010]"
        >
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/company-info" class="text-xs">会社案内</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
