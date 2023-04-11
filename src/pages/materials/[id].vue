<script setup lang="ts">
  import { ComputedRef } from 'vue';
  import {
    MaterialObject,
    MaterialsServiceOverviewList,
    MaterialsUsefulMaterialList,
    MaterialsBancor,
  } from '~/types/pages/materials';
  import { emailValidation } from '~/assets/utils/bannedEmailDomains';

  definePageMeta({
    middleware: 'check-form-sent',
  });

  const isLoading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 100);
  });

  // URLからカテゴリを取得
  const router = useRoute();
  const fileId = router.params.id;

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const materialsStore = useMaterialsStore();
  if (Object.keys(materialsStore.header).length == 0) {
    await materialsStore.fetchMaterials();
  }
  const { bancor }: { bancor: MaterialsBancor } = materialsStore;

  // サービス概要を取得
  if (materialsStore.serviceOverviewList.length == 0) {
    await materialsStore.fetchServiceOverviewList();
  }
  const { serviceOverviewList }: MaterialsServiceOverviewList = materialsStore;

  // お役立ち資料を取得
  if (materialsStore.usefulMaterialList.length == 0) {
    await materialsStore.fetchUsefulMaterialList();
  }
  const { usefulMaterialList }: MaterialsUsefulMaterialList = materialsStore;

  // カテゴリ毎にオブジェクトを作成し、配列に格納
  const categoryList = [
    {
      category: 'Service Overview',
      label: 'サービス概要資料',
      list: serviceOverviewList,
      linkUrl: '/materials',
    },
    {
      category: 'Useful Materials',
      label: 'お役立ち資料集',
      list: usefulMaterialList,
      linkUrl: '/materials',
    },
  ];

  // サービス概要リストにfileIdがあるか確認
  const selectedCategoryList = computed(() => {
    return categoryList.filter((item) => {
      return item.list.some((item) => item.fileId == fileId);
    })[0];
  });
  const selectedCategory = computed(() => {
    return {
      category: selectedCategoryList.value.category,
      label: selectedCategoryList.value.label,
      list: selectedCategoryList.value.list.filter((item) => {
        return item.fileId == fileId;
      }),
      linkUrl: selectedCategoryList.value.linkUrl,
    };
  });

  // 表示する資料の数
  const displayCount = ref(3);

  // その他の関連資料
  const otherMaterials: ComputedRef<{
    category: string;
    label: string;
    list: MaterialObject[];
    linkUrl: string;
  }> = computed(() => {
    return {
      category: selectedCategory.value.category,
      label: selectedCategory.value.label,
      list: categoryList
        .filter((item) => {
          return item.category == selectedCategory.value.category;
        })[0]
        .list.filter((item) => {
          return item.fileId != fileId;
        })
        .slice(0, displayCount.value),
      linkUrl: selectedCategory.value.linkUrl,
    };
  });

  // フォームの設定
  const myForm: any = ref(null);
  const submitForm = () => {
    const formData = myForm.value.node.submit();
    console.log(`formData: ${JSON.stringify(formData)}`);
  };

  const submitHandler = async (formData: any) => {
    console.log(`formData: ${JSON.stringify(formData)}`);
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const submitDownloadMaterialFormEndpoint =
      config.public.kurocoSubmitDownloadMaterialForm;
    const postData = {
      name: `${formData.lastName} ${formData.firstName}`,
      email: formData.email,
      ext_01: formData.companyName,
      ext_02: formData.department,
      ext_03: formData.position,
      ext_04: formData.tel,
    };

    console.log(`formData: ${JSON.stringify(postData)}`);

    const { data, error } = (await useFetch(
      `${baseUrl}${submitDownloadMaterialFormEndpoint}`,
      {
        method: 'POST',
        body: postData,
      }
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useMaterialsStore] fetchMaterials error: ${error.value}`);
    } else {
      console.log(`[useMaterialsStore] fetchMaterials data: ${data.value}`);
      // フォーム送信済みフラグを立て、資料ダウンロードページに遷移
      materialsStore.setFormSentFlag(true);
      navigateTo(`/download-material/${fileId}`);
    }
  };
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <!-- ヘッダー -->
    <div
      class="mb-[72px] flex h-[490px] w-full items-end justify-center rounded-[10px] bg-bancor-light-blue200 pb-14"
    >
      <!-- タイトルとイメージ -->
      <div
        class="flex h-[264px] w-[95%] flex-col items-center justify-between tb:flex-row tb:space-x-[100px] pc:max-w-[1100px]"
      >
        <!-- タイトル -->
        <div class="flex w-full flex-col space-y-10 tb:w-[450px]">
          <AtomsBasicTitle
            :text="selectedCategory.list[0].title"
            size="text-[24px] tb:text-[28px]"
            color="text-bancor-black100"
          ></AtomsBasicTitle>
          <AtomsBasicOutline
            :text="selectedCategory.list[0].outline"
            size="text-[15px]"
            color="text-bancor-black200"
          ></AtomsBasicOutline>
        </div>
        <!-- イメージ -->
        <AtomsBasicImage
          :imgUrl="selectedCategory.list[0].imgUrl"
          img-height="h-full"
          img-width="w-full tb:w-[550px]"
          radius="rounded-[10px]"
        ></AtomsBasicImage>
      </div>
    </div>

    <!-- 資料ダウンロードフォーム -->
    <div class="mb-[96px] flex w-full items-center justify-center">
      <!-- フォーム -->
      <div
        class="flex w-[1100px] flex-col items-center justify-center rounded-[10px] bg-bancor-gray1000 py-16"
      >
        <FormKit
          type="form"
          ref="myForm"
          :actions="false"
          @submit="submitHandler"
        >
          <!-- 会社名 -->
          <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
            <!-- 会社名 -->
            <FormKit
              type="text"
              label="会社名"
              name="companyName"
              placeholder="XXXX株式会社"
              validation="required"
              :validationMessages="{
                required: '会社名を入力してください',
              }"
              input-class="h-[38px] bg-bancor-white100"
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
                name="lastName"
                validation="required|length:0,10"
                input-class="h-[38px] bg-bancor-white100"
                inner-class="h-[40px]"
                outer-class="w-[49%]"
                :validationMessages="{
                  required: '姓を入力してください',
                  length: '姓は10文字以内で入力してください',
                }"
              >
              </FormKit>
              <!-- テキスト入力(名) -->
              <FormKit
                placeholder="名"
                name="firstName"
                validation="required"
                input-class="h-[38px] bg-bancor-white100"
                inner-class="h-[40px]"
                outer-class="w-[49%]"
                :validationMessages="{
                  required: '名を入力してください',
                  length: '名は10文字以内で入力してください',
                }"
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
              input-class="h-[38px] bg-bancor-white100"
              inner-class="h-[40px]"
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
              input-class="h-[38px] bg-bancor-white100"
              inner-class="h-[40px]"
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
              name="email"
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
              input-class="h-[38px] bg-bancor-white100"
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
              name="tel"
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
              input-class="h-[38px] bg-bancor-white100"
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

    <!-- その他の関連資料 -->
    <div class="mb-[152px] flex w-full flex-col items-center justify-center">
      <!-- メニュータイトル -->
      <MoleculesDoubleSquareTagMenu
        class="mb-14 w-[95%] pc:max-w-[1100px]"
        :title="`その他の${otherMaterials.label}`"
        :subTitle="otherMaterials.category"
        size="text-[26px] tb:text-[32px]"
      ></MoleculesDoubleSquareTagMenu>

      <!-- リスト -->
      <div
        class="grid w-[95%] grid-cols-1 items-center justify-center gap-y-12 overflow-hidden tb:grid-cols-2 tb:gap-x-10 pc:max-w-[1100px] pc:grid-cols-3"
      >
        <!-- リストカード -->
        <div
          v-for="item in otherMaterials.list"
          class="flex w-[340px] flex-col space-y-6"
          :key="item.title"
        >
          <!-- イメージ -->
          <AtomsBasicImage
            :imgUrl="item.imgUrl"
            img-height="h-[172px]"
            img-width="w-full"
            radius="rounded-[5px]"
            class="shadow-lg"
          ></AtomsBasicImage>
          <!-- 日付とタイトル -->
          <div class="flex flex-col">
            <!-- 日付 -->
            <div class="text-[13px] text-bancor-black100">
              {{ item.updateAt }}
            </div>
            <!-- タイトル -->
            <div class="mb-4 text-[18px] font-bold text-bancor-black100">
              {{ item.title }}
            </div>
            <AtomsBasicOutline
              :text="item.outline"
              :is-bold="false"
              size="text-[14px]"
            ></AtomsBasicOutline>
          </div>
          <!-- ダウンロードボタン -->
          <div class="flex w-full">
            <AtomsButtonOvalArrow
              bgColor="bg-bancor-black100"
              textColor="text-white"
              size="text-base"
              buttonHeight="h-[44px]"
              buttonWidth="w-[212px]"
              arrow-color="text-white"
              arrow-position="right-8"
              :linkUrl="`${otherMaterials.linkUrl}/${item.fileId}`"
            >
              ダウンロード
            </AtomsButtonOvalArrow>
          </div>
        </div>
      </div>
    </div>

    <!-- Bancorを初めて知る方へ -->
    <MoleculesMaterialsBancorInfo
      :bancor="bancor"
    ></MoleculesMaterialsBancorInfo>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
