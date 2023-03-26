<script setup lang="ts">
  interface Props {
    textSize?: string;
    linkUrl?: string;
    bgColor?: string;
    textColor?: string;
    isGradient?: boolean;
    fromColor?: string;
    toColor?: string;
    hasBorder?: boolean;
    borderColor?: string;
    borderWidth?: string;
    arrowPosition?: string;
    buttonHeight?: string;
    buttonWidth?: string;
    radius?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    textSize: 'text-base',
    linkUrl: '',
    bgColor: 'bg-bancor-blue300',
    textColor: 'text-black',
    isGradient: false,
    fromColor: 'bg-bancor-blue300',
    toColor: 'bg-bancor-blue400',
    hasBorder: false,
    borderColor: 'border-bancor-gray700',
    borderWidth: 'border',
    arrowPosition: 'right-5',
    buttonHeight: '',
    buttonWidth: '',
    radius: 'rounded-full',
  });

  const hoverAnimation = ref('');

  const mouseOverAction = () => {
    hoverAnimation.value = 'animate-hover-arrow-move-x';
  };
  const mouseLeaveAction = () => {
    hoverAnimation.value = 'animate-hover-arrow-move-x-rv';
  };

  const classArray = [
    props.textSize,
    props.textColor,
    props.buttonHeight,
    props.buttonWidth,
    !props.isGradient ? props.bgColor : '',
    props.isGradient ? 'bg-gradient-to-r' : '',
    props.isGradient ? props.fromColor : '',
    props.isGradient ? props.toColor : '',
    props.borderColor ? props.hasBorder : '',
    props.borderWidth ? props.borderWidth : '',
    props.radius ? props.radius : '',
  ];
</script>

<template>
  <NuxtLink :to="linkUrl" :class="{ 'is-disabled': linkUrl == '' }">
    <button
      class="relative flex items-center justify-center px-10 py-2"
      :class="classArray"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <slot />
      <div
        class="absolute h-auto w-auto text-xs"
        :class="[hoverAnimation, arrowPosition]"
      >
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
    </button>
  </NuxtLink>
</template>
