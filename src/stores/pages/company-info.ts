export const usePagesCompanyInfoStore = defineStore('pagesCompanyInfo', () => {
  // 会社案内ページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const vision: any = ref({}); // ミッション
  const defendJapan: any = ref({}); // 日本のために

  const fetchPagesCompanyInfo = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesCompanyInfoEndpoint = config.public.kurocoPagesCompanyInfo;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${pagesCompanyInfoEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(
        `[usePagesCompanyInfoStore] fetchPages error: ${error.value}`
      );
    } else {
      const headerData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 35
      )[0];
      const visionData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 33
      )[0];
      const defendJapanData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 34
      )[0];

      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: headerData.ext_1,
        subTitle: headerData.ext_2,
        imgUrl: headerData.ext_4.url,
      };

      // ミッション
      vision.value = {
        title: visionData.ext_1,
        subTitle: visionData.ext_2,
        outline: visionData.ext_3,
        imgUrl: visionData.ext_4.url,
        linkUrl: visionData.ext_10,
        contents: [
          {
            title: visionData.ext_5[0],
            imgUrl: visionData.ext_8[0].url,
            linkUrl: visionData.ext_9[0],
          },
          {
            title: visionData.ext_5[1],
            imgUrl: visionData.ext_8[1].url,
            linkUrl: visionData.ext_9[1],
          },
        ],
      };

      // 日本のために
      defendJapan.value = {
        title: defendJapanData.ext_1,
        subTitle: defendJapanData.ext_2,
        outline: defendJapanData.ext_3,
        imgUrl: defendJapanData.ext_4.url,
      };
    }
  };

  return {
    header,
    vision,
    defendJapan,
    fetchPagesCompanyInfo,
  };
});
