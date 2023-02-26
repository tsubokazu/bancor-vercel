// ヘッダー
export interface MessageHeader {
  title: string;
  subTitle: string;
  imgUrl: string;
}

// 会社概要
export interface Message {
  imgUrl: string;
  mainMessage: string;
  message: string;
}

export interface MessageObject {
  header: MessageHeader;
  message: Message;
}
