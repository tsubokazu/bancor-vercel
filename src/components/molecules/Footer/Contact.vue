<script setup lang="ts">
  const hoverTitleColor = ref('text-white');
  const hoverPlaneAnimation = ref('');
  const hoverTitleAnimation = ref('');
  const hoverFrameAnimation = ref('');
  const mouseOverAction = () => {
    hoverTitleColor.value = 'text-bancor-red100';
    hoverPlaneAnimation.value = 'animate-contact-plane';
    hoverTitleAnimation.value = 'animate-contact-title';
    hoverFrameAnimation.value = 'animate-contact-frame';
  };
  const mouseLeaveAction = () => {
    hoverTitleColor.value = 'text-white';
    hoverPlaneAnimation.value = 'animate-contact-plane-rv';
    hoverTitleAnimation.value = 'animate-contact-title-rv';
    hoverFrameAnimation.value = '';
  };
</script>

<template>
  <NuxtLink to="/contact" class="h-full w-full">
    <div
      class="flex h-[400px] w-full items-center justify-center overflow-hidden bg-bancor-red100"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <!-- お問い合わせボタン アニメーション -->
      <div class="relative flex flex-col items-center space-y-4">
        <!-- 紙飛行機アイコン -->
        <AtomsBasicIcon
          iconUrl="/contact_plane.png"
          size="h-[49.7px]"
          :class="hoverPlaneAnimation"
        ></AtomsBasicIcon>
        <!-- フレーム -->
        <div
          :class="hoverFrameAnimation"
          class="absolute top-[30px] h-[50px] w-[200px] rounded-full bg-white opacity-0"
        ></div>
        <!-- タイトル -->
        <AtomsFuturaBoldText
          text="Contact"
          :color="hoverTitleColor"
          size="text-[40px]"
          :class="hoverTitleAnimation"
        ></AtomsFuturaBoldText>
      </div>
    </div>
  </NuxtLink>
</template>
