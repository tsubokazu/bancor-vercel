<script setup lang="ts">
  import { TopRecruitObject } from '~/types/Top';
  const topRecruitObject = inject<TopRecruitObject>(
    'topRecruitObject'
  ) as TopRecruitObject;
</script>

<template>
  <div class="flex w-96 flex-col space-y-5">
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-white"
      backSquareColor="bg-white"
      :text="topRecruitObject.subTitle"
      textColor="text-white"
    ></MoleculesDoubleSquareTag>
    <AtomsBasicTitle
      class="mb-5 text-white"
      :text="topRecruitObject.title"
    ></AtomsBasicTitle>
    <AtomsBasicOutline
      :text="topRecruitObject.outline"
      class="text-white"
    ></AtomsBasicOutline>
    <AtomsButtonOvalArrow
      class="w-[220px]"
      bgColor="bg-black"
      textColor="text-white"
      arrowPosition="right-20"
      :linkName="topRecruitObject.linkUrl"
    >
      採用募集
    </AtomsButtonOvalArrow>
  </div>
</template>
