// 取り組みコンテンツ
export interface AboutMoreContent {
  title: string;
  subTitle: string;
  imgUrl: string;
  linkUrl: string;
}

// 取り組み
export interface AboutMore {
  title: string;
  subTitle: string;
  contents: Array<AboutMoreContent>;
}
