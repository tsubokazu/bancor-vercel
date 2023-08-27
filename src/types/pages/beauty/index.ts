export interface SliderItem {
  title: string;
  outline: string;
  date: string;
  imgUrl: string;
}

// スライダー
export interface BeautySlider {
  items: Array<SliderItem>;
}

export interface Topic {
  title: string;
  date: string;
  linkUrl: string;
}

// topics
export interface BeautyTopics {
  title: string;
  topics: Array<Topic>;
}

export interface Menu {
  title: string;
  linkUrl: string;
}

// 予約・口コミ
export interface BeautyMenu {
  title: string;
  outline: string;
  menus: Array<Menu>;
}

// 説明(部プラの小顔矯正とは)
export interface BeautyDescription {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
}

// こんなお悩みを解決できます
export interface BeautyProblem {
  title: string;
  imgUrl: string;
}

export interface Feauture {
  title: string;
  outline: string;
  buttonTitle: string;
  linkUrl: string;
  imgUrl: string;
}

// ブプラの3つの特徴
export interface BeautyFeatures {
  title: string;
  outline: string;
  features: Array<Feauture>;
}

export interface Treatment {
  title: string;
  subTitle: string;
  couponTitle: string;
  couponLinkUrl: string;
  imgUrl: string;
}

// 施術メニュー
export interface BeautyTreatment {
  title: string;
  outline: string;
  treatments: Array<Treatment>;
}

export interface Review {
  name: string;
  sex: string;
  age: string;
  review: string;
  totalStar: number;
  atmosphereStar: number;
  hospitalityStar: number;
  techniqueStar: number;
  menuPriceStar: number;
  usedMenu: string;
  usedCoupon: string;
  isPickup: boolean;
}

// お客様の声
export interface BeautyReview {
  title: string;
  outline: string;
  linkUrl: string;
  reviews: Array<Review>;
}

export interface Store {
  name: string;
  imgUrl: string;
  place: string;
  linkUrl: string;
}

// 店舗情報
export interface BeautyStores {
  title: string;
  outline: string;
  stores: Array<Store>;
}

// Before&After
export interface BeautyComparison {
  title: string;
  outline: string;
  before: {
    imgUrl: string;
    title: string;
  };
  after: {
    imgUrl: string;
    title: string;
  };
  outline2: string;
  buttonTitle: string;
  linkUrl: string;
}

// コピー
export interface BeautyCopy {
  copy1: string;
  copy2: string;
  copy3: string;
  buttonTitle: string;
  linkUrl: string;
  imgUrl: string;
}

export interface Step {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
}

// 施術までの流れ
export interface BeautyFlow {
  title: string;
  outline: string;
  steps: Array<Step>;
}

// よくあるご質問
export interface DaycareQuestion {
  title: string;
  subTitle: string;
  linkUrl: string;
}

// 事業内容オブジェクト
export interface BeautyObject {
  slider: BeautySlider;
  topics: BeautyTopics;
  menu: BeautyMenu;
  description: BeautyDescription;
  problem: BeautyProblem;
  features: BeautyFeatures;
  treatment: BeautyTreatment;
  review: BeautyReview;
  stores: BeautyStores;
  comparison: BeautyComparison;
  copy: BeautyCopy;
  flow: BeautyFlow;
  question: DaycareQuestion;
}
