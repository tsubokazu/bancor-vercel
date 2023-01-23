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
    borderWidth?: string | number;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
    bgColor: 'bg-bancor-blue300',
    textColor: 'text-black',
    isGradient: false,
    fromColor: 'bg-bancor-blue300',
    toColor: 'bg-bancor-blue400',
    hasBorder: false,
    borderColor: 'bg-bancor-gray700',
    borderWidth: 1,
  });

  const classArray = [
    !Props.isGradient ? Props.bgColor : '',
    Props.textColor,
    Props.isGradient ? 'bg-gradient-to-r' : '',
    Props.isGradient ? Props.fromColor : '',
    Props.isGradient ? Props.toColor : '',
    Props.borderColor ? Props.hasBorder : '',
    Props.borderWidth ? Props.hasBorder : '',
  ];
</script>

<template>
  <div class="rounded-full py-2 px-6" :class="classArray">
    <NuxtLink :to="linkName">
      <slot />
    </NuxtLink>
  </div>
</template>
