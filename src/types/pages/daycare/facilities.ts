// 施設情報
export interface FacilityInformation {
  linkUrl: string;
  imgUrl: string;
  name: string;
  region: string;
  service: string;
}

// 施設情報オブジェクト
export interface FacilitiesObject {
  header: {
    title: string;
    subTitle: string;
  };
  informations: Array<FacilityInformation>;
}