<script setup lang="ts">
  import {
    RecruitObject,
    RecruitPositionCategory,
  } from '~/types/pages/recruit';
  import { usePagesRecruitStore } from '~/stores/pages/recruit';

  // フォームの設定
  const myForm: any = ref(null);
  const submitForm = () => {
    const node = myForm.value.node;
    node.submit();
  };

  definePageMeta({
    layout: 'entry',
  });

  // 採用情報ページ情報をPiniaから取得
  const pagesRecruitStore = usePagesRecruitStore();
  if (Object.keys(pagesRecruitStore.header).length == 0) {
    await pagesRecruitStore.fetchPagesRecruit();
  }
  const { entries }: RecruitObject = pagesRecruitStore;
</script>

<template>
  <div
    class="flex w-full flex-col items-center bg-bancor-gray700 pt-[72px] pb-[128px]"
  >
    <!-- タイトル -->
    <div class="mb-6 flex w-full items-center space-x-4 pc:max-w-[1100px]">
      <AtomsDoubleSquare
        frontSquareColor="bg-bancor-black100"
        backSquareColor="bg-bancor-blue100"
        size="h-[17px] w-[17px]"
      ></AtomsDoubleSquare>
      <AtomsBasicTitle
        size="text-[28px]"
        text="エントリーフォーム"
      ></AtomsBasicTitle>
    </div>

    <!-- フォームボディ -->
    <div
      class="flex w-full flex-col items-center rounded-[10px] bg-white pt-10 pc:max-w-[1100px]"
    >
      <!-- 氏名 -->
      <FormKit type="form" ref="myForm" :actions="false">
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 姓 -->
          <FormKit
            type="text"
            label="氏名"
            placeholder="姓"
            validation="required"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
          <!-- 名 -->
          <FormKit
            type="text"
            placeholder="名"
            outer-class="mt-4"
            validation="required"
          ></FormKit>
        </div>

        <!-- 氏名（かな） -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 氏名（かな） -->
          <FormKit
            type="text"
            label="氏名（かな）"
            placeholder=""
            validation="required"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 生年月日 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 生年月日 -->
          <FormKit
            type="text"
            label="生年月日"
            value="2000-01-01"
            validation="required|date_before:2020-01-01"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- メールアドレス -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- メールアドレス -->
          <FormKit
            type="email"
            label="メールアドレス"
            placeholder="xxxx@gmail.com"
            validation="required|email"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
          <!-- メールアドレスの確認 -->
          <FormKit
            type="email"
            label="メールアドレスの確認"
            placeholder="xxxx@gmail.com"
            validation="required|email"
            outer-class="mt-6"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 性別 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 性別 -->
          <FormKit
            type="radio"
            label="性別"
            legend="性別"
            :options="['男性', '女性', 'その他']"
            validation="required"
          >
            <template #legend="context">
              <AtomsFormBasicLabel text="性別" :isRequired="true" class="mb-4">
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 郵便番号 -->
        <div
          class="mb-8 flex w-[360px] flex-col space-x-5 tb:w-[640px] tb:flex-row pc:w-[860px]"
        >
          <!-- 郵便番号 -->
          <div class="w-full tb:w-[420px] pc:w-[620px]">
            <FormKit
              type="text"
              label="郵便番号"
              placeholder="000-0000"
              validation="required|matches:^[0-9]{3}-[0-9]{4}$"
            >
              <template #label="context">
                <AtomsFormBasicLabel
                  :text="context.label"
                  :isRequired="true"
                  class="mb-4"
                >
                </AtomsFormBasicLabel>
              </template>
            </FormKit>
          </div>

          <!-- 住所自動入力ボタン -->
          <div class="flex w-full items-end tb:w-[220px]">
            <button
              class="flex w-full items-center justify-center rounded-lg border border-bancor-gray600 py-2 text-base font-bold"
            >
              住所自動入力
            </button>
          </div>
        </div>

        <!-- 住所 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 住所 -->
          <FormKit
            type="text"
            label="住所"
            placeholder="入力してください"
            validation="required"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 電話番号 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 電話番号 -->
          <FormKit
            type="tel"
            label="電話番号"
            placeholder="00-0000-0000"
            validation="required|matches:^\d{2,3}-\d{2,3,4,5}-\d{2,3,4,5}$"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="true"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>
      </FormKit>

      <!-- フォーム送信ボタン -->
      <div
        @click="submitForm"
        class="rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
      >
        同意の上、入力内容を確認
      </div>
    </div>
  </div>
</template>
