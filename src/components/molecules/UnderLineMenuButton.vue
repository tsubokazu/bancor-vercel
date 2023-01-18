<script setup lang="ts">
  const Props = defineProps<{
    linkName: string;
    hoverIndex: number;
    menuIndex: number;
  }>();
  const hoverFlag = computed(() =>
    Props.hoverIndex == Props.menuIndex ? true : false
  );
  const hoverAnimation = computed(() =>
    hoverFlag
      ? 'animate-line-scale-up-center'
      : 'animate-line-scale-down-center'
  );
</script>

<template>
  <div class="flex flex-col items-center">
    <AtomsMenuButton :linkName="linkName">
      <slot />
    </AtomsMenuButton>
    <AtomsUnderLine
      class="relative top-3"
      :class="hoverAnimation"
      v-show="hoverFlag"
    ></AtomsUnderLine>
  </div>
</template>
