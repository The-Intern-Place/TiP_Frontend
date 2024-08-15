import React from "react";
import useDashboardLayout from "./useDashboardLayout";
import DashboardMenuChunk from "@/chunks/shared/dashboard-menu-chunk/DashboardMenuChunk";
import { IDashboardLayoutProps } from "./DashboardLayout.types";

const DashboardLayout = (props: IDashboardLayoutProps) => {
  const { menuOptions, subMenuOptions } = useDashboardLayout();
  return (
    <main className="flex items-start min-h-screen">
      <DashboardMenuChunk options={menuOptions} subOptions={subMenuOptions} />
      <div className="w-full bg-[#FAFBFC] h-screen">{props.children}</div>
    </main>
  );
};

export default DashboardLayout;
