import SettingsHeaderChunk from "@/chunks/settings-template-chunk/settings-header-template-chunk/SettingsHeaderChunk";
import SidebarChunk from "@/chunks/settings-template-chunk/sidebar-template-chunk/SidebarChunk";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ClassProps {
  children: ReactNode;
  className: string;
}
const layout = ({ children, className }: ClassProps) => {
  const newClassName = twMerge("w-full md:flex", className);
  return (
    <div className={newClassName}>
      <SidebarChunk className="hidden md:flex flex-row md:w-[19%]" />
      <div className="w-[81%]">
        <SettingsHeaderChunk />
        {children}
      </div>
    </div>
  );
};

export default layout;
