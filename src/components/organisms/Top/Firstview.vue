<script setup lang="ts">
  import { TopFirstViewObject } from '~/types/Top';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const endpoint = config.public.kurocoTopFirstview;
  const { data: kuroco } = (await useFetch(`${baseUrl}${endpoint}`)) as any;

  const topFirstViewObject: TopFirstViewObject = {
    imgUrl: kuroco.value.details.ext_4.url,
    catchCopyUrl: kuroco.value.details.ext_8[0].url,
    copy: kuroco.value.details.ext_2,
    subCopy: kuroco.value.details.ext_3,
  };

  provide<TopFirstViewObject>('topFirstViewObject', topFirstViewObject);
</script>

<template>
  <div class="relative flex h-screen w-full justify-center pc:max-h-[1000px]">
    <AtomsTopFirstviewBackground></AtomsTopFirstviewBackground>
    <div
      class="relative z-40 h-full w-11/12 tb:w-full tb:max-w-[700px] pc:max-w-[1200px]"
    >
      <MoleculesTopFirstviewCopyTitle
        class="absolute top-32 h-28 tb:left-0 tb:top-64"
      ></MoleculesTopFirstviewCopyTitle>
      <MoleculesTopFirstviewTopic
        class="absolute bottom-0 h-32 w-full tb:bottom-2"
      ></MoleculesTopFirstviewTopic>
    </div>
  </div>
</template>
