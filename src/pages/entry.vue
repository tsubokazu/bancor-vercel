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

  // ファイルアップロード
  const inputFile = () => {
    const node = myForm.value.node;
    node.querySelector('input[type="file"]').click();
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

  // 直近の職歴の数
  const recentHistoryCount = ref(1);
  const clickAddRecentHistory = () => {
    recentHistoryCount.value++;
  };

  const config: any = inject(Symbol.for('FormKitConfig'));
  config.locale = 'ja';

  // 郵便番号中のハイフンを削除
  const removeHyphen = (zipCode: string) => {
    return zipCode.replace(/-/g, '');
  };

  // 住所を取得してフォームにセット
  const getAddress = async () => {
    const node = myForm.value.node;
    const zipCode = node.querySelector('input[name="zip_code"]').value;
    console.log(zipCode);

    const address = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          return data.results[0].address1 + data.results[0].address2;
        } else {
          return '';
        }
      });
    node.querySelector('input[name="address"]').value = address;
  };
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
      <FormKit type="form" ref="myForm" :actions="false" locale="ja">
        <!-- 氏名 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 姓 -->
          <FormKit
            type="text"
            label="氏名"
            placeholder="姓"
            validation="required"
            :validationMessages="{
              required: '姓を入力してください',
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
          <!-- 名 -->
          <FormKit
            type="text"
            placeholder="名"
            outer-class="mt-4"
            validation="required"
            :validationMessages="{
              required: '名を入力してください',
            }"
            input-class="h-[38px]"
            inner-class="h-[40px]"
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
            :validationMessages="{
              required: '氏名（かな）を入力してください',
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

        <!-- 生年月日 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 生年月日 -->
          <FormKit
            type="date"
            label="生年月日"
            placeholder="2000/01/01"
            validation="required|date_before:2020-01-01"
            :validationMessages="{
              required: '生年月日を入力してください',
              date_before: '生年月日は2020年1月1日以前の日付を入力してください',
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

        <!-- メールアドレス -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- メールアドレス -->
          <FormKit
            type="email"
            name="email"
            label="メールアドレス"
            placeholder="xxxx@gmail.com"
            validation="required|email"
            :validationMessages="{
              required: 'メールアドレスを入力してください',
              email: '正しいメールアドレスを入力してください',
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
          <!-- メールアドレスの確認 -->
          <FormKit
            type="email"
            name="email_confirmation"
            label="メールアドレスの確認"
            placeholder="xxxx@gmail.com"
            validation="required|email|same:email"
            outer-class="mt-6"
            input-class="h-[38px]"
            inner-class="h-[40px]"
            :validationMessages="{
              required: 'メールアドレスを入力してください',
              email: '正しいメールアドレスを入力してください',
              same: 'メールアドレスが一致しません',
            }"
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
            :validationMessages="{
              required: '性別を選択してください',
            }"
          >
            <template #legend="context">
              <AtomsFormBasicLabel text="性別" :isRequired="true" class="mb-4">
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 郵便番号 -->
        <div
          class="relative mb-8 flex w-[360px] flex-col space-x-0 tb:w-[640px] tb:flex-row tb:space-x-5 pc:w-[860px]"
        >
          <!-- 郵便番号 -->
          <div class="w-full tb:w-[420px] pc:w-[620px]">
            <FormKit
              type="text"
              name="zipCode"
              label="郵便番号"
              placeholder="000-0000"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              validation="required|matches:^[0-9]{3}-[0-9]{4}$"
              :validationMessages="{
                required: '郵便番号を入力してください',
                matches: '郵便番号は000-0000の形式で入力してください',
              }"
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
          <div
            class="flex w-full items-end tb:absolute tb:right-0 tb:top-10 tb:w-[180px] pc:w-[220px]"
          >
            <button
              @click="getAddress"
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
            name="address"
            placeholder="入力してください"
            input-class="h-[38px]"
            inner-class="h-[40px]"
            validation="required"
            :validationMessages="{
              required: '住所を入力してください',
            }"
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
            input-class="h-[38px]"
            inner-class="h-[40px]"
            placeholder="00-0000-0000"
            validation="required|matches:^\d{2,3}-\d{2,3,4,5}-\d{2,3,4,5}$"
            :validationMessages="{
              required: '電話番号を入力してください',
              matches: '正しい電話番号の形式で入力してください',
            }"
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

        <!-- 応募理由・自己PR -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 応募理由・自己PR -->
          <FormKit
            type="textarea"
            label="応募理由・自己PR"
            placeholder=""
            help="※400文字以内でご記入ください。"
            input-class="h-[144px]"
            inner-class="h-[146px]"
          >
            <template #label="context">
              <AtomsFormBasicLabel
                :text="context.label"
                :isRequired="false"
                class="mb-4"
              >
              </AtomsFormBasicLabel>
            </template>
          </FormKit>
        </div>

        <!-- 最終学歴 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <AtomsFormBasicLabel text="最終学歴" :isRequired="false" class="mb-4">
          </AtomsFormBasicLabel>
          <!-- 在学期間・就学区分 -->
          <div class="mb-6 flex items-center space-x-4">
            <!-- 入学年月日 -->
            <FormKit
              type="text"
              placeholder="2020/01"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[160px] tb:w-[272px]"
            >
            </FormKit>
            <div>〜</div>
            <!-- 卒業年月日 -->
            <FormKit
              type="text"
              placeholder="2022/12"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[160px] tb:w-[272px]"
            >
            </FormKit>
            <!-- 就学区分 -->
            <FormKit
              type="select"
              name="educationType"
              placeholder="就学区分"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[360px] tb:w-[252px]"
              :options="[
                '高校',
                '大学',
                '大学院',
                '専門学校',
                '短期大学',
                'その他',
              ]"
            >
            </FormKit>
          </div>
          <!-- 学校名 -->
          <div class="mb-6">
            <FormKit
              type="text"
              placeholder="学校名"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
            ></FormKit>
          </div>
          <!-- 学部 -->
          <div class="mb-6">
            <FormKit
              type="text"
              placeholder="学部"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
            ></FormKit>
          </div>
          <!-- 学科名・研究室名 -->
          <div class="mb-6">
            <FormKit
              type="text"
              placeholder="学科名・研究室名"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
            ></FormKit>
          </div>
          <!-- 備考 -->
          <div class="mb-6">
            <FormKit
              type="text"
              placeholder="備考"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
            ></FormKit>
          </div>
        </div>

        <!-- 直近の職歴 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 各職歴 -->
          <div
            v-for="recentHistoryNum in recentHistoryCount"
            class="mb-8 w-full"
            :key="recentHistoryNum"
          >
            <AtomsFormBasicLabel
              :text="
                recentHistoryCount > 1
                  ? `直近の職歴 (${recentHistoryNum}/${recentHistoryCount})`
                  : '直近の職歴'
              "
              :isRequired="false"
              class="mb-4"
            >
            </AtomsFormBasicLabel>
            <!-- 就業期間 -->
            <div class="mb-6 flex items-center space-x-4">
              <!-- 入社年月日 -->
              <FormKit
                type="text"
                placeholder="2020/01"
                input-class="h-[38px]"
                inner-class="h-[40px] w-[160px] tb:w-[406px]"
              >
              </FormKit>
              <div>〜</div>
              <!-- 退社年月日 -->
              <FormKit
                type="text"
                placeholder="2022/12"
                input-class="h-[38px]"
                inner-class="h-[40px] w-[160px] tb:w-[406px]"
              >
              </FormKit>
            </div>
            <!-- 会社名 -->
            <div class="mb-6">
              <FormKit
                type="text"
                placeholder="会社名"
                class="mb-6"
                input-class="h-[38px]"
                inner-class="h-[40px]"
              ></FormKit>
            </div>
            <!-- 部署・役職 -->
            <div class="mb-6">
              <FormKit
                type="text"
                placeholder="部署・役職"
                class="mb-6"
                input-class="h-[38px]"
                inner-class="h-[40px]"
              ></FormKit>
            </div>
            <!-- 取り組み詳細 -->
            <div class="mb-6">
              <FormKit
                type="textarea"
                placeholder="取り組み詳細"
                class="mb-6"
                input-class="h-[114px]"
                inner-class="h-[116px]"
              ></FormKit>
            </div>
          </div>
          <!-- 職歴追加ボタン -->
          <button
            @click="clickAddRecentHistory"
            v-show="recentHistoryCount < 3"
            class="flex w-[164px] items-center justify-center rounded-lg border border-bancor-gray500 bg-bancor-gray1000 py-2 text-base"
          >
            職歴を追加 +
          </button>
        </div>

        <!-- 履歴書・職務履歴書添付 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <AtomsFormBasicLabel
            text="履歴書・職務履歴書添付"
            :isRequired="false"
            class="mb-4"
          >
          </AtomsFormBasicLabel>
          <!-- 履歴書・職務履歴書添付 -->
          <div class="mb-4">
            <FormKit type="file">
              <template #input="context">
                <button
                  class="flex h-8 w-[164px] items-center justify-center rounded-lg border border-bancor-gray500 bg-bancor-gray600 py-2 text-base"
                >
                  ファイルを選択
                  <input type="file" class="hidden" />
                </button>
              </template>
            </FormKit>
          </div>
          <div>
            <FormKit type="file">
              <template #input="context">
                <button
                  class="flex h-8 w-[164px] items-center justify-center rounded-lg border border-bancor-gray500 bg-bancor-gray600 py-2 text-base"
                >
                  ファイルを選択
                  <input type="file" class="hidden" />
                </button>
              </template>
            </FormKit>
          </div>
        </div>

        <!-- 区切り線 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <div class="border-b border-bancor-gray500"></div>
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
      <div
        @click="submitForm"
        class="mb-24 rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
      >
        同意の上、入力内容を送信
      </div>
    </div>
  </div>
</template>
