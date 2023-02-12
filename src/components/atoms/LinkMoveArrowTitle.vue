<script setup lang="ts">
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

  const hoverBtnAnimation = ref('');
  const mouseOverAction = () => {
    hoverBtnAnimation.value = 'animate-move-right';
  };
  const mouseLeaveAction = () => {
    hoverBtnAnimation.value = 'animate-move-right-rv';
  };
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      class="flex items-center space-x-4"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <div class="flex flex-col font-bold" :class="[props.color, props.size]">
        <div v-for="titleText in titleTexts" :key="titleText">
          {{ titleText }}
        </div>
      </div>
      <div
        :class="[props.arrowSize, props.color, hoverBtnAnimation]"
        v-if="linkUrl.length > 0"
      >
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
    </div>
  </NuxtLink>
</template>
