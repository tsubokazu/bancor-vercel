import type { JournalObject } from '~/types/Journal';

export interface LinkObject {
  title: string;
  linkUrl: string;
}

export interface PageLinkObject {
  title: string;
  linkUrl: string;
  linkObjects: Array<LinkObject> | {};
}

export interface SiteMapObject {
  title: string;
  pageLinkObjects: Array<PageLinkObject>;
}

export interface ServiceObject {
  title: string;
  logoUrl: string;
  linkUrl: string;
  outline: string;
}

export interface PickupObject {
  title: string;
  newsList: Array<JournalObject>;
}

export interface SiteMenuObject {
  sitemapObject: SiteMapObject;
  serviceObject: ServiceObject;
  pickupObjects: PickupObject;
}
