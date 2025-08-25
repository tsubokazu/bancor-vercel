<script setup lang="ts">
  // Footerから提供された値を受け取る
  const isRounded = inject('isRounded');

  const contentList = [
    {
      icon: '/footer-contact.png',
      title: 'お問い合わせ',
      outline: 'サービスに関するお問い合わせなどはこちらから',
      linkUrl: '/contact',
    },
    {
      icon: '/footer-documents.png',
      title: '資料一覧',
      outline: 'サービス概要資料や会社説明資料をご覧いただけます。',
      linkUrl: '/materials',
    },
  ];

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
  <div
    class="flex flex-col items-center bg-[#1e293b] pt-[40px] tb:h-[910px] pc:pt-[80px]"
    :class="[
      isRounded
        ? 'rounded-t-[25px] tb:rounded-t-[50px] pc:rounded-t-[100px]'
        : '',
    ]"
  >
    <!-- お問いあわせ・資料 -->
    <div
      class="flex w-full flex-col items-center justify-center gap-6 tb:max-w-[1300px] tb:flex-row tb:gap-5 pc:justify-between pc:gap-0"
    >
      <NuxtLink
        v-for="content in contentList"
        :to="content.linkUrl"
        class="relative flex w-[320px] items-center rounded-[20px] bg-[#0f172a] px-6 py-5 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl tb:w-[40%] pc:w-[627px]"
      >
        <!-- アイコン -->
        <div
          class="mr-4 h-[60px] w-[60px] flex-none pc:mr-[30px] pc:h-[90px] pc:w-[90px]"
        >
          <img :src="content.icon" alt="" class="h-full w-full object-cover" />
        </div>
        <!-- テキスト -->
        <div class="flex flex-col gap-2">
          <div class="text-[20px] font-bold text-white">
            {{ content.title }}
          </div>
          <div v-if="isPC" class="text-[14px] text-white">
            {{ content.outline }}
          </div>
        </div>
        <!-- やじるし -->
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          class="absolute right-10 top-[50%] translate-y-[-50%] text-[27px] text-[#94a3b8]"
        />
      </NuxtLink>
    </div>
    <!-- サイトマップ -->
    <div
      class="mb-10 flex w-11/12 flex-col items-start pt-8 tb:items-start tb:gap-10 pc:w-full pc:max-w-[1300px] pc:flex-row pc:gap-0 pc:pt-[56px]"
    >
      <!-- ロゴ -->
      <NuxtLink
        to="/"
        class="mb-5 flex h-[59px] w-[242px] items-center justify-center tb:mb-0 tb:mr-[80px] pc:ml-6"
      >
        <img src="/logo-white.png" alt="" class="h-full w-full object-cover" />
      </NuxtLink>
      <div class="ml-6 flex flex-col gap-10 tb:flex-row pc:ml-0 pc:gap-[112px]">
        <!-- About us, Media -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">About us</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/company-info">会社案内</NuxtLink>
              <NuxtLink to="/message">代表メッセージ</NuxtLink>
              <NuxtLink to="/vision">ビジョン・パーパス</NuxtLink>
              <NuxtLink to="/materials">資料ダウンロード</NuxtLink>
            </div>
          </div>
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">Media</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/">BCC</NuxtLink>
              <NuxtLink to="/">TOP Diary</NuxtLink>
              <NuxtLink to="/">Bancor Members</NuxtLink>
              <NuxtLink to="/">Bancor Note</NuxtLink>
            </div>
          </div>
        </div>
        <!-- Service -->
        <div class="flex flex-col gap-7">
          <div class="text-[16px] font-bold text-white">Service</div>
          <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
            <NuxtLink to="/system-development">システム開発</NuxtLink>
            <NuxtLink to="https://d-nuvo.com/service/dx/">DX支援事業</NuxtLink>
            <NuxtLink to="https://d-nuvo.com/service/marketing/">M&A</NuxtLink>
            <NuxtLink to="/welfare">福祉事業</NuxtLink>
            <NuxtLink to="/welfare/care-welfare"
              >介護施設向けSI事業</NuxtLink
            >
            <NuxtLink to="/beauty">美容事業</NuxtLink>
          </div>
        </div>
        <!-- Bancor Journal, News Room -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">Bancor Journal</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/journal">注目記事</NuxtLink>
              <NuxtLink to="/journal">トレンド記事</NuxtLink>
              <NuxtLink to="/journal">編集部おすすめ記事</NuxtLink>
            </div>
          </div>
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">News Room</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/news/notification">お知らせ</NuxtLink>
              <NuxtLink to="/news/press-release">プレスリリース</NuxtLink>
              <NuxtLink to="/news/service-news">サービスニュース</NuxtLink>
            </div>
          </div>
        </div>
        <!-- Recruit, Support -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">Recruit</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/recruit-dx">DX支援採用情報</NuxtLink>
              <NuxtLink to="/recruit-nuvo">NUVO関連採用情報</NuxtLink>
              <NuxtLink to="/recruit-development">エンジニア採用情報</NuxtLink>
            </div>
          </div>
          <div class="flex flex-col gap-7">
            <div class="text-[16px] font-bold text-white">Support</div>
            <div class="flex flex-col gap-5 text-[14px] text-[#cbd5e1]">
              <NuxtLink to="/contact">お問い合わせ</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Security -->
    <div
      class="mb-4 mt-4 flex w-11/12 flex-col items-center justify-center gap-6 rounded-lg border border-[#334155] py-5 px-6 text-[#cbd5e1] tb:mt-16 tb:flex-row tb:justify-start tb:py-5 pc:w-full pc:max-w-[1300px] pc:gap-16 pc:px-16"
    >
      <div class="text-[18px] font-bold">Security</div>
      <div class="flex flex-col items-center gap-6 text-[14px] tb:flex-row">
        <NuxtLink to="/privacy-policy">プライバシーポリシー</NuxtLink>
        <div
          v-if="isTablet || isPC"
          class="h-[38px] w-[1px] rounded-full bg-[#94a3b8]"
        ></div>
        <NuxtLink to="/privacy-policy">他社商標・著作物</NuxtLink>
        <div
          v-if="isTablet || isPC"
          class="h-[38px] w-[1px] rounded-full bg-[#94a3b8]"
        ></div>
        <NuxtLink to="/site-usage">本サイトのご利用について</NuxtLink>
      </div>
    </div>
  </div>
</template>
