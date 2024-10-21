import React, { useState } from "react";
import { CheckboxProps } from "./CustomCheckbox.types";

const CustomCheckbox = ({ label, description }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />

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
