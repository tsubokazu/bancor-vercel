export interface BancorNotion {
  title: string;
  imgUrl: string;
  tags: Array<string>;
  linkUrl: string;
}

export interface BancorNote {
  title: string;
  imgUrl: string;
  tags: Array<string>;
  linkUrl: string;
}

export interface BancorYouTube {
  title: string;
  imgUrl: string;
  tags: Array<string>;
  linkUrl: string;
}

export interface BancorMediaLink {
  notionUrl: string;
  noteUrl: string;
  youtubeUrl: string;
}

export interface BancorBusiness {
  title: string;
  imgUrl: string;
  linkUrl: string;
}

export interface Top02 {
  bancorNotionList: Array<BancorNotion>;
  bancorNoteList: Array<BancorNote>;
  bancorYouTubeList: Array<BancorYouTube>;
  bancorMediaLink: BancorMediaLink;
  bancorBusinessList: Array<BancorBusiness>;
}
