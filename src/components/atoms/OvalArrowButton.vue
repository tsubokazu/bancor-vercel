<script setup lang="ts">
  interface Props {
    linkName: string;
    bgColor?: string;
    textColor?: string;
    isGradient?: boolean;
    toColor?: string;
    hasBorder?: boolean;
    borderColor?: string;
    borderWidth?: string | number;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
    bgColor: 'bancor-blue300',
    textColor: 'black',
    isGradient: false,
    toColor: 'bancor-blue300',
    hasBorder: false,
    borderColor: 'bancor-gray700',
    borderWidth: 1,
  });
  const classArray = [`text-${Props.textColor}`];
  if (Props.isGradient) {
    classArray.push(
      'bg-gradient-to-r',
      `from-${Props.bgColor}`,
      `to-${Props.toColor}`
    );
  } else {
    classArray.push(`bg-${Props.bgColor}`, `text-${Props.textColor}`);
  }
  if (Props.hasBorder) {
    classArray.push(
      Props.borderWidth == 1 ? 'border' : `border-${Props.borderWidth}`,
      `border-${Props.borderColor}`
    );
  }
</script>

<template>
  <NuxtLink
    :to="linkName"
    class="relative block rounded-full py-2 px-10 tracking-[.13em] after:absolute after:right-7 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-y-1/2 after:rotate-45 after:border-t after:border-r after:border-black after:content-['']"
    :class="classArray"
  >
    <slot />
  </NuxtLink>
</template>
