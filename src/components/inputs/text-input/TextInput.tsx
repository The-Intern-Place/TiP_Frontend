"use client";
import React, { useState } from "react";
import { TextInputProps } from "./TextInput.types";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const TextInput = (props: TextInputProps) => {
  const { name, type, label, iconRight, ...inputProps } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)]"
      >
        {label}
      </label>
      <div className="bg-white flex rounded-lg h-[60px] border-2 border-athsSpecial mt-1 mb-5">
        <input
          {...inputProps}
          type={type === "password" && isPasswordVisible ? "text" : type}
          className="bg-white flex-grow h-full px-4 border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-[#575757] placeholder:text-sm md:placeholder:text-base w-full text-sm md:text-base"
        />

        {iconRight &&
          (type === "password" ? (
            <button
              type="button"
              aria-label="toggle-password"
              className="text-[#575757] px-4"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          ) : (
            <div
              className={`my-auto flex px-1.5 h-full items-center justify-center text-xs text-gray-500 disabled:bg-gray-100 flex-shrink-0`}
            >
              {iconRight}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TextInput;
