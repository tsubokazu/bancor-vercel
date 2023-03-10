import { NewsObject } from '~/types/News';

export const useNewsStore = defineStore('news', () => {
  // ニュースルームの記事をKurocoから取得
  const news: any = ref({});
  const newsList = ref([]);
  const notificationList = ref([]);
  const pressReleaseList = ref([]);
  const serviceNewsList = ref([]);

  const fetchNews = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const newsEndpoint = config.public.kurocoNews;
    const { data, error } = (await useFetch(
      `${baseUrl}${newsEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useJournalStore] fetchNews error: ${error.value}`);
    } else {
      news.value = data.value;

      // 取得したデータを型に当てはめる
      newsList.value = news.value.list.map(
        (news: any): NewsObject => ({
          topicsId: news.topics_id,
          category: news.ext_1.key,
          label: news.ext_1.label,
          updateDate: news.update_ymdhi.split('T')[0].replaceAll('-', '.'),
          subject: news.subject,
          eyeCatchUrl: news.ext_2.url,
          bodyHTML: news.ext_3,
          pvCount: news.pv,
          editorId: Number(news.ext_5.key),
        })
      );

      notificationList.value = newsList.value.filter(
        (news: any) => news.category == 'Notification'
      );

      pressReleaseList.value = newsList.value.filter(
        (news: any) => news.category == 'Press release'
      );

      serviceNewsList.value = newsList.value.filter(
        (news: any) => news.category == 'Service News'
      );
    }
  };

  return {
    newsList,
    notificationList,
    pressReleaseList,
    serviceNewsList,
    fetchNews,
    news,
  };
});
