import DashboardTemplateChunk from "@/chunks/admin-template-chunk/dashboard-template-chunk/DashboardTemplateChunk";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Dashboard",
  description: " The Intern Place",
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Dashboard" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="px-7">
        <DashboardTemplateChunk />
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
