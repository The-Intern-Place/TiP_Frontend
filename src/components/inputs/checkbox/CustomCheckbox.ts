import React from "react";
export type CheckboxProps = {
  label: string;
  description: string;
};

export const [isChecked, setIsChecked] = React.useState<boolean>(false);

export const handleChecked = () => {
  setIsChecked((prev) => !prev);
};
