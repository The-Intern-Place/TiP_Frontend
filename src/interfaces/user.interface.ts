export type IUser = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  location: string;
  countryCode: string;
  phoneNumber: string;
  exp?: number;
};
export type ISignUpInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  code: string;
};
