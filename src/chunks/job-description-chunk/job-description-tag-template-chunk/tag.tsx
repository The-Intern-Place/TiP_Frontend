"use server"

import React from "react";
// import FindJobCard from "@/components/cards/find-job-card/FindJobCard";
import JobDescriptionCard from "@/components/cards/job-description-card/JobDescriptionCard";

function Tag() {
    return (
        <div>
            <div className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6">
                <JobDescriptionCard img={" "} title={"Social Media Assistant"} company={"Urban"} location={"Port-Harcourt, Nigeria"} duration={"Full-Time"} />
            </div>
        </div>
    );
}

export default Tag;
