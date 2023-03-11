import {
  MaterialsObject,
  ServiceOverview,
  UsefulMaterial,
} from '~/types/pages/materials';

export const useMaterialsStore = defineStore('materials', () => {
  // 資料一覧をKurocoから取得
  console.log(`[useMaterialsStore] start`);

  const materials = ref({} as any);
  const header = ref({} as any);
  const serviceOverviewList = ref([] as Array<ServiceOverview>);
  const usefulMaterialList = ref([] as Array<UsefulMaterial>);
  const bancor = ref({} as any);
  const fetchMaterials = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const materialsEndpoint = config.public.kurocoPagesMaterials;

    const { data, error } = (await useFetch(
      `${baseUrl}${materialsEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useMaterialsStore] fetchMaterials error: ${error.value}`);
    } else {
      const materialsData: any = data.value.list.filter(
        (data: any): any => data.topics_id == 75
      )[0];

      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: materialsData.ext_1,
        subTitle: materialsData.ext_2,
        imgUrl: materialsData.ext_3.url,
      };

      // サービス概要
      serviceOverviewList.value = materialsData.ext_4.map(
        (item: any, index: number) => ({
          title: materialsData.ext_4[index],
          imgUrl: materialsData.ext_5[index].url,
          fileUrl: materialsData.ext_6[index].url,
          updateAt: materialsData.ext_7[index],
          fileId: materialsData.ext_6[index].id,
        })
      );

      // お役立ち情報
      usefulMaterialList.value = materialsData.ext_9.map(
        (item: any, index: number) => ({
          title: materialsData.ext_9[index],
          imgUrl: materialsData.ext_10[index].url,
          fileUrl: materialsData.ext_11[index].url,
          updateAt: materialsData.ext_12[index],
          fileId: materialsData.ext_11[index].id,
        })
      );

      // Bancorを初めて知る方へ
      bancor.value = {
        title: materialsData.ext_13,
        outline: materialsData.ext_14,
        linkUrl: materialsData.ext_15,
        bgImgUrl: materialsData.ext_8.url,
        img01Url: materialsData.ext_16.url,
        img02Url: materialsData.ext_17.url,
      };
    }
  };

  return {
    fetchMaterials,
    header,
    serviceOverviewList,
    usefulMaterialList,
    bancor,
  };
});
