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
    notification01: '新商品「X」の販売開始のお知らせ',
    notification02: '会社名変更のお知らせ',
    notification03: '最新の取締役会議の結果について',
    notification04: '2022年第四四半期決算発表のお知らせ',
    notification05: '経営戦略に大きな変革を迎えるお知らせ',
  };
  provide<Notifications>('firstviewNotifications', notifications);
  // const progressCount = ref(0); // お知らせ表示の切り替えプログレスバーのカウント
  // provide<number>('progressCount', progressCount.value);
  // const incrementProgress = () => {
  //   progressCount.value++;
  //   console.log('incrementProgress');
  // };
  // const intervalId = ref<NodeJS.Timer>();
  // onMounted(() => {
  //   intervalId.value = setInterval(incrementProgress, 100);
  //   console.log(progressCount.value);
  // });
  // onUnmounted(() => {
  //   clearInterval(intervalId.value);
  // });
</script>

<template>
  <OrganismsFirstview></OrganismsFirstview>
</template>
