export interface Anchor {
  title: string;
  linkUrl: string;
}

// ヘッダー背景
export interface HeaderBg {
  imgUrl: string;
}

// ヘッダー
export interface SystemDevHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
  anchors: Array<Anchor>;
}

export interface Issue {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
}

// こんな課題解決します
export interface SystemDevIssues {
  title: string;
  subTitle: string;
  outline: string;
  issues: Array<Issue>;
}

// DX推進時代の開発手法
export interface SystemDevDX {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

export interface Problem {
  title: string;
  imgUrl: string;
}

// デジタル化推進における課題
export interface SystemDevProblems {
  title: string;
  outline: string;
  problems: Array<Problem>;
}

// 外部パートナーとしてではなくチーム一員
export interface SystemDevTeam {
  title: string;
  outline: string;
  imgUrl: string;
}

// 資料「3分でわかるNUVO」
export interface NuvoIn3mins {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

// 開発支援事例
export interface SystemDevCase {
  title: string;
  mainMessage: string;
  outline: string;
  tags: Array<string>;
  imgUrl: string;
  linkUrl: string;
}

export interface Feature {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

// 開発体制の特徴
export interface SystemDevFeatures {
  title: string;
  subTitle: string;
  features: Array<Feature>;
}

export interface FreeSupportCard {
  title: string;
  outline: string;
  imgUrl: string;
  linkTitle: string;
  linkUrl: string;
}

// 支援開始前の無償サポート
export interface SystemDevFreeSupport {
  title: string;
  subTitle: string;
  outline: string;
  cards: Array<FreeSupportCard>;
}

export interface NuvoContent {
  title: string;
  imgUrl: string;
  outlines: Array<string>;
}

// NUVOのシステム開発
export interface SystemDevNuvoContents {
  title: string;
  subTitle: string;
  outline: string;
  contents: Array<NuvoContent>;
}

// 開発体制
export interface SystemDevStructure {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  img01Url: string;
  img02Url: string;
  imgArrowUrl: string;
}

export interface Maintenance {
  title: string;
  outline: string;
  imgUrl: string;
}

// 保守・運用
export interface SystemDevMaintenances {
  title: string;
  subTitle: string;
  outline: string;
  maintenances: Array<Maintenance>;
}

export interface Question {
  question: string;
  answer: string;
}

// よくあるご質問
export interface SystemDevQuestions {
  title: string;
  subTitle: string;
  outline: string;
  questions: Array<Question>;
}

// お問い合わせ
export interface SystemDevContact {
  title: string;
  subTitle: string;
  outline: string;
  contentTitle: string;
  contentOutline: string;
  contentSubTitle: string;
  contentImgUrl: string;
  contentLink: string;
}

// Value Update
export interface SystemDevValueUpdate {
  title: string;
  imgUrl: string;
  outline: string;
  imgUrls: Array<{ imgUrl: string }>;
}

// 事業内容オブジェクト
export interface SystemDevObject {
  headerBg: HeaderBg;
  header: SystemDevHeader;
  issues: SystemDevIssues;
  dxDev: SystemDevDX;
  problems: SystemDevProblems;
  team: SystemDevTeam;
  freeSupport: SystemDevFreeSupport;
  nuvoContents: SystemDevNuvoContents;
  bancor3min: NuvoIn3mins;
  devCase: SystemDevCase;
  features: SystemDevFeatures;
  structure: SystemDevStructure;
  maintenances: SystemDevMaintenances;
  questions: SystemDevQuestions;
  contact: SystemDevContact;
  valueUpdate: SystemDevValueUpdate;
}
