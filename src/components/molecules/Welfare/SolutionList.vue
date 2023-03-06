<script setup lang="ts">
  import { Solution } from '~/types/pages/care-welfare';
  const props = defineProps<{ solution: Solution }>();
</script>

<template>
  <div class="flex w-[calc(100%_-_220px)] flex-col space-y-4 pt-8 pl-14">
    <!-- 項目タイトル -->
    <AtomsBasicTitle
      :text="solution.subTitle"
      size="text-[22px]"
    ></AtomsBasicTitle>
    <!-- ライン -->
    <div class="relative h-1 w-16">
      <div class="absolute left-0 h-full w-8 bg-bancor-red200"></div>
      <div class="absolute right-0 h-full w-8 bg-bancor-red600"></div>
    </div>
    <!-- item一覧 -->
    <div class="flex h-[520px] flex-col flex-wrap">
      <!-- 各item -->
      <div
        v-for="item in solution.items"
        :key="`${item.title}`"
        class="mb-4 flex h-[46px] w-[396px] items-center space-x-6"
      >
        <!-- アイコン -->
        <MoleculesCircleIcon
          :imgUrl="item.imgUrl"
          circleSize="h-[46px] w-[46px]"
          iconSize="h-[30px] w-[30px]"
        ></MoleculesCircleIcon>
        <!-- itemタイトル -->
        <AtomsBasicTitle :text="item.title" size="text-base"></AtomsBasicTitle>
      </div>
    </div>
  </div>
</template>
