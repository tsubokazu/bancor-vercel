import { SiteUsageObject } from '@/types/pages/site-usage';

export const useSiteUsageStore = defineStore('SiteUsage', () => {
  // サイトのご利用についての情報をKurocoから取得
  const siteUsageObject: any = ref({});

  const fetchSiteUsage = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const SiteUsageEndpoint = config.public.kurocoPagesSiteUsage;

    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${SiteUsageEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[useSiteUsageStore] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      siteUsageObject.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        bodyHTML: data.ext_3,
      } as SiteUsageObject;
    }
  };
  return {
    siteUsageObject,
    fetchSiteUsage,
  };
});
