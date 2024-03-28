import React from 'react'
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
    const {variant = "primary", fit, ...buttonProps} = props
  return (
    <button
      className={`text-base font-bold flex items-center justify-center w-full h-[45px] gap-2 rounded-lg py-5 px-6 ${
        fit ? "max-w-max" : "w-full"
      } ${
        variant === "primary"
          ? "bg-[#0046BF] text-white"
          : variant === "outlined"
          ? "bg-transparent border border-[#0046BF] text-[#0046BF]"
          : variant === "secondary"
          ? "bg-[#002360] text-white"
          : "bg-[#EEEEEE] text-[#444444]"
      }`}
      {...buttonProps}
    />
  )
}

export default Button;
