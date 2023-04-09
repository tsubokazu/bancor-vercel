<script setup lang="ts">
  import FormKitVariants from '@formkit/themes/tailwindcss';
  import { usePagesEntryStore } from '@/stores/pages/entry';
  import { Education, Career } from '~~/src/types/pages/entry';

  // entry storeから取得
  const entryStore = usePagesEntryStore();

  // フォームの設定
  const myForm: any = ref(null);
  const submitForm = () => {
    const formData = myForm.value.node.submit();
    console.log(`formData: ${JSON.stringify(formData)}`);
  };

  // 直近の職歴の数
  const recentHistoryCount = ref(1);

  // 直近の職歴を追加
  const clickAddRecentHistory = () => {
    entryStore.addCareer({
      employmentDate: '',
      retirementDate: '',
      companyName: '',
      department: '',
      jobDetail: '',
    });
    recentHistoryCount.value += 1;
  };

  // 郵便番号中のハイフンを削除
  const removeHyphen = (zipCode: string) => {
    return zipCode.replace(/-/g, '');
  };

  // 郵便番号と住所
  const zipCode = ref(entryStore.entryFormObject.zipCode);
  const address = ref(entryStore.entryFormObject.address);

  // 郵便番号から住所を検索してセット
  async function searchAndSetAddress() {
    address.value = await searchAddressByZipCode(zipCode.value);
  }

  // 郵便番号から住所を検索
  const searchAddressByZipCode = async (zipCode: string): Promise<string> => {
    console.log(`[searchAddressByZipCode] zipCode: ${zipCode}`);

    const { data: addressData, error } = (await useFetch(
      `https://api.zipaddress.net/?zipcode=${removeHyphen(zipCode)}`
    )) as any;

    if (!addressData.value || error.value) {
      console.error(
        `[searchAddressByZipCode] fetchAddress error: ${error.value}`
      );
      return '';
    } else {
      console.log(
        `[searchAddressByZipCode] fullAddress: ${addressData.value.data.fullAddress}`
      );
      console.log(
        `[searchAddressByZipCode] addressData: ${JSON.stringify(
          addressData.value
        )}`
      );

      return addressData.value.data.fullAddress;
    }
  };

  // ファイルアップロードでファイルURLを取得
  const getFileURL = async (file: any) => {
    console.log(`[getFileURL] file: ${JSON.stringify(file)}`);

    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const uploadFileEndpoint = config.public.kurocoUploadFile;
    const uploadFileUrl = `${baseUrl}${uploadFileEndpoint}`;
    const { data, error } = (await useFetch(uploadFileUrl, {
      method: 'POST',
      body: file,
    })) as any;
    console.log(`[getFileURL] data: ${JSON.stringify(data)}`);
    return data.value.url;
  };

  // フォーム入力情報をフォームオブジェクトにセットしてstep2へ
  const submitFormAndGoToStep2 = async (formData: any) => {
    const careersObjectList: Array<Career> = [];
    for (let i = 1; i <= recentHistoryCount.value; i++) {
      careersObjectList.push({
        employmentDate: formData[`employmentDate${i}`],
        retirementDate: formData[`retirementDate${i}`],
        companyName: formData[`companyName${i}`],
        department: formData[`department${i}`],
        jobDetail: formData[`jobDetail${i}`],
      });
    }
    console.log(
      `[submitFormAndGoToStep2] file: ${JSON.stringify(formData.file0)}`
    );

    // ファイルURLを取得
    const file0URL = await getFileURL(formData.file0.file);
    const file1URL = await getFileURL(formData.file1.file);

    entryStore.setEntryFormObject({
      lastName: formData.lastName,
      firstName: formData.firstName,
      nameKana: formData.nameKana,
      birthday: formData.birthday,
      email: formData.email,
      sex: formData.sex,
      zipCode: formData.zipCode,
      address: formData.address,
      tel: formData.tel,
      pr: formData.pr,
      education: {
        entranceDate: formData.entranceDate,
        graduationDate: formData.graduationDate,
        educationType: formData.educationType,
        schoolName: formData.schoolName,
        schoolDepartment: formData.schoolDepartment,
        schoolSubject: formData.schoolSubject,
        schoolNote: formData.schoolNote,
      },
      careers: careersObjectList,
      files: [file0URL, file1URL],
    });

    // recentHistoryCountの数が2以上の場合、2つ目以降の職歴をフォームオブジェクトに追加
    if (recentHistoryCount.value >= 2) {
      for (let i = 2; i <= recentHistoryCount.value; i++) {
        entryStore.addCareer({
          employmentDate: formData[`employmentDate${i}`],
          retirementDate: formData[`retirementDate${i}`],
          companyName: formData[`companyName${i}`],
          department: formData[`department${i}`],
          jobDetail: formData[`jobDetail${i}`],
        });
      }
    }

    console.log(`entryStore: ${JSON.stringify(entryStore)}`);

    // step2へ進む
    entryStore.nextEntryStep();
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
        text="エントリーフォーム"
      ></AtomsBasicTitle>
    </div>

    <!-- フォームボディ -->
    <div
      class="flex w-[95%] flex-col items-center rounded-[10px] bg-white pt-10 pc:max-w-[1100px]"
    >
      <FormKit
        type="form"
        ref="myForm"
        :actions="false"
        locale="ja"
        incomplete-message="未入力の項目があります"
        @submit="submitFormAndGoToStep2"
      >
        <!-- 氏名 -->
        <div class="mb-8 w-[360px] tb:w-[640px] pc:w-[860px]">
          <!-- 姓 -->
          <FormKit
            name="lastName"
            type="text"
            label="氏名"
            placeholder="姓"
            :value="entryStore.entryFormObject.lastName"
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
            name="firstName"
            type="text"
            placeholder="名"
            outer-class="mt-4"
            :value="entryStore.entryFormObject.firstName"
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
            name="nameKana"
            type="text"
            label="氏名（かな）"
            placeholder=""
            :value="entryStore.entryFormObject.nameKana"
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
            name="birthday"
            type="date"
            label="生年月日"
            placeholder="2000/01/01"
            :value="entryStore.entryFormObject.birthday"
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
            :value="entryStore.entryFormObject.email"
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
            name="emailConfirm"
            label="メールアドレスの確認"
            placeholder="xxxx@gmail.com"
            :value="entryStore.entryFormObject.email"
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
            name="sex"
            type="radio"
            label="性別"
            legend="性別"
            :options="['男性', '女性', 'その他']"
            :value="entryStore.entryFormObject.sex"
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
              v-model="zipCode"
              label="郵便番号"
              placeholder="000-0000"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              :value="entryStore.entryFormObject.zipCode"
              validation="required|matches:/^[0-9]{3}-[0-9]{4}$/"
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
              @click="searchAndSetAddress"
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
            v-model="address"
            name="address"
            placeholder="入力してください"
            input-class="h-[38px]"
            inner-class="h-[40px]"
            :value="entryStore.entryFormObject.address"
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
            name="tel"
            input-class="h-[38px]"
            inner-class="h-[40px]"
            placeholder="00-0000-0000"
            :value="entryStore.entryFormObject.tel"
            :validation="[
              ['required'],
              ['matches', /^\d{2,4}-\d{1,4}-\d{1,4}$/],
            ]"
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
            name="pr"
            label="応募理由・自己PR"
            placeholder=""
            help="※400文字以内でご記入ください。"
            input-class="h-[144px]"
            inner-class="h-[146px]"
            :value="entryStore.entryFormObject.pr"
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
              name="entranceDate"
              placeholder="2020/01"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[160px] tb:w-[272px]"
              :value="entryStore.entryFormObject.education.entranceDate"
            >
            </FormKit>
            <div>〜</div>
            <!-- 卒業年月日 -->
            <FormKit
              type="text"
              name="graduationDate"
              placeholder="2022/12"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[160px] tb:w-[272px]"
              :value="entryStore.entryFormObject.education.graduationDate"
            >
            </FormKit>
            <!-- 就学区分 -->
            <FormKit
              type="select"
              name="educationType"
              placeholder="就学区分"
              input-class="h-[38px]"
              inner-class="h-[40px] w-[360px] tb:w-[252px]"
              :value="entryStore.entryFormObject.education.educationType"
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
              name="schoolName"
              placeholder="学校名"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              :value="entryStore.entryFormObject.education.schoolName"
            ></FormKit>
          </div>
          <!-- 学部 -->
          <div class="mb-6">
            <FormKit
              type="text"
              name="schoolDepartment"
              placeholder="学部"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              :value="entryStore.entryFormObject.education.schoolDepartment"
            ></FormKit>
          </div>
          <!-- 学科名・研究室名 -->
          <div class="mb-6">
            <FormKit
              type="text"
              name="schoolSubject"
              placeholder="学科名・研究室名"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              :value="entryStore.entryFormObject.education.schoolSubject"
            ></FormKit>
          </div>
          <!-- 備考 -->
          <div class="mb-6">
            <FormKit
              type="text"
              name="schoolNote"
              placeholder="備考"
              class="mb-6"
              input-class="h-[38px]"
              inner-class="h-[40px]"
              :value="entryStore.entryFormObject.education.schoolNote"
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
              :isRequired="recentHistoryNum == 1 ? true : false"
              class="mb-4"
            >
            </AtomsFormBasicLabel>
            <!-- 就業期間 -->
            <div class="mb-6 flex items-center space-x-4">
              <!-- 入社年月日 -->
              <FormKit
                type="text"
                :name="`employmentDate${recentHistoryNum}`"
                placeholder="2020/01"
                input-class="h-[38px]"
                inner-class="h-[40px] w-[160px] tb:w-[406px]"
                :value="
                  entryStore.entryFormObject.careers[recentHistoryNum - 1]
                    .employmentDate
                "
                :validation="recentHistoryNum == 1 ? 'required' : ''"
                :validationMessages="{
                  required: '入社年月日を入力してください',
                }"
              >
              </FormKit>
              <div>〜</div>
              <!-- 退社年月日 -->
              <FormKit
                type="text"
                :name="`retirementDate${recentHistoryNum}`"
                placeholder="2022/12"
                input-class="h-[38px]"
                inner-class="h-[40px] w-[160px] tb:w-[406px]"
                :value="
                  entryStore.entryFormObject.careers[recentHistoryNum - 1]
                    .retirementDate
                "
                :validation="recentHistoryNum == 1 ? 'required' : ''"
                :validationMessages="{
                  required: '退社年月日を入力してください',
                }"
              >
              </FormKit>
            </div>
            <!-- 会社名 -->
            <div class="mb-6">
              <FormKit
                type="text"
                :name="`companyName${recentHistoryNum}`"
                placeholder="会社名"
                class="mb-6"
                input-class="h-[38px]"
                inner-class="h-[40px]"
                :value="
                  entryStore.entryFormObject.careers[recentHistoryNum - 1]
                    .companyName
                "
                :validation="recentHistoryNum == 1 ? 'required' : ''"
                :validationMessages="{
                  required: '会社名を入力してください',
                }"
              ></FormKit>
            </div>
            <!-- 部署・役職 -->
            <div class="mb-6">
              <FormKit
                type="text"
                :name="`department${recentHistoryNum}`"
                placeholder="部署・役職"
                class="mb-6"
                input-class="h-[38px]"
                inner-class="h-[40px]"
                :value="
                  entryStore.entryFormObject.careers[recentHistoryNum - 1]
                    .department
                "
                :validation="recentHistoryNum == 1 ? 'required' : ''"
                :validationMessages="{
                  required: '部署・役職を入力してください',
                }"
              ></FormKit>
            </div>
            <!-- 取り組み詳細 -->
            <div class="mb-6">
              <FormKit
                type="textarea"
                :name="`jobDetail${recentHistoryNum}`"
                placeholder="取り組み詳細"
                class="mb-6"
                input-class="h-[114px]"
                inner-class="h-[116px]"
                :value="
                  entryStore.entryFormObject.careers[recentHistoryNum - 1]
                    .jobDetail
                "
                :validation="recentHistoryNum == 1 ? 'required' : ''"
                :validationMessages="{
                  required: '取り組み詳細を入力してください',
                }"
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
            <FormKit
              type="file"
              :value="entryStore.entryFormObject.files[0]"
              name="file0"
            >
              <template #fileName="context"> </template>
              <template #noFiles="context"> </template>
            </FormKit>
          </div>
          <div>
            <FormKit
              type="file"
              :value="entryStore.entryFormObject.files[1]"
              name="file1"
            >
              <template #fileName="context"> </template>
              <template #noFiles="context"> </template>
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
        @click="submitForm"
        class="mb-24 rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
      >
        同意の上、入力内容を送信
      </button>
    </div>
  </div>
</template>
