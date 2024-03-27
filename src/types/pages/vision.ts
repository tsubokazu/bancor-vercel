// ヘッダー
export interface VisionHeader {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkTitle: string;
  linkUrl: string;
}

export interface VisionSub {
  subTitle: string;
  outline: string;
}

// ビジョン
export interface Vision {
  title: string;
  imgUrl: string;
  smallTitle: string;
  subTitleList: Array<VisionSub>;
}

export interface VisionObject {
  header: VisionHeader;
  purpose: Vision;
  mission: Vision;
  value: Vision;
}
