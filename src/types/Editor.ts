export interface EditorObject {
  editorId: number;
  iconUrl: string;
  introductory: string;
  nickname: string;
}

export interface EditorList {
  editorList: Array<EditorObject>;
}
