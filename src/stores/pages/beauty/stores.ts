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
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA香椎店',
          address: '福岡県福岡市東区香椎駅前２－１５－５０橋口ビル２０１ ',
          tel: '070-7617-1107 ',
          time: '09:30～18:00',
          access: '西鉄香椎駅より徒歩1分　ラーメン屋の上　橋口ビル201',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000537330/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000537330/review/',
          mapUrl: 'https://goo.gl/maps/EuE2hDzTZmGYQc27A',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA福津店',
          address: '福岡県福津市中央６－８－５ ウィンドブレイク２Ｆ',
          tel: '080-9025-9682  ',
          time: '09:30～18:00',
          access: 'ウインドブレイクというピンク色の建物の２階にございます。',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000572589/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000572589/review/',
          mapUrl: 'https://goo.gl/maps/qAzFMNXyqcukV86CA',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA久留米店',
          address: '福岡県久留米市東和町５－２',
          tel: '070-2315-3833',
          time: '09:30～18:00',
          access:
            '黒いビル２階、CAFEvaneさんのお隣です。道沿いの階段からお上がりくださいませ♪',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000564582/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000564582/review/',
          mapUrl: 'https://goo.gl/maps/bbkgXQzEDMJAiXWc6',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA春日店',
          address: '福岡県春日市須玖南３‐１６‐２　２Ｆ ',
          tel: '080-9100-6096',
          time: '10:00～18:00',
          access: '西鉄天神大牟田線井尻駅より徒歩19分',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000638055/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000638055/review/',
          mapUrl: 'https://goo.gl/maps/EqwZF9kVE5xGg3Lx7',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA金池店',
          address: '大分県大分市金池町１－５－７ サンシティ金池１０１',
          tel: '080-9105-0716',
          time: '10:00～18:00',
          access: '大分駅より徒歩3分　大通り沿い',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000620368/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000620368/review/',
          mapUrl: 'https://goo.gl/maps/CfggFD52H5mYPuhi9',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA高城店',
          address: '大分県大分市高城西町３０-１２　高城マナーハウス１０１',
          tel: '080-9399-7964',
          time: '09:30～18:00',
          access: '高城駅南口から徒歩３分　大通り沿い',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000607503/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000607503/review/',
          mapUrl: 'https://goo.gl/maps/TkQC6yrDnvFUNb3y9',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA下関店',
          address: '山口県下関市今浦町５－１２',
          tel: '083-242-0551',
          time: '09:30～18:00',
          access: '下関駅徒歩7分',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000636483/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000636483/review/',
          mapUrl: 'https://goo.gl/maps/34hFxtqZXPLUSsRi7',
          gallery: [
            '/images/beauty/stores/02.png',
            '/images/beauty/stores/03.png',
            '/images/beauty/stores/04.png',
            '/images/beauty/stores/05.png',
          ],
        },
        {
          imgUrl: '/images/beauty/stores/01.png',
          name: 'BUPURA下関店',
          address: '山口県宇部市南小串２丁目２－１０ ハイツふろーら１０２ ',
          tel: '090-3563-9522',
          time: '09:30～18:00',
          access: '宇部新川駅徒歩10分',
          reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000650376/',
          reveiwUrl: 'https://beauty.hotpepper.jp/kr/slnH000650376/review/',
          mapUrl: 'https://goo.gl/maps/WhiL6yFzkpz4QLLM7',
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
