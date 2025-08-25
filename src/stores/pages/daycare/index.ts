import type {
  DaycareObject,
  DaycareHeader,
  DaycareTopics,
  DaycareFeatures,
  DaycareStrength,
  DaycarePolicy,
  DaycareEnvironment,
  DaycareGuideline,
  DaycareContact,
  DaycareInfomation,
  DaycareQuestions,
  DaycareFee,
  DaycareMenu,
} from '~/types/pages/daycare';

export const usePagesDaycareStore = defineStore('daycare', () => {
  // 各データのref
  const header: Ref<DaycareHeader> = ref({} as DaycareHeader);
  const topics: Ref<DaycareTopics> = ref({} as DaycareTopics);
  const features: Ref<DaycareFeatures> = ref({} as DaycareFeatures);
  const strength: Ref<DaycareStrength> = ref({} as DaycareStrength);
  const policy: Ref<DaycarePolicy> = ref({} as DaycarePolicy);
  const environment: Ref<DaycareEnvironment> = ref({} as DaycareEnvironment);
  const guideline: Ref<DaycareGuideline> = ref({} as DaycareGuideline);
  const contact: Ref<DaycareContact> = ref({} as DaycareContact);
  const information: Ref<DaycareInfomation> = ref({} as DaycareInfomation);
  const questions: Ref<DaycareQuestions> = ref({} as DaycareQuestions);
  const fee: Ref<DaycareFee> = ref({} as DaycareFee);
  const menu: Ref<DaycareMenu> = ref({} as DaycareMenu);

  // データ取得関数
  const fetchPagesDaycare = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const daycareEndpoint = config.public.kurocoDaycareEndpoint || '';
      
      if (!baseUrl || !daycareEndpoint) {
        console.warn('API configuration is missing for daycare data');
        // デフォルトデータを設定
        header.value = { title: '', subTitle: '', imgUrl: '' };
        topics.value = { title: '', topics: [] };
        features.value = { title: '', features: [] };
        strength.value = { title: '', outline: '', strengths: [] };
        policy.value = { title: '', outline: '', policies: [], staffs: [], imgUrl: '' };
        environment.value = { title: '', outline: '', environmentTitle: '', environmentOutline: '', environments: [], tag: '', linkTitle: '' };
        guideline.value = { title: '', outline: '', imgUrl: '', guideline: { title: '', outline: '', step01: {} as any, step02: {} as any, step03: { subSteps: [] } as any, step04: {} as any, step05: { subSteps: [] } as any }, timeSchedules: [] };
        contact.value = { title: '', outline: '', telOnImgUrl: '', telOffImgUrl: '', tel: '', mailOnImgUrl: '', mailOffImgUrl: '', mail: '' };
        information.value = { title: '', outline: '', name: '', postCode: '', address: '', mapLinkUrl: '', tel: '', companyName: '', timeChildSupport: '', timeAfterSchool: '', timeSaturday: '', holiday: '', targets: [], imgUrl: '' };
        questions.value = { title: '', outline: '', items: [] };
        fee.value = { title: '', outline: '', dayservice: { overview: {} as any, fee: {} as any, remarks: {} as any }, support: { overview: {} as any, fee: {} as any, remarks: {} as any } };
        menu.value = { title: '', outline: '', items: [] };
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${daycareEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[usePagesDaycareStore] fetchPagesDaycare error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const daycareData = data.value;
      
      header.value = daycareData.header || {};
      topics.value = daycareData.topics || {};
      features.value = daycareData.features || {};
      strength.value = daycareData.strength || {};
      policy.value = daycareData.policy || {};
      environment.value = daycareData.environment || {};
      guideline.value = daycareData.guideline || {};
      contact.value = daycareData.contact || {};
      information.value = daycareData.information || {};
      questions.value = daycareData.questions || {};
      fee.value = daycareData.fee || {};
      menu.value = daycareData.menu || {};
    } catch (err) {
      console.error('[usePagesDaycareStore] fetchPagesDaycare error:', err);
    }
  };

  return {
    header,
    topics,
    features,
    strength,
    policy,
    environment,
    guideline,
    contact,
    information,
    questions,
    fee,
    menu,
    fetchPagesDaycare,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePagesDaycareStore, import.meta.hot));
}