import { ReactNode, SelectHTMLAttributes } from "react";

export type SelectInputProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "className"
> & {
  label: string;
  name: string;
  optionsData?: ReactNode;
  placeholder: string;
};

export type SelectCountryProps = {
  name: string;
  code: string;
  dial_code: string;
};
