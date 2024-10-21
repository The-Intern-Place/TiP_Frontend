import React, { useState } from "react";
import { CheckboxProps } from "./CustomCheckbox.types";
import IC_Checkbox from "@assets/icons/IC_Checkbox";

const CustomCheckbox = ({
  label,
  description,
  className,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log("clicked");
  };
  return (
    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 ">
      <label className="relative flex justify-center items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          {...props}
          className="appearance-none flex justify-center items-center h-5 w-5 shrink-0 rounded-sm border border-blue ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        {isChecked && (
          <span className="absolute inset-0 flex justify-center items-center">
            <IC_Checkbox />
          </span>
        )}
      </label>

      <div className="space-y-1 leading-none">
        <span className="text-[#1b1b1b] text-base font-epilogue font-semibold">
          {label}
        </span>
        <p className="text-[#515B6F] text-base font-epilogue">{description}</p>
      </div>
    </div>
  );
};
export default CustomCheckbox;
