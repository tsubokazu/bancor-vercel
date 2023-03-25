// ヘッダー
export interface ContactHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// お問い合わせページの左メニュー
export interface LeftMenu {
  title: string;
  imgUrl: string;
  outline: string;
  listTitle: string;
  list: Array<string>;
}

// フォームのお客様の悩み
export interface ConcernList {
  concernList: Array<string>;
}

export interface ContactObject {
  header: ContactHeader;
  leftMenu: LeftMenu;
  concernList: ConcernList;
}
