// ヘッダー
export interface RecruitHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// ミッション(ビジョン)
export interface RecruitVision {
  title: string;
  subTitle: string;
  outline: string;
  imgUrl: string;
  linkUrl: string;
}

export interface Content {
  title: string;
  linkUrl: string;
}

// メニュー（代表メッセージ、会社情報）
export interface RecruitContents {
  title: string;
  contents: Array<Content>;
}

// エントリー
export interface RecruitEntries {
  position: string; // 選択した応募ポジションを格納する
  title: string;
  entries: Array<{
    title: string;
    linkUrl: string;
  }>;
}

export interface Position {
  title: string;
  key: string;
  value: string;
}

export interface Desire {
  title: string;
  details: Array<{
    subTitle: string;
    outline: string;
  }>;
}

export interface Benefit {
  title: string;
  details: Array<{
    subTitle: string;
    outline: string;
  }>;
}

export interface Information {
  title: string;
  details: Array<{
    subTitle: string;
    outline: string;
  }>;
}

// 募集カテゴリ別詳細
export interface RecruitPositionCategory {
  topics_id: number;
  position: Position;
  category: string;
  desires: Desire;
  benefits: Benefit;
  informations: Information;
}

// 採用情報オブジェクト
export interface RecruitObject {
  header: RecruitHeader;
  vision: RecruitVision;
  contents: RecruitContents;
  entries: RecruitEntries;
}

// 採用情報カテゴリ別詳細オブジェクト
export interface RecruitCategoryObject {
  positionCategories: Array<RecruitPositionCategory>;
}
