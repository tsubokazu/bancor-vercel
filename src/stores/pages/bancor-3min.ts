import { Bancor3minMaterial } from '~/types/pages/bancor-3min';

export const useBancor3minStore = defineStore('bancor-3min', () => {
  // 資料一覧をKurocoから取得

  const title = ref({} as any);
  const icons = ref({} as any);
  const material = ref({} as any);
  const fetchBancor3min = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const bancor3minEndpoint = config.public.kurocoPagesMaterialBancor;

    const { data, error } = (await useFetch(
      `${baseUrl}${bancor3minEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(
        `[useBancor3minStore] fetchBancor3min error: ${error.value}`
      );
    } else {
      const bancor3minData: any = data.value.list[0];

      // 取得したデータを型に当てはめる
      // タイトル
      title.value = {
        title: bancor3minData.ext_1,
        outline: bancor3minData.ext_2,
      };

      // この資料でわかることアイコン
      icons.value = {
        title: bancor3minData.ext_3,
        icons: bancor3minData.ext_4.map((item: any, index: number) => ({
          imgUrl: bancor3minData.ext_4[index].url,
          title: bancor3minData.ext_5[index],
        })),
      };

      // 資料
      material.value = {
        fileUrl: bancor3minData.ext_6,
      };
    }
  };

  return {
    fetchBancor3min,
    title,
    icons,
    material,
  };
});
