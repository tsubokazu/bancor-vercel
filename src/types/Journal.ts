export interface JournalObject {
  topicsId: string;
  category: string;
  updateDate: string;
  subject: string;
  eyeCatchUrl: string;
  bodyHTML: string;
  hashTag: Array<string>;
  isPickup: boolean;
  pvCount: number;
  editorId: number;
}
