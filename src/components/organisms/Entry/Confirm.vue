<script setup lang="ts">
  import FormKitVariants from '@formkit/themes/tailwindcss';
  import { usePagesEntryStore } from '@/stores/pages/entry';
  import { submitForm } from '@formkit/core';

  // entry storeから取得
  const entryStore = usePagesEntryStore();

  // フォームの送信
  const submitForm = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const submitEntryFormEndpoint = config.public.kurocoSubmitEntryForm;
    const careersNum = entryStore.entryFormObject.careers.length;
    const postDate = {
      name: `${entryStore.entryFormObject.lastName} ${entryStore.entryFormObject.firstName}`,
      email: entryStore.entryFormObject.email,
      message: entryStore.entryFormObject.pr,
      ext_26: entryStore.entryFormObject.nameKana,
      ext_27: entryStore.entryFormObject.birthday,
      ext_01: entryStore.entryFormObject.sex,
      ext_02: entryStore.entryFormObject.zipCode,
      ext_03: entryStore.entryFormObject.address,
      ext_04: entryStore.entryFormObject.tel,
      ext_05: entryStore.entryFormObject.education.schoolName,
      ext_06: `${entryStore.entryFormObject.education.entranceDate}~${entryStore.entryFormObject.education.graduationDate}`,
      ext_07: entryStore.entryFormObject.education.schoolDepartment,
      ext_08: entryStore.entryFormObject.education.schoolSubject,
      ext_10: entryStore.entryFormObject.education.educationType,
      ext_11: entryStore.entryFormObject.education.schoolNote,
      ext_12: entryStore.entryFormObject.careers[0].companyName,
      ext_13: `${entryStore.entryFormObject.careers[0].employmentDate}~${entryStore.entryFormObject.careers[0].retirementDate}`,
      ext_14: entryStore.entryFormObject.careers[0].department,
      ext_15: entryStore.entryFormObject.careers[0].jobDetail,
      ext_16:
        careersNum >= 2
          ? entryStore.entryFormObject.careers[1].companyName
          : '',
      ext_17:
        careersNum >= 2
          ? `${entryStore.entryFormObject.careers[1].employmentDate}~${entryStore.entryFormObject.careers[1].retirementDate}`
          : '',
      ext_18:
        careersNum >= 2 ? entryStore.entryFormObject.careers[1].department : '',
      ext_19:
        careersNum >= 2 ? entryStore.entryFormObject.careers[1].jobDetail : '',
      ext_20:
        careersNum >= 3
          ? entryStore.entryFormObject.careers[2].companyName
          : '',
      ext_21:
        careersNum >= 3
          ? `${entryStore.entryFormObject.careers[2].employmentDate}~${entryStore.entryFormObject.careers[2].retirementDate}`
          : '',
      ext_22:
        careersNum >= 3 ? entryStore.entryFormObject.careers[2].department : '',
      ext_23:
        careersNum >= 3 ? entryStore.entryFormObject.careers[2].jobDetail : '',
      ext_24: entryStore.entryFormObject.files[0],
      ext_25: entryStore.entryFormObject.files[1],
    };

    console.log(`[submitEntryForm] postDate: ${JSON.stringify(postDate)}`);

    const { data, error } = (await useFetch(
      `${baseUrl}${submitEntryFormEndpoint}`,
      {
        method: 'POST',
        body: postDate,
      }
    )) as any;
    if (!data.value || error.value) {
      console.log(`[submitEntryForm] error: ${error.value}`);
      return;
    } else {
      console.log(`[submitEntryForm] success: ${data.value}`);
      entryStore.nextEntryStep();
    }
  };

  // フォームの修正
  const editForm = () => {
    entryStore.prevEntryStep();
  };
</script>

<template>
  <div
    class="flex w-full flex-col items-center bg-bancor-gray700 pt-[72px] pb-[128px]"
  >
    <!-- タイトル -->
    <div class="mb-6 flex w-[95%] items-center space-x-4 pc:max-w-[1100px]">
      <AtomsDoubleSquare
        frontSquareColor="bg-bancor-black100"
        backSquareColor="bg-bancor-blue100"
        size="h-[17px] w-[17px]"
      ></AtomsDoubleSquare>
      <AtomsBasicTitle
        size="text-[28px]"
        text="入力内容のご確認"
      ></AtomsBasicTitle>
    </div>

    <!-- ボディ -->
    <div
      class="flex w-[95%] flex-col items-center rounded-[10px] bg-white pt-10 pc:max-w-[1100px]"
    >
      <!-- 氏名 -->
      <MoleculesEntryConfirmItem
        :text="`${entryStore.entryFormObject.lastName} ${entryStore.entryFormObject.firstName}`"
        title="氏名"
      ></MoleculesEntryConfirmItem>

      <!-- 氏名（かな） -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.nameKana"
        title="氏名（かな）"
      ></MoleculesEntryConfirmItem>

      <!-- 生年月日 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.birthday"
        title="生年月日"
      ></MoleculesEntryConfirmItem>

      <!-- メールアドレス -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.email"
        title="メールアドレス"
      ></MoleculesEntryConfirmItem>

      <!-- 性別 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.sex"
        title="性別"
      ></MoleculesEntryConfirmItem>

      <!-- 郵便番号 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.zipCode"
        title="郵便番号"
      ></MoleculesEntryConfirmItem>

      <!-- 住所 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.address"
        title="住所"
      ></MoleculesEntryConfirmItem>

      <!-- 電話番号 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.tel"
        title="電話番号"
      ></MoleculesEntryConfirmItem>

      <!-- 応募理由・自己PR -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.pr"
        title="応募理由・自己PR"
      ></MoleculesEntryConfirmItem>

      <!-- 最終学歴 -->
      <div class="my-[32px] w-[95%]">
        <AtomsBasicTitle size="text-[15px]" text="最終学歴"></AtomsBasicTitle>
      </div>

      <!-- 期間 -->
      <MoleculesEntryConfirmItem
        :text="`${entryStore.entryFormObject.education.entranceDate}~${entryStore.entryFormObject.education.graduationDate}`"
        title="期間"
      ></MoleculesEntryConfirmItem>

      <!-- 就学区分 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.education.educationType"
        title="就学区分"
      ></MoleculesEntryConfirmItem>

      <!-- 学校名 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.education.schoolName"
        title="学校名"
      ></MoleculesEntryConfirmItem>

      <!-- 学部 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.education.schoolDepartment"
        title="学部"
      ></MoleculesEntryConfirmItem>

      <!-- 学科名・研究室名 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.education.schoolSubject"
        title="学科名・研究室名"
      ></MoleculesEntryConfirmItem>

      <!-- 備考 -->
      <MoleculesEntryConfirmItem
        :text="entryStore.entryFormObject.education.schoolNote"
        title="備考"
      ></MoleculesEntryConfirmItem>

      <!-- 直近の職歴（最大3つまで） -->
      <div
        class="w-[95%]"
        v-for="(career, index) in entryStore.entryFormObject.careers"
        :key="index"
      >
        <div class="my-[32px] w-[95%]">
          <AtomsBasicTitle
            size="text-[15px]"
            :text="`直近の職歴${index > 0 ? `（その${index}）` : ''}`"
          ></AtomsBasicTitle>
        </div>

        <!-- 期間 -->
        <MoleculesEntryConfirmItem
          :text="`${career.employmentDate} ~ ${career.retirementDate}`"
          title="期間"
        ></MoleculesEntryConfirmItem>

        <!-- 会社名 -->
        <MoleculesEntryConfirmItem
          :text="career.companyName"
          title="会社名"
        ></MoleculesEntryConfirmItem>

        <!-- 部署名 -->
        <MoleculesEntryConfirmItem
          :text="career.department"
          title="部署名"
        ></MoleculesEntryConfirmItem>

        <!-- 取り組み詳細 -->
        <MoleculesEntryConfirmItem
          :text="career.jobDetail"
          title="取り組み詳細"
        ></MoleculesEntryConfirmItem>
      </div>

      <!-- 修正・フォーム送信ボタン -->
      <div
        class="flex flex-col items-center justify-center space-y-4 tb:flex-row tb:space-y-0 tb:space-x-4"
      >
        <!-- 修正ボタン -->
        <button
          @click="editForm"
          class="mb-24 rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
        >
          修正する
        </button>
        <!-- フォーム送信ボタン -->
        <button
          @click="submitForm"
          class="mb-24 rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
        >
          同意の上、入力内容を送信
        </button>
      </div>
    </div>
  </div>
</template>
