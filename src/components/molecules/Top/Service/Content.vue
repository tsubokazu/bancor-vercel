<script setup lang="ts">
  const Props = defineProps<{
    title: string;
    linkUrl: string;
    outline: string;
    onFlag: () => void;
  }>();

  const mouseOverAction = () => {
    Props.onFlag();
  };
</script>

<template>
  <div
    class="relative h-[400px] w-full space-y-5 border-b border-bancor-gray800 px-9 pt-12 tb:w-1/2 tb:border-b-0 tb:border-r"
  >
    <AtomsTopServiceTitle :text="Props.title"></AtomsTopServiceTitle>
    <AtomsTopServiceLine></AtomsTopServiceLine>
    <AtomsTopServiceOutline :text="Props.outline"></AtomsTopServiceOutline>
    <NuxtLink :to="Props.linkUrl">
      <AtomsTopServiceButton
        class="absolute bottom-8 left-12"
        @mouseover="mouseOverAction()"
      ></AtomsTopServiceButton
    ></NuxtLink>
  </div>
</template>
