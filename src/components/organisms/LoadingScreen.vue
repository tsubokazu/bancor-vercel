<script setup lang="ts">
  import { useTopSplashStore } from '~/stores/top-splash';
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
      }, 2500);
    }
  });
</script>

<template>
  <div class="absolute h-screen w-full">
    <!-- 白 -->
    <div class="fixed top-0 -z-20 h-full w-full bg-white"></div>
    <!-- オレンジ -->
    <div
      class="fixed top-0 -z-20 h-full w-full animate-slide-in-right bg-bancor-orange300"
    ></div>
    <!-- 青 -->
    <div
      class="fixed top-0 -z-20 h-2/5 w-full animate-slide-out-up bg-bancor-blue200"
    ></div>
    <!-- 紺 -->
    <div
      class="fixed bottom-0 -z-20 h-3/5 w-full animate-slide-out-down bg-bancor-navy200"
    ></div>
    <!-- Creating Smile -->
    <div
      class="relative top-[40%] left-[50%] -z-20 w-[320px] -translate-x-1/2 tb:w-[600px]"
    >
      <AtomsFuturaChar
        class="left-[0px] animate-slide-in-char-down tb:left-[0px]"
        text="C"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[26px] animate-slide-in-char-up tb:left-[49px]"
        text="r"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[45px] animate-slide-in-char-down tb:left-[85px]"
        text="e"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[69px] animate-slide-in-char-up tb:left-[129px]"
        text="a"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[95px] animate-slide-in-char-down tb:left-[179px]"
        text="t"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[113px] animate-slide-in-char-up tb:left-[211px]"
        text="i"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[127px] animate-slide-in-char-down tb:left-[238px]"
        text="n"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[153px] animate-slide-in-char-up tb:left-[287px]"
        text="g"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[195px] animate-slide-in-char-down tb:left-[365px]"
        text="S"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[219px] animate-slide-in-char-up tb:left-[411px]"
        text="m"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[254px] animate-slide-in-char-down tb:left-[477px]"
        text="i"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[270px] animate-slide-in-char-up tb:left-[506px]"
        text="l"
      ></AtomsFuturaChar>
      <AtomsFuturaChar
        class="left-[284px] animate-slide-in-char-down tb:left-[533px]"
        text="e"
      ></AtomsFuturaChar>
    </div>
  </div>
</template>
