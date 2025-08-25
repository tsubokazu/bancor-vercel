import type { ContactObject } from '~/types/pages/contact';

export const useContactStore = defineStore('contact', () => {
  persist: true;
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const leftMenu = ref({} as any);
  const concernList = ref({} as any);

  // 資料一覧をKurocoから取得
  const fetchContact = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const contactEndpoint = config.public.kurocoPagesContact;

    const { data, error } = (await useFetch(
      `${baseUrl}${contactEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useContactStore] fetchContact error: ${error.value}`);
    } else {
      const contactData: any = data.value.list[0];

      // 取得したデータを型に当てはめる
      // ヘッダー
      header.value = {
        title: contactData.ext_1,
        subTitle: contactData.ext_2,
        imgUrl: contactData.ext_3.url,
      };

      // お問い合わせページの左メニュー
      leftMenu.value = {
        title: contactData.ext_4,
        imgUrl: contactData.ext_5.url,
        outline: contactData.ext_6,
        listTitle: contactData.ext_7,
        list: contactData.ext_8,
      };

      // フォームのお客様の悩み
      concernList.value = {
        concernList: contactData.ext_9,
      };
    }
  };

  return {
    fetchContact,
    header,
    leftMenu,
    concernList,
  };
});
