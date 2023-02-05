<script setup lang="ts">
  import { TopServiceObject } from '~/types';
  const topServiceObject = inject<TopServiceObject>(
    'topServiceObject'
  ) as TopServiceObject;
  const bgImgUrl = ref(topServiceObject.imageDefaultUrl);
</script>

<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full">
      <div class="absolute z-0 flex h-full w-full">
        <MoleculesTopServiceContent
          :title="topServiceObject.welfareTitle"
          :linkUrl="topServiceObject.welfareLinkUrl"
          :outline="topServiceObject.welfareOutline"
        ></MoleculesTopServiceContent>
        <MoleculesTopServiceContent
          :title="topServiceObject.systemTitle"
          :linkUrl="topServiceObject.systemLinkUrl"
          :outline="topServiceObject.systemOutline"
        ></MoleculesTopServiceContent>
      </div>
      <AtomsTopServiceBackground class="absolute -z-10" :imgUrl="bgImgUrl">
      </AtomsTopServiceBackground>
    </div>
  </div>
</template>
