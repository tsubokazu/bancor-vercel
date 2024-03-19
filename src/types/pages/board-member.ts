interface Link {
  title: string;
  url: string;
}

// メンバー情報
export interface MemberInfo {
  name: string;
  nameEn: string;
  imgUrl: string;
  position: string;
  message: string;
  links: Link[];
}

// メンバー情報リスト
export interface MemberInfoList {
  department: string;
  members: MemberInfo[];
}

// 共通部分
export interface Common {
  positionTitle: string;
  imgUrl: string;
  title: string;
  subTitle: string;
  outline: string;
  linkTitle: string;
  linkUrl: string;
  memberBg: string;
}

export interface BoardMemberObject {
  departments: MemberInfoList[];
  common: Common;
}
