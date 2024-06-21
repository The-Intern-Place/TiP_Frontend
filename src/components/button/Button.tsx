import React from "react";
import { ButtonProps } from "./Button.types";
import { title } from "process";

const Button = (props: ButtonProps) => {
  const { variant = "primary", fit, children, overideStyles, ...buttonProps } = props;
  return (
    <button
      className={`text-sm md:text-base font-bold flex items-center justify-center w-full gap-2 rounded-lg py-3 px-6 ${
        fit ? "max-w-max" : "w-full"
      } ${
        variant === "primary"
          ? "bg-[#0046BF] text-white"
          : variant === "transparent"
          ? 'bg-transparent  text-[#0046BF]'
          : variant === "outlined"
            ? "bg-transparent border border-[#0046BF] text-[#0046BF]"
            : variant === "secondary"
              ? "bg-[#002360] text-white"
              : "bg-[#EEEEEE] text-[#444444]"
      } ${overideStyles}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
