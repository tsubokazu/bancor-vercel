export const useBeautyStoresStore = defineStore('beauty-stores', () => {
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const stores = ref({} as any);

  // 資料一覧をKurocoから取得
  const fetchBeautyStores = async () => {
    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: '店舗詳細情報',
      imgUrl: '/images/beauty/stores/header.png',
    };

    // 店舗情報
    stores.value = {
      stores: [
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA健軍店',
          address:
            '熊本県熊本市東区健軍３丁目３９−１２ KINGDOM BLD 1階 002号室',
          tel: '070-8583-9005',
          time: '10:00～18:00',
          access: '「健軍町駅」徒歩7分',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/review/',
          mapUrl: 'https://goo.gl/maps/ADvJRM5hPymqMEcy8',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
      ],
    };
  };

  return {
    fetchBeautyStores,
    header,
    stores,
  };
});
