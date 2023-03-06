<script setup lang="ts">
  interface Props {
    text: string;
    linkUrl: string;
    color?: string;
    size?: string;
    arrowSize?: string;
    isAngle?: boolean; // true: 矢印がangle-right ">", false: 矢印がarrow-right "→"
    isRight?: boolean; // 動く方向 true: 右、false: 上
    isRotate?: boolean; // 矢印の向き false: "rotate-0" or true: "-rotate-45"
    isOpacity?: boolean; // hover時に半透明に成るかの制御
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[40px]',
    arrowSize: 'text-[16px]',
    isArrow: false,
    isRight: true,
    isRotate: false,
    isOpacity: false,
  });
  const titleTexts = computed(() => props.text.split('\r\n'));

  const hoverBtnAnimation = ref('');
  const hoverOpacity = ref('');
  const mouseOverAction = () => {
    hoverOpacity.value = 'animate-hover-opacity';
    if (!props.isRotate) {
      hoverBtnAnimation.value = props.isRight
        ? 'animate-move-right'
        : 'animate-move-up';
    } else {
      hoverBtnAnimation.value = props.isRight
        ? 'animate-move-right-rotate45'
        : 'animate-move-up-rotate45';
    }
  };
  const mouseLeaveAction = () => {
    hoverOpacity.value = 'animate-hover-opacity-rv';
    if (!props.isRotate) {
      hoverBtnAnimation.value = props.isRight
        ? 'animate-move-right-rv'
        : 'animate-move-up-rv';
    } else {
      hoverBtnAnimation.value = props.isRight
        ? 'animate-move-right-rotate45-rv'
        : 'animate-move-up-rotate45-rv';
    }
  };
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      class="flex items-center space-x-4"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <div class="flex flex-col font-bold" :class="[color, size, hoverOpacity]">
        <div v-for="titleText in titleTexts" :key="titleText">
          {{ titleText }}
        </div>
      </div>
      <div
        :class="[
          arrowSize,
          color,
          hoverBtnAnimation,
          { '-rotate-45': isRotate },
        ]"
        v-if="linkUrl.length > 0"
      >
        <font-awesome-icon v-if="isAngle" icon="fa-solid fa-angle-right" />
        <font-awesome-icon v-else icon="fa-solid fa-arrow-right" />
      </div>
    </div>
  </NuxtLink>
</template>
