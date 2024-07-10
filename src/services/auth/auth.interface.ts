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

export type ISignUpDAO = {
  status: string;
  token: string;
  data: {
    user: IUserResponse;
  };
};

export type ISignUpDTO = {
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

export type ILoginDTO = {
  email: string;
  password: string;
};
export type ILoginDAO = {
  status: string;
  token: string;
};
