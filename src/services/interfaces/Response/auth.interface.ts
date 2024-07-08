export type IUserResponse = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  location: string;
  countryCode: string;
  phoneNumber: string;
  _id: string;
  __v: number;
};
export type ISignUpResponse = {
  status: string;
  token: string;
  data: {
    user: IUserResponse;
  };
};
