import React from "react";
import useDashboardLayout from "./useDashboardLayout";
import DashboardMenuChunk from "@/chunks/shared/dashboard-menu-chunk/DashboardMenuChunk";
import { IDashboardLayoutProps } from "./DashboardLayout.types";

const DashboardLayout = (props: IDashboardLayoutProps) => {
  const { menuOptions, subMenuOptions } = useDashboardLayout();
  return (
    <main className="flex w-full min-h-screen">
      <DashboardMenuChunk options={menuOptions} subOptions={subMenuOptions} />
      <div className="bg-[#FAFBFC] min-h-screen w-full flex-1 overflow-x-hidden">
        {props.children}
      </div>
    </main>
  );
};

export default DashboardLayout;
