import type { HeadTag } from '~/types/headTag';
export const useBancorHeadTag = defineStore('headTag', () => {
  // headタグについての情報をKurocoから取得
  const headTags: any | HeadTag[] = ref([]); // headタグの情報

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
      headTags.value = data.ext_1.map((title: string, index: number) => ({
        title: title,
        description: data.ext_2[index],
        linkUrl: data.ext_3[index],
      }));
    }
  };

  return {
    headTags,
    fetchHeadTag,
  };
});
