export interface SNSObject {
  iconUrl: string;
  linkUrl: string;
}

export interface FooterPageLinkObject {
  title: string;
  linkUrl: string;
}

export interface FooterObject {
  logoUrl: string;
  linkUrl: string;
  snsObjects: Array<SNSObject>;
  pageLinkObjects: Array<FooterPageLinkObject>;
}

export interface FooterContactMenuObject {
  title: string;
  iconUrl: string;
  linkUrl: string;
  outline: string;
  imgUrl: string;
}
