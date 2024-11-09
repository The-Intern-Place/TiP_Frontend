import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Twprops {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: Twprops) => {
  const newClassName = twMerge("max-w-screen-xl mx-auto", className);
  return <div className={newClassName}>{children}</div>;
};
export default Container;
