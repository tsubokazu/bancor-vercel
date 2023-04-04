<script setup lang="ts">
  import { SiteUsageObject } from '~/types/pages/site-usage';
  const siteUsageStore = useSiteUsageStore();
  if (Object.keys(siteUsageStore.siteUsageObject).length == 0) {
    await siteUsageStore.fetchSiteUsage();
  }
  const { siteUsageObject }: { siteUsageObject: SiteUsageObject } =
    siteUsageStore;
  console.log(`SiteUsageObject: ${JSON.stringify(siteUsageObject)}`);
</script>

<template>
  <div class="flex w-full justify-center bg-bancor-gray700">
    <!-- ボディ -->
    <div class="flex w-[95%] flex-col pc:max-w-[1000px]">
      <!-- サブタイトル -->
      <AtomsBasicTitle
        size="text-[14px]"
        :text="siteUsageObject.subTitle"
        class="mt-[150px] mb-8"
      />
      <!-- タイトル -->
      <AtomsFuturaBoldText
        size="text-[40px]"
        :text="siteUsageObject.title"
        class="mb-16"
      ></AtomsFuturaBoldText>

      <!-- 本サイトのご利用について -->
      <div class="mb-[80px] w-full bg-white pt-[48px] pb-[64px]">
        <!-- 本サイトのご利用について -->
        <div class="flex flex-col items-center py-12">
          <!-- 本文 -->
          <div
            class="post prose-lg mb-16 w-[95%] pc:w-[872px]"
            v-html="siteUsageObject.bodyHTML"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
