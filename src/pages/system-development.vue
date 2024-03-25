<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const {
    header,
    issues,
    dxDev,
    problems,
    team,
    bancor3min,
    features,
    structure,
    maintenances,
    valueUpdate,
  }: SystemDevObject = pagesSystemDevStore;

  // デジタル課題のクリックフラグ
  const clickFlag = ref(false);
  const clickProblemButton = () => (clickFlag.value = !clickFlag.value);

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
  });

  onBeforeUnmount(() => {
    document.documentElement.style.scrollBehavior = '';
    document.body.style.scrollBehavior = '';
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="flex max-h-screen flex-col">
      <!-- 小タイトル -->
      <div class="mt-[120px] text-[15px] text-[#64748b]">
        事業内容 ／ サービス一覧<span class="text-[#1c1c1c]"
          >福岡で最も最先端のデザイン構築が得意な技術集団</span
        >
      </div>
      <!-- タイトル -->
      <div
        class="mt-[400px] bg-gradient-to-r from-[#020617] to-[#0072ff] bg-clip-text pl-[70px] text-[72px] font-bold"
      >
        事業内容
      </div>
    </div>
  </div>
</template>
