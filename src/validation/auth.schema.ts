import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";

export const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .test({
      test: (values) => validator.isEmail(values as string),
      message() {
        return `Invalid email`;
      },
    }),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 8 character long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one special character",
    ),
  code: yup.string().required("Country code is required"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .test({
      test: (values) => validator.isMobilePhone(values as string),
      message() {
        return `Invalid phone number`;
      },
    }),
});
export const signUpResolver = yupResolver(signUpSchema);
