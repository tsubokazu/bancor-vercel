export const usePagesSystemDevStore = defineStore('pagesSystemDev', () => {
  // 会社案内ページの情報をKurocoから取得
  const headerBg: any = ref({}); // ヘッダー背景
  const header: any = ref({}); // ヘッダー
  const issues: any = ref({}); // こんな課題解決します
  const dxDev: any = ref({}); // DX推進時代の開発手法
  const problems: any = ref({}); // デジタル化推進における課題
  const team: any = ref({}); // 外部パートナーとしてではなくチーム一員
  const bancor3min: any = ref({}); // 資料「3分でわかるNUVO」
  const devCase: any = ref({}); // 開発支援事例
  const features: any = ref({}); // 開発体制の特徴
  const structure: any = ref({}); // 開発体制
  const maintenances: any = ref({}); // 保守・運用
  const valueUpdate: any = ref({}); // Value Update

  const fetchPagesSystemDev = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesSystemDevEndpoint = config.public.kurocoPagesSystemDev;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${pagesSystemDevEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(
        `[usePagesSystemDevStore] fetchPages error: ${error.value}`
      );
    } else {
      const headerBgData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 154
      )[0];
      const headerData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 44
      )[0];
      const issuesData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 45
      )[0];
      const dxDevData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 46
      )[0];
      const problemsData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 47
      )[0];
      const teamData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 48
      )[0];
      const bancor3minData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 49
      )[0];
      const devCaseData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 155
      )[0];
      const featuresData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 50
      )[0];
      const structureData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 51
      )[0];
      const maintenancesData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 52
      )[0];
      const valueUpdateData: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 53
      )[0];

      // 取得したデータを型に当てはめる
      // ヘッダー背景
      headerBg.value = {
        imgUrl: headerBgData.ext_4.url,
      };

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

      // DX推進時代の開発手法
      dxDev.value = {
        title: dxDevData.ext_1,
        subTitle: dxDevData.ext_2,
        outline: dxDevData.ext_3,
        imgUrl: dxDevData.ext_4.url,
        linkUrl: dxDevData.ext_5,
      };

      // デジタル化推進における課題
      problems.value = {
        title: problemsData.ext_1,
        outline: problemsData.ext_3,
        problems: problemsData.ext_6.map((data: any, index: number) => ({
          title: problemsData.ext_6[index],
          imgUrl: problemsData.ext_9[index].url,
        })),
      };

      // 外部パートナーとしてではなくチーム一員
      team.value = {
        title: teamData.ext_1,
        outline: teamData.ext_3,
        imgUrl: teamData.ext_4.url,
      };

      // 資料「3分でわかるNUVO」
      bancor3min.value = {
        title: bancor3minData.ext_1,
        subTitle: bancor3minData.ext_2,
        outline: bancor3minData.ext_3,
        imgUrl: bancor3minData.ext_4.url,
        linkUrl: bancor3minData.ext_5,
      };

      // 開発支援事例
      devCase.value = {
        title: devCaseData.subject,
        mainMessage: devCaseData.ext_1,
        outline: devCaseData.ext_3,
        tags: devCaseData.ext_2.split(','),
        imgUrl: devCaseData.ext_4.url,
        linkUrl: devCaseData.ext_5,
      };

      // 開発体制の特徴
      features.value = {
        title: featuresData.ext_1,
        subTitle: featuresData.ext_2,
        features: featuresData.ext_6.map((data: any, index: number) => ({
          title: featuresData.ext_6[index],
          subTitle: featuresData.ext_7[index],
          outline: featuresData.ext_8[index],
          imgUrl: featuresData.ext_9[index].url,
          linkUrl: featuresData.ext_10[index],
        })),
      };

      // 開発体制
      structure.value = {
        title: structureData.ext_1,
        subTitle: structureData.ext_2,
        outline: structureData.ext_3,
        imgUrl: structureData.ext_4.url,
      };

      // 保守・運用
      maintenances.value = {
        title: maintenancesData.ext_1,
        subTitle: maintenancesData.ext_2,
        outline: maintenancesData.ext_3,
        maintenances: maintenancesData.ext_6.map(
          (data: any, index: number) => ({
            title: maintenancesData.ext_6[index],
            outline: maintenancesData.ext_8[index],
            imgUrl: maintenancesData.ext_9[index].url,
          })
        ),
      };

      // Value Update
      valueUpdate.value = {
        title: valueUpdateData.ext_1,
        outline: valueUpdateData.ext_3,
        imgUrl: structureData.ext_4.url,
        imgUrls: valueUpdateData.ext_9.map((imgUrl: any) => ({
          imgUrl: imgUrl.url,
        })),
      };
    }
  };

  return {
    headerBg,
    header,
    issues,
    dxDev,
    problems,
    team,
    bancor3min,
    devCase,
    features,
    structure,
    maintenances,
    valueUpdate,
    fetchPagesSystemDev,
  };
});
