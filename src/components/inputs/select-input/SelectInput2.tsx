"use client";
import React from "react";
import { ISelectInputProps } from "./SelectInput.types";
import TextInput from "../text-input/TextInput";
import { useSelectInput } from "./useSelectInput";
import { ArrowDown } from "@assets/index";
import Image from "next/image";

const SelectInput2 = (props: ISelectInputProps) => {
  const { setShowOptions, showOptions, ref, handleSelect } =
    useSelectInput(props);

  return (
    <div
      className="relative h-min cursor-pointer w-full"
      onClick={() => setShowOptions(!showOptions)}
    >
      <TextInput
        readOnly
        style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}
        iconRight={
          props.iconRight ?? (
            <Image
              src={ArrowDown}
              alt=""
              className="absolute top-4 right-4 w-6 h-6"
            />
          )
        }
        helperText={props.helperText}
        {...props}
      />
      {showOptions && (
        <ul
          ref={ref}
          className="bg-white absolute right-0 top-full min-w-[200px] w-full shadow-md rounded z-[10] max-h-[200px] overflow-auto p-2"
        >
          {props.options.map((el) => (
            <li
              key={el.id}
              className="text-xs border-b last:border-none py-2.5 px-3 border-[#fafafa] bg-white rounded cursor-pointer hover:bg-gray-50"
              onClick={() => handleSelect(el)}
              value={"000"}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput2;
