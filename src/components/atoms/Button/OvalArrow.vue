<script setup lang="ts">
  interface Props {
    linkName?: string;
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
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
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
  });

  const hoverAnimation = ref('');

  const mouseOverAction = () => {
    hoverAnimation.value = 'animate-hover-arrow-move-x';
  };
  const mouseLeaveAction = () => {
    hoverAnimation.value = 'animate-hover-arrow-move-x-rv';
  };

  const classArray = [
    Props.textColor,
    Props.buttonHeight,
    Props.buttonWidth,
    !Props.isGradient ? Props.bgColor : '',
    Props.isGradient ? 'bg-gradient-to-r' : '',
    Props.isGradient ? Props.fromColor : '',
    Props.isGradient ? Props.toColor : '',
    Props.borderColor ? Props.hasBorder : '',
    Props.borderWidth ? Props.hasBorder : '',
  ];
</script>

<template>
  <NuxtLink :to="linkName">
    <div
      class="relative flex items-center justify-center rounded-full px-10 py-2"
      :class="classArray"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <slot />
      <div
        class="absolute right-5 h-auto w-auto text-xs"
        :class="hoverAnimation"
      >
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
    </div>
  </NuxtLink>
</template>
