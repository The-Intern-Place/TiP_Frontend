"use client";
import React from "react";
import { ITextInputProps } from "./TextInput.types";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useTextInput } from "./useTextInput";
import FieldHelperText from "@/components/field-helper-text/FieldHelperText";

const TextInput = (props: ITextInputProps) => {
  const {
    name,
    type,
    label,
    iconRight,
    iconLeft,
    overrideStyles,
    ...inputProps
  } = props;
  const { handleChange, onIconClick, isPasswordVisible } = useTextInput(props);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)] font-semibold"
      >
        {label}
      </label>
      <div
        className={`bg-white flex relative rounded-lg h-[60px] border-2 ${props.error ? "border-[#D24444]" : "border-[#D6DDEB]"}  ${overrideStyles}`}
      >
        {iconLeft && (
          <div
            className={`my-auto flex pl-3 h-full items-center justify-center text-xs text-gray-500 disabled:bg-gray-100 flex-shrink-0`}
          >
            {iconLeft}
          </div>
        )}
        <input
          {...inputProps}
          onChange={handleChange}
          type={type === "password" && isPasswordVisible ? "text" : type}
          className={`bg-white flex-grow h-full px-4 rounded-lg ${props.error ? "focus:outline-0" : "focus:outline-[#1976D2]"} focus:ring-0 placeholder:text-[#575757] placeholder:text-sm md:placeholder:text-base w-full text-sm md:text-base ${overrideStyles}`}
        />
        {iconRight ||
          (type === "password" ? (
            <button
              type="button"
              aria-label="toggle-password"
              className="text-[#575757] px-4 text-xl"
              onClick={onIconClick}
            >
              {isPasswordVisible ? <BsEyeSlash /> : <BsEye />}
            </button>
          ) : (
            <div
              className={`my-auto flex absolute right-0 px-1.5 h-full items-center justify-center text-xs text-gray-500 disabled:bg-gray-100 flex-shrink-0`}
            >
              {iconRight}
            </div>
          ))}
      </div>
      <FieldHelperText error={props.error} helperText={props.helperText} />
    </div>
  );
};

export default TextInput;
