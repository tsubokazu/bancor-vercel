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
