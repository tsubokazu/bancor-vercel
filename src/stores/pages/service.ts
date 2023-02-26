export const usePagesServiceStore = defineStore('pagesService', () => {
  // 事業内容ページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const purpose: any = ref({}); // パーパス
  const service: any = ref({}); // 事業内容
  const enhancement: any = ref({}); // 強化事業

  const fetchPagesService = async () => {
    console.log('###### fetchPagesService ######');

    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesServiceEndpoint = config.public.kurocoPagesService;
    console.log(`${baseUrl}${pagesServiceEndpoint}`);
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${pagesServiceEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[usePagesStore] fetchPages error: ${error.value}`);
    } else {
      console.log('@@@@ fetchPagesService else @@@@');

      const headerData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 36
      )[0];
      const purposeData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 37
      )[0];
      const serviceData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 38
      )[0];
      const enhancementData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 39
      )[0];

      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: headerData.ext_1,
        subTitle: headerData.ext_2,
        imgUrl: headerData.ext_4.url,
      };

      // パーパス
      purpose.value = {
        title: purposeData.ext_1,
        subTitle: purposeData.ext_2,
        outline: purposeData.ext_3,
        imgUrl: purposeData.ext_4.url,
        linkUrl: purposeData.ext_10,
      };

      // 事業内容
      service.value = {
        title: serviceData.ext_1,
        subTitle: serviceData.ext_2,
        eachService: [
          {
            title: serviceData.ext_5[0],
            subTitle: serviceData.ext_6[0],
            outline: serviceData.ext_7[0],
            imgUrl: serviceData.ext_8[0].url,
            linkUrl: serviceData.ext_9[0],
          },
          {
            title: serviceData.ext_5[1],
            subTitle: serviceData.ext_6[1],
            outline: serviceData.ext_7[1],
            imgUrl: serviceData.ext_8[1].url,
            linkUrl: serviceData.ext_9[1],
          },
        ],
      };

      // 強化事業
      enhancement.value = {
        title: enhancementData.ext_1,
        subTitle: enhancementData.ext_2,
        eachService: [
          {
            title: enhancementData.ext_5[0],
            subTitle: enhancementData.ext_6[0],
            outline: enhancementData.ext_7[0],
            imgUrl: enhancementData.ext_8[0].url,
            linkUrl: enhancementData.ext_9[0],
          },
          {
            title: enhancementData.ext_5[1],
            subTitle: enhancementData.ext_6[1],
            outline: enhancementData.ext_7[1],
            imgUrl: enhancementData.ext_8[1].url,
            linkUrl: enhancementData.ext_9[1],
          },
        ],
      };
      console.log(`header: ${header}`);
      console.log(`purpose: ${purpose}`);
      console.log(`service: ${service}`);
      console.log(`enhancement: ${enhancement}`);
    }
  };

  return {
    header,
    purpose,
    service,
    enhancement,
    fetchPagesService,
  };
});
