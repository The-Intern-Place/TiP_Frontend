import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  bg?: string;
}
const SettingsContainer = ({ children, className, bg }: ContainerProps) => {
  const newClassName = twMerge(
    `max-w-screen-xl mx-auto py-10 px-4 lg:px-0 ${bg}`,
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default SettingsContainer;
