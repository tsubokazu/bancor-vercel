export const usePagesCompanyInfoStore = defineStore('pagesCompanyInfo', () => {
  // 会社案内ページの情報をKurocoから取得
  const vision: any = ref({}); // ビジョン・パーパス
  const infographics: any = ref([]); // インフォグラフィック
  const boardMember: any = ref({}); // 役員・責任者紹介
  const technology: any = ref({}); // 技術力
  const technologyStacks: any = ref([]); // 技術スタック
  const pageLinks: any = ref([]); // ページリンク

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
      const data: any = kuroco.value.list[0];

      // 取得したデータを型に当てはめる
      // ビジョン・パーパス
      vision.value = {
        title: data.vision_title,
        subTitle: data.vision_sub_title,
        outline: data.vision_outline,
        linkTitle: data.vision_link_title,
        linkUrl: data.vision_link_url,
      };

      // インフォグラフィック
      infographics.value = data.infographic_image.map(
        (infographic: any, index: number) => {
          return {
            title: data.infographic_title[index],
            imgUrl: data.infographic_image[index].url,
            value: data.infographic_value[index],
            unit: data.infographic_unit[index],
            description: data.infographic_description[index],
          };
        }
      );

      // 役員・責任者紹介
      boardMember.value = {
        title: data.board_member_title,
        outline: data.board_member_outline,
        imgUrl: data.board_member_image.url,
        logoUrl: data.board_member_logo.url,
        linkTitle: data.board_member_link_title,
        linkUrl: data.board_member_link_url,
      };

      // 技術力
      technology.value = {
        title: data.tech_title,
        outline: data.tech_outline,
      };

      // 技術スタック
      technologyStacks.value = data.tech_image.map(
        (techStack: any, index: number) => {
          return {
            imgUrl: data.tech_image[index].url,
            imgAlt: data.tech_image[index].desc,
          };
        }
      );

      // ページリンク
      pageLinks.value = data.pages_link_title.map(
        (pageLink: any, index: number) => {
          return {
            title: data.pages_link_title[index],
            linkUrl: data.pages_link_url[index],
          };
        }
      );
    }
  };

  return {
    vision,
    infographics,
    boardMember,
    technology,
    technologyStacks,
    pageLinks,
    fetchPagesCompanyInfo,
  };
});
