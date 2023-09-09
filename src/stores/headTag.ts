export const useHeadTag = defineStore('headTag', () => {
  // headタグについての情報をKurocoから取得
  const headTag: any = ref([]); // headタグの情報

  const fetchHeadTag = async () => {
    console.log('fetchHeadTag');

    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const headTagEndpoint = config.public.kurocoHeadTag;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${headTagEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[useHeadTag] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 104
      )[0];
      // 取得したデータを型に当てはめる
      headTag.value = {
        title: data.ext_1,
        description: data.ext_2,
      };
    }
  };

  return {
    headTag,
    fetchHeadTag,
  };
});
