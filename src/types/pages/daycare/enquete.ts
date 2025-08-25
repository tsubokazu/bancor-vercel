// アンケートヘッダー
export interface EnqueteHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// メッセージ
export interface EnqueteMessage {
  title: string;
  abstract: string;
  message: string;
  imgUrl: string;
}

// 自己評価表サービス
export interface SelfEvaluationService {
  title: string;
}

// 自己評価表
export interface SelfEvaluationForm {
  title: string;
  services: Array<SelfEvaluationService>;
}

// 保護者アンケート表
export interface ParentEnqueteForm {
  title: string;
  services: Array<SelfEvaluationService>;
}

// アンケート項目
export interface EnqueteItem {
  region: string;
  service: string;
  name: string;
  selfEvaluationForm: SelfEvaluationForm;
  parentEnqueteForm: ParentEnqueteForm;
}

// アンケートオブジェクト
export interface EnqueteObject {
  header: EnqueteHeader;
  message: EnqueteMessage;
  enqueteItems: Array<EnqueteItem>;
}
