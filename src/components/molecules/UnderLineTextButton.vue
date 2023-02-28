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
  <div class="flex w-fit flex-col items-center space-y-2 pt-2">
    <AtomsButtonText :linkName="linkName" :isBold="true">
      <slot />
    </AtomsButtonText>
    <AtomsUnderLine
      :class="[
        { 'animate-line-scale-up-center': hoverFlag },
        { 'animate-line-scale-down-center': !hoverFlag },
      ]"
    ></AtomsUnderLine>
  </div>
</template>
