<script setup lang="ts">
  interface Props {
    imgUrl: string;
    title: string;
    subTitle: string;
    linkUrl: string;
  }
  const props = defineProps<Props>();

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
      class="w-max-[340px] relative h-[216px] w-full overflow-hidden rounded-lg tb:w-[98%] pc:w-[340px]"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <!-- カード画像 -->
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          :src="imgUrl"
          class="h-full w-full object-cover"
          :class="scaleUpImageAnimation"
        />
      </div>

      <!-- カード黒ボディ -->
      <div class="absolute bottom-0 z-10 h-[82px] w-full">
        <div class="relative bottom-0 left-0 h-full w-full">
          <div
            class="absolute h-full w-full bg-bancor-navy300 opacity-90"
          ></div>
          <div class="absolute z-10 h-full w-full backdrop-blur-sm"></div>
        </div>
      </div>

      <!-- ボディタイトル -->
      <div
        class="absolute bottom-0 z-20 flex h-[82px] w-full flex-col pt-3 pl-3"
      >
        <!-- サブタイトル -->
        <AtomsBasicTitle
          :text="subTitle"
          size="text-sm"
          color="text-white"
        ></AtomsBasicTitle>
        <!-- タイトル -->
        <AtomsBasicTitle
          :text="title"
          size="text-[22px]"
          color="text-white"
        ></AtomsBasicTitle>
        <!-- ライン -->
        <div class="mt-1 h-0.5 w-8 bg-bancor-orange100"></div>
      </div>
    </div>
  </NuxtLink>
</template>
