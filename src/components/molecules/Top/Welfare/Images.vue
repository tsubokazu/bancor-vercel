<script setup lang="ts">
  import { TopWelfareObject } from '~/types';
  const topWelfareObject = inject<TopWelfareObject>(
    'topWelfareObject'
  ) as TopWelfareObject;
</script>

<template>
  <div class="flex w-11/12 justify-between tb:w-[388px]">
    <AtomsTopWelfareImage
      class="mr-4 translate-y-3"
      :imgUrl="topWelfareObject.image01Url"
    ></AtomsTopWelfareImage>
    <AtomsTopWelfareImage
      class="-translate-y-3"
      :imgUrl="topWelfareObject.image02Url"
    ></AtomsTopWelfareImage>
  </div>
</template>
