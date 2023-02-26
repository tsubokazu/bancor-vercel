// ヘッダー
export interface CompanyInfoHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// 代表メッセージなどのコンテンツ
export interface CompanyInfoVisionContent {
  title: string;
  imgUrl: string;
  linkUrl: string;
}

// ミッション
export interface CompanyInfoVision {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
  contents: Array<CompanyInfoVisionContent>;
}

// 日本のために
export interface CompanyInfoDefendJapan {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
}

// 事業内容オブジェクト
export interface CompanyInfoObject {
  header: CompanyInfoHeader;
  vision: CompanyInfoVision;
  defendJapan: CompanyInfoDefendJapan;
}
