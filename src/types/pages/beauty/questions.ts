// ヘッダー
export interface BeautyQuestionsHeader {
  title: string;
  imgUrl: string;
}

export interface Question {
  question: string;
  answer: string;
}

// 店舗情報
export interface BeautyQuestionsQuestions {
  questions: Array<Question>;
}

export interface BeautyQuestionsObject {
  header: BeautyQuestionsHeader;
  stores: BeautyQuestionsQuestions;
}
