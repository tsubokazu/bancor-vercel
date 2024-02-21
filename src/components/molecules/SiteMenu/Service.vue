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
      :text="serviceObject.title"
      textColor="text-white"
      textSize="text-2xl"
    ></MoleculesDoubleSquareTag>
    <AtomsLogo
      class="block w-56 py-4"
      :logoUrl="serviceObject.logoUrl"
      :linkUrl="serviceObject.linkUrl"
      width="189"
      height="39"
    ></AtomsLogo>
    <div class="mb-3 h-px w-[90%] bg-gray-700"></div>
    <div class="w-[90%] py-4">
      <AtomsLinkOutline
        :text="serviceObject.outline"
        :linkUrl="serviceObject.linkUrl"
        color="text-white"
        size="text-xs"
        :isBold="false"
      ></AtomsLinkOutline>
    </div>
    <div class="mt-3 h-px w-[90%] bg-gray-700"></div>
  </div>
</template>
