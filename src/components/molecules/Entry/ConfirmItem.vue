<script setup lang="ts">
  interface Props {
    title: string;
    text: string;
  }

  const Props = defineProps<Props>();
</script>

<template>
  <div
    class="mb-4 flex h-[50px] w-[95%] flex-col space-x-4 tb:flex-row tb:items-center"
  >
    <div
      class="flex h-full w-[95%] items-center border-b border-bancor-gray700 tb:w-[193px]"
    >
      <AtomsBasicTitle size="text-[16px]" :text="title"></AtomsBasicTitle>
    </div>
    <div
      class="flex h-full w-[95%] items-center border-b border-bancor-gray700 tb:w-[calc(95%_-_193px)]"
    >
      <AtomsBasicOutline
        :text="text"
        :is-bold="false"
        size="text-[15px]"
      ></AtomsBasicOutline>
    </div>
  </div>
</template>
