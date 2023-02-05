<script setup lang="ts">
  import { TopWelfareObject } from '~/types';
  const topWelfareObject = inject<TopWelfareObject>(
    'topWelfareObject'
  ) as TopWelfareObject;
</script>

<template>
  <div class="flex w-[388px] justify-between">
    <AtomsTopWelfareImage
      class="translate-y-3"
      :imgUrl="topWelfareObject.image01Url"
    ></AtomsTopWelfareImage>
    <AtomsTopWelfareImage
      class="-translate-y-3"
      :imgUrl="topWelfareObject.image02Url"
    ></AtomsTopWelfareImage>
  </div>
</template>
