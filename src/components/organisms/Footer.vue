<script setup lang="ts">
  import { KurocoUrlObject } from '~/types/kuroco';
  import {
    FooterContactMenuObject,
    FooterObject,
    SNSObject,
    PageLinkObject,
  } from '~/types/Footer';

  const props = defineProps({
    isRounded: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: 'bg-[#f1f5f9]',
    },
  });

  provide('isRounded', props.isRounded);
  provide('bgColor', props.bgColor);

  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const FooterEndpoint = config.public.kurocoFooter;
  const { data: posts } = (await useFetch(
    `${baseUrl}${FooterEndpoint}`
  )) as any;

  // フッターロゴ
  const logoUrl: string = posts.value.details.ext_1.url;
  const logoLink: string = posts.value.details.ext_2;

  // SNS
  const snsIcons: Array<string> = posts.value.details.ext_3.map(
    (urlObj: KurocoUrlObject) => urlObj.url
  );
  const snsLinks: Array<string> = posts.value.details.ext_4;
  const snsNum = snsIcons.length;
  const snsObjects: Array<SNSObject> = [];
  for (let n = 0; n < snsNum; n++) {
    snsObjects.push({
      iconUrl: snsIcons[n],
      linkUrl: snsLinks[n],
    });
  }

  // フッターメニュー
  const footerMenuTitles: Array<string> = posts.value.details.ext_5;
  const footerMenuLinks: Array<string> = posts.value.details.ext_6;
  const footerMenuNum = footerMenuTitles.length;
  const pageLinkObjects: Array<PageLinkObject> = [];
  for (let n = 0; n < footerMenuNum; n++) {
    pageLinkObjects.push({
      title: footerMenuTitles[n],
      linkUrl: footerMenuLinks[n],
    });
  }

  const footerObject: FooterObject = {
    logoUrl: logoUrl,
    linkUrl: logoLink,
    snsObjects: snsObjects,
    pageLinkObjects: pageLinkObjects,
  };

  provide('footerObject', footerObject);

  // コピーライト
  const copyright: string = posts.value.details.ext_7;

  // お問い合わせ・資料請求(コンタクトメニュー)
  const contactMenuTitles: Array<string> = posts.value.details.ext_8;
  const contactMenuIcons: Array<string> = posts.value.details.ext_9.map(
    (urlObj: KurocoUrlObject) => urlObj.url
  );
  const contactMenuLinks: Array<string> = posts.value.details.ext_10;
  const contactMenuOutline: Array<string> = posts.value.details.ext_11;
  const contactMenuImages: Array<string> = posts.value.details.ext_12.map(
    (urlObj: KurocoUrlObject) => urlObj.url
  );

  const CONTACT_MENU_NUM = 2;
  const contactMenuObjects: Array<FooterContactMenuObject> = [];
  for (let n = 0; n < CONTACT_MENU_NUM; n++) {
    contactMenuObjects.push({
      title: contactMenuTitles[n],
      iconUrl: contactMenuIcons[n],
      linkUrl: contactMenuLinks[n],
      outline: contactMenuOutline[n],
      imgUrl: contactMenuImages[n],
    });
  }
  provide('footerContactMenuObjects', contactMenuObjects);
</script>

<template>
  <footer class="relative mt-[370px] h-full w-full tb:mt-[282px]">
    <MoleculesFooterContactMenus
      class="absolute top-[-370px] -z-10 tb:top-[-282px]"
    >
    </MoleculesFooterContactMenus>
    <MoleculesFooterMenu class="mt-[370px] tb:mt-[282px]"></MoleculesFooterMenu>
    <AtomsCopyright>Bancor, Inc. </AtomsCopyright>
  </footer>
</template>
