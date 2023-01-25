<script setup lang="ts">
  import { Notifications } from '../types';
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
</script>

<template>
  <OrganismsFirstview></OrganismsFirstview>
</template>
