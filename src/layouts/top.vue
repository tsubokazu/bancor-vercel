<script setup lang="ts">
  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 5000);
  });
</script>

<template>
  <div class="relative w-full">
    <!-- スプラッシュ画面（ローディング画面） -->
    <Transition
      leave-active-class="transition-opacity duration-[2000ms]"
      leave-to-class="opacity-0"
    >
      <OrganismsLoadingScreen
        class="pointer-events-none"
        v-show="isLoading"
      ></OrganismsLoadingScreen>
    </Transition>

    <!-- ヘッダー -->
    <Transition
      class="pointer-events-auto"
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsHeader
        v-show="!isLoading"
        class="pointer-events-auto absolute top-3 z-50 w-full"
      ></OrganismsHeader>
    </Transition>

    <!-- ページ -->
    <Transition
      class="pointer-events-auto"
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <div v-show="!isLoading" class="h-full w-full">
        <slot />
      </div>
    </Transition>

    <!-- フッター -->
    <Transition
      class="pointer-events-auto"
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsFooter
        v-show="!isLoading"
        class="h-screen max-h-[676px] w-full"
      ></OrganismsFooter>
    </Transition>
  </div>
</template>
