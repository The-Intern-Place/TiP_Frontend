import React from "react";
import { TextInputProps } from "./TextInput.types";

const TextInput = (props: TextInputProps) => {
  const { name, type, label, iconRight, ...inputProps } = props;
  return (
    <div className="w-full space-y-1">
      <label htmlFor={name} className="text-sm text-[#333333]">
        {label}
      </label>
      <div className="bg-white relative flex rounded-lg h-[60px]">
        <input
          {...inputProps}
          className="bg-white flex-grow h-full px-5 border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-[#575757] placeholder:text-[16px]"
        />

        {iconRight &&
          (type === "password" ? (
            <></>
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
