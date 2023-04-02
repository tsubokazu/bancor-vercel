<script setup lang="ts">
  interface Props {
    imgUrl: string;
    title: string;
    linkUrl: string;
    lineColor1?: string;
    lineColor2?: string;
    lineColor3?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    lineColor1: 'bg-white',
    lineColor2: 'bg-bancor-blue200',
    lineColor3: 'bg-bancor-black100',
  });

  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="linkUrl" class="w-full">
    <div
      class="group relative h-[200px] w-full overflow-hidden rounded-lg tb:w-[360px] pc:h-[264px] pc:w-[520px]"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <!-- カード画像 -->
      <div class="absolute top-0 left-0 h-full w-full">
        <AtomsShadowImage
          :img-url="imgUrl"
          :img-class="scaleUpImageAnimation"
          imgHeight="h-full"
          imgWidth="w-full"
        ></AtomsShadowImage>
      </div>

      <!-- ボディタイトル -->
      <div class="absolute bottom-6 left-10 z-10 flex flex-col space-y-4">
        <!-- タイトル -->
        <AtomsBasicTitle
          :text="title"
          size="text-[22px]"
          color="text-white"
        ></AtomsBasicTitle>
        <!-- ライン -->
        <div class="flex items-center">
          <div class="mt-1 h-[3px] w-8" :class="lineColor1"></div>
          <div class="mt-1 h-[3px] w-8" :class="lineColor2"></div>
          <div class="mt-1 h-[3px] w-8" :class="lineColor3"></div>
        </div>
      </div>

      <!-- 矢印 -->
      <div class="absolute right-8 bottom-4 z-10">
        <AtomsButtonCircleAngle></AtomsButtonCircleAngle>
      </div>
    </div>
  </NuxtLink>
</template>
