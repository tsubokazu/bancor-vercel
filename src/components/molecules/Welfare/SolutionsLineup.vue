<script setup lang="ts">
  import type { CareWelfareSolutions } from '~/types/pages/care-welfare';
  const props = defineProps<{
    solutions: CareWelfareSolutions;
  }>();
  const menuClickFlag = ref(0);
  const selectedSolution = computed(
    () => props.solutions.solutions[menuClickFlag.value]
  );
  const clickMenu = (index: number) => {
    menuClickFlag.value = index;
  };
</script>

<template>
  <div
    class="flex w-full flex-col items-center space-y-14 bg-bancor-gray1200 pt-14 pb-16"
  >
    <!-- タイトル -->
    <MoleculesDoubleSquareTagMenu
      class="w-[95%] pc:max-w-[1100px]"
      :title="solutions.title"
      :subTitle="solutions.subTitle"
      :outline="solutions.outline"
      :is-sub-bold="false"
      textColor="text-bancor-red200"
      front-square-color="bg-bancor-red400"
      back-square-color="bg-bancor-red200"
    ></MoleculesDoubleSquareTagMenu>
    <!-- ソリューション一覧 -->
    <div
      class="flex w-[95%] flex-col rounded-lg bg-white tb:flex-row pc:h-[678px] pc:max-w-[1100px]"
    >
      <!-- タブメニュー -->
      <div
        class="flex h-full w-full flex-col border-r border-bancor-gray400 tb:w-[220px]"
      >
        <!-- メニュー一覧 -->
        <button
          v-for="(solution, index) in solutions.solutions"
          :key="solution.title"
          @click="clickMenu(index)"
          class="relative flex h-[64px] w-full items-center pl-6"
          :class="{ 'bg-bancor-pink100': index == menuClickFlag }"
        >
          <!-- メニュー単体 -->
          <AtomsBasicTitle
            :text="solution.title"
            size="text-[18px]"
          ></AtomsBasicTitle>
          <!-- メニューの吹き出し -->
          <div
            v-if="index == menuClickFlag"
            class="absolute -right-[6px] hidden h-2.5 w-2.5 rotate-45 border-r border-t bg-bancor-pink100 tb:block"
          ></div>
        </button>
      </div>
      <!-- 項目一覧 -->
      <MoleculesWelfareSolutionList
        v-if="menuClickFlag == 0"
        :solution="solutions.solutions[0]"
      ></MoleculesWelfareSolutionList>
      <MoleculesWelfareSolutionList
        v-else-if="menuClickFlag == 1"
        :solution="solutions.solutions[1]"
      ></MoleculesWelfareSolutionList>
      <MoleculesWelfareSolutionList
        v-else-if="menuClickFlag == 2"
        :solution="solutions.solutions[2]"
      ></MoleculesWelfareSolutionList>
      <MoleculesWelfareSolutionList
        v-else-if="menuClickFlag == 3"
        :solution="solutions.solutions[3]"
      ></MoleculesWelfareSolutionList>
      <MoleculesWelfareSolutionList
        v-else
        :solution="solutions.solutions[4]"
      ></MoleculesWelfareSolutionList>
    </div>
  </div>
</template>
