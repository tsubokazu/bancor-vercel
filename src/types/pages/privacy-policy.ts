export interface PrivacyPolicyItem {
  item: string;
  outline: string;
}

// 個人情報保護方針
export interface PrivacyPolicy {
  title: string;
  contents: Array<PrivacyPolicyItem>;
  date: string;
}

export interface PrivacyPolicyHandlingItem {
  item: string;
  outline: string;
}

// 個人情報の取扱について
export interface PrivacyPolicyHandling {
  title: string;
  outline: string;
  contents: Array<PrivacyPolicyHandlingItem>;
  date: string;
}

// プライバシーポリシー
export interface PrivacyPolicyObject {
  title: string;
  subTitle: string;
  privacyPolicy: PrivacyPolicy;
  privacyPolicyHandling: PrivacyPolicyHandling;
}
