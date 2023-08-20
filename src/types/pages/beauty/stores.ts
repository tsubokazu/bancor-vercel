// ヘッダー
export interface BeautyStoresHeader {
  title: string;
  imgUrl: string;
}

export interface Store {
  name: string;
  address: string;
  tel: string;
  time: string;
  access: string;
  reserveUrl: string;
  reveiwUrl: string;
  mapUrl: string;
  gallery: Array<string>;
}

// 店舗情報
export interface BeautyStoresStores {
  stores: Array<Store>;
}

export interface BeautyStoresObject {
  header: BeautyStoresHeader;
  stores: BeautyStoresStores;
}
