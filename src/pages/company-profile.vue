<script setup lang="ts">
  import { CompanyProfileObject } from '~/types/pages/company-profile';
  import { usePagesCompanyProfileStore } from '~/stores/pages/company-profile';
  import { GoogleMap, Marker } from 'vue3-google-map';
  const center = { lat: 33.880568, lng: 130.877602 };
  const config = useRuntimeConfig();
  const googleMapApiKey = config.public.googleMapApiKey;

  // 事業内容ページ情報をPiniaから取得
  const pagesCompanyProfileStore = usePagesCompanyProfileStore();
  if (Object.keys(pagesCompanyProfileStore.header).length == 0) {
    await pagesCompanyProfileStore.fetchPagesCompanyProfile();
  }
  const { header, companyProfile }: CompanyProfileObject =
    pagesCompanyProfileStore;

  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[360px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div class="relative mb-40 flex w-full flex-col items-center space-y-24">
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1000px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[32px] tb-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- ロゴ -->
      <div class="flex w-full items-center justify-center">
        <img :src="companyProfile.logoUrl" />
      </div>

      <!-- 会社概要 -->
      <div class="flex w-[95%] flex-col space-y-8">
        <MoleculesCompanyOverviewRow
          item="会社商号"
          :name="companyProfile.name"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="所在地"
          :name="companyProfile.address"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="代表者"
          :name="companyProfile.ceo"
          :linkTitle="companyProfile.messageTitle"
          :linkUrl="companyProfile.messageLinkUrl"
          :linkDirRow="isSmartPhone ? false : true"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="設立"
          :name="companyProfile.establish"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="資本金"
          :name="companyProfile.capital"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="事業内容"
          :name="companyProfile.service"
          :linkTitle="companyProfile.serviceTitle"
          :linkUrl="companyProfile.serviceLinkUrl"
          :linkDirRow="false"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="従業員数"
          :name="companyProfile.employee"
        ></MoleculesCompanyOverviewRow>
        <MoleculesCompanyOverviewRow
          item="取引銀行"
          :name="companyProfile.bank"
        ></MoleculesCompanyOverviewRow>
      </div>

      <!-- アクセスマップ -->
      <div
        class="flex w-[95%] flex-col items-center justify-center space-y-3 pc:max-w-[1000px]"
      >
        <div class="flex w-full justify-between">
          <AtomsBasicTitle text="アクセス" size="text-base"></AtomsBasicTitle>
          <AtomsLinkMoveArrowTitle
            text="グーグルマップを開く"
            :linkUrl="companyProfile.mapUrl"
            size="text-[15px]"
          ></AtomsLinkMoveArrowTitle>
        </div>
        <GoogleMap
          :api-key="googleMapApiKey"
          class="h-[400px] w-full"
          :center="center"
          :zoom="15"
        >
          <Marker
            :options="{ position: center, icon: companyProfile.mapIconUrl }"
            class="h-6"
          />
        </GoogleMap>
      </div>
    </div>
  </div>
</template>
