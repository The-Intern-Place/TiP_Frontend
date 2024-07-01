import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    fit,
    children,
    overrideStyles,
    ...buttonProps
  } = props;
  return (
    <button
      className={`text-sm md:text-base font-bold flex items-center justify-center w-full gap-2 py-3 px-6 h-fit ${
        fit ? "max-w-max" : "w-full"
      } ${
        variant === "primary"
          ? "bg-[#0046BF] text-white"
          : variant === "transparent"
            ? "bg-transparent  text-[#0046BF]"
            : variant === "outlined"
              ? "bg-transparent border-[#DAD2B8] text-blue border"
              : variant === "secondary"
                ? "bg-[#002360] text-white"
                : "bg-[#EEEEEE] text-[#444444]"
      } ${overrideStyles}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
