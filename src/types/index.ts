export interface Notification {
  title: string;
  linkUrl: string;
}

export interface Notifications {
  notification01: Notification;
  notification02: Notification;
  notification03: Notification;
  notification04: Notification;
  notification05: Notification;
}

export interface PressReleaseListCard {
  title: string;
  tag: string;
  thumbnail: string;
  updateAt: string;
}

export interface PressReleaseListCards {
  pressReleaseListCard01: PressReleaseListCard;
  pressReleaseListCard02: PressReleaseListCard;
  pressReleaseListCard03: PressReleaseListCard;
  pressReleaseListCard04: PressReleaseListCard;
}

export interface ServiceNewsListCard {
  title: string;
  tag: string;
  thumbnail: string;
  updateAt: string;
}

export interface ServiceNewsListCards {
  serviceNewsListCard01: ServiceNewsListCard;
  serviceNewsListCard02: ServiceNewsListCard;
  serviceNewsListCard03: ServiceNewsListCard;
  serviceNewsListCard04: ServiceNewsListCard;
}

export interface TopNewsObject {
  title: string;
  linkUrl: string;
  pressReleaseListTitle: string;
  pressReleaseListLinkUrl: string;
  pressReleaseListCards: PressReleaseListCards;
  serviceNewsListTitle: string;
  serviceNewsListLinkUrl: string;
  serviceNewsListCards: ServiceNewsListCards;
}

export interface TopWelfareObject {
  title: string;
  linkUrl: string;
  outline: string;
  image01Url: string;
  image02Url: string;
}

export interface TopServiceObject {
  title: string;
  linkUrl: string;
  outline: string;
  welfareTitle: string;
  welfareLinkUrl: string;
  welfareOutline: string;
  systemTitle: string;
  systemLinkUrl: string;
  systemOutline: string;
  imageDefaultUrl: string;
  imageWelfareUrl: string;
  imageSystemUrl: string;
}

export interface JournalList {
  category: string;
  updateDate: string;
  subject: string;
  eyeCatchUrl: string;
  bodyHTML: string;
  hashTag: Array<string>;
}

export interface TopJournalObject {
  title: string;
  journalList: Array<JournalList>;
}

export interface TopVisionObject {
  title: string;
  linkUrl: string;
  outline: string;
  imageUrl: string;
}

export interface TopRecruitObject {
  title: string;
  subTitle: string;
  linkUrl: string;
  outline: string;
  imageUrl: string;
}
