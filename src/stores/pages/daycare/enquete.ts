import { EnqueteObject } from '~/types/pages/daycare/enquete';

export const useEnqueteStore = defineStore('daycare-enquete', () => {
  persist: true;
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const leftMenu = ref({} as any);
  const inquiryItems = ref({} as any);

  // 資料一覧をKurocoから取得
  const fetchEnquete = async () => {
    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: 'Enquete',
      subTitle: 'アンケート',
      imgUrl: '/images/daycare/enquete/header.png',
    };

    // お問い合わせページの左メニュー
    leftMenu.value = {
      title: 'お問合せフォームはこちら',
      imgUrl: '/images/daycare/enquete/enquete.png',
      outline:
        'この度は当事業所のホームページをご覧いただき、ありがとうございます。\r\n星ノ学園では、皆様からのご意見・ご質問を随時受け付けております。\r\nぜひ、お気軽に下記フォーム、またはお電話(092-883-7020)にてお問い合わせください。',
    };

    // フォームのお客様の悩み
    inquiryItems.value = {
      inquiryItems: [
        'ご見学・お申し込みについて',
        '児童発達支援について',
        '放課後デイサービスについて',
        '求人について',
        'その他',
      ],
    };
  };

  return {
    fetchEnquete,
    header,
    leftMenu,
    inquiryItems,
  };
});
