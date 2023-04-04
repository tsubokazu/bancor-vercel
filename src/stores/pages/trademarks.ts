import {
  TrademarksObject,
  Trademarks,
  Copyrights,
} from '@/types/pages/trademarks';

export const useTrademarksStore = defineStore('Trademarks', () => {
  // Bancorの取り組みについての情報をKurocoから取得
  const trademarks: any = ref({});
  const copyrights: any = ref({});
  const trademarksObject: any = ref({});

  const fetchTrademarks = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const TrademarksEndpoint = config.public.kurocoPagesTrademarks;

    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${TrademarksEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[useTrademarksStore] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      trademarks.value = {
        title: data.ext_3,
        bodyHTML: data.ext_4,
      } as Trademarks;

      copyrights.value = {
        title: data.ext_5,
        bodyHTML: data.ext_6,
      } as Copyrights;

      trademarksObject.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        trademarks: trademarks.value,
        copyrights: copyrights.value,
      } as TrademarksObject;
    }
  };
  return {
    trademarksObject,
    fetchTrademarks,
  };
});
