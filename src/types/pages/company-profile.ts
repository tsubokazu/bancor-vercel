// ヘッダー
export interface CompanyProfileHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// 会社概要
export interface CompanyProfile {
  logoUrl: string;
  name: string;
  address: string;
  ceo: string;
  messageTitle: string;
  messageLinkUrl: string;
  establish: string;
  capital: string;
  service: string;
  serviceTitle: string;
  serviceLinkUrl: string;
  employee: string;
  bank: string;
  mapUrl: string;
  mapIconUrl: string;
}

// 会社写真
export interface CompanyPhoto {
  imgUrl: string;
  imgSubTitle: string;
  imgDetail: string;
}

export interface CompanyProfileObject {
  header: CompanyProfileHeader;
  companyProfile: CompanyProfile;
  companyPhotos: CompanyPhoto[];
}
