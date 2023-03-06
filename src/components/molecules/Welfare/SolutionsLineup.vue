<script setup lang="ts">
  import { CareWelfareSolutions } from '~/types/pages/care-welfare';
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
      class="w-full pc:max-w-[1100px]"
      :title="solutions.title"
      :subTitle="solutions.subTitle"
      :outline="solutions.outline"
      :is-sub-bold="false"
      textColor="text-bancor-red200"
      front-square-color="bg-bancor-red400"
      back-square-color="bg-bancor-red200"
    ></MoleculesDoubleSquareTagMenu>
    <!-- ソリューション一覧 -->
    <div class="flex h-[678px] w-full rounded-lg bg-white pc:max-w-[1100px]">
      <!-- タブメニュー -->
      <div
        class="flex h-full w-[220px] flex-col border-r border-bancor-gray400"
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
            class="absolute -right-[6px] h-2.5 w-2.5 rotate-45 border-r border-t bg-bancor-pink100"
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
