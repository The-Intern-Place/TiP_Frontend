import { ChangeEvent, useState } from "react";
import { ITextInputProps } from "./TextInput.types";

export const useTextInput = (props: ITextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [outline, setOutline] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e, e.target.value);
  };

  const onIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return {
    outline,
    setOutline,
    isPasswordVisible,
    handleChange,
    onIconClick,
  };
};
