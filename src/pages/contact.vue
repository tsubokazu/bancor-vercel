<script setup lang="ts">
  import { ContactObject } from '~/types/pages/contact';
  import { FormKitMessages } from '@formkit/vue';

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const contactStore = useContactStore();
  if (Object.keys(contactStore.header).length == 0) {
    await contactStore.fetchContact();
  }
  const { header, leftMenu, concernList }: ContactObject = contactStore;

  // フォームの設定
  const myForm: any = ref(null);
  const submitForm = () => {
    const formData = myForm.value.node.submit();
  };

  // フォーム送信済みフラグ
  const isSubmitted = ref(false);

  // フォーム送信
  const submitHandler = async (formData: any) => {
    isSubmitted.value = true;
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const submitContactFormEndpoint = config.public.kurocoSubmitContactForm;
    const postData = {
      name: `${formData.lastName} ${formData.firstName}`,
      email: formData.email,
      message: formData.content,
      ext_01: formData.companyName,
      ext_02: formData.business,
      ext_03: formData.position,
      ext_04: formData.workplace,
      ext_05: formData.tel,
      ext_06: formData.trigger,
      ext_07: formData.chatId,
      ext_08: formData.problem.join('\r\n'),
    };

    const { data, error } = (await useFetch(
      `${baseUrl}${submitContactFormEndpoint}`,
      {
        method: 'POST',
        body: postData,
      }
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useMaterialsStore] fetchMaterials error: ${error.value}`);
    } else {
      // フォーム送信済みフラグを立て、資料ダウンロードページに遷移
      isSubmitted.value = true;
    }
  };
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
    <div
      class="relative flex w-full flex-col items-center space-y-24 bg-bancor-gray700 pb-[128px]"
    >
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[32px] tb:text-[36px] pc:text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <!-- メニュー -->
      <div
        class="flex w-[95%] flex-col justify-between space-y-4 tb:flex-row tb:space-x-8 tb:space-y-0 pc:mt-[100px] pc:max-w-[1100px]"
      >
        <!-- 左メニュー -->
        <div
          class="mb-[36px] flex w-full flex-col items-center space-y-8 tb:mb-0 tb:w-[390px] tb:items-start"
        >
          <!-- タイトル -->
          <AtomsBasicTitle
            :text="leftMenu.title"
            size="text-[28px]"
          ></AtomsBasicTitle>
          <!-- イメージ -->
          <div class="flex h-fit w-full justify-center">
            <AtomsBasicImage
              :imgUrl="leftMenu.imgUrl"
              imgHeight="h-[162px]"
              imgWidth="w-[197px]"
            ></AtomsBasicImage>
          </div>
          <!-- アウトライン -->
          <AtomsBasicOutline
            :text="leftMenu.outline"
            size="text-[16px]"
          ></AtomsBasicOutline>
          <!-- リスト -->
          <div class="flex flex-col space-y-6">
            <!-- リストタイトル -->
            <AtomsBasicTitle
              :text="leftMenu.listTitle"
              size="text-[20px]"
            ></AtomsBasicTitle>
            <!-- リスト -->
            <div class="flex flex-col space-y-1">
              <div
                v-for="item in leftMenu.list"
                class="text-[14px] font-bold text-bancor-blue200"
                :key="item"
              >
                {{ `・${item}` }}
              </div>
            </div>
          </div>
        </div>

        <!-- 右メニュー (フォーム) -->
        <div
          class="flex w-[95%] items-center justify-center rounded-[10px] bg-white py-[63px] pc:max-w-[570px]"
        >
          <!-- フォーム -->
          <div class="flex w-[90%] flex-col items-center">
            <FormKit
              type="form"
              ref="myForm"
              :actions="false"
              incomplete-message="未入力の項目があります"
              @submit="submitHandler"
            >
              <!-- 姓 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- 姓 -->
                <FormKit
                  type="text"
                  label="姓"
                  name="lastName"
                  validation="required"
                  :validationMessages="{
                    required: '姓を入力してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px] text-[24px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 名 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- 名 -->
                <FormKit
                  type="text"
                  label="名"
                  name="firstName"
                  validation="required"
                  :validationMessages="{
                    required: '名を入力してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 会社名 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- 会社名 -->
                <FormKit
                  type="text"
                  label="会社名"
                  name="companyName"
                  :validationMessages="{
                    required: '会社名を入力してください',
                  }"
                  validation="required"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 事業内容 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- セレクト -->
                <FormKit
                  type="select"
                  label="事業内容"
                  name="business"
                  placeholder=" "
                  placeholder-class="text-bancor-gray200"
                  validation="required"
                  :validationMessages="{
                    required: '事業内容を選択してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                  :options="[
                    '鉱業, 採石業, 砂利採取業',
                    '農林水産業',
                    '建設業',
                    '製造業',
                    '電気・ガス・熱供給・水道業',
                    '情報通信業',
                    '運輸業, 郵便業',
                    '卸売業, 小売業',
                    '金融業, 保険業',
                    '不動産業, 物品賃貸業',
                    '学術研究, 専門・技術サービス業',
                    '宿泊業, 飲食サービス業',
                    '生活関連サービス業, 娯楽業',
                    '教育, 学習支援業',
                    '医療, 福祉',
                    '複合サービス事業',
                    'サービス業',
                    '公務（他に分類されないものを除く）',
                  ]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 役職 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- セレクト -->
                <FormKit
                  type="select"
                  label="役職"
                  name="position"
                  placeholder=" "
                  placeholder-class="text-bancor-gray200"
                  validation="required"
                  :validationMessages="{
                    required: '役職を選択してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                  :options="[
                    '社長・役員',
                    '部長・マネージャー',
                    '課長',
                    '一般社員',
                  ]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 勤務地 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- セレクト -->
                <FormKit
                  type="select"
                  label="勤務地"
                  name="workplace"
                  placeholder=" "
                  placeholder-class="text-bancor-gray200"
                  validation="required"
                  :validationMessages="{
                    required: '勤務地を選択してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                  :options="[
                    '海外',
                    '北海道',
                    '青森県',
                    '岩手県',
                    '宮城県',
                    '秋田県',
                    '山形県',
                    '福島県',
                    '茨城県',
                    '栃木県',
                    '群馬県',
                    '埼玉県',
                    '千葉県',
                    '東京都',
                    '神奈川県',
                    '新潟県',
                    '富山県',
                    '石川県',
                    '福井県',
                    '山梨県',
                    '長野県',
                    '岐阜県',
                    '静岡県',
                    '愛知県',
                    '三重県',
                    '滋賀県',
                    '京都府',
                    '大阪府',
                    '兵庫県',
                    '奈良県',
                    '和歌山県',
                    '鳥取県',
                    '島根県',
                    '岡山県',
                    '広島県',
                    '山口県',
                    '徳島県',
                    '香川県',
                    '愛媛県',
                    '高知県',
                    '福岡県',
                    '佐賀県',
                    '長崎県',
                    '熊本県',
                    '大分県',
                    '宮崎県',
                    '鹿児島県',
                    '沖縄県',
                  ]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 会社メールアドレス -->
              <div class="mb-8 w-full pc:w-[497px]">
                <FormKit
                  type="email"
                  name="email"
                  label="会社メールアドレス"
                  :validation="[['required'], ['email']]"
                  :validationMessages="{
                    required: 'メールアドレスを入力してください',
                    email: '正しいメールアドレスを入力してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- ご連絡可能な電話番号 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <FormKit
                  type="tel"
                  name="tel"
                  label="ご連絡可能な電話番号"
                  :validation="[
                    ['required'],
                    ['matches', /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/],
                  ]"
                  :validationMessages="{
                    required: '電話番号を入力してください',
                    matches: '正しい電話番号を入力してください',
                  }"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="true"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- チャットID(Chatwork/LINE/Facebook等) -->
              <div class="mb-8 w-full pc:w-[497px]">
                <FormKit
                  type="text"
                  name="chatId"
                  label="チャットID(Chatwork/LINE/Facebook等)"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="false"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- 弊社を知ったきっかけ -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- セレクト -->
                <FormKit
                  type="select"
                  label="弊社を知ったきっかけ"
                  name="trigger"
                  placeholder=" "
                  placeholder-class="text-bancor-gray200"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[48px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[50px]"
                  :options="[
                    '検索サイト(Yahoo, Googleなど)',
                    'メルマガ・情報配信サービス',
                    'Web広告・記事',
                    'セミナー・イベント',
                    '新聞・雑誌',
                    '知人の紹介',
                    'その他',
                  ]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="false"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                      class="mb-2"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- お問い合わせ内容 -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- セレクト -->
                <FormKit
                  type="textarea"
                  label="お問い合わせ内容"
                  name="content"
                  input-class="bg-bancor-white100 rounded-[5px] border border-bancor-navy500 h-[262px]"
                  inner-class="rounded-[5px] border border-bancor-navy500 h-[264px]"
                >
                  <template #label="context">
                    <AtomsFormBasicLabel
                      :text="context.label"
                      :isRequired="false"
                      class="mb-2"
                      size="text-[14px]"
                      badgePaddingY="py-[2px]"
                    >
                    </AtomsFormBasicLabel>
                  </template>
                </FormKit>
              </div>

              <!-- お客様のお悩み（複数回答可） -->
              <div class="mb-8 w-full pc:w-[497px]">
                <!-- ラベル -->
                <AtomsFormBasicLabel
                  text="お客様のお悩み（複数回答可）"
                  :isRequired="false"
                  class="mb-2"
                >
                </AtomsFormBasicLabel>
                <!-- チェックボックス -->
                <FormKit
                  type="checkbox"
                  option-class="font-bold"
                  options-class="space-y-3"
                  name="problem"
                  :options="concernList.concernList"
                >
                </FormKit>
              </div>

              <!-- 個人情報の取り扱いについての同意 -->
              <div class="mb-8 flex w-full items-center pc:w-[497px]">
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
                      <span
                        class="text-[14px] text-bancor-black400 tb:text-[16px]"
                      >
                        <a
                          href="https://www.bancor.co.jp/privacy-policy"
                          target="_blank"
                          class="text-[14px] text-bancor-blue200 tb:text-[16px]"
                          >個人情報</a
                        >
                      </span>
                      <span
                        class="text-[14px] text-bancor-black400 tb:text-[16px]"
                      >
                        の取扱について同意する
                      </span>
                      <div
                        class="ml-3 rounded bg-bancor-blue300 px-2 py-[2px] text-[12px] font-bold text-white"
                      >
                        必須
                      </div>
                    </div>
                  </template>
                </FormKit>
              </div>
            </FormKit>
            <!-- フォーム送信ボタン -->
            <AtomsButtonOvalArrow
              textSize="text-[18px]"
              @click.prevent="submitForm"
              textColor="text-white"
              :isGradient="true"
              toColor="to-bancor-blue300"
              fromColor="from-[#021b79]"
              arrowPosition="right-6"
              buttonHeight="h-[56px]"
              buttonWidth="w-[339px]"
              radius="rounded-[8px]"
              >送信する
            </AtomsButtonOvalArrow>

            <FormKitMessages :node="myForm?.node" />

            <!-- 送信完了メッセージ -->
            <div
              v-if="isSubmitted"
              class="mt-8 w-[95%] text-center pc:w-[497px]"
            >
              ご送信ありがとうございます。担当者からの返信をお待ち下さい。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
