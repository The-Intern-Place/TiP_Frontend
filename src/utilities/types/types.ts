export interface ISignUpData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  location: string;
  countryCode: string;
  phoneNumber: string;
}
