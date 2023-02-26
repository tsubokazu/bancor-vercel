export const useAboutMoreStore = defineStore('aboutMore', () => {
  // Bancorの取り組みについての情報をKurocoから取得
  const contents: any = ref([]); // 取り組みコンテンツ
  const aboutMore: any = ref({}); // 取り組みについて

  const fetchAboutMore = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const aboutMoreEndpoint = config.public.kurocoPagesMoreAbourBancor;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${aboutMoreEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[useAboutMoreStore] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      const contentsNum = data.ext_5.length;
      for (let n = 0; n < contentsNum; n++) {
        contents.value.push({
          title: data.ext_5[n],
          subTitle: data.ext_6[n],
          imgUrl: data.ext_8[n].url,
          linkUrl: data.ext_9[n],
        });
      }
      aboutMore.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        contents: contents.value,
      };
    }
  };

  return {
    aboutMore,
    fetchAboutMore,
  };
});
