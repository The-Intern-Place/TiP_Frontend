import React from "react";
import FindJobCard from "@/components/cards/find-job-card/FindJobCard";

function Tag() {
  return (
    <div>
      <div className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6">
        <FindJobCard
          img={""}
          title={"Social Media Assistant"}
          company={"Urban"}
          location={"Port-Harcourt, Nigeria"}
          duration={"Full-Time"}
          sector1={""}
          sector2={""}
          applied={""}
          capacity={""}
        />
      </div>
    </div>
  );
}

export default Tag;
