import type { RecruitPositionCategory } from '~/types/pages/recruit';

export const usePagesRecruitStore = defineStore('pagesRecruit', () => {
  // 採用情報ページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const vision: any = ref({}); // ミッション
  const contents: any = ref({}); // 代表メッセージ等
  const entries: any = ref({}); // エントリー
  const positionCategories = ref([]); // 採用募集カテゴリ詳細リスト
  const dxPositionCategories = ref([]); // DX支援募集カテゴリ別詳細
  const nuvoPositionCategories = ref([]); // NUVO募集カテゴリ別詳細
  const developmentPositionCategories = ref([]); // システム開発募集カテゴリ別詳細

  const fetchPagesRecruit = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesRecruitEndpoint = config.public.kurocoPagesRecruit;

    const { data: kurocoRecruit, error: errorRecruit } = (await useFetch(
      `${baseUrl}${pagesRecruitEndpoint}`
    )) as any;
    if (!kurocoRecruit.value || errorRecruit.value) {
      console.error(
        `[usePagesRecruitStore] fetchPages error: ${errorRecruit.value}`
      );
    } else {
      const headerData: any = kurocoRecruit.value.list.filter(
        (data: any): any => data.topics_id == 60
      )[0];
      const contentsData: any = kurocoRecruit.value.list.filter(
        (data: any): any => data.topics_id == 61
      )[0];
      const entriesData: any = kurocoRecruit.value.list.filter(
        (data: any): any => data.topics_id == 74
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
        title: headerData.ext_6[0],
        subTitle: headerData.ext_7[0],
        outline: headerData.ext_8[0],
        imgUrl: headerData.ext_9[0].url,
        linkUrl: headerData.ext_10[0],
      };

      // 代表メッセージ等コンテンツ
      contents.value = {
        title: contentsData.ext_1,
        contents: contentsData.ext_6.map((data: any, index: number) => ({
          title: contentsData.ext_6[index],
          linkUrl: contentsData.ext_10[index],
        })),
      };

      // エントリー
      entries.value = {
        position: '',
        title: entriesData.ext_1,
        entries: entriesData.ext_6.map((data: any, index: number) => ({
          title: entriesData.ext_6[index],
          linkUrl: entriesData.ext_10[index],
        })),
      };
    }
  };

  const fetchPagesRecruitCategory = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;

    //　採用情報各種募集カテゴリ詳細
    const pagesRecruitCategoryEndpoint =
      config.public.kurocoPagesRecruitCategory;
    const { data: kurocoRecruitCategory, error: errorRecruitCategory } =
      (await useFetch(`${baseUrl}${pagesRecruitCategoryEndpoint}`)) as any;
    if (!kurocoRecruitCategory.value || errorRecruitCategory.value) {
      console.error(
        `[usePagesRecruitCategoryStore] fetchPages error: ${errorRecruitCategory.value}`
      );
    } else {
      const recruitCategoryDataList: any = kurocoRecruitCategory.value.list;

      // 取得したデータを型に当てはめる
      positionCategories.value = recruitCategoryDataList.map(
        (data: any): RecruitPositionCategory => ({
          topics_id: data.topics_id,
          position: {
            title: data.ext_1,
            key: data.ext_12.key,
            value: data.ext_12.label,
          },
          category: data.ext_2,
          desires: {
            title: data.ext_3,
            details: data.ext_4.map((detail: any, index: number) => ({
              subTitle: data.ext_4[index],
              outline: data.ext_5[index],
            })),
          },
          benefits: {
            title: data.ext_6,
            details: data.ext_7.map((detail: any, index: number) => ({
              subTitle: data.ext_7[index],
              outline: data.ext_8[index],
            })),
          },
          informations: {
            title: data.ext_9,
            details: data.ext_10.map((detail: any, index: number) => ({
              subTitle: data.ext_10[index],
              outline: data.ext_11[index],
            })),
          },
        })
      );

      // idが早い順に並び替える
      positionCategories.value = positionCategories.value.sort(
        (prev: RecruitPositionCategory, next: RecruitPositionCategory) => {
          if (prev.topics_id < next.topics_id) {
            return -1;
          } else if (prev.topics_id > next.topics_id) {
            return 1;
          } else {
            return 0;
          }
        }
      );

      // DX支援採用募集カテゴリ
      dxPositionCategories.value = positionCategories.value.filter(
        (category: any) => category.position.key == 'dx'
      );

      // NUVO支援採用募集カテゴリ
      nuvoPositionCategories.value = positionCategories.value.filter(
        (category: any) => category.position.key == 'nuvo'
      );

      // システム開発採用募集カテゴリ
      developmentPositionCategories.value = positionCategories.value.filter(
        (category: any) => category.position.key == 'development'
      );
    }
  };

  return {
    header,
    vision,
    contents,
    entries,
    positionCategories,
    dxPositionCategories,
    nuvoPositionCategories,
    developmentPositionCategories,
    fetchPagesRecruit,
    fetchPagesRecruitCategory,
  };
});
