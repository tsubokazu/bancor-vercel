<script setup lang="ts">
  import { EnqueteObject } from '~/types/pages/daycare/enquete';
  import { useEnqueteStore } from '~/stores/pages/daycare/enquete';
  import { FormKitMessages } from '@formkit/vue';

  // 資料一覧ページのヘッダーとBancor情報をPiniaから取得
  const enqueteStore = useEnqueteStore();
  if (Object.keys(enqueteStore.header).length == 0) {
    await enqueteStore.fetchEnquete();
  }
  const { header, leftMenu, inquiryItems }: EnqueteObject = enqueteStore;

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
    const submitEnqueteFormEndpoint =
      config.public.kurocoSubmitDaycareEnqueteForm;
    const postData = {
      name: `${formData.lastName} ${formData.firstName}`,
      email: formData.email,
      message: formData.content,
      ext_01: formData.tel,
      ext_02: formData.inquiry.join('\r\n'),
    };

    console.log(
      `[useMaterialsStore] fetchMaterials: ${baseUrl}${submitEnqueteFormEndpoint}`
    );
    console.log(
      `[useMaterialsStore] fetchMaterials: ${JSON.stringify(postData)}`
    );

    const { data, error } = (await useFetch(
      `${baseUrl}${submitEnqueteFormEndpoint}`,
      {
        method: 'POST',
        body: postData,
      }
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useMaterialsStore] fetchMaterials error: ${error.value}`);
    } else {
      // フォーム送信済みフラグを立て
      isSubmitted.value = true;
    }
  };
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[240px]">
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

      <div
        class="flex w-[95%] flex-col justify-between space-y-4 tb:flex-row tb:space-x-8 tb:space-y-0 pc:mt-[100px] pc:max-w-[1200px]"
      >
        <!-- 協力感謝メッセージ -->
        <div
          class="flex flex-col space-y-6 rounded-3xl border-bancor-gray500 bg-bancor-white100 pl-[50px] tb:flex-row tb:space-y-0 tb:space-x-10 pc:h-[308px] pc:max-w-[1200px]"
        >
          <!-- 文面 -->
          <div class="flex w-full flex-col justify-center space-y-6 tb:w-[60%]">
            <!-- タイトル -->
            <div class="flex flex-col space-x-2">
              <div
                class="border-l-4 border-bancor-green100 pl-2 text-[24px] font-bold"
              >
                児童発達支援・放課後等デイサービスの自己評価
              </div>
              <div class="text-[18px] text-[#555555]">
                （保護者様向け/事業所向け）
              </div>
            </div>
            <!-- 文章 -->
            <AtomsBasicOutline
              class="mt-6"
              text="アンケートへのご協力、ありがとうございました！保護者様からの貴重なご意見やご要望を活かし、より一層質の高いサービスを​ご提供できるよう、施設関係者一同今後とも努力してまいります♪"
            >
            </AtomsBasicOutline>
          </div>

          <!-- イラスト -->
          <AtomsBasicIcon
            iconUrl="/images/daycare/enquete/01.png"
            size="h-[280px]"
          >
          </AtomsBasicIcon>
        </div>
      </div>

      <!-- 星ノ学園　北筑校 -->
      <div
        class="flex w-[95%] flex-col space-y-6 rounded-3xl border-bancor-gray500 bg-bancor-white100 tb:flex-row tb:space-y-0 tb:space-x-10 pc:max-w-[1200px] pc:justify-between"
      >
        <!-- 左文面 -->
        <div class="mx-8 my-[28px] flex flex-col">
          <!-- アイコンとタイトル -->
          <div class="mb-8 flex space-x-[12px]">
            <!-- アイコン -->
            <AtomsBasicIcon
              class="mt-1"
              iconUrl="/images/daycare/enquete/03.png"
              size="h-[32px]"
            ></AtomsBasicIcon>
            <!-- タイトル -->
            <div class="flex flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                text="八幡西区北筑 | 放課後等デイサービス"
                size="text-[24px]"
              ></AtomsBasicTitle>
              <!-- 学園名 -->
              <div class="text-[32px] font-bold">星ノ学園　北筑校</div>
            </div>
          </div>
          <!-- 自己評価表と保護者アンケート -->
          <div class="space-y-6 rounded-2xl border border-[#e8e8e8] px-12 py-8">
            <!-- 自己評価表 -->
            <div class="flex h-[80px] flex-col space-y-4">
              <div class="text-[18px] font-bold">自己評価表</div>
              <div class="flex space-x-4">
                <div class="flex items-center space-x-2">
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">児童発達支援</div>
                </div>
                <div class="flex items-center space-x-2">
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">放課後等デイサービス</div>
                </div>
              </div>
            </div>
            <!-- 保護者アンケート -->
            <div class="flex h-[80px] flex-col space-y-4">
              <div class="text-[18px] font-bold">保護者アンケート</div>
              <div class="flex space-x-4">
                <div class="flex items-center space-x-2">
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">児童発達支援</div>
                </div>
                <div class="flex items-center space-x-2">
                  <!-- >アイコン -->
                  <div
                    class="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#e8e8e8] text-[#e8e8e8]"
                  >
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                  </div>
                  <div class="text-[16px]">放課後等デイサービス</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 写真 -->
        <AtomsBasicIcon
          iconUrl="/images/daycare/enquete/02.png"
          size="h-full"
        ></AtomsBasicIcon>
      </div>
    </div>

    <!-- Bancorの取り組み　フッター -->
    <OrganismsAboutMore></OrganismsAboutMore>
  </div>
</template>
