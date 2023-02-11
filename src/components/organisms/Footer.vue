<script setup lang="ts">
  import { KurocoUrlObject } from '~/types/kuroco';
  import { FooterContactMenuObject } from '~/types/Footer';

  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const FooterEndpoint = config.public.kurocoFooter;
  const { data: posts } = (await useFetch(
    `${baseUrl}${FooterEndpoint}`
  )) as any;

  // フッターロゴ
  const logoUrl: string = posts.value.details.ext_1.url;
  const logoLink: Array<string> = posts.value.details.ext_2;

  // SNS
  const snsIcons: Array<string> = posts.value.details.ext_3.map(
    (urlObj: KurocoUrlObject) => urlObj.url
  );
  const snsLinks: Array<string> = posts.value.details.ext_4;

  // フッターメニュー
  const menuTitles: Array<string> = posts.value.details.ext_5;
  const menuLinks: Array<string> = posts.value.details.ext_6;

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
  <footer>
    <MoleculesFooterContactMenus class="h-screen max-h-[320px] w-screen">
    </MoleculesFooterContactMenus>
    <MoleculesFooterMenu class="h-screen max-h-[300px] w-screen">
      <AtomsBlank bgColor="bg-bancor-red200">フッターメニュー</AtomsBlank>
    </MoleculesFooterMenu>
    <AtomsCopyright>Bancor, Inc. </AtomsCopyright>
  </footer>
</template>
