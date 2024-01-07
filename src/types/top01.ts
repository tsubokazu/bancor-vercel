export interface TopTitle {
  title: string;
}

export interface SliderContent {
  title: string;
  imgUrl: string;
  iconUrl: string;
  linkUrl: string;
}

export interface AchievementLogo {
  imgUrl: string;
}

export interface AdSpace {
  imgUrl: string;
  linkUrl: string;
}

export interface MnAContent {
  title: string;
  iconUrl: string;
  linkUrl: string;
}

export interface MnAIllust {
  imgUrl: string;
}

export interface BancorService {
  title: string;
  imgUrl: string;
  tag: string;
  outline: string;
  linkUrl: string;
}

export interface Top01 {
  topTitles: Array<TopTitle>;
  sliderContents: Array<SliderContent>;
  achievementLogos: Array<AchievementLogo>;
  adSpaces: Array<AdSpace>;
  MnAContents: Array<MnAContent>;
  MnAIllusts: Array<MnAIllust>;
  bancorServices: Array<BancorService>;
}
