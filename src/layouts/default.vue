<script setup lang="ts">
  import { useLoadingStore } from '../stores/loading';
  const loadingStore = useLoadingStore();
  const isLoading = ref(false);
  if (loadingStore.loadingFlag) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
  }

  onMounted(() => {
    if (loadingStore.loadingFlag) {
      setTimeout(() => {
        isLoading.value = false;
        loadingStore.setLoadingFlag(false);
      }, 1000);
    }
  });
</script>

<template>
  <div class="relative w-full">
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
      <div class="h-full w-full" v-show="!isLoading">
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
        class="h-screen max-h-[676px] w-full"
        v-show="!isLoading"
      ></OrganismsFooter>
    </Transition>
  </div>
</template>
