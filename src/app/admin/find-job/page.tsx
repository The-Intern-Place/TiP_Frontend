import FindAllJobsTemplateChunk from "@/chunks/find-jobs-template-chunk/find-all-jobs-template-chunk/FindAllJobsTemplateChunk";
import FindJobsSearchChunk from "@/chunks/find-jobs-template-chunk/find-jobs-search-chunk/FindJobsSearchChunk";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import React from "react";

const FindJobs = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Find Jobs" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="px-7 py-8 bg-white overflow-x-hidden">
        <FindJobsSearchChunk isInDashboard />
        <FindAllJobsTemplateChunk />
      </section>
    </DashboardLayout>
  );
};

export default FindJobs;
