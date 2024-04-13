import React, { useState } from "react";
import { SelectInputProps } from "./SelectInput.types";
import TextInput from "../text-input/TextInput";
import { ArrowDown } from "public";
import Image from "next/image";


const SelectInput = (props: SelectInputProps) => {
  const [showOptions, toggleShowOptions] = useState(false);
  return (
    <div
      className="relative h-min cursor-pointer w-full"
      onClick={() => toggleShowOptions(!showOptions)}
    >
      <TextInput
        readOnly
        style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}
        {...props}
      />
      {showOptions && (
        <ul className="bg-white absolute right-0 top-full min-w-[200px] w-full shadow-md rounded z-[10] max-h-[200px] overflow-auto">
          {props.options.map((el) => (
            <li
              key={el.id}
              className="text-xs border-b last:border-none py-2.5 px-3 border-[#fafafa] bg-white rounded cursor-pointer hover:bg-gray-50"
              onClick={() => {}}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
