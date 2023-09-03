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
          //mapUrl: 'https://goo.gl/maps/ADvJRM5hPymqMEcy8',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%26%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3+BUPURA%E5%81%A5%E8%BB%8D%E5%BA%97%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@32.7824925,130.7600127,17z/data=!4m6!3m5!1s0x3540f33276c27177:0x3b72aec7c86c1896!8m2!3d32.782912!4d130.7606028!16s%2Fg%2F11s_zn6qjb?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/EuE2hDzTZmGYQc27A',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA+%E9%A6%99%E6%A4%8E%E5%BA%97+%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.6591071,130.4372654,17z/data=!3m2!4b1!5s0x3540328713c3f181:0xc4cc7172faec91ee!4m6!3m5!1s0x35418fb1bff79285:0xe45ba0952028ee61!8m2!3d33.6591071!4d130.4398403!16s%2Fg%2F11q2hj9l17?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/qAzFMNXyqcukV86CA',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%26%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91%E7%A6%8F%E6%B4%A5%E5%BA%97/@33.7637904,130.4779349,17z/data=!3m1!5s0x35422864d7012ccd:0x6504c0ae9201deb5!4m7!3m6!1s0x35422982f15a90d3:0xa0c423c33ab8e057!8m2!3d33.7637904!4d130.4826985!15sCjzmnKzmoLznl6nouqsm5bCP6aGU44K144Ot44OzQlVQVVJBIOemj-a0peW6lyDjgJDjg5bjg5fjg6njgJGSAQxiZWF1dHlfc2Fsb27gAQA!16s%2Fg%2F11t3cw7m_l?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/bbkgXQzEDMJAiXWc6',
          mapUrl:
            'https://www.google.com/maps/place/BUPURA%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.5377538,130.3383112,11z/data=!3m1!5s0x3541a44e2d58de79:0xab11ea3b124a1d6a!4m7!3m6!1s0x3541a50f78520441:0x60f90132de8aa03b!8m2!3d33.3119355!4d130.5235413!15sChNCVVBVUkEg5LmF55WZ57Gz5bqXkgEMYmVhdXR5X3NhbG9u4AEA!16s%2Fg%2F11rdlrnvh_?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/EqwZF9kVE5xGg3Lx7',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA%E6%98%A5%E6%97%A5%E5%BA%97%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.540307,130.1386929,11z/data=!4m7!3m6!1s0x354191b5a71fbda3:0x956012d9d4def84b!8m2!3d33.540307!4d130.4435635!15sCjvmnKzmoLznl6nouqsm5bCP6aGU44K144Ot44OzQlVQVVJBIOaYpeaXpeW6l-OAkOODluODl-ODqeOAkZIBDGJlYXV0eV9zYWxvbuABAA!16s%2Fg%2F11kb875lt5?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/CfggFD52H5mYPuhi9',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91%E9%87%91%E6%B1%A0%E5%BA%97/@33.5915918,130.3538925,9z/data=!4m7!3m6!1s0x35469f13dc024e4b:0xc3c309a25d44d2dc!8m2!3d33.2330547!4d131.6097232!15sCinmnKzmoLznl6nouqsm5bCP6aGU44K144Ot44OzQlVQVVJBIOmHkeaxoJIBDGJlYXV0eV9zYWxvbuABAA!16s%2Fg%2F11tf6t9lhh?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/TkQC6yrDnvFUNb3y9',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3+BUPURA%E9%AB%98%E5%9F%8E%E5%BA%97%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.2415652,131.6522094,17z/data=!3m1!4b1!4m6!3m5!1s0x35469fcdc04c91ab:0xc6304f36aa7d3a2!8m2!3d33.2415652!4d131.6547843!16s%2Fg%2F11s5rwlym5?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/34hFxtqZXPLUSsRi7',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA%E4%B8%8B%E9%96%A2%E5%BA%97%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.9542605,130.8451241,13z/data=!4m7!3m6!1s0x3543bd8c5ade0f4f:0xaf10379e2492036d!8m2!3d33.9542605!4d130.9213418!15sCjzmnKzmoLznl6nouqsm5bCP6aGU44K144Ot44OzQlVQVVJBIOS4i-mWouW6lyDjgJDjg5bjg5fjg6njgJGSAQxiZWF1dHlfc2Fsb27gAQA!16s%2Fg%2F11sjdxlb5w?hl=ja&entry=tts&shorturl=1',
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
          // mapUrl: 'https://goo.gl/maps/WhiL6yFzkpz4QLLM7',
          mapUrl:
            'https://www.google.com/maps/place/%E6%9C%AC%E6%A0%BC%E7%97%A9%E8%BA%AB%EF%BC%86%E5%B0%8F%E9%A1%94%E3%82%B5%E3%83%AD%E3%83%B3BUPURA%E5%AE%87%E9%83%A8%E5%BA%97%E3%80%90%E3%83%96%E3%83%97%E3%83%A9%E3%80%91/@33.9538143,130.5566791,10z/data=!4m7!3m6!1s0x3543810043047789:0x2d7ace4cdf34843a!8m2!3d33.960622!4d131.2476524!15sCjzmnKzmoLznl6nouqsm5bCP6aGU44K144Ot44OzQlVQVVJBIOWuh-mDqOW6lyDjgJDjg5bjg5fjg6njgJGSAQxiZWF1dHlfc2Fsb27gAQA!16s%2Fg%2F11sv6hkr3g?hl=ja&entry=tts&shorturl=1',
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
