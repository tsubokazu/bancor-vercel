<script setup lang="ts">
  const humbergerStore = useHumbergerStore();
  interface Props {
    text: string;
    linkUrl: string;
    color?: string;
    size?: string;
    arrowSize?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[40px]',
    arrowSize: 'text-[16px]',
  });
  const titleTexts = props.text.split('\r\n');

  const hoverAnimation = ref('');
  const mouseOverAction = () => {
    hoverAnimation.value = 'animate-move-underline';
  };
  const mouseLeaveAction = () => {
    hoverAnimation.value = 'animate-move-underline-rv';
  };

  // unmount時にアニメーションをリセットする
  onBeforeUnmount(() => {
    hoverAnimation.value = '';
  });
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      class="relative flex w-56 flex-col"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
      @click="humbergerStore.closeHumbergerMenu"
    >
      <!-- タイトル -->
      <div class="flex items-center justify-between pr-2">
        <div class="flex items-center space-x-4">
          <div
            class="flex flex-col font-bold"
            :class="[props.color, props.size]"
          >
            <div v-for="titleText in titleTexts" :key="titleText">
              {{ titleText }}
            </div>
          </div>
        </div>
        <div :class="[props.arrowSize, props.color]" v-if="linkUrl.length > 0">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </div>
      </div>
      <!-- アンダーライン -->
      <div class="mt-3 w-full">
        <div class="relative h-px w-full overflow-hidden">
          <div class="absolute z-0 h-full w-full bg-white"></div>
          <div
            class="absolute z-10 h-full w-full -translate-x-full bg-bancor-blue300"
            :class="hoverAnimation"
          ></div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
