export const usePagesMessageStore = defineStore('pagesMessage', () => {
  // 代表メッセージのページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const message: any = ref({}); // 代表メッセージ情報

  const fetchPagesMessage = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesMessageEndpoint = config.public.kurocoPagesMessage;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${pagesMessageEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(
        `[usePagesMessageStore] fetchPagesMessage error: ${error.value}`
      );
    } else {
      const data: any = kuroco.value.list[0];
      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: data.ext_1,
        subTitle: data.ext_2,
        imgUrl: data.ext_3.url,
      };

      // 代表メッセージ情報
      message.value = {
        imgUrl: data.ext_4.url,
        mainMessage: data.ext_5,
        message: data.ext_6,
      };
    }
  };

  return {
    header,
    message,
    fetchPagesMessage,
  };
});
