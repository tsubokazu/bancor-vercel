<script setup lang="ts">
  import { Bancor3minObject } from '~/types/pages/bancor-3min';
  import { useBancor3minStore } from '~/stores/pages/bancor-3min';
  import { emailValidation } from '~/assets/utils/bannedEmailDomains';

  // フォームの設定
  const myForm: any = ref(null);
  const submitForm = () => {
    const node = myForm.value.node;
    node.submit();
  };

  definePageMeta({
    layout: 'entry',
  });

  // 3分でわかるBancorのページ情報をPiniaから取得
  const bancor3min = useBancor3minStore();
  if (Object.keys(bancor3min.title).length == 0) {
    await bancor3min.fetchBancor3min();
  }
  const { title, icons, material }: Bancor3minObject = bancor3min;
  console.log(`emailValidation: ${emailValidation}`);
</script>

<template>
  <div
    class="flex w-full flex-col items-center bg-bancor-gray700 pt-[72px] pb-[128px]"
  >
    <!-- タイトル -->
    <div
      class="mb-[56px] flex w-full flex-col items-center justify-center space-x-4 space-y-8 pc:max-w-[1100px]"
    >
      <AtomsBasicTitle :text="title.title" size="text-[32px]"></AtomsBasicTitle>
      <AtomsBasicOutline
        size="text-[15px]"
        :text="title.outline"
        :isBold="false"
      ></AtomsBasicOutline>
    </div>

    <!-- この資料でわかること -->
    <div
      class="mb-[64px] flex w-[860px] flex-col items-center justify-center space-y-4 rounded-[10px] bg-white pt-6 pb-8"
    >
      <!-- タイトル -->
      <AtomsBasicTitle :text="icons.title" size="text-[20px]"></AtomsBasicTitle>
      <!-- 装飾線 -->
      <div class="mt-4 mb-8 h-[3px] w-[32px] bg-bancor-blue200"></div>
      <!-- アイコンカードグリッド -->
      <div class="grid grid-cols-2 gap-x-3 tb:grid-cols-4">
        <!-- カード -->
        <div
          v-for="icon in icons.icons"
          class="flex h-[108px] w-[196px] flex-col items-center justify-center space-y-3 rounded-[5px] border border-bancor-gray600"
        >
          <AtomsBasicIcon
            :iconUrl="icon.imgUrl"
            size="w-[48px] h-[48px]"
          ></AtomsBasicIcon>
          <AtomsBasicOutline
            :text="icon.title"
            size="text-[16px]"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>
      </div>
    </div>

    <!-- 資料ダウンロードフォーム -->
    <div class="mb-[96px] flex w-full items-center justify-center">
      <!-- フォーム -->
      <div
        class="flex w-[1100px] flex-col items-center justify-center rounded-[10px] bg-white py-16"
      >
        <FormKit type="form" ref="myForm" :actions="false" locale="ja">
          <!-- 会社名 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <!-- 会社名 -->
            <FormKit
              type="text"
              label="会社名"
              placeholder="XXXX株式会社"
              validation="required"
              :validationMessages="{
                required: '会社名を入力してください',
              }"
              input-class="h-[38px]"
              inner-class="h-[40px]"
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

          <!-- 氏名 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <!-- ラベル -->
            <AtomsFormBasicLabel text="氏名" :isRequired="true" class="mb-4">
            </AtomsFormBasicLabel>
            <!-- テキスト入力(姓) -->
            <div class="flex w-full justify-between">
              <FormKit
                placeholder="姓"
                name="last_name"
                validation="required|length:0,10"
                outer-class="w-[49%]"
                :validationMessages="{
                  required: '姓を入力してください',
                  length: '姓は10文字以内で入力してください',
                }"
                input-class="h-[38px]"
                inner-class="h-[40px]"
              >
              </FormKit>
              <!-- テキスト入力(名) -->
              <FormKit
                placeholder="名"
                name="first_name"
                validation="required|length:0,10"
                outer-class="w-[49%]"
                :validationMessages="{
                  required: '名を入力してください',
                  length: '名は10文字以内で入力してください',
                }"
                input-class="h-[38px]"
                inner-class="h-[40px]"
              >
              </FormKit>
            </div>
          </div>

          <!-- 部署 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <!-- セレクト -->
            <FormKit
              type="select"
              label="部署"
              name="department"
              placeholder="選択してください"
              placeholder-class="text-bancor-gray200"
              validation="required"
              :validationMessages="{
                required: '部署を選択してください',
              }"
              :options="[
                '経営企画',
                '情報システム',
                '営業',
                '営業企画',
                'マーケティング',
                '人事',
                '製品開発',
                '財務・経理',
                '総務・秘書',
                '法務',
                '海外関連部門',
                'その他',
              ]"
              input-class="h-[38px]"
              inner-class="h-[40px]"
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

          <!-- 役職 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <!-- セレクト -->
            <FormKit
              type="select"
              label="役職"
              name="position"
              placeholder="選択してください"
              placeholder-class="text-bancor-gray200"
              validation="required"
              :validationMessages="{
                required: '役職を選択してください',
              }"
              :options="[
                '社長・役員',
                '部長・マネージャー',
                '課長',
                '一般社員',
              ]"
              input-class="h-[38px]"
              inner-class="h-[40px]"
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

          <!-- 会社メールアドレス -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <FormKit
              type="email"
              label="会社メールアドレス"
              placeholder="xxxx@xxxx.co.jp"
              :validation="[
                ['required'],
                ['email'],
                ['matches', emailValidation],
              ]"
              :validationMessages="{
                required: 'メールアドレスを入力してください',
                email: '正しいメールアドレスを入力してください',
                matches:
                  '会社のメールアドレスを入力してください(フリーメールやキャリアメールはご利用できません)',
              }"
              input-class="h-[38px]"
              inner-class="h-[40px]"
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

          <!-- ご連絡可能な電話番号 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <FormKit
              type="tel"
              label="ご連絡可能な電話番号"
              placeholder="00-0000-0000"
              :validation="[
                ['required'],
                ['matches', /^\d{2,4}-\d{1,4}-\d{1,4}$/],
              ]"
              :validationMessages="{
                required: '電話番号を入力してください',
                matches: '正しい電話番号を入力してください',
              }"
              input-class="h-[38px]"
              inner-class="h-[40px]"
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

          <!-- 区切り線 -->
          <div class="mb-[42px] w-[360px] tb:w-[640px] pc:w-[860px]">
            <div class="border-b border-bancor-gray600"></div>
          </div>

          <!-- 個人情報の取り扱いについての同意 -->
          <div
            class="mb-8 flex w-[360px] items-center justify-center tb:w-[640px] pc:w-[860px]"
          >
            <FormKit
              type="checkbox"
              label="個人情報"
              name="terms"
              :value="false"
              validation="accepted"
              validation-visibility="dirty"
              :validationMessages="{
                accepted: '個人情報の取扱について同意してください',
              }"
            >
              <template #label="context">
                <div class="flex items-center">
                  <span class="text-bancor-black400">
                    <a
                      href="http://localhost:3000/privacy"
                      target="_blank"
                      class="text-bancor-blue200"
                      >個人情報</a
                    >
                  </span>
                  <span class="text-bancor-black400">
                    の取扱について同意する
                  </span>
                </div>
              </template>
            </FormKit>
          </div>
        </FormKit>

        <!-- フォーム送信ボタン -->
        <button
          @click.prevent="submitForm"
          class="rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
        >
          同意の上、入力内容を送信
        </button>
      </div>
    </div>
  </div>
</template>
