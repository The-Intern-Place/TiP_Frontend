import JobCard from "@/components/cards/job-card/JobCard";
import { JobCardProps } from "@/components/cards/job-card/JobCard.types";
import { jobs } from "@/utilities/data/jobs";
import IC_ArrowRight from "public/icons/IC_ArrowRight";
import React from "react";

const JobOpeningsSection = () => {
  return (
    <div className="w-full job-opening">
      <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-12 md:px-16 xl:px-0 ">
        <div className="my-20 w-full">
          <div className="flex justify-between">
            <h1 className="text-5xl font-semibold">
              Latest <span className="text-[#1976D2]">jobs open</span>
            </h1>
            <p className="flex gap-2 items-center text-blue">
              Show all <IC_ArrowRight />{" "}
            </p>
          </div>
          <div className="flex flex-wrap md:grid grid-flow-col grid-cols-2 grid-rows-3 gap-7">
            {jobs.map((j: JobCardProps, i: number) => (
              <JobCard
                key={i}
                image={j.image}
                title={j.title}
                company={j.company}
                location={j.location}
                duration={j.duration}
                sector={j.sector}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningsSection;
