<script setup lang="ts">
  import { useTopSplashStore } from '../stores/top-splash';
  import { useHead } from '@vueuse/head';
  import { useBancorHeadTag } from '~/stores/headTag/bancor';
  const topSplashStore = useTopSplashStore();
  const isLoading = ref(false);
  if (topSplashStore.topSplashFlag) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
  }

  onMounted(() => {
    if (topSplashStore.topSplashFlag) {
      setTimeout(() => {
        isLoading.value = false;
        topSplashStore.setTopSplashFlag(false);
      }, 2000);
    }
  });

  // headタグの情報をPiniaから取得
  const bancorHeadTagStore = useBancorHeadTag();
  await bancorHeadTagStore.ensureHeadTags();
  const route = useRoute();
  const currentHeadTag = computed(() =>
    bancorHeadTagStore.getHeadTagByPath(route.path)
  );

  useHead(() => ({
    title: currentHeadTag.value.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: currentHeadTag.value.description,
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  }));

  onMounted(() => {
    // ローディング状態が変わった時に実行されるウォッチャー
    watch(
      () => isLoading.value,
      (newVal) => {
        if (typeof document !== 'undefined') {
          if (newVal) {
            document.body.classList.add('overflow-hidden');
          } else {
            document.body.classList.remove('overflow-hidden');
          }
        }
      },
      { immediate: true }
    );
  });
</script>

<template>
  <div class="relative w-full">
    <!-- スプラッシュ画面（ローディング画面） -->
    <OrganismsLoadingLottie
      class="pointer-events-none"
      v-show="isLoading"
    ></OrganismsLoadingLottie>

    <!-- トップビューの背景 -->
    <Transition
      enter-active-class="transition-opacity duration-[500ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <AtomsTopFirstviewBackground
        v-show="!isLoading"
      ></AtomsTopFirstviewBackground>
    </Transition>

    <Transition
      enter-active-class="transition-opacity duration-[500ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <div v-show="!isLoading">
        <!-- ヘッダー -->
        <OrganismsHeader
          class="pointer-events-auto fixed top-3 z-50 w-full"
        ></OrganismsHeader>

        <!-- ページ -->
        <div class="h-full w-full">
          <slot />
        </div>

        <!-- フッター -->
        <OrganismsFooter class="w-full"></OrganismsFooter>

        <!-- Cookieの同意 -->
        <OrganismsCookieConsent
          class="fixed bottom-8 left-1/2 -translate-x-1/2"
        ></OrganismsCookieConsent>
      </div>
    </Transition>
  </div>
</template>
