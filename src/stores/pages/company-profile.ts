export const usePagesCompanyProfileStore = defineStore(
  'pagesCompanyProfile',
  () => {
    // 会社概要ページの情報をKurocoから取得
    const header: any = ref({}); // ヘッダー
    const companyProfile: any = ref({}); // 会社概要情報
    const companyPhotos: any = ref([]); // 会社写真

    const fetchPagesCompanyProfile = async () => {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl;
      const pagesCompanyProfileEndpoint =
        config.public.kurocoPagesCompanyProfile;
      const { data: kuroco, error } = (await useFetch(
        `${baseUrl}${pagesCompanyProfileEndpoint}`
      )) as any;
      if (!kuroco.value || error.value) {
        console.error(
          `[usePagesCompanyProfileStore] fetchPages error: ${error.value}`
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

        // ミッション
        companyProfile.value = {
          logoUrl: data.ext_5.url,
          name: data.ext_6,
          address: data.ext_7,
          ceo: data.ext_8,
          messageTitle: data.ext_9,
          messageLinkUrl: data.ext_10,
          establish: data.ext_11,
          capital: data.ext_12,
          service: data.ext_13,
          serviceTitle: data.ext_14,
          serviceLinkUrl: data.ext_15,
          employee: data.ext_16,
          bank: data.ext_17,
          mapIconUrl: data.ext_18.url,
          mapUrl: data.ext_19,
        };
      }
    };

    const fetchPagesCompanyPhotos = async () => {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl;
      const pagesCompanyPhotosEndpoint = config.public.kurocoCompanyPhotos;
      const { data: kuroco, error } = (await useFetch(
        `${baseUrl}${pagesCompanyPhotosEndpoint}`
      )) as any;
      if (!kuroco.value || error.value) {
        console.error(
          `[usePagesCompanyProfileStore] fetchPages error: ${error.value}`
        );
      } else {
        const data: any = kuroco.value.list[0];
        console.log('data', data);

        // 会社写真
        companyPhotos.value = data.image.map((photo: any, index: number) => ({
          imgUrl: data.image[index].url,
          imgSubTitle: data.sub_title[index],
          imgDetail: data.detail[index],
        }));
      }
    };

    return {
      header,
      companyProfile,
      fetchPagesCompanyProfile,
      companyPhotos,
      fetchPagesCompanyPhotos,
    };
  }
);
