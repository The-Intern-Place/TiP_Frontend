import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}
const SettingsContainer = ({ children, className }: ContainerProps) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 px-4 lg:px-0",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default SettingsContainer;
