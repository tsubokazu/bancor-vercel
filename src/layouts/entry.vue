<script setup lang="ts">
  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });
</script>

<template>
  <div class="relative w-full">
    <!-- ヘッダー -->
    <Transition
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsMiniHeader
        v-show="!isLoading"
        class="w-full"
      ></OrganismsMiniHeader>
    </Transition>

    <!-- ページ -->
    <Transition
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
      enter-active-class="transition-opacity duration-[2000ms]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
    >
      <OrganismsMiniFooter
        v-show="!isLoading"
        class="w-full"
      ></OrganismsMiniFooter>
    </Transition>
  </div>
</template>
