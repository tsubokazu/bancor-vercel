export interface CareWelfareAnchor {
  title: string;
  linkUrl: string;
}

export interface CareWelfareIssue {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
}

// ヘッダー
export interface CareWelfareHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
  anchors: Array<CareWelfareAnchor>;
}

// こんな課題解決します
export interface CareWelfareIssues {
  title: string;
  subTitle: string;
  outline: string;
  issues: Array<CareWelfareIssue>;
}

// お客様の声「使いやすいし、楽になった」
export interface CareWelfareVoice {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

export interface CareWelfareFeature {
  title: string;
  outline: string;
  imgUrl: string;
}

// サービスの特徴
export interface CareWelfareFeatures {
  title: string;
  subTitle: string;
  features: Array<CareWelfareFeature>;
}

export interface ContactMenu {
  title: string;
  imgUrl: string;
  linkUrl: string;
}

// お問い合わせメニュー お問い合わせと資料ダウンロード
export interface CareWelfareContactMenus {
  contactMenus: Array<ContactMenu>;
}

export interface SolutionItem {
  title: string;
  imgUrl: string;
}

export interface Solution {
  title: string;
  subTitle: string;
  items: Array<SolutionItem>;
}

// ソリューションラインナップ
export interface CareWelfareSolutions {
  title: string;
  subTitle: string;
  outline: string;
  solutions: Array<Solution>;
}

export interface CareWelfareObject {
  header: CareWelfareHeader;
  issues: CareWelfareIssues;
  voice: CareWelfareVoice;
  features: CareWelfareFeatures;
  contactMenus: CareWelfareContactMenus;
}

export interface CareWelfareSolutionsObject {
  solutions: CareWelfareSolutions;
}
