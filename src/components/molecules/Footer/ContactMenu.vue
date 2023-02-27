<script setup lang="ts">
  import { FooterContactMenuObject } from '~/types/Footer';
  const props = defineProps<{ obj: FooterContactMenuObject }>();

  const hoverBgAnimation = ref('');
  const hoverBtnAnimation = ref('');
  const mouseOverAction = () => {
    hoverBgAnimation.value = 'animate-rouded-and-scale';
    hoverBtnAnimation.value = 'animate-move-right';
  };
  const mouseLeaveAction = () => {
    hoverBgAnimation.value = 'animate-rouded-and-scale-rv';
    hoverBtnAnimation.value = 'animate-move-right-rv';
  };
</script>

<template>
  <NuxtLink :to="props.obj.linkUrl" class="h-full w-full">
    <div
      class="relative h-full w-full"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <AtomsFooterContactMenuBackgroundFilter
        :class="hoverBgAnimation"
      ></AtomsFooterContactMenuBackgroundFilter>
      <AtomsBasicBackground :imgUrl="props.obj.imgUrl"></AtomsBasicBackground>
      <div
        class="flex h-full w-full flex-col items-center justify-center space-y-3"
      >
        <AtomsBasicIcon :iconUrl="props.obj.iconUrl"></AtomsBasicIcon>
        <div class="flex items-center justify-center space-x-3">
          <AtomsBasicTitle
            :text="props.obj.title"
            color="text-white"
            size="text-[28px]"
          ></AtomsBasicTitle>
          <AtomsButtonCircleArrowSmall
            :class="hoverBtnAnimation"
          ></AtomsButtonCircleArrowSmall>
        </div>
        <div class="h-px w-12 bg-white"></div>
        <AtomsBasicOutline
          :text="props.obj.outline"
          color="text-white"
        ></AtomsBasicOutline>
      </div>
    </div>
  </NuxtLink>
</template>
