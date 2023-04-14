<script setup lang="ts">
  import { PrivacyPolicyObject } from '~/types/pages/privacy-policy';
  const privacyPolicyStore = usePrivacyPolicyStore();
  if (Object.keys(privacyPolicyStore.privacyPolicyObject).length == 0) {
    await privacyPolicyStore.fetchPrivacyPolicy();
  }
  const { privacyPolicyObject }: { privacyPolicyObject: PrivacyPolicyObject } =
    privacyPolicyStore;
  const { privacyPolicy, privacyPolicyHandling } = privacyPolicyObject;
</script>

<template>
  <div class="flex w-full justify-center bg-bancor-gray700">
    <!-- ボディ -->
    <div class="flex w-[95%] flex-col pc:max-w-[1000px]">
      <!-- サブタイトル -->
      <AtomsBasicTitle
        size="text-[14px]"
        :text="privacyPolicyObject.subTitle"
        class="mt-[150px] mb-8"
      />
      <!-- タイトル -->
      <AtomsFuturaBoldText
        size="text-[40px]"
        :text="privacyPolicyObject.title"
        class="mb-16"
      ></AtomsFuturaBoldText>

      <!-- プライバシーポリシー本文 -->
      <div class="mb-[80px] w-full bg-white pt-[48px] pb-[64px]">
        <!-- 個人情報保護方針 -->
        <div class="flex flex-col items-center py-12">
          <!-- タイトル -->
          <MoleculesDoubleSquareTitle
            :title="privacyPolicy.title"
            class="mb-[40px]"
          >
          </MoleculesDoubleSquareTitle>
          <!-- テキスト -->
          <div
            v-for="item in privacyPolicy.contents"
            class="mb-8 flex w-[95%] flex-col space-y-2 pc:w-[872px]"
            :key="item.item"
          >
            <!-- 項目 -->
            <AtomsBasicTitle :text="item.item" size="text-[18px]" />
            <!-- 説明文 -->
            <AtomsBasicOutline
              :text="item.outline"
              size="text-[15px]"
              :isBold="false"
              class="leading-[30px]"
            />
          </div>
          <!-- 制定日 -->
          <div class="flex w-[95%] justify-end pc:w-[872px]">
            <AtomsBasicOutline
              :text="privacyPolicy.date"
              size="text-[14px]"
              :isBold="false"
              class="leading-[28px]"
            ></AtomsBasicOutline>
          </div>
        </div>

        <!-- 点線の区切り線 -->
        <div
          class="w-[95%] translate-x-[2.5%] border-b border-dashed border-bancor-gray500"
        ></div>

        <!-- 個人情報の取り扱いについて -->
        <div class="flex flex-col items-center py-12">
          <!-- タイトル -->
          <MoleculesDoubleSquareTitle
            :title="privacyPolicyHandling.title"
            class="mb-[40px]"
          >
          </MoleculesDoubleSquareTitle>
          <!-- テキスト -->
          <div
            v-for="item in privacyPolicyHandling.contents"
            class="mb-8 flex w-[95%] flex-col space-y-2 pc:w-[872px]"
            :key="item.item"
          >
            <!-- 項目 -->
            <AtomsBasicTitle :text="item.item" size="text-[18px]" />
            <!-- 説明文 -->
            <AtomsBasicOutline
              :text="item.outline"
              size="text-[15px]"
              :isBold="false"
              class="leading-[30px]"
            />
          </div>
          <!-- 制定日 -->
          <div class="flex w-[95%] justify-end pc:w-[872px]">
            <AtomsBasicOutline
              :text="privacyPolicyHandling.date"
              size="text-[14px]"
              :isBold="false"
              class="leading-[28px]"
            ></AtomsBasicOutline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
