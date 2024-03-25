export const useServiceStore = defineStore('service', () => {
  // 事業内容ページの情報をKurocoから取得
  const serviceListForSide: any = ref([]); // サービス一覧（サイドメニュー用）
  const serviceList: any = ref([]); // サービス一覧(本体用)
  const systemDevelopmentService: any = ref({}); // システム開発
  const dxSupportService: any = ref({}); // DX支援事業
  const welfareService: any = ref({}); // 福祉事業
  const dayCareSiService: any = ref({}); // 介護事業者向けSI事業
  const beautyService: any = ref({}); // 美容事業
  const maService: any = ref({}); // M&A事業

  const fetchServiceList = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const serviceListEndpoint = config.public.kurocoServiceList;

    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${serviceListEndpoint}`
    )) as any;

    if (!kuroco.value || error.value) {
      console.error(`[usePagesStore] fetchPages error: ${error.value}`);
    } else {
      // 取得したデータを型に当てはめる
      serviceListForSide.value = kuroco.value.list[0].name.map(
        (item: any, index: number) => {
          return {
            name: kuroco.value.list[0].name[index],
            linkUrl: kuroco.value.list[0].url[index],
            color: kuroco.value.list[0].color[index],
            borderColor: kuroco.value.list[0].border_color[index],
          };
        }
      );
    }
  };

  // サービス一覧（本体）の情報を取得
  // topicId: 146: システム開発, 147: DX支援事業, 148: 福祉事業, 149: 介護事業者向けSI事業, 150: 美容事業, 151: M&A事業
  const fetchServiceDetails = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const serviceDetailsEndpoint = config.public.kurocoServiceDetails;
    const { data, error } = (await useFetch(
      `${baseUrl}${serviceDetailsEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[usePagesStore] fetchPages error: ${error.value}`);
    } else {
      // 取得したデータを型に当てはめる
      const systemDevelopmentData = data.value.list.find(
        (item: any) => item.topics_id === 146
      );
      const dxSupportData = data.value.list.find(
        (item: any) => item.topics_id === 147
      );
      const welfareData = data.value.list.find(
        (item: any) => item.topics_id === 148
      );
      const dayCareSiData = data.value.list.find(
        (item: any) => item.topics_id === 149
      );
      const beautyData = data.value.list.find(
        (item: any) => item.topics_id === 150
      );
      const maData = data.value.list.find(
        (item: any) => item.topics_id === 151
      );
      // システム開発
      systemDevelopmentService.value = {
        name: systemDevelopmentData.subject,
        title: systemDevelopmentData.title,
        subTitle: systemDevelopmentData.sub_title,
        smallTitle: systemDevelopmentData.small_title,
        image: systemDevelopmentData.image.url,
        outlineTitle: systemDevelopmentData.outline_title,
        outlineBody: systemDevelopmentData.outline_body,
        infoIcon: systemDevelopmentData.info_icon.url,
        linkUrl: systemDevelopmentData.service_url,
        helpTitle: systemDevelopmentData.help_title,
        helpIcon: systemDevelopmentData.help_icon.url,
        cardItems: systemDevelopmentData.detail_title.map(
          (item: any, index: number) => {
            return {
              imgUrl: systemDevelopmentData.detail_image[index].url,
              outline: systemDevelopmentData.detail_title[index],
            };
          }
        ),
      };

      // DX支援事業
      dxSupportService.value = {
        name: dxSupportData.subject,
        title: dxSupportData.title,
        subTitle: dxSupportData.sub_title,
        smallTitle: dxSupportData.small_title,
        image: dxSupportData.image.url,
        outlineTitle: dxSupportData.outline_title,
        outlineBody: dxSupportData.outline_body,
        infoIcon: dxSupportData.info_icon.url,
        linkUrl: dxSupportData.service_url,
        helpTitle: dxSupportData.help_title,
        helpIcon: dxSupportData.help_icon.url,
        cardItems: dxSupportData.detail_image.map(
          (item: any, index: number) => {
            return {
              imgUrl: dxSupportData.detail_image[index].url,
              linkUrl: dxSupportData.detail_url[index],
            };
          }
        ),
      };

      // 福祉事業
      welfareService.value = {
        name: welfareData.subject,
        title: welfareData.title,
        subTitle: welfareData.sub_title,
        smallTitle: welfareData.small_title,
        image: welfareData.image.url,
        outlineTitle: welfareData.outline_title,
        outlineBody: welfareData.outline_body,
        infoIcon: welfareData.info_icon.url,
        linkUrl: welfareData.service_url,
        helpTitle: welfareData.help_title,
        helpIcon: welfareData.help_icon.url,
      };

      // 介護事業者向けSI事業
      dayCareSiService.value = {
        name: dayCareSiData.subject,
        title: dayCareSiData.title,
        subTitle: dayCareSiData.sub_title,
        smallTitle: dayCareSiData.small_title,
        image: dayCareSiData.image.url,
        outlineTitle: dayCareSiData.outline_title,
        outlineBody: dayCareSiData.outline_body,
        infoIcon: dayCareSiData.info_icon.url,
        linkUrl: dayCareSiData.service_url,
        helpTitle: dayCareSiData.help_title,
        helpIcon: dayCareSiData.help_icon.url,
        cardItems: dayCareSiData.detail_title.map(
          (item: any, index: number) => {
            return {
              imgUrl: dayCareSiData.detail_image[index].url,
              title: dayCareSiData.detail_title[index],
              outline: dayCareSiData.detail_outline[index],
            };
          }
        ),
      };

      // 美容事業
      beautyService.value = {
        name: beautyData.subject,
        title: beautyData.title,
        subTitle: beautyData.sub_title,
        smallTitle: beautyData.small_title,
        image: beautyData.image.url,
        outlineTitle: beautyData.outline_title,
        outlineBody: beautyData.outline_body,
        infoIcon: beautyData.info_icon.url,
        linkUrl: beautyData.service_url,
        helpTitle: beautyData.help_title,
        helpIcon: beautyData.help_icon.url,
      };

      // M&A事業
      maService.value = {
        name: maData.subject,
        title: maData.title,
        subTitle: maData.sub_title,
        smallTitle: maData.small_title,
        image: maData.image.url,
        outlineTitle: maData.outline_title,
        outlineBody: maData.outline_body,
        infoIcon: maData.info_icon.url,
        linkUrl: maData.service_url,
        helpTitle: maData.help_title,
        helpIcon: maData.help_icon.url,
      };
    }
  };

  return {
    serviceListForSide,
    fetchServiceList,
    systemDevelopmentService,
    dxSupportService,
    welfareService,
    dayCareSiService,
    beautyService,
    maService,
    fetchServiceDetails,
  };
});
