import { EntryFormObject, Career } from '~/types/pages/entry';

export const usePagesEntryStore = defineStore('pagesEntry', () => {
  // 採用エントリーページのSTEP
  const entryStep = ref(0);

  // 採用情報ページの情報をフォーム情報
  const entryFormObject: Ref<EntryFormObject> = ref({
    lastName: '',
    firstName: '',
    nameKana: '',
    birthday: '',
    email: '',
    sex: '',
    zipCode: '',
    address: '',
    tel: '',
    pr: '',
    education: {
      entranceDate: '',
      graduationDate: '',
      educationType: '',
      schoolName: '',
      schoolDepartment: '',
      schoolSubject: '',
      schoolNote: '',
    },
    careers: [
      {
        employmentDate: '',
        retirementDate: '',
        companyName: '',
        department: '',
        jobDetail: '',
      },
    ],
    files: [''],
  }); // フォームから取得したデータを格納する

  // フォームから取得したデータを格納する
  const setEntryFormObject = (data: EntryFormObject) => {
    console.log(`setEntryFormObject: ${JSON.stringify(data)}`);

    entryFormObject.value = data;
  };

  // エントリーステップを進める(全3ステップ)
  const nextEntryStep = () => {
    console.log(`entryStep(now): ${entryStep.value}`);

    if (entryStep.value < 2) {
      entryStep.value++;
    }
  };

  // エントリーステップを戻す(全3ステップ)
  const prevEntryStep = () => {
    console.log(`entryStep(now): ${entryStep.value}`);
    if (entryStep.value > 0) {
      entryStep.value--;
    }
  };

  // 職歴を追加する
  const addCareer = (career: Career) => {
    entryFormObject.value.careers.push(career);
  };

  return {
    entryFormObject,
    setEntryFormObject,
    entryStep,
    nextEntryStep,
    prevEntryStep,
    addCareer,
  };
});
