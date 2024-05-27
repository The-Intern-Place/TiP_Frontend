"use client";
import React, { useState } from "react";
import { TextInputProps } from "./TextInput.types";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useTextInput } from "./useTextInput";

const TextInput = (props: TextInputProps) => {
  const {
    name,
    type,
    label,
    iconRight,
    iconLeft,
    overideStyles,
    ...inputProps
  } = props;
  const { handleChange } = useTextInput(props);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)] font-semibold"
      >
        {label}
      </label>
      <div
        className={`bg-white flex relative rounded-lg h-[60px] border-2 border-athsSpecial ${overideStyles}`}
      >
        {iconLeft && (
          <div
            className={`my-auto flex px-1.5 h-full items-center justify-center text-xs text-gray-500 disabled:bg-gray-100 flex-shrink-0`}
          >
            {iconLeft}
          </div>
        )}
        <input
          {...inputProps}
          onChange={handleChange}
          type={type === "password" && isPasswordVisible ? "text" : type}
          className={`bg-white flex-grow h-full px-4 border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-[#575757] placeholder:text-sm md:placeholder:text-base w-full text-sm md:text-base ${overideStyles}`}
        />

        {iconRight &&
          (type === "password" ? (
            <button
              type="button"
              aria-label="toggle-password"
              className="text-[#575757] px-4 text-xl"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
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
    </div>
  );
};

export default TextInput;
