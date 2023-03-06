export const usePagesCareWelfareStore = defineStore('pagesCareWelfare', () => {
  // 会社案内ページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const issues: any = ref({}); // こんな課題解決します
  const voice: any = ref({}); // お客様の声「使いやすいし、楽になった」
  const features: any = ref({}); // サービスの特徴
  const contactMenus: any = ref({}); // お問い合わせメニュー お問い合わせと資料ダウンロード
  const solutions: any = ref({}); // ソリューションラインナップ

  const fetchPagesCareWelfare = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesCareWelfareEndpoint = config.public.kurocoPagesCareWelfare;

    const { data: kurocoCareWelfare, error: errorCareWelfare } =
      (await useFetch(`${baseUrl}${pagesCareWelfareEndpoint}`)) as any;
    if (!kurocoCareWelfare.value || errorCareWelfare.value) {
      console.error(
        `[usePagesCareWelfareStore] fetchPages error: ${errorCareWelfare.value}`
      );
    } else {
      const headerData: any = kurocoCareWelfare.value.list.filter(
        (data: any): any => data.topics_id == 54
      )[0];
      const issuesData: any = kurocoCareWelfare.value.list.filter(
        (data: any): any => data.topics_id == 55
      )[0];
      const voiceData: any = kurocoCareWelfare.value.list.filter(
        (data: any): any => data.topics_id == 56
      )[0];
      const featuresData: any = kurocoCareWelfare.value.list.filter(
        (data: any): any => data.topics_id == 57
      )[0];
      const contactMenusData: any = kurocoCareWelfare.value.list.filter(
        (data: any): any => data.topics_id == 58
      )[0];

      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: headerData.ext_1,
        subTitle: headerData.ext_2,
        imgUrl: headerData.ext_4.url,
        anchors: headerData.ext_6.map((data: any, index: number) => ({
          title: headerData.ext_6[index],
          linkUrl: headerData.ext_10[index],
        })),
      };

      // こんな課題解決します
      issues.value = {
        title: issuesData.ext_1,
        subTitle: issuesData.ext_2,
        outline: issuesData.ext_3,
        issues: issuesData.ext_6.map((data: any, index: number) => ({
          title: issuesData.ext_6[index],
          subTitle: issuesData.ext_7[index],
          outline: issuesData.ext_8[index],
          imgUrl: issuesData.ext_9[index].url,
        })),
      };

      // お客様の声「使いやすいし、楽になった」
      voice.value = {
        title: voiceData.ext_1,
        subTitle: voiceData.ext_2,
        outline: voiceData.ext_3,
        imgUrl: voiceData.ext_4.url,
        linkUrl: voiceData.ext_5,
      };

      // サービスの特徴
      features.value = {
        title: featuresData.ext_1,
        subTitle: featuresData.ext_2,
        features: featuresData.ext_6.map((data: any, index: number) => ({
          title: featuresData.ext_6[index],
          outline: featuresData.ext_8[index],
          imgUrl: featuresData.ext_9[index].url,
        })),
      };

      // お問い合わせメニュー
      contactMenus.value = {
        contactMenus: contactMenusData.ext_6.map(
          (data: any, index: number) => ({
            title: contactMenusData.ext_6[index],
            imgUrl: contactMenusData.ext_9[index].url,
            linkUrl: contactMenusData.ext_10[index],
          })
        ),
      };
    }
  };

  const fetchPagesSolutions = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;

    //　福祉介護ソリューションラインナップ
    const pagesSolutionsEndpoint = config.public.kurocoPagesSolutions;
    const { data: kurocoSolutions, error: errorSolutions } = (await useFetch(
      `${baseUrl}${pagesSolutionsEndpoint}`
    )) as any;
    if (!kurocoSolutions.value || errorSolutions.value) {
      console.error(
        `[usePagesSolutionsStore] fetchPages error: ${errorSolutions.value}`
      );
    } else {
      const solutionsData: any = kurocoSolutions.value.list.filter(
        (data: any): any => data.topics_id == 59
      )[0];

      // 取得したデータを型に当てはめる

      // 各ソリューション
      // 入居型サービス
      const solution1 = {
        title: solutionsData.ext_4,
        subTitle: solutionsData.ext_5,
        items: solutionsData.ext_6.map((data: any, index: number) => ({
          title: solutionsData.ext_6[index],
          imgUrl: solutionsData.ext_7[index].url,
        })),
      };

      // 通所型サービス
      const solution2 = {
        title: solutionsData.ext_8,
        subTitle: solutionsData.ext_9,
        items: solutionsData.ext_10.map((data: any, index: number) => ({
          title: solutionsData.ext_10[index],
          imgUrl: solutionsData.ext_11[index].url,
        })),
      };

      // 訪問型サービス
      const solution3 = {
        title: solutionsData.ext_12,
        subTitle: solutionsData.ext_13,
        items: solutionsData.ext_14.map((data: any, index: number) => ({
          title: solutionsData.ext_14[index],
          imgUrl: solutionsData.ext_15[index].url,
        })),
      };

      // 包括支援サービス
      const solution4 = {
        title: solutionsData.ext_16,
        subTitle: solutionsData.ext_17,
        items: solutionsData.ext_18.map((data: any, index: number) => ({
          title: solutionsData.ext_18[index],
          imgUrl: solutionsData.ext_19[index].url,
        })),
      };

      // 保育
      const solution5 = {
        title: solutionsData.ext_20,
        subTitle: solutionsData.ext_21,
        items: solutionsData.ext_22.map((data: any, index: number) => ({
          title: solutionsData.ext_22[index],
          imgUrl: solutionsData.ext_23[index].url,
        })),
      };

      // ソリューションラインナップ
      solutions.value = {
        title: solutionsData.ext_1,
        subTitle: solutionsData.ext_2,
        outline: solutionsData.ext_3,
        solutions: [solution1, solution2, solution3, solution4, solution5],
      };
    }
  };

  return {
    header,
    issues,
    voice,
    features,
    contactMenus,
    solutions,
    fetchPagesCareWelfare,
    fetchPagesSolutions,
  };
});
