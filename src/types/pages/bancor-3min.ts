// ヘッダー
export interface Bancor3minTitle {
  title: string;
  outline: string;
}

// この資料でわかること
export interface Bancor3minIcons {
  title: string;
  icons: Array<{
    title: string;
    imgUrl: string;
  }>;
}

// 3分でわかるBancorサービス資料
export interface Bancor3minMaterial {
  fileUrl: string;
}

// bancor-3min
export interface Bancor3minObject {
  title: Bancor3minTitle;
  icons: Bancor3minIcons;
  material: Bancor3minMaterial;
}
