import type { Information } from '~/types/pages/daycare/facilities';

export const useFacilitiesStore = defineStore('daycare-facilities', () => {
  persist: true;

  const header = ref({} as any);
  const categories = ref([] as any);
  const informations = ref([] as any);

  const fetchFacilities = async () => {
    console.log('fetchFacilities: start');

    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: 'FACILITY INFORMATION',
      subTitle: '施設一覧情報',
      imgUrl: '/images/daycare/facilities/header.png',
    };

    // 施設情報
    informations.value = [
      {
        name: '星ノ学園 ユニプレキッズ 北筑校',
        region: '八幡西区北筑',
        service: '児発・放課後等デイサービス',
        postCode: '807-0857',
        address: '福岡県北九州市八幡西区北筑1丁目10-26',
        mapLinkUrl: 'https://goo.gl/maps/zMgFkmZoggwJ8F5S8',
        tel: '093-883-7020',
        fax: '093-883-7022',
        mobileTel: '070-9158-1098',
        timeChildSupport: '9:00～15:00', // 平日：児童発達支援
        timeAfterSchool: '学校終了時～18:00', // 放課後等デイサービス
        timeSaturday: '9:00～16:00', // 春/夏/冬休み/土曜日
        holiday: '日/祝/お盆/正月', // 定休日
        targets: [
          {
            title: '児童発達支援',
            outline:
              '重度心身障がい児を除く、小学校就学前までの「通所による療育等の支援が必要」と認められたお子様',
          },
          {
            title: '放課後等デイサービス',
            outline:
              '重度心身障がい児を除く、就学後（小学生/中学生/高校生）で「放課後等の時間帯における療育等の支援が必要」と認められたお子様',
          },
        ],
        imgUrl: '/images/daycare/facilities/01/00.png',
        gallery: [
          '/images/daycare/facilities/01/01.png',
          '/images/daycare/facilities/01/02.png',
          '/images/daycare/facilities/01/03.png',
          '/images/daycare/facilities/01/04.png',
        ],
        category: '北九州市',
        linkUrl: 'https://www.hoshino-uniplay-kids.com/',
      },
      {
        name: 'ユニプレキッズkids 永犬丸校',
        region: '八幡西区永犬丸',
        service: '児発・放課後等デイサービス',
        postCode: '807-0851',
        address: '福岡県北九州市八幡西区永犬丸4丁目10-11',
        mapLinkUrl: 'https://maps.app.goo.gl/Uq8zUSW4t8nx49m86',
        tel: '093-980-8224',
        fax: '093-980-8225',
        mobileTel: '070-8935-1092',
        timeChildSupport: '10:00～15:00', // 平日：児童発達支援
        timeAfterSchool: '学校終了時～18:00', // 放課後等デイサービス
        timeSaturday: '10:00～16:00', // 春/夏/冬休み/土曜日
        holiday: '日/祝/お盆/正月', // 定休日
        targets: [
          {
            title: '児童発達支援',
            outline:
              '重度心身障がい児を除く、小学校就学前までの「通所による療育等の支援が必要」と認められたお子様',
          },
          {
            title: '放課後等デイサービス',
            outline:
              '重度心身障がい児を除く、就学後（小学生/中学生/高校生）で「放課後等の時間帯における療育等の支援が必要」と認められたお子様',
          },
        ],
        imgUrl: '/images/daycare/facilities/02/00.png',
        gallery: [
          '/images/daycare/facilities/02/01.png',
          '/images/daycare/facilities/02/02.png',
          '/images/daycare/facilities/02/03.png',
          '/images/daycare/facilities/02/04.png',
        ],
        category: '北九州市',
        linkUrl: 'https://www.uniplay-kids-japan.com/',
      },
    ];

    // 地域カテゴリー
    const categoryValues = informations.value.map(
      (information: Information) => {
        return information.category;
      }
    );

    // 地域カテゴリーの重複を削除
    const categorySet = [...new Set(categoryValues)];
    categories.value = categorySet.map((category) => {
      return {
        category: category,
      };
    });

    console.log(`fetchFacilities: header: ${JSON.stringify(header.value)}`);
    console.log(
      `fetchFacilities: categories: ${JSON.stringify(categories.value)}`
    );
    console.log(
      `fetchFacilities: informations: ${JSON.stringify(informations.value)}`
    );

    console.log('fetchFacilities: end');
  };

  return {
    fetchFacilities,
    header,
    categories,
    informations,
  };
});
