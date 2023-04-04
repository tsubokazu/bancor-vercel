// 他社商標
export interface Trademarks {
  title: string;
  bodyHTML: string;
}

// 著作権
export interface Copyrights {
  title: string;
  bodyHTML: string;
}

// 他社商標や著作権について
export interface TrademarksObject {
  title: string;
  subTitle: string;
  trademarks: Trademarks;
  copyrights: Copyrights;
}
