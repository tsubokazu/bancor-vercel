import {
  PrivacyPolicyItem,
  PrivacyPolicyHandlingItem,
  PrivacyPolicy,
  PrivacyPolicyHandling,
  PrivacyPolicyObject,
} from '@/types/pages/privacy-policy';

export const usePrivacyPolicyStore = defineStore('privacyPolicy', () => {
  // Bancorの取り組みについての情報をKurocoから取得
  const privacyPolicy: any = ref({});
  const privacyPolicyHandling: any = ref({});
  const privacyPolicyObject: any = ref({});

  const fetchPrivacyPolicy = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const privacyPolicyEndpoint = config.public.kurocoPagesPrivacyPolicy;

    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${privacyPolicyEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[usePrivacyPolicyStore] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      privacyPolicy.value = {
        title: data.ext_3,
        contents: data.ext_4.map(
          (item: any, index: number) =>
            ({
              item: data.ext_4[index],
              outline: data.ext_5[index],
            } as PrivacyPolicyItem)
        ),
        date: data.ext_6,
      } as PrivacyPolicy;

      privacyPolicyHandling.value = {
        title: data.ext_7,
        outline: data.ext_11,
        contents: data.ext_8.map(
          (item: any, index: number) =>
            ({
              item: data.ext_8[index],
              outline: data.ext_9[index],
            } as PrivacyPolicyHandlingItem)
        ),
        date: data.ext_10,
      } as PrivacyPolicyHandling;

      privacyPolicyObject.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        privacyPolicy: privacyPolicy.value,
        privacyPolicyHandling: privacyPolicyHandling.value,
      } as PrivacyPolicyObject;
    }
  };
  return {
    privacyPolicyObject,
    fetchPrivacyPolicy,
  };
});
