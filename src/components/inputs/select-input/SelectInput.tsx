import React from "react";
import { SelectInputProps } from "./SelectInput.types";
import styles from "@/styles/selectInput.module.css";

const SelectInput = ({
  label,
  name,
  optionsData,
  placeholder,
  overrideStyles,
  ...props
}: SelectInputProps) => {
  const hasBorder = overrideStyles?.includes("border-");
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)] font-semibold"
      >
        {label}
      </label>
      <div
        className={` bg-white flex rounded-lg h-[60px] ${hasBorder ? overrideStyles : `border-2 border-athsSpecial ${overrideStyles}`} mt-1 mb-5 `}
      >
        <select
          {...props}
          name={name}
          className={`text-[#575757] bg-white flex-grow h-full px-4 border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-[#575757] placeholder:text-[16px] w-full text-sm md:text-base ${styles.customSelect}`}
        >
          <option value="" className="text-[#575757]">
            {placeholder}
          </option>
          {optionsData}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
