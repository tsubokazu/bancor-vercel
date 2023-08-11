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
}

// お問い合わせ内容の項目
export interface InquiryItemsList {
  inquiryItems: Array<string>;
}

export interface EnqueteObject {
  header: ContactHeader;
  leftMenu: LeftMenu;
  inquiryItems: InquiryItemsList;
}
