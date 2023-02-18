import { JournalObject } from '~/types/Journal';
import { NewsObject } from '~/types/News';

export interface TopTopicNotificationList {
  notificationList: Array<NewsObject>;
}

export interface TopNewsCard {
  title: string;
  tag: string;
  thumbnail: string;
  updateAt: string;
}

export interface TopNewsCardList {
  TopNewsCard01: TopNewsCard;
  TopNewsCard02: TopNewsCard;
  TopNewsCard03: TopNewsCard;
  TopNewsCard04: TopNewsCard;
}

export interface TopNewsObject {
  title: string;
  linkUrl: string;
  pressReleaseListTitle: string;
  pressReleaseListLinkUrl: string;
  pressReleaseList: TopNewsCardList;
  serviceNewsListTitle: string;
  serviceNewsListLinkUrl: string;
  serviceNewsList: TopNewsCardList;
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

export interface TopJournalObject {
  title: string;
  journalList: Array<JournalObject>;
}

export interface TopVisionObject {
  title: string;
  linkUrl: string;
  outline: string;
  imageUrl: string;
}
