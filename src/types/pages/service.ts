// 新ページ用　サービス一覧（サイドメニュー用）
export interface ServiceListItem {
  name: string;
  linkUrl: string;
  color: string;
  borderColor: string;
}

// サービス一覧(本体用)
export interface Service {
  name: string;
  title: string;
  subTitle: string;
  smallTitle: string;
  image: string;
  outlineTitle: string;
  outlineBody: string;
  infoIcon: string;
  linkUrl: string;
  helpTitle: string;
  helpIcon: string;
}

// システム開発
interface SystemDevelopmentCardItem {
  imgUrl: string;
  outline: string;
}

export interface SystemDevelopment extends Service {
  cardItems: Array<SystemDevelopmentCardItem>;
}

// DX支援事業
interface DxSupportCardItem {
  imgUrl: string;
  linkUrl: string;
}

export interface DxSupport extends Service {
  cardItems: Array<DxSupportCardItem>;
}

// 介護福祉施設向けSI事業
interface DayCareSiCardItem {
  imgUrl: string;
  title: string;
  outline: string;
}

export interface DayCareSi extends Service {
  cardItems: Array<DayCareSiCardItem>;
}
