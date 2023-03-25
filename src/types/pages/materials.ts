// ヘッダー
export interface MaterialsHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// サービス概要、お役立ち情報の共通部分
export interface MaterialObject {
  title: string;
  outline: string;
  imgUrl: string;
  fileUrl: string;
  updateAt: string;
  fileId: string;
}

// サービス概要
export interface MaterialsServiceOverviewList {
  serviceOverviewList: Array<MaterialObject>;
}

// お役立ち情報

export interface MaterialsUsefulMaterialList {
  usefulMaterialList: Array<MaterialObject>;
}

// Bancorを初めて知る方へ
export interface MaterialsBancor {
  title: string;
  outline: string;
  linkUrl: string;
  bgImgUrl: string;
  img01Url: string;
  img02Url: string;
}

export interface MaterialsObject {
  header: MaterialsHeader;
  serviceOverviews: MaterialsServiceOverviewList;
  usefulMaterials: MaterialsUsefulMaterialList;
  bancor: MaterialsBancor;
}
