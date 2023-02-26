export const usePagesVisionStore = defineStore('pagesVision', () => {
  // 代表メッセージのページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const purpose: any = ref({}); // パーパス情報
  const mission: any = ref({}); // ミッション情報
  const value: any = ref({}); // バリュー情報

  const fetchPagesVision = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesVisionEndpoint = config.public.kurocoPagesVision;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${pagesVisionEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(
        `[usePagesVisionStore] fetchPagesVision error: ${error.value}`
      );
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        imgUrl: data.ext_3.url,
      };

      // サブパーパス情報
      const subPorposeList = data.ext_7.map((subPorpose: any, index: any) => {
        return {
          subTitle: subPorpose,
          outline: data.ext_8[index],
        };
      });

      // パーパス情報
      purpose.value = {
        title: data.ext_4,
        imgUrl: data.ext_5.url,
        smallTitle: data.ext_6,
        subTitleList: subPorposeList,
      };

      // サブミッション情報
      const subMissionList = data.ext_12.map((subMission: any, index: any) => {
        return {
          subTitle: subMission,
          outline: data.ext_13[index],
        };
      });

      // ミッション情報
      mission.value = {
        title: data.ext_9,
        imgUrl: data.ext_10.url,
        smallTitle: data.ext_11,
        subTitleList: subMissionList,
      };

      // サブバリュー情報
      const subValueList = data.ext_17.map((subValue: any, index: any) => {
        return {
          subTitle: subValue,
          outline: data.ext_18[index],
        };
      });

      // バリュー情報
      value.value = {
        title: data.ext_14,
        imgUrl: data.ext_15.url,
        smallTitle: data.ext_16,
        subTitleList: subValueList,
      };
    }
  };

  return {
    header,
    purpose,
    mission,
    value,
    fetchPagesVision,
  };
});
