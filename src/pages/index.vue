<script setup lang="ts">
  import {
    TopNewsCardList,
    TopNewsObject,
    TopWelfareObject,
    TopServiceObject,
    TopJournalObject,
    TopVisionObject,
  } from '~/types';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const topEndpoint = config.public.kurocoTopEndpoint;
  const { data: posts } = (await useFetch(`${baseUrl}${topEndpoint}`)) as any;

  provide<string>('firstviewImgUrl', posts.value.details.ext_1.url);
  provide<string>('firstviewCatchCopyUrl', posts.value.details.ext_2.url);
  provide<string>('firstviewCopy', posts.value.details.ext_3);
  provide<string>('firstviewSubcopy', posts.value.details.ext_4);

  const pressReleaseListCards: TopNewsCardList = {
    TopNewsCard01: {
      title: '新しいパートナーシップを結ぶ',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease01.jpg',
      updateAt: '2023.01.23',
    },
    TopNewsCard02: {
      title: '新製品/サービスの発表',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease02.jpg',
      updateAt: '2023.01.22',
    },
    TopNewsCard03: {
      title: '株式上場を決定',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease03.jpg',
      updateAt: '2023.01.21',
    },
    TopNewsCard04: {
      title: '大規模な拡張計画を発表',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease04.jpg',
      updateAt: '2023.01.20',
    },
  };

  const serviceNewsListCards: TopNewsCardList = {
    TopNewsCard01: {
      title: '企業が成長を促進するための新しいアプローチ',
      tag: 'ニュース',
      thumbnail: '/serviceNews01.jpg',
      updateAt: '2023.01.23',
    },
    TopNewsCard02: {
      title: '知識を使って企業の財政状況を改善しよう',
      tag: 'ニュース',
      thumbnail: '/serviceNews02.jpg',
      updateAt: '2023.01.22',
    },
    TopNewsCard03: {
      title: '新しい市場への飛躍を確実にするための戦略',
      tag: 'ニュース',
      thumbnail: '/serviceNews03.jpg',
      updateAt: '2023.01.21',
    },
    TopNewsCard04: {
      title: '最新のイノベーションを活用して新しい製品やサービスを開発する',
      tag: 'ニュース',
      thumbnail: '/serviceNews04.jpg',
      updateAt: '2023.01.20',
    },
  };

  const topNewsObject: TopNewsObject = {
    title: posts.value.details.ext_5,
    linkUrl: posts.value.details.ext_6,
    pressReleaseListTitle: posts.value.details.ext_7,
    pressReleaseListLinkUrl: posts.value.details.ext_8,
    pressReleaseList: pressReleaseListCards,
    serviceNewsListTitle: posts.value.details.ext_9,
    serviceNewsListLinkUrl: posts.value.details.ext_10,
    serviceNewsList: serviceNewsListCards,
  };
  provide<TopNewsObject>('topNewsObject', topNewsObject);

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
  <OrganismsTopFirstview class="mb-[120px]"></OrganismsTopFirstview>
  <OrganismsTopNews class="mb-[120px]"></OrganismsTopNews>
  <OrganismsTopWelfare class="mb-[120px]"></OrganismsTopWelfare>
  <OrganismsTopService class="mb-[120px]"></OrganismsTopService>
  <OrganismsTopJournal class="mb-[120px]"></OrganismsTopJournal>
  <OrganismsTopVision class="mb-[120px]"></OrganismsTopVision>
  <OrganismsTopRecruit></OrganismsTopRecruit>
</template>
