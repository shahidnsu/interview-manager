export interface Applicant {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  batchName: string;
  appliedDate?: Date;
  status: string;
  githubUserName: String;
}
export interface postApplicant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  batchName: string;
  status?: string;
}
