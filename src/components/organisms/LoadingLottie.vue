<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Lottie from 'lottie-web';
  import animationData from '@/assets/lottie/bancor_lottie.json';

  const lottieContainer = ref(null); // DOM要素への参照を保持するためのref

  onMounted(() => {
    if (lottieContainer.value) {
      // nullチェック
      Lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  });
</script>

<template>
  <div class="absolute h-screen w-full">
    <!-- テキストアニメーション Bancor Inc. -->
    <div class="absolute z-10 flex h-full w-full items-center justify-center">
      <AtomsGothamBoldItalic
        text="Bancor Inc."
        color="text-white"
        size="text-[40px] tb:text-[80px] pc:text-[100px]"
        isBold
        class="animate-scale-500-to-100 text-center"
      />
    </div>
    <!-- Lottieアニメーション 地球儀 -->
    <div
      ref="lottieContainer"
      class="absolute top-1/2 left-1/2 h-full w-[1000px] -translate-x-1/2 -translate-y-1/2 animate-after5s-vanish tb:w-[2000px] pc:w-full"
    />
    <!-- ファーストビューの背景 -->
    <AtomsTopFirstviewBackground class="absolute animate-slide-up-background" />
    <!-- ファーストビューの背景の下に重ねる青い背景 -->
    <div
      class="absolute top-0 -z-50 h-full w-full animate-opaicity-0-to-1 bg-bancor-blue100"
    />
  </div>
</template>
