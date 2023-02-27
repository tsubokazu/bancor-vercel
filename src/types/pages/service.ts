// ヘッダー
export interface ServiceHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// パーパス
export interface ServicePurpose {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

// 個別事業内容
export interface ServiceEachService {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

// 事業内容
export interface ServiceService {
  title: string;
  subTitle: string;
  eachService: Array<ServiceEachService>;
}

// 強化事業
export interface ServiceEnhancement {
  title: string;
  subTitle: string;
  eachService: Array<ServiceEachService>;
}

// 事業内容オブジェクト
export interface ServiceObject {
  header: ServiceHeader;
  purpose: ServicePurpose;
  service: ServiceService;
  enhancement: ServiceEnhancement;
}
