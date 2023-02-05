<script setup lang="ts">
  const Props = defineProps<{
    title: string;
    linkUrl: string;
    outline: string;
  }>();
</script>

<template>
  <div
    class="relative h-full w-1/2 space-y-5 border-r border-bancor-gray800 px-9 pt-12"
  >
    <AtomsTopServiceTitle :text="Props.title"></AtomsTopServiceTitle>
    <AtomsTopServiceLine></AtomsTopServiceLine>
    <AtomsTopServiceOutline :text="Props.outline"></AtomsTopServiceOutline>
    <AtomsTopServiceButton
      class="absolute bottom-8 left-12"
    ></AtomsTopServiceButton>
  </div>
</template>
