// お問い合わせヘッダー
export interface ContactHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// 左メニュー
export interface ContactLeftMenu {
  title: string;
  imgUrl: string;
  outline: string;
}

// お問い合わせ項目
export interface ContactItems {
  contactItems: Array<{ label: string; value: string }>;
}

// 施設お問い合わせ項目
export interface FacilityContactItem {
  name: string;
  tel: string;
}

// お問い合わせオブジェクト
export interface ContactObject {
  header: ContactHeader;
  leftMenu: ContactLeftMenu;
  contactItems: ContactItems;
  facilityContactItems: Array<FacilityContactItem>;
}