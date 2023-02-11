<script setup lang="ts">
  import postcss from 'postcss';
  import {
    Notifications,
    PressReleaseListCards,
    ServiceNewsListCards,
    TopNewsObject,
    TopWelfareObject,
    TopServiceObject,
    TopJournalObject,
    JournalList,
    TopVisionObject,
  } from '~/types';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const topEndpoint = config.public.kurocoTopEndpoint;
  const journalEndpoint = config.public.kurocoJournalEndpoint;
  const { data: posts } = (await useFetch(`${baseUrl}${topEndpoint}`)) as any;
  const { data: journals } = (await useFetch(
    `${baseUrl}${journalEndpoint}`
  )) as any;

  provide<string>('firstviewImgUrl', posts.value.details.ext_1.url);
  provide<string>('firstviewCatchCopyUrl', posts.value.details.ext_2.url);
  provide<string>('firstviewCopy', posts.value.details.ext_3);
  provide<string>('firstviewSubcopy', posts.value.details.ext_4);
  const notifications: Notifications = {
    notification01: {
      title: '新商品「X」の販売開始のお知らせ',
      linkUrl: '/news',
    },
    notification02: { title: '会社名変更のお知らせ', linkUrl: '/news' },
    notification03: {
      title: '最新の取締役会議の結果について',
      linkUrl: '/news',
    },
    notification04: {
      title: '2022年第四四半期決算発表のお知らせ',
      linkUrl: '/news',
    },
    notification05: {
      title: '経営戦略に大きな変革を迎えるお知らせ',
      linkUrl: '/news',
    },
  };
  provide<Notifications>('firstviewNotifications', notifications);

  const pressReleaseListCards: PressReleaseListCards = {
    pressReleaseListCard01: {
      title: '新しいパートナーシップを結ぶ',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease01.jpg',
      updateAt: '2023.01.23',
    },
    pressReleaseListCard02: {
      title: '新製品/サービスの発表',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease02.jpg',
      updateAt: '2023.01.22',
    },
    pressReleaseListCard03: {
      title: '株式上場を決定',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease03.jpg',
      updateAt: '2023.01.21',
    },
    pressReleaseListCard04: {
      title: '大規模な拡張計画を発表',
      tag: 'プレスリリース',
      thumbnail: '/pressRelease04.jpg',
      updateAt: '2023.01.20',
    },
  };

  const serviceNewsListCards: ServiceNewsListCards = {
    serviceNewsListCard01: {
      title: '企業が成長を促進するための新しいアプローチ',
      tag: 'ニュース',
      thumbnail: '/serviceNews01.jpg',
      updateAt: '2023.01.23',
    },
    serviceNewsListCard02: {
      title: '知識を使って企業の財政状況を改善しよう',
      tag: 'ニュース',
      thumbnail: '/serviceNews02.jpg',
      updateAt: '2023.01.22',
    },
    serviceNewsListCard03: {
      title: '新しい市場への飛躍を確実にするための戦略',
      tag: 'ニュース',
      thumbnail: '/serviceNews03.jpg',
      updateAt: '2023.01.21',
    },
    serviceNewsListCard04: {
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
    pressReleaseListCards: pressReleaseListCards,
    serviceNewsListTitle: posts.value.details.ext_9,
    serviceNewsListLinkUrl: posts.value.details.ext_10,
    serviceNewsListCards: serviceNewsListCards,
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

  const jounalList: Array<JournalList> = journals.value.list.map(
    (journal: any): JournalList => {
      return {
        category: journal.ext_1,
        updateDate: journal.update_ymdhi.split('T')[0].replaceAll('-', '.'),
        subject: journal.subject,
        eyeCatchUrl: journal.ext_2.url,
        bodyHTML: journal.ext_3,
        hashTag: journal.ext_4,
      };
    }
  );

  const topJournalObject: TopJournalObject = {
    title: posts.value.details.ext_26,
    journalList: jounalList,
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
  <OrganismsFirstview></OrganismsFirstview>
  <!-- <OrganismsTopNews class="mb-[120px]"></OrganismsTopNews>
  <OrganismsTopWelfare class="mb-[120px]"></OrganismsTopWelfare>
  <OrganismsTopService class="mb-[120px]"></OrganismsTopService>
  <OrganismsTopJournal class="mb-[120px]"></OrganismsTopJournal>
  <OrganismsTopVision class="mb-[120px]"></OrganismsTopVision>
  <OrganismsTopRecruit class="mb-[120px]"></OrganismsTopRecruit> -->
</template>
