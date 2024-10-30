import SettingsHeaderChunk from "@/chunks/settings-template-chunk/settings-header-template-chunk/SettingsHeaderChunk";
import SidebarChunk from "@/chunks/settings-template-chunk/sidebar-template-chunk/SidebarChunk";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ClassProps {
  children: ReactNode;
  className: string;
  title?: string;
}
const layout = ({ children, className }: ClassProps) => {
  const newClassName = twMerge("w-full md:flex", className);
  return (
    <div className={newClassName}>
      <SidebarChunk className="hidden md:flex flex-col md:w-[19%] justify-center items-center gap-10 border-b" />
      <div className="md:w-[81%]">
        <SettingsHeaderChunk title="Help Centre" />

        {children}
      </div>
    </div>
  );
};

export default layout;
