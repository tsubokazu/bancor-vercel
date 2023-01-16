<script setup lang="ts">
  const Props = defineProps({
    linkName: String,
  });
  const hoverFlag = ref(false);
  const hoverAnimation = ref('');
  const mouseOverAction = () => {
    hoverFlag.value = true;
    hoverAnimation.value = 'animate-line-scale-up-center';
  };
  const mouseLeaveAction = () => {
    hoverFlag.value = false;
    hoverAnimation.value = '';
  };
</script>

<template>
  <div class="flex flex-col items-center">
    <AtomsMenuButton
      :linkName="linkName"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <slot />
    </AtomsMenuButton>
    <AtomsUnderLine
      class="relative top-3"
      :class="hoverAnimation"
      v-show="hoverFlag"
    ></AtomsUnderLine>
  </div>
</template>
