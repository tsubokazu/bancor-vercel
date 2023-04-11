<script setup lang="ts">
  import { LinkObject, PageLinkObject, SiteMapObject } from '~/types/SiteMenu';

  const linkObjectsCompanyProfile: Array<LinkObject> = [
    {
      title: '会社概要',
      linkUrl: '/company-info',
    },
    {
      title: '代表メッセージ',
      linkUrl: '/message',
    },
    {
      title: 'ビジョン',
      linkUrl: '/vision',
    },
  ];
  const linkObjectsService: Array<LinkObject> = [
    {
      title: 'システム開発事業',
      linkUrl: '/system-development',
    },
    {
      title: 'ウェブマーケティング事業',
      linkUrl: 'https://d-nuvo.com/service/marketing/',
    },
    {
      title: '福祉施設向けシステム開発事業',
      linkUrl: '/care-welfare',
    },
    {
      title: 'DX支援事業',
      linkUrl: 'https://d-nuvo.com/service/dx/',
    },
  ];
  const linkObjectsRecruit: Array<LinkObject> = [
    {
      title: 'DX支援事業での募集カテゴリ',
      linkUrl: '/recruit-dx',
    },
    {
      title: 'ウェブマーケティング事業での\r\n募集カテゴリ',
      linkUrl: '/recruit-nuvo',
    },
    {
      title: 'システム開発事業での\r\n募集カテゴリ',
      linkUrl: '/recruit-development',
    },
  ];
  const linkObjectsSecurity: Array<LinkObject> = [
    {
      title: 'プライバシーポリシー',
      linkUrl: '/privacy-policy',
    },
    {
      title: '他社商標・著作物',
      linkUrl: '/trademarks',
    },
    {
      title: '本サイトのご利用について',
      linkUrl: '/site-usage',
    },
  ];
  const pageLinkObjects: Array<PageLinkObject> = [
    {
      title: '会社案内',
      linkUrl: '/company-profile',
      linkObjects: linkObjectsCompanyProfile,
    },
    {
      title: '事業内容',
      linkUrl: '/service',
      linkObjects: linkObjectsService,
    },
    {
      title: 'ニュースルーム',
      linkUrl: '/news',
      linkObjects: {},
    },
    {
      title: '公式オウンドメディア\r\nBancor Journal',
      linkUrl: '/journal',
      linkObjects: {},
    },
    {
      title: '採用情報',
      linkUrl: '/recruit',
      linkObjects: linkObjectsRecruit,
    },
    {
      title: 'お問い合わせ',
      linkUrl: '/contact',
      linkObjects: {},
    },
    {
      title: 'セキュリティ',
      linkUrl: '',
      linkObjects: linkObjectsSecurity,
    },
  ];
  const siteMapObject: SiteMapObject = {
    title: 'サイトマップ',
    pageLinkObjects: pageLinkObjects,
  };
</script>
<template>
  <div class="mb-[64px] flex h-full w-full flex-col space-y-4">
    <!-- サイトマップタイトル -->
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-white"
      backSquareColor="bg-white"
      text="サイトマップ"
      textColor="text-white"
      textSize="text-2xl"
    ></MoleculesDoubleSquareTag>
    <!-- サイトマップ各メニュー -->
    <div class="flex w-full flex-col flex-wrap tb:h-[700px] pc:h-[700px]">
      <MoleculesSiteMenuPageLinks
        class="mb-8 h-fit pc:w-2/5"
        v-for="pageLinkObject in pageLinkObjects"
        :pageLinkObject="pageLinkObject"
        :key="pageLinkObject.title"
      ></MoleculesSiteMenuPageLinks>
    </div>
    <!-- サイトマップ下の線 -->
    <div class="h-px w-[90%] bg-gray-700"></div>
  </div>
</template>
