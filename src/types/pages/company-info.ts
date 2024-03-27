//
export interface CompanyInfoVision {
  title: string;
  subTitle: string;
  outline: string;
  linkTitle: string;
  linkUrl: string;
}

// インフォグラフィック
export interface CompanyInfoInfographic {
  title: string;
  imgUrl: string;
  value: string;
  unit: string;
  description: string;
}

// 役員・責任者紹介
export interface CompanyInfoBoardMember {
  title: string;
  outline: string;
  imgUrl: string;
  logoUrl: string;
  linkTitle: string;
  linkUrl: string;
}

// 技術力
export interface CompanyInfoTechnology {
  title: string;
  outline: string;
}

// 技術スタック
export interface CompanyInfoTechnologyStack {
  imgUrl: string;
  imgAlt: string;
}

// ページリンク
export interface CompanyInfoPageLink {
  title: string;
  linkUrl: string;
}

// 事業内容オブジェクト
export interface CompanyInfoObject {
  vision: CompanyInfoVision;
  infographics: Array<CompanyInfoInfographic>;
  boardMember: CompanyInfoBoardMember;
  technology: CompanyInfoTechnology;
  technologyStacks: Array<CompanyInfoTechnologyStack>;
  pageLinks: Array<CompanyInfoPageLink>;
}
