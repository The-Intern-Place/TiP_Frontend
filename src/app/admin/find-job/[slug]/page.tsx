import FindJobDescriptionDetailsChunk from "@/chunks/find-jobs-template-chunk/find-job-description-template-chunk/find-job-description-details-chunk/FindJobDescriptionDetailsChunk";
import FindJobDescriptionTitleChunk from "@/chunks/find-jobs-template-chunk/find-job-description-template-chunk/find-job-description-title-chunk/FindJobDescriptionTitleChunk";
import useFindJobDescriptionTemplateChunk from "@/chunks/find-jobs-template-chunk/find-job-description-template-chunk/useFindJobDescriptionTemplateChunk";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import React from "react";

const JobDescription = () => {
  const { jobDescription } = useFindJobDescriptionTemplateChunk();
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Job Description" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="w-[95%] mx-auto my-4 rounded bg-white">
        <FindJobDescriptionTitleChunk
          title={jobDescription.title}
          img={jobDescription.img}
          company={jobDescription.company}
          location={jobDescription.location}
          type={jobDescription.type}
        />
        <FindJobDescriptionDetailsChunk {...jobDescription} />
      </section>
    </DashboardLayout>
  );
};

export default JobDescription;
