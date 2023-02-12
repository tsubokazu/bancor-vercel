<script setup lang="ts">
  import { ServiceObject } from '~/types/SiteMenu';
  const serviceObject: ServiceObject = {
    title: '運営サービス',
    logoUrl: '/logo-nuvo-white.png',
    linkUrl: 'https://d-nuvo.com/',
    outline:
      '構築から運用までウェブマーケティングにおける包括的な起業支援サービスサイトへ',
  };
</script>
<template>
  <div class="flex w-full flex-col space-y-4">
    <MoleculesDoubleSquareTag
      class="mb-2"
      frontSquareColor="bg-white"
      backSquareColor="bg-white"
      textColor="text-white"
      textSize="text-2xl"
      fontBold="font-bold"
      >{{ serviceObject.title }}</MoleculesDoubleSquareTag
    >
    <AtomsLogo
      class="block w-56"
      :logoUrl="serviceObject.logoUrl"
      :linkUrl="serviceObject.linkUrl"
    ></AtomsLogo>
    <div class="mb-3 h-px w-10/12 bg-gray-700"></div>
    <div class="w-[360px]">
      <AtomsLinkOutline
        :text="serviceObject.outline"
        :linkUrl="serviceObject.linkUrl"
        color="text-white"
        size="text-xs"
        :isBold="false"
      ></AtomsLinkOutline>
    </div>
    <div class="mt-3 h-px w-10/12 bg-gray-700"></div>
  </div>
</template>
