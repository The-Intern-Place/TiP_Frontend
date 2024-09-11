import DashboardTemplateChunk from "@/chunks/admin-template-chunk/dashboard-template-chunk/DashboardTemplateChunk";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import React from "react";

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
