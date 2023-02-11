<script setup lang="ts">
  const moveArrowClass = ref('');
  const dissolveAppearClass = ref('');
  const onHoverFlag = (): void => {
    moveArrowClass.value = 'animate-arrow-move-x';
    dissolveAppearClass.value = 'animate-dissolve-appear';
  };
  const offHoverFlag = (): void => {
    moveArrowClass.value = 'animate-arrow-move-x-rv';
    dissolveAppearClass.value = 'animate-dissolve-disappear';
  };
</script>

<template>
  <div
    class="flex h-16 w-16 items-center justify-center rounded-full border"
    @mouseover="onHoverFlag"
    @mouseleave="offHoverFlag"
  >
    <div class="absolute text-[20.7px] text-white" :class="moveArrowClass">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </div>
    <div
      class="absolute scale-x-0 text-[20.7px] text-white opacity-0"
      :class="dissolveAppearClass"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </div>
  </div>
</template>
