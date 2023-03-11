// ヘッダー
export interface MaterialsHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// サービス概要
export interface ServiceOverview {
  title: string;
  imgUrl: string;
  fileUrl: string;
  updateAt: string;
  fileId: string;
}

export interface MaterialsServiceOverviewList {
  serviceOverviewList: Array<ServiceOverview>;
}

// お役立ち情報
export interface UsefulMaterial {
  title: string;
  imgUrl: string;
  fileUrl: string;
  updateAt: string;
  fileId: string;
}

export interface MaterialsUsefulMaterialList {
  usefulMaterialList: Array<UsefulMaterial>;
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
