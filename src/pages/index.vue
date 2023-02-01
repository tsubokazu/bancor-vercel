<script setup lang="ts">
  import {
    Notifications,
    PressReleaseListCards,
    ServiceNewsListCards,
    TopNewsObject,
    TopWelfareObject,
  } from '~/types';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const topEndpoint = config.public.kurocoTopEndpoint;
  const { data: posts } = await useFetch(`${baseUrl}${topEndpoint}`);
  provide<string>('firstviewImgUrl', posts._value.details.ext_1.url);
  provide<string>('firstviewCatchCopyUrl', posts._value.details.ext_2.url);
  provide<string>('firstviewCopy', posts._value.details.ext_3);
  provide<string>('firstviewSubcopy', posts._value.details.ext_4);
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
    title: posts._value.details.ext_5,
    linkUrl: posts._value.details.ext_6,
    pressReleaseListTitle: posts._value.details.ext_7,
    pressReleaseListLinkUrl: posts._value.details.ext_8,
    pressReleaseListCards: pressReleaseListCards,
    serviceNewsListTitle: posts._value.details.ext_9,
    serviceNewsListLinkUrl: posts._value.details.ext_10,
    serviceNewsListCards: serviceNewsListCards,
  };
  provide<TopNewsObject>('topNewsObject', topNewsObject);

  const topWelfareObject: TopWelfareObject = {
    title: posts._value.details.ext_11,
    linkUrl: posts._value.details.ext_15,
    outline: posts._value.details.ext_12,
    image01Url: posts._value.details.ext_13.url,
    image02Url: posts._value.details.ext_14.url,
  };
  provide<TopNewsObject>('topWelfareObject', topWelfareObject);
</script>

<template>
  <OrganismsFirstview></OrganismsFirstview>
  <OrganismsTopNews class="mb-[120px]"></OrganismsTopNews>
  <OrganismsTopWelfare class="mb-[120px]"></OrganismsTopWelfare>
</template>
