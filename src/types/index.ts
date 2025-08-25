import type { JournalObject } from '~/types/Journal';
import type { NewsObject } from '~/types/News';

export interface TopTopicNotificationList {
  notificationList: Array<NewsObject>;
}

export interface TopPressReleaseList {
  pressReleaseList: Array<NewsObject>;
}
export interface TopServiceNewsList {
  serviceNewsList: Array<NewsObject>;
}

export interface TopNewsObject {
  title: string;
  linkUrl: string;
  pressReleaseListTitle: string;
  pressReleaseListLinkUrl: string;
  pressReleaseList: TopPressReleaseList;
  serviceNewsListTitle: string;
  serviceNewsListLinkUrl: string;
  serviceNewsList: TopServiceNewsList;
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
