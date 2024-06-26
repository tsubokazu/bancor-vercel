<script setup lang="ts">
  import {
    TopWelfareObject,
    TopServiceObject,
    TopJournalObject,
    TopVisionObject,
  } from '~/types';

  definePageMeta({
    layout: 'top',
  });

  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const topEndpoint = config.public.kurocoTopEndpoint;
  const { data: posts } = (await useFetch(`${baseUrl}${topEndpoint}`)) as any;

  provide<string>('firstviewImgUrl', posts.value.details.ext_1.url);
  provide<string>('firstviewCatchCopyUrl', posts.value.details.ext_2.url);
  provide<string>('firstviewCopy', posts.value.details.ext_3);
  provide<string>('firstviewSubcopy', posts.value.details.ext_4);

  const topWelfareObject: TopWelfareObject = {
    title: posts.value.details.ext_11,
    linkUrl: posts.value.details.ext_15,
    outline: posts.value.details.ext_12,
    image01Url: posts.value.details.ext_13.url,
    image02Url: posts.value.details.ext_14.url,
  };
  provide<TopWelfareObject>('topWelfareObject', topWelfareObject);

  const topServiceObject: TopServiceObject = {
    title: posts.value.details.ext_16,
    linkUrl: posts.value.details.ext_18,
    outline: posts.value.details.ext_17,
    welfareTitle: posts.value.details.ext_19,
    welfareLinkUrl: posts.value.details.ext_21,
    welfareOutline: posts.value.details.ext_20,
    systemTitle: posts.value.details.ext_22,
    systemLinkUrl: posts.value.details.ext_24,
    systemOutline: posts.value.details.ext_23,
    imageDefaultUrl: posts.value.details.ext_25.url,
    imageWelfareUrl: '/serviceWelfareDev.jpeg',
    imageSystemUrl: 'serviceWelfareDev.jpeg',
  };
  provide<TopServiceObject>('topServiceObject', topServiceObject);

  // Bancor JournalをPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const { journalList } = journalStore;

  const topJournalObject: TopJournalObject = {
    title: posts.value.details.ext_26,
    journalList: journalList,
  };
  provide<TopJournalObject>('topJournalObject', topJournalObject);

  const topVisionObject: TopVisionObject = {
    title: posts.value.details.ext_27,
    linkUrl: posts.value.details.ext_29,
    outline: posts.value.details.ext_28,
    imageUrl: posts.value.details.ext_30.url,
  };
  provide<TopVisionObject>('topVisionObject', topVisionObject);
</script>

<template>
  <div class="w-full overflow-hidden">
    <OrganismsTopFirstview class="mb-[53px]"></OrganismsTopFirstview>
    <OrganismsTopAdSpace v-fade-in class="mb-[56px]"></OrganismsTopAdSpace>
    <OrganismsTopNews v-fade-in class="mb-[112px]"></OrganismsTopNews>
    <OrganismsTopVision v-fade-in class="mb-[138px]"></OrganismsTopVision>
    <OrganismsTopMnAService
      v-fade-in
      class="mb-[112px]"
    ></OrganismsTopMnAService>
    <OrganismsTopService
      v-fade-in
      class="mb-[72px] tb:mb-[139px]"
    ></OrganismsTopService>
    <OrganismsTopBancorMedia
      v-fade-in
      class="mb-[72px] tb:mb-[139px]"
    ></OrganismsTopBancorMedia>
    <OrganismsTopBancorBusiness
      v-fade-in
      class="mb-[72px] tb:mb-[139px]"
    ></OrganismsTopBancorBusiness>
    <OrganismsTopDownloadDocument
      v-fade-in
      class="mb-[72px] tb:mb-[139px]"
    ></OrganismsTopDownloadDocument>
    <OrganismsTopRecruit v-fade-in class="mb-[116px]"></OrganismsTopRecruit>
  </div>
</template>
