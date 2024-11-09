"use server";

import React from "react";
// import FindJobCard from "@/components/cards/find-job-card/FindJobCard";
import JobDescriptionCard from "@/components/cards/job-description-card/Job-description-tag/JobDescriptionCard";

function Tag() {
  return (
    <div className="w-full h-full sm:max-w-[1350px] md:pr-10 mt-10 mx-auto mb-6">
      <JobDescriptionCard
        img={" "}
        title={"Social Media Assistant"}
        company={"Urban"}
        location={"Port-Harcourt, Nigeria"}
        duration={"Full-Time"}
      />
    </div>
  );
}

export default Tag;
