import type { MaterialObject } from '~/types/pages/materials';

export const useMaterialsStore = defineStore('materials', () => {
  persist: true;
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const serviceOverviewList = ref([] as Array<MaterialObject>);
  const usefulMaterialList = ref([] as Array<MaterialObject>);
  const bancor = ref({} as any);

  // 送信済みフラグ
  const formSentFlag = ref(false);

  // 送信済みフラグをセット
  const setFormSentFlag = (flag: boolean) => {
    formSentFlag.value = flag;
  };

  // 送信済みフラグを取得
  const getFormSentFlag = () => {
    return formSentFlag.value;
  };

  // 資料一覧をKurocoから取得
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

  // サービス概要取得
  const fetchServiceOverviewList = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const serviceOverviewEndpoint = config.public.kurocoPagesMaterialsService;

    // サービス概要
    const { data: serviceOverviewData, error: serviceOverviewError } =
      (await useFetch(`${baseUrl}${serviceOverviewEndpoint}`)) as any;
    if (!serviceOverviewData.value || serviceOverviewError.value) {
      console.error(
        `[useMaterialsStore] fetchMaterials error: ${serviceOverviewError.value}`
      );
    } else {
      // サービス概要
      serviceOverviewList.value = serviceOverviewData.value.list.map(
        (item: any): MaterialObject => ({
          title: item.ext_1,
          outline: item.ext_2,
          imgUrl: item.ext_3.url,
          fileUrl: item.ext_4.url,
          updateAt: item.ext_5,
          fileId: item.topics_id,
        })
      );
    }
  };

  // お役立ち情報取得
  const fetchUsefulMaterialList = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const usefulMaterialEndpoint = config.public.kurocoPagesMaterialsUseful;

    // お役立ち情報
    const { data: usefulMaterialData, error: usefulMaterialError } =
      (await useFetch(`${baseUrl}${usefulMaterialEndpoint}`)) as any;
    if (!usefulMaterialData.value || usefulMaterialError.value) {
      console.error(
        `[useMaterialsStore] fetchMaterials error: ${usefulMaterialError.value}`
      );
    } else {
      // お役立ち情報
      usefulMaterialList.value = usefulMaterialData.value.list.map(
        (item: any): MaterialObject => ({
          title: item.ext_1,
          outline: item.ext_2,
          imgUrl: item.ext_3.url,
          fileUrl: item.ext_4.url,
          updateAt: item.ext_5,
          fileId: item.topics_id,
        })
      );
    }
  };

  return {
    fetchMaterials,
    fetchServiceOverviewList,
    fetchUsefulMaterialList,
    header,
    serviceOverviewList,
    usefulMaterialList,
    bancor,
    setFormSentFlag,
    getFormSentFlag,
  };
});
