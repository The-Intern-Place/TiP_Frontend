"use server";

import React from "react";
// import FindJobCard from "@/components/cards/find-job-card/FindJobCard";
import JobDescriptionCard from "@/components/cards/job-description-card/Job-description-tag/JobDescriptionCard";

function Tag() {
  return (
    <div
      className="w-full h-[375px] sm:max-w-[1350px]  mb-6  
     bg-[#F8F8FD] flex items-center justify-center"
    >
      <JobDescriptionCard
        img={" "}
        title={"Social Media Assistant"}
        company={"Urban"}
        location={"Nigeria"}
        duration={"Full-Time"}
      />
    </div>
  );
}

export default Tag;
