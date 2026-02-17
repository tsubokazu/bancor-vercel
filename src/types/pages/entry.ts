// 最終学歴
export interface Education {
  entranceDate: string;
  graduationDate: string;
  educationType: string;
  schoolName: string;
  schoolDepartment: string;
  schoolSubject: string;
  schoolNote: string;
}

// 職歴
export interface Career {
  employmentDate: string;
  retirementDate: string;
  companyName: string;
  department: string;
  jobDetail: string;
}

// エントリフォームオブジェクト
export interface EntryFormObject {
  lastName: string;
  firstName: string;
  nameKana: string;
  birthday: string;
  email: string;
  sex: string;
  zipCode: string;
  address: string;
  tel: string;
  pr: string;
  education: Education;
  careers: Array<Career>;
  files: Array<String>;
}
