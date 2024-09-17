import SettingsHeaderChunk from "@/chunks/settings-template-chunk/settings-header-template-chunk/SettingsHeaderChunk";
import SidebarChunk from "@/chunks/settings-template-chunk/sidebar-template-chunk/SidebarChunk";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ClassProps {
  children: ReactNode;
  className: string;
}
const layout = ({ children, className }: ClassProps) => {
  const newClassName = twMerge("", className);
  return (
    <div className={newClassName}>
      <SidebarChunk className="hidden md:flex flex-row" />
      <div className="">
        <SettingsHeaderChunk />
        {children}
      </div>
    </div>
  );
};

export default layout;
