<script setup lang="ts">
  interface Props {
    title: string;
    smallTitle: string;
    imgUrl: string;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div class="relative h-[140px] w-full tb:h-[280px]">
    <!-- タイトルセット -->
    <div class="absolute left-0 top-1/4 z-10 flex flex-col space-y-4">
      <!-- 小タイトル -->
      <AtomsBasicTitle :text="smallTitle" size="text-base"></AtomsBasicTitle>
      <!-- 大タイトル -->
      <AtomsFuturaBoldText
        :text="title"
        size="text-[34px] tb:text-[50px]"
      ></AtomsFuturaBoldText>
    </div>

    <!-- イメージ -->
    <AtomsBasicImage
      class="absolute right-0 top-0"
      :imgUrl="imgUrl"
      imgHeight="h-full"
      imgWidth="pc:w-[864px] w-[90%]"
    ></AtomsBasicImage>
  </div>
</template>
