import type { 
  Top01,
  TopTitle,
  SliderContent,
  AchievementLogo,
  AdSpace,
  MnAContent,
  MnAIllust,
  BancorService
} from '~/types/top01';

export const useTop01Store = defineStore('top01', () => {
  // TOPページ情報をKurocoから取得
  const top01: any = ref({});
  const topTitles = ref<TopTitle[]>([]);
  const sliderContents = ref<SliderContent[]>([]);
  const achievementLogos = ref<AchievementLogo[]>([]);
  const adSpaces = ref<AdSpace[]>([]);
  const MnAContents = ref<MnAContent[]>([]);
  const MnAIllusts = ref<MnAIllust[]>([]);
  const bancorServices = ref<BancorService[]>([]);

  const fetchTop01 = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const top01Endpoint = config.public.kurocoTop01;
    const { data, error } = (await useFetch(
      `${baseUrl}${top01Endpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useTop01Store] fetchTop01 error: ${error.value}`);
    } else {
      top01.value = data.value.details;

      topTitles.value = top01.value.ext_1;

      sliderContents.value = top01.value.ext_2.map(
        (data: any, index: number) => ({
          title: top01.value.ext_2[index],
          imgUrl: top01.value.ext_3[index].url,
          iconUrl: top01.value.ext_4[index].url,
          linkUrl: top01.value.ext_5[index],
        })
      );

      achievementLogos.value = top01.value.ext_6.map(
        (data: any, index: number) => ({
          imgUrl: top01.value.ext_6[index].url,
        })
      );

      adSpaces.value = top01.value.ext_7.map((data: any, index: number) => ({
        imgUrl: top01.value.ext_7[index].url,
        linkUrl: top01.value.ext_8[index],
      }));

      MnAContents.value = top01.value.ext_9.map((data: any, index: number) => ({
        title: top01.value.ext_9[index],
        iconUrl: top01.value.ext_10[index].url,
        linkUrl: top01.value.ext_11[index],
      }));

      MnAIllusts.value = top01.value.ext_12.map((data: any, index: number) => ({
        imgUrl: top01.value.ext_12[index].url,
      }));

      bancorServices.value = top01.value.ext_13.map(
        (data: any, index: number) => ({
          title: top01.value.ext_13[index],
          imgUrl: top01.value.ext_14[index].url,
          tag: top01.value.ext_15[index].label,
          outline: top01.value.ext_16[index],
          linkUrl: top01.value.ext_17[index],
        })
      );
    }
  };

  return {
    topTitles,
    sliderContents,
    achievementLogos,
    adSpaces,
    MnAContents,
    MnAIllusts,
    bancorServices,
    fetchTop01,
  };
});
