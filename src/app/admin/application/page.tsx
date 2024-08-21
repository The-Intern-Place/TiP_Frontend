import ApplicationTemplateChunk from "@/chunks/admin-template-chunk/application-template-chunk/ApplicationTemplateChunk";

import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Application Dashboard",
  description: "The Intern Place",
};

const page = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Application" />
      <div className="border-b border-[#DAD2B8]" />

      <section className="px-7  bg-[#FAFBFC]">
        <ApplicationTemplateChunk />
      </section>
    </DashboardLayout>
  );
};

export default page;
