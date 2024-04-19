import { ChangeEvent } from "react";
import { TextInputProps } from "./TextInput.types";

export const useTextInput = (props: TextInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   props.onChange({
    field: props.name,
    value: e.target.value
   })
  };
  return {
    handleChange
  }
};
