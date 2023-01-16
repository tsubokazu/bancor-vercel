<script setup lang="ts">
  interface Props {
    linkName: string;
    bgColor: string;
    textColor?: string;
    isGradient?: boolean;
    toColor?: string;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkName: '/',
    bgColor: 'bancor-blue300',
    textColor: 'black',
    isGradient: false,
    toColor: 'bancor-blue300',
  });
  const classArray = Props.isGradient
    ? [
        'bg-gradient-to-r',
        `from-${Props.bgColor}`,
        `to-${Props.toColor}`,
        `text-${Props.textColor}`,
      ]
    : [`bg-${Props.bgColor}`, `text-${Props.textColor}`];
</script>

<template>
  <div class="rounded-full py-2 px-6" :class="classArray">
    <NuxtLink :to="linkName">
      <slot />
    </NuxtLink>
  </div>
</template>
