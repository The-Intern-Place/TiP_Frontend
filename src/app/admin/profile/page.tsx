import ProfileTemplateChunk from "@/chunks/admin-template-chunk/profile-template-chunk/ProfileTemplateChunk";

import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Profile Dashboard",
  description: "The Intern Place",
};

const page = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Profile" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="px-7  bg-[#FAFBFC]">
        <ProfileTemplateChunk />
      </section>
    </DashboardLayout>
  );
};

export default page;
