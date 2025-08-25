<script setup lang="ts">
  import type { NewsObject } from '~/types/News';
  const props = defineProps<{ card: NewsObject }>();
  const category = computed(() => {
    switch (props.card.category) {
      case 'Service News':
        return 'service-news';
      case 'Press release':
        return 'press-release';
      default:
        return 'service-news';
    }
  });

  const hoverAnimation = ref('');
  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    hoverAnimation.value = 'animate-move-underline';
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    hoverAnimation.value = 'animate-move-underline-rv';
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="`/news/${category}/${card.topicsId}`" class="w-full">
    <div
      class="flex w-full flex-col space-y-3"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <div class="flex w-full items-center">
        <div
          class="mr-4 h-[60px] w-[96px] overflow-hidden rounded-xl pc:h-[80px] pc:w-[136px]"
        >
          <img
            :class="scaleUpImageAnimation"
            class="h-full w-full rounded-xl object-cover"
            :src="card.eyeCatchUrl"
          />
        </div>
        <div class="flex h-20 w-[200px] flex-col space-y-3 pc:w-[260px]">
          <div class="flex items-center justify-start space-x-4">
            <div class="text-xs font-bold text-bancor-blue100">
              {{ card.label }}
            </div>
            <div class="h-2 w-px bg-bancor-gray500"></div>
            <div class="text-xs">{{ card.updateDate }}</div>
          </div>
          <div class="text-xs">{{ card.subject }}</div>
        </div>
      </div>
      <!-- アンダーライン -->
      <div class="relative h-[1px] w-full overflow-hidden">
        <div
          class="absolute bottom-0 left-0 h-full w-full bg-bancor-gray800"
        ></div>
        <div
          class="absolute bottom-0 left-0 h-full w-full -translate-x-full bg-bancor-navy300"
          :class="hoverAnimation"
        ></div>
      </div>
    </div>
  </NuxtLink>
</template>
