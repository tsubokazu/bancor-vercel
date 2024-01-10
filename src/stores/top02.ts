import { Top02, BancorMediaLink } from '~/types/top02';

export const useTop02Store = defineStore('top02', () => {
  // TOPページ情報をKurocoから取得
  const top02: any = ref({});
  const bancorNotionList = ref([]);
  const bancorNoteList = ref([]);
  const bancorYouTubeList = ref([]);
  const bancorMediaLink: Ref<BancorMediaLink> = ref({
    notionUrl: '',
    noteUrl: '',
    youtubeUrl: '',
  });
  const bancorBusinessList = ref([]);

  const fetchTop02 = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const top02Endpoint = config.public.kurocoTop02;
    const response = await useFetch(`${baseUrl}${top02Endpoint}`);

    console.log(`Response: ${JSON.stringify(response)}`);

    const { data, error } = response as any;
    console.log(`Data: ${JSON.stringify(data)}`);
    console.log(`Error: ${JSON.stringify(error)}`);

    if (!data.value || error.value) {
      console.error(`[useTop02Store] fetchTop02 error: ${error.value}`);
    } else {
      top02.value = data.value.details;
      console.log(`fetchTop02:`);

      bancorNotionList.value = top02.value.ext_1.map(
        (data: any, index: number) => ({
          title: top02.value.ext_1[index],
          imgUrl: top02.value.ext_2[index]?.url || '',
          tags: top02.value.ext_3[index]
            .split('#')
            .map((tag: string) => tag.replace(' ', ''))
            .filter((tag: string) => tag !== ''),
          linkUrl: top02.value.ext_4[index],
        })
      );

      bancorNoteList.value = top02.value.ext_5.map(
        (data: any, index: number) => ({
          title: top02.value.ext_5[index],
          imgUrl: top02.value.ext_6[index]?.url || '',
          tags: top02.value.ext_7[index]
            .split('#')
            .map((tag: string) => tag.replace(' ', ''))
            .filter((tag: string) => tag !== ''),
          linkUrl: top02.value.ext_8[index],
        })
      );

      bancorYouTubeList.value = top02.value.ext_9.map(
        (data: any, index: number) => ({
          title: top02.value.ext_9[index],
          imgUrl: top02.value.ext_10[index]?.url || '',
          tags: top02.value.ext_11[index]
            .split('#')
            .map((tag: string) => tag.replace(' ', ''))
            .filter((tag: string) => tag !== ''),
          linkUrl: top02.value.ext_12[index],
        })
      );

      bancorMediaLink.value = {
        notionUrl: top02.value.ext_13,
        noteUrl: top02.value.ext_14,
        youtubeUrl: top02.value.ext_15,
      };

      bancorBusinessList.value = top02.value.ext_16.map(
        (data: any, index: number) => ({
          title: top02.value.ext_16[index],
          imgUrl: top02.value.ext_17[index]?.url || '',
          linkUrl: top02.value.ext_18[index],
        })
      );

      console.log(`bancorBusinessList: ${bancorBusinessList.value}`);
    }
  };

  return {
    bancorNotionList,
    bancorNoteList,
    bancorYouTubeList,
    bancorMediaLink,
    bancorBusinessList,
    fetchTop02,
  };
});
