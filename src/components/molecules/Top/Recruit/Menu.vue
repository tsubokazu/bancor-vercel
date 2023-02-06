<script setup lang="ts">
  import { TopRecruitObject } from '~/types';
  const topRecruitObject = inject<TopRecruitObject>(
    'topRecruitObject'
  ) as TopRecruitObject;
</script>

<template>
  <div>
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-white"
      backSquareColor="bg-white"
      textColor="text-white"
      >{{ topRecruitObject.subTitle }}</MoleculesDoubleSquareTag
    >
    <AtomsBasicTitle
      class="mb-5 text-white"
      :text="topRecruitObject.title"
    ></AtomsBasicTitle>
    <AtomsBasicOutline
      :text="topRecruitObject.outline"
      class="text-white"
    ></AtomsBasicOutline>
    <AtomsButtonOvalArrow
      bgColor="bg-black"
      textColor="text-white"
      :linkName="topRecruitObject.linkUrl"
      class="w-[220px] text-white"
    >
      採用募集
    </AtomsButtonOvalArrow>
  </div>
</template>
