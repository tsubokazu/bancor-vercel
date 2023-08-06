// ヘッダー
export interface DaycareHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

export interface Topic {
  title: string;
  tag: string;
  date: string;
  linkUrl: string;
}

// topics
export interface DaycareTopics {
  title: string;
  topics: Array<Topic>;
}

export interface feature {
  title: string;
  outline: string;
  imgUrl: string;
}

// お子様だけでなく・・・
export interface DaycareFeatures {
  title: string;
  features: Array<feature>;
}

export interface Strength {
  title: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

// 施設のスゴイところ
export interface DaycareStrength {
  title: string;
  outline: string;
  strengths: Array<Strength>;
}

export interface Policy {
  title: string;
  outline: string;
  imgUrl: string;
}

export interface Staffs {
  name: string;
  number: string;
  imgUrl: string;
}

// 教育方針
export interface DaycarePolicy {
  title: string;
  outline: string;
  policies: Array<Policy>;
  staffs: Array<Staffs>;
  imgUrl: string;
}

export interface Environment {
  imgUrl: string;
}

// 園内環境を知る
export interface DaycareEnvironment {
  title: string;
  outline: string;
  environmentTitle: string;
  environmentOutline: string;
  environments: Array<Environment>;
  tag: string;
  linkTitle: string;
}

export interface GuidelineStep1 {
  title: string;
  outline: string;
  imgUrl: string;
  numberImgUrl: string;
  tel: string;
}

export interface GuidelineStep2 {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  numberImgUrl: string;
}

export interface SubStep {
  title: string;
  outline: string;
}

export interface GuidelineStep3 {
  title: string;
  outline: string;
  imgUrl: string;
  numberImgUrl: string;
  subSteps: Array<SubStep>;
}

export interface GuidelineStep4 {
  title: string;
  outline: string;
  imgUrl: string;
  numberImgUrl: string;
}

export interface GuidelineStep5 {
  title: string;
  imgUrl: string;
  numberImgUrl: string;
  subSteps: Array<SubStep>;
}

export interface Guideline {
  title: string;
  outline: string;
  step01: GuidelineStep1;
  step02: GuidelineStep2;
  step03: GuidelineStep3;
  step04: GuidelineStep4;
  step05: GuidelineStep5;
}

export interface TimeEvent {
  time: string;
  title: string;
  outline: string;
}

export interface TimeSchedule {
  title: string;
  events: Array<TimeEvent>;
}

// 星ノ学園ご利用ガイドライン
export interface DaycareGuideline {
  title: string;
  outline: string;
  imgUrl: string;
  guideline: Guideline;
  timeSchedules: Array<TimeSchedule>;
}

// お問い合わせ
export interface DaycareContact {
  title: string;
  outline: string;
  telOnImgUrl: string;
  telOffImgUrl: string;
  tel: string;
  mailOnImgUrl: string;
  mailOffImgUrl: string;
  mail: string;
}

export interface Target {
  title: string;
  outline: string;
}

// 施設情報
export interface DaycareInfomation {
  title: string;
  outline: string;
  name: string;
  postCode: string;
  address: string;
  mapLinkUrl: string;
  tel: string;
  companyName: string;
  timeChildSupport: string;
  timeAfterSchool: string;
  timeSaturday: string;
  holiday: string;
  targets: Array<Target>;
  imgUrl: string;
}

export interface questionItem {
  question: string;
  answer: string;
}

// よくあるご質問
export interface DaycareQuestions {
  title: string;
  outline: string;
  items: Array<questionItem>;
}

export interface DayserviceOverview {
  title: string;
  outline: string;
  imgUrl: string;
  purpose: string;
  purposeOutline: string;
}

export interface Fee {
  title: string;
  fee1: string;
  fee2: string;
  fee3: string;
}

export interface Remarks {
  title: string;
  hours: string;
  holiday: string;
  capacity: string;
  capacityNote: string;
  recreationCost: string;
  requiredItems: string;
}

export interface SupportOverview {
  title: string;
  outline: string;
  imgUrl: string;
  center: string;
  centerOutline: string;
  facility: string;
  facilityOutline: string;
}

export interface Dayservice {
  overview: DayserviceOverview;
  fee: Fee;
  remarks: Remarks;
}

export interface Support {
  overview: SupportOverview;
  fee: Fee;
  remarks: Remarks;
}

// ご利用料金について
export interface DaycareFee {
  title: string;
  outline: string;
  dayservice: Dayservice;
  support: Support;
}

// ご利用料金について
export interface DaycareMenu {
  title: string;
  outline: string;
  items: Array<{ title: string; linkUrl: string }>;
}

// 事業内容オブジェクト
export interface DaycareObject {
  header: DaycareHeader;
  topics: DaycareTopics;
  features: DaycareFeatures;
  strength: DaycareStrength;
  policy: DaycarePolicy;
  environment: DaycareEnvironment;
  guideline: DaycareGuideline;
  contact: DaycareContact;
  information: DaycareInfomation;
  questions: DaycareQuestions;
  fee: DaycareFee;
  menu: DaycareMenu;
}
