import { twMerge } from "tailwind-merge";
import { IFieldHelperTextProps } from "./FieldHelperText.types";

const FieldHelperText = ({
  helperText,
  error,
  // className,
  children,
}: IFieldHelperTextProps) => {
  return helperText || children ? (
    <p
      className={twMerge(
        `text-[16px] font-[400] mt-[2px]`,
        error ? "!text-[#D24444]" : "text-gray-500",
        // className,
      )}
    >
      {helperText}
      {children}
    </p>
  ) : null;
};

export default FieldHelperText;
