<script setup lang="ts">
  import { TopRecruitObject } from '~/types/Top';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const endpoint = config.public.kurocoTopRecruit;
  const { data: kuroco } = (await useFetch(`${baseUrl}${endpoint}`)) as any;

  const topRecruitObject: TopRecruitObject = {
    title: kuroco.value.details.ext_1,
    subTitle: kuroco.value.details.ext_2,
    outline: kuroco.value.details.ext_3,
    imageUrl: kuroco.value.details.ext_4.url,
    linkUrl: kuroco.value.details.ext_10,
  };
  provide<TopRecruitObject>('topRecruitObject', topRecruitObject);
</script>

<template>
  <div
    class="relative flex h-screen max-h-[472px] items-center justify-center pt-24"
  >
    <div class="flex h-full w-full max-w-[1200px] space-x-10">
      <MoleculesTopRecruitMenu class="w-[420px]"></MoleculesTopRecruitMenu>
    </div>
    <MoleculesTopRecruitImage class="absolute -z-10"></MoleculesTopRecruitImage>
  </div>
</template>
